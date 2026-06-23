import { useEffect, useRef, useCallback, useState } from "react";
import type { CSSProperties } from "react";
import type { PluginAppProps } from "@clawmagic/plugin-studio-frame";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/addons/loaders/KTX2Loader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { Sky } from "three/addons/objects/Sky.js";

// ── Asset paths ───────────────────────────────────────────────────────────────

const ASSET_BASE = "/api/plugins/agentverse/assets/v0.2.0/world";
const BASIS_PATH = "/api/plugins/agentverse/assets/v0.2.0/basis/";

// ── World config ──────────────────────────────────────────────────────────────

const LANDMARK_FAMILIES = [
  "KB3D_CSK_BldgLgAirPort",
  "KB3D_CSK_BldgMdFlyingFarm",
  "KB3D_CSK_BldgMdFloatingManor",
  "KB3D_CSK_BldgMdObservatory",
  "KB3D_CSK_BldgLgAirFactory",
  "KB3D_CSK_BldgSmPostOffice",
  "KB3D_CSK_BldgSmFishingVillage",
];

const NOMADS_FAMILY = "KB3D_CSK_BldgSmNomadsHouse";

// Agent state -> which landmark the NomadsHouse flies to
const STATE_LANDMARK: Record<string, string> = {
  working: "KB3D_CSK_BldgLgAirFactory",
  waiting: "KB3D_CSK_BldgMdFloatingManor",
  queued:  "KB3D_CSK_BldgSmPostOffice",
  idle:    "KB3D_CSK_BldgSmFishingVillage",
  walking: "KB3D_CSK_BldgLgAirFactory",
};

// Circular layout around the AirPort.
// angle: position on the ring (0 = +Z, clockwise when viewed from above).
// dist:  0 = center (AirPort), 1 = on the ring.
// rotY:  extra Y-axis rotation applied to the anchor (radians, CCW positive).
//        Positive values rotate CCW; -Math.PI/2 = 90° clockwise.
const BUILDING_LAYOUT: Record<string, { angle: number; dist: number; rotY: number }> = {
  "KB3D_CSK_BldgLgAirPort":        { angle: 0,                   dist: 0, rotY: 0 },
  "KB3D_CSK_BldgLgAirFactory":     { angle: 0,                   dist: 1, rotY: -Math.PI / 2 },
  "KB3D_CSK_BldgMdObservatory":    { angle: Math.PI / 3,         dist: 1, rotY: 0 },
  "KB3D_CSK_BldgMdFlyingFarm":     { angle: Math.PI * 2 / 3,    dist: 1, rotY: 0 },
  "KB3D_CSK_BldgSmFishingVillage": { angle: Math.PI,             dist: 1, rotY: 0 },
  "KB3D_CSK_BldgSmPostOffice":     { angle: Math.PI * 4 / 3,    dist: 1, rotY: 0 },
  "KB3D_CSK_BldgMdFloatingManor":  { angle: Math.PI * 5 / 3,    dist: 1, rotY: 0 },
};


const AGENT_COLORS = [
  0x6699ff, 0xaa55ff, 0x44dd99,
  0xffcc44, 0xff5566, 0x44ccff,
];

const FLIGHT_SPEED = 70;

// ── Loading screen ────────────────────────────────────────────────────────────

const LOADER_CSS = `
  @keyframes av-drift {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-200%); }
  }
  .av-cloud {
    position: absolute; border-radius: 50%;
    filter: blur(38px); background: rgba(140,170,220,0.18);
    animation: av-drift linear infinite;
  }
`;

const LOADER_CLOUDS = [
  { top: "10%", left:  "5%", w: 420, h:  96, dur: "14s", delay:   "0s" },
  { top: "30%", left: "55%", w: 300, h:  75, dur: "21s", delay:  "-5s" },
  { top: "52%", left: "12%", w: 500, h: 108, dur: "11s", delay:  "-2s" },
  { top: "66%", left: "68%", w: 340, h:  82, dur: "18s", delay:  "-8s" },
  { top: "78%", left: "28%", w: 440, h:  94, dur: "13s", delay:  "-4s" },
  { top: "40%", left: "82%", w: 280, h:  68, dur: "23s", delay: "-11s" },
];

const LOADER_STARS = Array.from({ length: 28 }, (_, i) => ({
  left: ((i * 73 + 11) % 100) + "%",
  top:  ((i * 47 +  7) %  60) + "%",
  op:    0.25 + (i % 5) * 0.10,
}));

// ── Types ─────────────────────────────────────────────────────────────────────

interface AgentRecord { agentId: string; name: string; }
interface ActiveTask  { agentId: string; status: string; summary: string; }
interface RuntimeStatus {
  run_state: string; queue_length: number; active_count: number;
  activeTasks?: ActiveTask[];
}
interface SpinProp {
  node: THREE.Object3D;
  pivot: THREE.Vector3; axis: THREE.Vector3;
  world0: THREE.Matrix4; parentInv: THREE.Matrix4;
  phase: number; speed: number;
  floatIdx: number; // index into buildingFloatsRef, -1 if none
}
interface BuildingFloat {
  anchor: THREE.Group;
  fam: string;
  baseY: number;
  phase: number;
  speed: number;      // rad/s
  amplitude: number;  // world units
  gatherYOffset: number; // gather point Y relative to anchor.position.y
  currentYOffset: number; // updated each frame
}
interface AgentHouseRef {
  agentId: string; name: string; colorIdx: number;
  root: THREE.Group; light: THREE.PointLight; label: THREE.Sprite;
  currentPos: THREE.Vector3; targetPos: THREE.Vector3;
  state: string; task: string;
  wanderTargetFam: string;
  wanderState: "flying" | "docked";
  dockTimer: number; // seconds remaining at current building
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeNameTag(name: string, hexColor: number): THREE.Sprite {
  const W = 256, H = 52;
  const cv = document.createElement("canvas"); cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d")!;
  ctx.fillStyle = "rgba(8,16,28,0.85)";
  ctx.beginPath();
  ctx.roundRect(2, 2, W - 4, H - 4, 10); ctx.fill();
  const hex = "#" + hexColor.toString(16).padStart(6, "0");
  ctx.fillStyle = hex;
  ctx.beginPath(); ctx.arc(20, H / 2, 8, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#dfe9f5";
  ctx.font = "bold 19px ui-monospace, Consolas, monospace";
  ctx.textBaseline = "middle";
  const label = name.length > 13 ? name.slice(0, 12) + "…" : name;
  ctx.fillText(label, 36, H / 2);
  const tex = new THREE.CanvasTexture(cv);
  const mat = new THREE.SpriteMaterial({ map: tex, depthWrite: false, transparent: true, depthTest: false });
  const sp = new THREE.Sprite(mat); sp.scale.set(14, 2.8, 1); return sp;
}

function makeCloudTexture(): THREE.Texture {
  const S = 256, cv = document.createElement("canvas"); cv.width = cv.height = S;
  const ctx = cv.getContext("2d")!;
  for (let i = 0; i < 16; i++) {
    const x = S * (0.5 + (Math.random() - 0.5) * 0.62);
    const y = S * (0.52 + (Math.random() - 0.5) * 0.42);
    const r = S * (0.10 + Math.random() * 0.20);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(255,255,255," + (0.45 + Math.random() * 0.4) + ")");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function makeGroundTexture(renderer: THREE.WebGLRenderer): THREE.Texture {
  const S = 1024, cv = document.createElement("canvas"); cv.width = cv.height = S;
  const ctx = cv.getContext("2d")!;
  const O = [-S, 0, S];
  ctx.fillStyle = "#2b71b0"; ctx.fillRect(0, 0, S, S);
  for (let i = 0; i < 240; i++) {
    const x = Math.random() * S, y = Math.random() * S, r = Math.random() * 26;
    ctx.fillStyle = "rgba(255,255,255," + (Math.random() * 0.025) + ")";
    for (const dx of O) for (const dy of O) { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2); ctx.fill(); }
  }
  const blob = (cx: number, cy: number, r: number, fac: number[], color: string) => {
    ctx.fillStyle = color;
    for (const dx of O) for (const dy of O) {
      ctx.beginPath();
      for (let k = 0; k <= fac.length; k++) {
        const a = k / fac.length * Math.PI * 2, rr = r * fac[k % fac.length];
        const px = cx + dx + Math.cos(a) * rr, py = cy + dy + Math.sin(a) * rr;
        k ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.closePath(); ctx.fill();
    }
  };
  for (let i = 0; i < 14; i++) {
    const cx = Math.random() * S, cy = Math.random() * S, r = S * (0.04 + Math.random() * 0.11);
    const n = 11 + (Math.random() * 8 | 0), fac = Array.from({ length: n }, () => 0.65 + Math.random() * 0.5);
    blob(cx, cy, r * 1.16, fac, "#cabe8c"); blob(cx, cy, r, fac, "#6f9152"); blob(cx, cy, r * 0.55, fac, "#577b41");
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 6);
  t.anisotropy = renderer.capabilities.getMaxAnisotropy(); return t;
}

function makeGroundGeometry(maxR: number, rings: number, segs: number, curveK: number, texWorld: number): THREE.BufferGeometry {
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= rings; i++) {
    const rr = maxR * (i / rings), y = -curveK * rr * rr;
    for (let j = 0; j <= segs; j++) {
      const a = j / segs * Math.PI * 2;
      pos.push(Math.cos(a) * rr, y, Math.sin(a) * rr);
      uv.push(Math.cos(a) * rr / texWorld, Math.sin(a) * rr / texWorld);
    }
  }
  const row = segs + 1;
  for (let i = 0; i < rings; i++) for (let j = 0; j < segs; j++) {
    const a = i * row + j, b = a + 1, c = a + row, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals(); return g;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Agentverse({ api }: PluginAppProps) {
  const mountRef    = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef    = useRef<THREE.Scene | null>(null);
  const cameraRef   = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const clockRef    = useRef(new THREE.Clock());
  const rafRef      = useRef<number | null>(null);

  const gatherPointsRef   = useRef<Map<string, THREE.Vector3>>(new Map());
  const agentHousesRef    = useRef<Map<string, AgentHouseRef>>(new Map());
  const nomadsTemplateRef = useRef<THREE.Group | null>(null);
  const spinPropsRef      = useRef<SpinProp[]>([]);
  const buildingFloatsRef = useRef<BuildingFloat[]>([]);
  const spinTimeRef       = useRef(0);
  const cloudsRef         = useRef<{ sp: THREE.Sprite; vx: number }[]>([]);
  const driftRef          = useRef({ min: -1e4, max: 1e4 });
  const groundMapRef      = useRef<THREE.Texture | null>(null);
  const groundUVPerUnitRef = useRef(0);

  const [statusText, setStatusText]     = useState("Loading world…");
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [agentRows, setAgentRows]       = useState<{ id: string; name: string; state: string; task: string; color: string }[]>([]);
  const [runState, setRunState]         = useState("idle");

  useEffect(() => {
    if (loadProgress < 100) return;
    const t = setTimeout(() => setLoaderVisible(false), 900);
    return () => clearTimeout(t);
  }, [loadProgress]);

  // ── Build Three.js scene ─────────────────────────────────────────────────

  const buildScene = useCallback(async (container: HTMLDivElement) => {
    const W = container.clientWidth, H = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(1);
    renderer.setSize(W, H);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate = false;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xc2d6ec, 700, 5500);
    sceneRef.current = scene;

    const pmrem = new THREE.PMREMGenerator(renderer);

    // Physical sky
    const sky = new Sky(); sky.scale.setScalar(600000);
    const sunDir = new THREE.Vector3();
    const skyUni = (sky.material as THREE.ShaderMaterial).uniforms;
    skyUni["turbidity"].value = 1.5; skyUni["rayleigh"].value = 3.0;
    skyUni["mieCoefficient"].value = 0.001; skyUni["mieDirectionalG"].value = 0.85;
    sunDir.setFromSphericalCoords(1, THREE.MathUtils.degToRad(62), THREE.MathUtils.degToRad(135));
    skyUni["sunPosition"].value.copy(sunDir);
    const envScene = new THREE.Scene(); envScene.add(sky);
    scene.environment = pmrem.fromScene(envScene, 0, 1, 700000).texture;
    scene.add(sky);

    const sun = new THREE.DirectionalLight(0xfff4e2, 3.2);
    sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
    scene.add(sun); scene.add(sun.target);
    scene.add(new THREE.HemisphereLight(0xbfd8f2, 0x4a514c, 0.5));

    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 10000);
    camera.position.set(150, 120, 150);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    const ktx2 = new KTX2Loader().setTranscoderPath(BASIS_PATH).detectSupport(renderer);
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).setKTX2Loader(ktx2);

    const world = new THREE.Group(); scene.add(world);

    // ── Load landmark buildings ─────────────────────────────────────────────
    // Each building is centred in an anchor Group (XZ centred, base at y=0)
    // so rotations and positions can be applied cleanly in a second pass.

    let loaded = 0;
    const total = LANDMARK_FAMILIES.length + 2; // landmarks + nomads + propellers
    const landmarkAnchors     = new Map<string, THREE.Group>();
    const landmarkSizes       = new Map<string, THREE.Vector3>();
    const buildingOrigCenters = new Map<string, THREE.Vector3>();
    const buildingOrigMinYs   = new Map<string, number>();

    await Promise.all(LANDMARK_FAMILIES.map(fam => new Promise<void>(res => {
      loader.load(
        ASSET_BASE + "/buildings/" + fam + "/model.gltf",
        gltf => {
          const root = gltf.scene;
          root.traverse(o => {
            const mesh = o as THREE.Mesh;
            if (mesh.isMesh) {
              o.matrixAutoUpdate = false;
              mesh.castShadow = true; mesh.receiveShadow = true;
            }
          });

          // Centre root within anchor (XZ centred, base sits at y=0)
          const box = new THREE.Box3().setFromObject(root);
          const center = box.getCenter(new THREE.Vector3());
          root.position.set(-center.x, -box.min.y, -center.z);

          // Save for propeller realignment after repositioning
          buildingOrigCenters.set(fam, center.clone());
          buildingOrigMinYs.set(fam, box.min.y);

          const anchor = new THREE.Group();
          const layout = BUILDING_LAYOUT[fam] ?? { angle: 0, dist: 0, rotY: 0 };
          anchor.rotation.y = layout.rotY;
          anchor.add(root);
          world.add(anchor);

          landmarkAnchors.set(fam, anchor);
          landmarkSizes.set(fam, box.getSize(new THREE.Vector3()));

          loaded++; setLoadProgress(Math.round(loaded / total * 100));
          res();
        },
        undefined,
        () => { loaded++; setLoadProgress(Math.round(loaded / total * 100)); res(); }
      );
    })));

    // ── Position buildings in a circle around the AirPort ──────────────────
    // Radius = airport half-footprint + largest outer-building half-footprint + gap

    const airportSize = landmarkSizes.get("KB3D_CSK_BldgLgAirPort") ?? new THREE.Vector3(100, 50, 100);
    const airportFootprint = Math.max(airportSize.x, airportSize.z);

    let maxOuterFootprint = 0;
    for (const [fam, sz] of landmarkSizes) {
      if (fam === "KB3D_CSK_BldgLgAirPort") continue;
      maxOuterFootprint = Math.max(maxOuterFootprint, Math.max(sz.x, sz.z));
    }

    const circleRadius = airportFootprint * 0.5 + maxOuterFootprint * 0.65 + 20;

    for (const [fam, anchor] of landmarkAnchors) {
      const layout = BUILDING_LAYOUT[fam] ?? { angle: 0, dist: 0, rotY: 0 };
      const r = layout.dist * circleRadius;
      anchor.position.set(Math.sin(layout.angle) * r, 0, Math.cos(layout.angle) * r);
    }

    // Per-building 4×4 matrices that map KitBash world coords → new circle layout.
    // Used to realign propeller pivots / axes / rest poses.
    const buildingMxs = new Map<string, THREE.Matrix4>();
    for (const [fam, anchor] of landmarkAnchors) {
      const oc  = buildingOrigCenters.get(fam)!;
      const omy = buildingOrigMinYs.get(fam)!;
      const layout = BUILDING_LAYOUT[fam] ?? { rotY: 0 };
      const Tc = new THREE.Matrix4().makeTranslation(-oc.x, -omy, -oc.z);
      const Ry = new THREE.Matrix4().makeRotationY(layout.rotY);
      const { x: ax, y: ay, z: az } = anchor.position;
      const Tl = new THREE.Matrix4().makeTranslation(ax, ay, az);
      buildingMxs.set(fam, new THREE.Matrix4().multiplyMatrices(Tl, new THREE.Matrix4().multiplyMatrices(Ry, Tc)));
    }

    // ── Per-building float (bob) parameters ────────────────────────────────
    // Golden-ratio phase spread so no two buildings move in sync.
    buildingFloatsRef.current = [];
    LANDMARK_FAMILIES.forEach((fam, idx) => {
      const anchor = landmarkAnchors.get(fam);
      if (!anchor) return;
      const sz = landmarkSizes.get(fam) ?? new THREE.Vector3();
      buildingFloatsRef.current.push({
        anchor, fam,
        baseY: anchor.position.y,
        phase: (idx * 1.6180339) % (Math.PI * 2),
        speed: 0.20 + (idx % 5) * 0.045,   // ~5-8 s per cycle
        amplitude: 8 + (idx % 4) * 2.5,  // 8-15.5 units (~3× previous)
        gatherYOffset: sz.y * 0.05,
        currentYOffset: 0,
      });
    });

    // ── City bounds (post-layout) + gather points ───────────────────────────

    const cityBox    = new THREE.Box3().setFromObject(world);
    const cityCenter = cityBox.getCenter(new THREE.Vector3());
    const citySize   = cityBox.getSize(new THREE.Vector3());
    const cityRadius = Math.max(citySize.x, citySize.z);

    for (const [fam, anchor] of landmarkAnchors) {
      // Gather point: just above the building's ground-level anchor position
      const gp = anchor.position.clone();
      const sz = landmarkSizes.get(fam) ?? new THREE.Vector3();
      gp.y = sz.y * 0.05;
      gatherPointsRef.current.set(fam, gp);
    }

    // ── NomadsHouse template ────────────────────────────────────────────────

    await new Promise<void>(res => {
      loader.load(
        ASSET_BASE + "/buildings/" + NOMADS_FAMILY + "/model.gltf",
        gltf => {
          const root = gltf.scene;
          // Centre horizontally, sit base at y=0
          const box = new THREE.Box3().setFromObject(root);
          const center = box.getCenter(new THREE.Vector3());
          root.position.x -= center.x; root.position.z -= center.z;
          root.position.y -= box.min.y;
          nomadsTemplateRef.current = root;
          loaded++; setLoadProgress(Math.round(loaded / total * 100)); res();
        },
        undefined,
        () => { loaded++; res(); }
      );
    });

    // ── Camera framing ──────────────────────────────────────────────────────

    // Hoist drop here so fog.far can reference it.
    const drop = Math.max(citySize.y * 18, cityRadius * 2.0);

    controls.target.copy(cityCenter);
    const r = citySize.length() / 2;
    camera.position.set(cityCenter.x + r * 0.9, cityCenter.y + r * 0.6, cityCenter.z + r * 0.9);
    camera.near = Math.max(0.5, r * 0.01);
    camera.far  = drop * 6 + cityRadius * 40;
    camera.updateProjectionMatrix(); controls.update();
    // fog.far = drop * 8 matches the original viewer; using cityRadius * 8 is too
    // short once buildings are spread in a circle, hiding the ground entirely.
    scene.fog = new THREE.Fog(0xc2d6ec, cityRadius * 2, drop * 8);

    // ── Sun shadow frustum ──────────────────────────────────────────────────

    const sRad = Math.max(citySize.x, citySize.z) * 0.62;
    sun.position.copy(sunDir).multiplyScalar(sRad * 2.4).add(cityCenter);
    sun.target.position.copy(cityCenter); sun.target.updateMatrixWorld();
    const sc = sun.shadow.camera;
    sc.left = -sRad; sc.right = sRad; sc.top = sRad; sc.bottom = -sRad;
    sc.near = sRad * 0.1; sc.far = sRad * 6; sc.updateProjectionMatrix();

    // ── Ground ──────────────────────────────────────────────────────────────
    const gR = drop * 24;
    const ground = new THREE.Mesh(
      makeGroundGeometry(gR, 48, 128, 1 / (60 * drop), drop * 16),
      new THREE.MeshStandardMaterial({
        map: makeGroundTexture(renderer), roughness: 0.9, metalness: 0,
        fog: true, side: THREE.DoubleSide,
      })
    );
    ground.position.set(cityCenter.x, cityBox.min.y - drop, cityCenter.z);
    scene.add(ground);
    groundMapRef.current = (ground.material as THREE.MeshStandardMaterial).map;
    groundUVPerUnitRef.current = 6 / (drop * 16);

    // ── Clouds ──────────────────────────────────────────────────────────────

    const cloudTex = makeCloudTexture();
    const topY = cityBox.max.y + citySize.y * 2.5;
    const botY = cityBox.min.y - drop + drop * 0.12;
    driftRef.current = { min: cityCenter.x - cityRadius * 3.6, max: cityCenter.x + cityRadius * 3.6 };
    for (let i = 0; i < 80; i++) {
      const ang = Math.random() * Math.PI * 2, rad = cityRadius * (0.1 + Math.random() * 2.9);
      const cx = cityCenter.x + Math.cos(ang) * rad, cz = cityCenter.z + Math.sin(ang) * rad;
      const cy = botY + Math.random() * (topY - botY);
      const puffs = 3 + (Math.random() * 5 | 0);
      const vx = 0.85 + Math.random() * 0.3;
      for (let j = 0; j < puffs; j++) {
        const mat = new THREE.SpriteMaterial({
          map: cloudTex, transparent: true, depthWrite: false,
          opacity: 0.4 + Math.random() * 0.45, fog: true,
        });
        const sp = new THREE.Sprite(mat);
        const scl = cityRadius * (0.16 + Math.random() * 0.30);
        sp.scale.set(scl * (1 + Math.random() * 0.8), scl * (0.5 + Math.random() * 0.3), 1);
        sp.position.set(
          cx + (Math.random() - 0.5) * scl,
          cy + (Math.random() - 0.5) * scl * 0.3,
          cz + (Math.random() - 0.5) * scl
        );
        scene.add(sp); cloudsRef.current.push({ sp, vx });
      }
    }

    // ── Propellers ──────────────────────────────────────────────────────────

    try {
      const manifest: Record<string, { pivot: number[]; axis: number[] }> =
        await fetch(ASSET_BASE + "/propellers/manifest.json").then(r => r.json());
      await new Promise<void>(res => {
        loader.load(ASSET_BASE + "/propellers/model.gltf", gltf => {
          world.add(gltf.scene); world.updateMatrixWorld(true);
          gltf.scene.traverse(n => {
            const e = manifest[n.name]; if (!e) return;
            n.matrixAutoUpdate = false;

            // Apply this building's repositioning matrix so the rotor stays
            // aligned with its (now-moved) parent building.
            const fam = LANDMARK_FAMILIES.find(f => n.name.startsWith(f));
            const mx  = fam ? buildingMxs.get(fam) : undefined;

            const pivot = new THREE.Vector3().fromArray(e.pivot);
            if (mx) pivot.applyMatrix4(mx);

            const axis = new THREE.Vector3().fromArray(e.axis);
            if (mx) axis.applyMatrix4(new THREE.Matrix4().extractRotation(mx));
            axis.normalize();

            const world0 = mx
              ? new THREE.Matrix4().multiplyMatrices(mx, n.matrixWorld)
              : n.matrixWorld.clone();

            const parentInv = new THREE.Matrix4();
            if (n.parent) parentInv.copy(n.parent.matrixWorld).invert();

            const fast3 = ["Observatory", "SmallFactory", "FlyingFarm"].some(s => n.name.includes(s));
            const isWind = /Windmill|WindTurbine|Turbine|EnergyWheel|Fan|Rotor|Sail/.test(n.name);
            const vary = (n.name.length % 5) / 5;
            const floatIdx = buildingFloatsRef.current.findIndex(bf => bf.fam === fam);
            spinPropsRef.current.push({
              node: n, pivot, axis, world0, parentInv,
              phase: (n.name.length % 13) / 13 * Math.PI * 2,
              speed: fast3 ? 3.6 + vary * 1.6 : isWind ? 2.0 + vary * 1.2 : 0.25 + vary * 0.45,
              floatIdx: floatIdx ?? -1,
            });
          });
          res();
        }, undefined, () => res());
      });
    } catch { /* propellers optional */ }

    renderer.shadowMap.needsUpdate = true;
    setLoadProgress(100);
    setStatusText("Realm at rest");

    // ── RAF loop ────────────────────────────────────────────────────────────

    const _pivM = new THREE.Matrix4(), _rot = new THREE.Matrix4();
    const _tP   = new THREE.Matrix4(), _tN  = new THREE.Matrix4();
    const _q    = new THREE.Quaternion();

    function loop() {
      rafRef.current = requestAnimationFrame(loop);
      controls.update();
      const dt = Math.min(clockRef.current.getDelta(), 0.1);

      // Flight illusion: clouds + ground scroll
      const d = FLIGHT_SPEED * dt;
      const { min: dMin, max: dMax } = driftRef.current;
      for (const { sp, vx } of cloudsRef.current) {
        sp.position.x -= d * vx;
        if (sp.position.x < dMin) sp.position.x = dMax;
      }
      if (groundMapRef.current) groundMapRef.current.offset.x += d * groundUVPerUnitRef.current;

      // Float buildings — gentle, unsynchronised bob
      spinTimeRef.current += dt;
      for (const bf of buildingFloatsRef.current) {
        bf.anchor.position.y = bf.baseY + Math.sin(spinTimeRef.current * bf.speed + bf.phase) * bf.amplitude;
        bf.currentYOffset = bf.anchor.position.y - bf.baseY;
        // Keep gather point pinned to the building's live Y
        const gp = gatherPointsRef.current.get(bf.fam);
        if (gp) gp.y = bf.anchor.position.y + bf.gatherYOffset;
      }

      // Spinning propellers (Y-offset follows floating building)
      for (const p of spinPropsRef.current) {
        _q.setFromAxisAngle(p.axis, p.phase + spinTimeRef.current * p.speed);
        _rot.makeRotationFromQuaternion(_q);
        _tP.makeTranslation(p.pivot.x, p.pivot.y, p.pivot.z);
        _tN.makeTranslation(-p.pivot.x, -p.pivot.y, -p.pivot.z);
        _pivM.copy(_tP).multiply(_rot).multiply(_tN).multiply(p.world0);
        const mx = (p.node as THREE.Object3D & { matrix: THREE.Matrix4 }).matrix;
        mx.copy(p.parentInv).multiply(_pivM);
        // Shift the prop's Y to match its building's current float offset
        if (p.floatIdx >= 0) mx.elements[13] += buildingFloatsRef.current[p.floatIdx].currentYOffset;
        p.node.matrixWorldNeedsUpdate = true;
      }

      // NomadsHouse wander — dock 10 s then fly to a random new building, repeat
      const lerpT   = 1.0 - Math.pow(0.06, dt); // slow, graceful travel speed
      const tmpVec  = new THREE.Vector3();
      for (const house of agentHousesRef.current.values()) {
        const liveGP = gatherPointsRef.current.get(house.wanderTargetFam);

        if (house.wanderState === "docked") {
          house.dockTimer -= dt;
          // Bob gently with the docked building
          if (liveGP) house.targetPos.copy(liveGP);
          if (house.dockTimer <= 0) {
            // Choose a different building at random
            const others = LANDMARK_FAMILIES.filter(f => f !== house.wanderTargetFam);
            house.wanderTargetFam = others[Math.floor(Math.random() * others.length)];
            house.wanderState = "flying";
          }
        } else {
          // Flying — track live position of destination (it's bobbing)
          if (liveGP) house.targetPos.copy(liveGP);
          // Dock when close enough
          if (house.currentPos.distanceTo(house.targetPos) < 14) {
            house.wanderState = "docked";
            house.dockTimer = 10;
          }
        }

        house.currentPos.lerp(house.targetPos, lerpT);
        house.root.position.copy(house.currentPos);
        tmpVec.copy(house.currentPos).add(lightOffset); house.light.position.copy(tmpVec);
        tmpVec.copy(house.currentPos).add(labelOffset); house.label.position.copy(tmpVec);
      }

      renderer.render(scene, camera);
    }
    loop();
  }, []);

  // ── Scene lifecycle ───────────────────────────────────────────────────────

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    buildScene(container).catch(err => setStatusText("Scene error: " + String(err)));

    const onResize = () => {
      const el = mountRef.current;
      if (!el || !rendererRef.current || !cameraRef.current) return;
      const W = el.clientWidth, H = el.clientHeight;
      rendererRef.current.setSize(W, H);
      cameraRef.current.aspect = W / H; cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    const obs = new ResizeObserver(onResize); obs.observe(container);

    return () => {
      window.removeEventListener("resize", onResize);
      obs.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rendererRef.current?.dispose();
      rendererRef.current = null;
      if (container) container.innerHTML = "";
    };
  }, [buildScene]);

  // ── Agent polling + reconciliation ───────────────────────────────────────

  const reconcile = useCallback((agents: AgentRecord[], runtime: RuntimeStatus) => {
    const scene = sceneRef.current;
    const template = nomadsTemplateRef.current;
    if (!scene) return;

    const taskByAgent = new Map<string, ActiveTask>();
    (runtime.activeTasks ?? []).forEach(t => { if (t.agentId) taskByAgent.set(t.agentId, t); });

    const seen = new Set<string>();
    const houses = agentHousesRef.current;
    const rows: { id: string; name: string; state: string; task: string; color: string }[] = [];

    agents.forEach((agent, idx) => {
      seen.add(agent.agentId);
      const task = taskByAgent.get(agent.agentId);
      const rawState =
        task?.status === "running"          ? "working"
        : task?.status === "waiting_approval" ? "waiting"
        : task?.status === "pending"          ? "queued"
        : "idle";
      const colorIdx = idx % AGENT_COLORS.length;
      const hexColor = AGENT_COLORS[colorIdx];

      if (!houses.has(agent.agentId) && template) {
        const root = template.clone(true);
        scene.add(root);
        const light = new THREE.PointLight(hexColor, 3.5, 80);
        scene.add(light);
        const label = makeNameTag(agent.name, hexColor);
        scene.add(label);

        // Pick a random starting building, stagger dock timers so agents spread out
        const startFam = LANDMARK_FAMILIES[idx % LANDMARK_FAMILIES.length];
        const startPos = gatherPointsRef.current.get(startFam)?.clone() ?? new THREE.Vector3(0, 0, 0);
        root.position.copy(startPos);
        light.position.copy(startPos).add(lightOffset);
        label.position.copy(startPos).add(labelOffset);
        houses.set(agent.agentId, {
          agentId: agent.agentId, name: agent.name, colorIdx,
          root, light, label,
          currentPos: startPos.clone(), targetPos: startPos.clone(),
          state: rawState, task: task?.summary ?? "",
          wanderTargetFam: startFam,
          wanderState: "docked",
          dockTimer: idx * 3.5, // stagger: agent 0 leaves at 0s, agent 1 at 3.5s, etc.
        });
      }

      const house = houses.get(agent.agentId);
      if (house) {
        // Keep side-panel state current; wander state machine drives positioning
        house.name = agent.name; house.state = rawState;
        house.task = task?.summary ?? "";
      }

      rows.push({
        id: agent.agentId, name: agent.name, state: rawState,
        task: task?.summary?.slice(0, 60) ?? "",
        color: "#" + hexColor.toString(16).padStart(6, "0"),
      });
    });

    // Remove departed agents
    for (const [id, house] of houses) {
      if (!seen.has(id)) {
        scene.remove(house.root, house.light, house.label);
        houses.delete(id);
      }
    }

    setAgentRows(rows);
    setRunState(runtime.run_state ?? "idle");
    const active = runtime.active_count ?? 0, queued = runtime.queue_length ?? 0;
    if (active > 0)       setStatusText(active + " agent" + (active !== 1 ? "s" : "") + " working" + (queued > 0 ? ", " + queued + " queued" : ""));
    else if (queued > 0)  setStatusText(queued + " task" + (queued !== 1 ? "s" : "") + " queued");
    else                  setStatusText("Realm at rest");
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function poll() {
      if (cancelled) return;
      try {
        const [statusRes, agentsRes] = await Promise.all([
          api.host.get("/api/runtime/status"),
          api.host.get("/api/agents"),
        ]);
        if (!cancelled) reconcile(
          ((agentsRes as { agents?: AgentRecord[] }).agents ?? []),
          statusRes as unknown as RuntimeStatus
        );
      } catch { /* server not yet reachable */ }
      if (!cancelled) setTimeout(poll, 4000);
    }
    poll();
    return () => { cancelled = true; };
  }, [api, reconcile]);

  // ── Render ───────────────────────────────────────────────────────────────

  const isRunning = runState !== "idle";
  return (
    <div style={rootStyle}>
      <div ref={mountRef} style={canvasWrapStyle}>

        {/* Loading overlay — clouds + progress until 3D scene is ready */}
        {loaderVisible && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 20, overflow: "hidden",
            background: "linear-gradient(175deg, #060c18 0%, #0c1628 55%, #182438 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: loadProgress >= 100 ? 0 : 1,
            transition: "opacity 0.85s ease",
            pointerEvents: loadProgress >= 100 ? "none" : "auto",
          }}>
            <style>{LOADER_CSS}</style>

            {/* Stars */}
            {LOADER_STARS.map((s, i) => (
              <div key={i} style={{
                position: "absolute", width: 2, height: 2, borderRadius: "50%",
                background: "#fff", opacity: s.op, left: s.left, top: s.top,
              }} />
            ))}

            {/* Drifting cloud blobs */}
            {LOADER_CLOUDS.map((c, i) => (
              <div key={i} className="av-cloud" style={{
                width: c.w, height: c.h, top: c.top, left: c.left,
                animationDuration: c.dur, animationDelay: c.delay,
              }} />
            ))}

            {/* Centre content */}
            <div style={{ position: "relative", zIndex: 5, textAlign: "center", userSelect: "none" }}>
              <div style={{
                fontSize: 38, fontWeight: 800, letterSpacing: "0.22em",
                color: "#ddeeff", textShadow: "0 0 48px rgba(80,140,255,0.5)",
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
              }}>AGENTVERSE</div>
              <div style={{
                fontSize: 11, letterSpacing: "0.35em", color: "#4a6a98",
                marginTop: 6, fontFamily: "ui-monospace, monospace",
              }}>CITY IN THE SKY</div>

              <div style={{
                width: 260, height: 2, background: "rgba(255,255,255,0.07)",
                borderRadius: 2, margin: "28px auto 0", overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", borderRadius: 2,
                  background: "linear-gradient(to right, #3366cc, #66aaff)",
                  width: loadProgress + "%", transition: "width 0.35s ease",
                }} />
              </div>

              <div style={{
                marginTop: 10, fontSize: 10, letterSpacing: "0.12em",
                color: "#304868", fontFamily: "ui-monospace, monospace",
              }}>
                {loadProgress < 100 ? `LOADING · ${loadProgress}%` : "READY"}
              </div>
            </div>
          </div>
        )}
      </div>

      <aside style={sideStyle}>
        <div style={statusCardStyle}>
          <span style={{ ...dotStyle, background: isRunning ? "#60e060" : "#505860",
            boxShadow: isRunning ? "0 0 8px #60e06088" : "none" }} />
          <span style={statusLabelStyle}>{statusText}</span>
        </div>

        {loadProgress < 100 && (
          <div style={barWrapStyle}>
            <div style={{ ...barFillStyle, width: loadProgress + "%" }} />
          </div>
        )}

        <div style={sectionHeaderStyle}>Agents</div>
        {agentRows.length === 0
          ? <div style={emptyStyle}>No agents configured</div>
          : agentRows.map(row => (
            <div key={row.id} style={agentRowStyle}>
              <span style={{ ...dotStyle, background: row.color }} />
              <div style={agentInfoStyle}>
                <div style={agentNameStyle}>{row.name}</div>
                {row.state !== "idle" && (
                  <div style={agentStateStyle}>
                    {STATE_LABELS[row.state] ?? row.state}
                    {row.task ? " — " + row.task : ""}
                  </div>
                )}
              </div>
            </div>
          ))
        }

        <div style={{ ...sectionHeaderStyle, marginTop: "auto", paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          Landmarks
        </div>
        {LANDMARK_LEGEND.map(l => (
          <div key={l.id} style={legendRowStyle}>
            <span style={legendDotStyle} />
            <span style={legendNameStyle}>{l.label}</span>
            <span style={legendRoleStyle}>{l.role}</span>
          </div>
        ))}

        <div style={footerStyle}>Agentverse v0.2 · City in the Sky</div>
      </aside>
    </div>
  );
}

// ── Constants ─────────────────────────────────────────────────────────────────

const lightOffset = new THREE.Vector3(0, 18, 0);
const labelOffset = new THREE.Vector3(0, 22, 0);

const STATE_LABELS: Record<string, string> = {
  working: "Working", waiting: "Awaiting approval",
  queued: "Queued",   idle: "Idle", walking: "Traveling",
};

const LANDMARK_LEGEND = [
  { id: "airport",  label: "Air Port",        role: "–" },
  { id: "farm",     label: "Flying Farm",     role: "–" },
  { id: "manor",    label: "Floating Manor",  role: "Waiting" },
  { id: "obs",      label: "Observatory",     role: "–" },
  { id: "factory",  label: "Air Factory",     role: "Working" },
  { id: "post",     label: "Post Office",     role: "Queued" },
  { id: "fishing",  label: "Fishing Village", role: "Idle" },
];

// ── Styles ────────────────────────────────────────────────────────────────────

const rootStyle: CSSProperties = {
  display: "flex", height: "100%", minHeight: "100dvh", width: "100%",
  fontFamily: "ui-sans-serif, -apple-system, system-ui, sans-serif",
  background: "#0b111c", color: "#d8deea", boxSizing: "border-box", overflow: "hidden",
};
const canvasWrapStyle: CSSProperties = { flex: "1 1 auto", overflow: "hidden", minWidth: 0, position: "relative" };
const sideStyle: CSSProperties = {
  flex: "0 0 224px", width: 224, display: "flex", flexDirection: "column",
  gap: 10, padding: "18px 14px", borderLeft: "1px solid rgba(255,255,255,0.07)",
  overflowY: "auto", background: "rgba(0,0,0,0.25)",
};
const statusCardStyle: CSSProperties = {
  display: "flex", alignItems: "center", gap: 8, padding: "9px 11px",
  borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
};
const dotStyle: CSSProperties = {
  width: 8, height: 8, borderRadius: "50%", display: "inline-block",
  flexShrink: 0, transition: "background 0.4s",
};
const statusLabelStyle: CSSProperties = { fontSize: 12, color: "#9ba8b8" };
const barWrapStyle: CSSProperties = { height: 3, background: "#1a2740", borderRadius: 2, overflow: "hidden" };
const barFillStyle: CSSProperties = { height: "100%", background: "#7fc0ff", transition: "width 0.3s", borderRadius: 2 };
const sectionHeaderStyle: CSSProperties = {
  fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
  textTransform: "uppercase", color: "#6a7888", marginBottom: 2,
};
const emptyStyle: CSSProperties = { fontSize: 12, color: "#4a5870", fontStyle: "italic" };
const agentRowStyle: CSSProperties = { display: "flex", alignItems: "flex-start", gap: 8 };
const agentInfoStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 };
const agentNameStyle: CSSProperties = {
  fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
};
const agentStateStyle: CSSProperties = {
  fontSize: 11, color: "#7888a0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
};
const legendRowStyle: CSSProperties = { display: "flex", alignItems: "center", gap: 6, fontSize: 11 };
const legendDotStyle: CSSProperties = { width: 5, height: 5, borderRadius: "50%", background: "#4a6080", flexShrink: 0 };
const legendNameStyle: CSSProperties = { color: "#8898b0", flex: "1 1 auto" };
const legendRoleStyle: CSSProperties = { color: "#4a5870", fontSize: 10 };
const footerStyle: CSSProperties = { fontSize: 10, color: "#3a4858", paddingTop: 8 };
