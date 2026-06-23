# Agentverse

A live 3D steampunk sky-city plugin for [Clawmagic](https://clawmagic.dev). Each agent gets its own **Nomad's House** — a small airship that wanders between landmark buildings, docking for 10 seconds before flying on to another. The city floats in a physical sky above a curved ocean planet, with spinning propellers, volumetric clouds, and a flight-illusion ground scroll.

Built on **KitBash3D "City in the Sky"** (Kit v6.0) assets, processed to browser-ready GLB via a headless Python + gltfpack pipeline (no Blender required).

---

## What it looks like

| Feature | Detail |
|---|---|
| Runtime | Three.js r161 · React 18 · Vite 5 |
| Assets | 87 MB total · 8 buildings · 256 KTX2 PBR textures · 72 spinning propellers |
| Sky | Physical atmospheric scattering (Three.js Sky shader) |
| Ground | Procedural ocean + landmass texture on a gently curved planet disc |
| Clouds | ~360 billboard sprites with parallax flight illusion |
| Agent tracking | Polls `/api/runtime/status` + `/api/agents` every 4 s |
| Loading | Animated cloud-drift screen with progress bar |

---

## Buildings

| Building | Role |
|---|---|
| **Air Port** | Central hub (largest structure) |
| **Air Factory** | Agents working |
| **Floating Manor** | Agents waiting for approval |
| **Post Office** | Agents queued |
| **Fishing Village** | Idle agents |
| **Observatory** | Scenic |
| **Flying Farm** | Scenic |
| **Nomad's House** | Per-agent wandering vessel (one instance per agent) |

Buildings are arranged in a circle around the Air Port with independent bob/float animations (8–15 unit amplitude, 5–8 s period, golden-ratio phase spread so none move in sync).

---

## Installation

Drop the plugin directory into your Clawmagic `plugins/installed/` folder and restart the server. Clawmagic will register it automatically via `claw.plugin.json`.

```
plugins/installed/agentverse/
├── claw.plugin.json      ← plugin manifest
├── plugin.json           ← runtime manifest
├── plugin/index.js       ← server stub (UI-only plugin)
├── web/index.tsx         ← Three.js React source
├── web/index.js          ← compiled production bundle
├── basis/                ← KTX2 basis transcoder (WASM + JS)
└── world/
    ├── buildings/        ← 8 GLB building models
    ├── textures/         ← 256 shared KTX2 textures
    └── propellers/       ← 72-rotor spin model + manifest
```

Assets are served by the Clawmagic asset server at:
```
/api/plugins/agentverse/assets/v0.2.0/world/
```

---

## Development

### Prerequisites

- Node.js ≥ 20
- The Clawmagic monorepo (for workspace deps — `three`, React, Vite)
- `NODE_ENV=production` is set globally in this environment, which skips devDependencies on plain `npm install`. Use the build sandbox instead:

### Building the bundle

```bash
# The build sandbox at /tmp/agent-realm-build has all deps pre-installed.
# (If it doesn't exist, recreate it — see Build Workaround below.)

cp web/index.tsx /tmp/agent-realm-build/web/index.tsx
cd /tmp/agent-realm-build
npm install --include=dev          # installs devDeps despite NODE_ENV=production
node_modules/.bin/vite build       # produces web/index.js
cp web/index.js /path/to/agentverse/web/index.js
```

### Build workaround (fresh environment)

```bash
mkdir -p /tmp/agentverse-build/web
cd /tmp/agentverse-build

cat > package.json << 'EOF'
{
  "name": "agentverse-build", "version": "0.2.0",
  "private": true, "type": "module",
  "scripts": { "build": "vite build" },
  "dependencies": { "three": "0.161.0" },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@vitejs/plugin-react": "^4.4.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.8.2",
    "vite": "^5.4.14"
  }
}
EOF

npm install --include=dev

# Symlink the local Clawmagic frame package
mkdir -p node_modules/@clawmagic
ln -sf /path/to/clawmagic/packages/plugin-studio-frame \
       node_modules/@clawmagic/plugin-studio-frame

cp /path/to/agentverse/vite.config.ts .
cp /path/to/agentverse/web/index.tsx web/
node_modules/.bin/vite build
```

---

## Tuning

All layout and motion parameters are constants at the top of `web/index.tsx`:

| Constant | What it controls |
|---|---|
| `BUILDING_LAYOUT` | Each building's angle on the circle, distance factor, and Y-rotation override |
| `buildingFloatsRef` population | Bob speed (rad/s), amplitude (world units), phase |
| `FLIGHT_SPEED` | Cloud + ground scroll speed (world units/s) |
| `house.dockTimer = 10` | Seconds a Nomad's House stays at each building |
| `Math.pow(0.06, dt)` in wander lerp | Travel speed between buildings (lower base = faster) |
| `skyUni["turbidity"]` | Sky haze (1.5 = clear blue; higher = whiter) |
| `skyUni["rayleigh"]` | Sky blueness (3.0 = deep blue zenith) |
| `scene.fog` | `near = cityRadius * 2`, `far = drop * 8` |

---

## Asset pipeline

The source assets are KitBash3D "City in the Sky" (5.9 GB OBJ + 1.8 GB textures). The processing pipeline that produced the files in `world/` runs entirely in Python + the official `gltfpack` binary — no Blender:

1. `analyze_3d_assets.py` — stream-scan the 5.9 GB OBJ
2. `multi_split_obj.py` — split into per-building OBJ files
3. `make_libpng.py` — 1K PBR PNGs, roughness→G + metallic→B packing
4. `gltfpack -tc` — encode shared KTX2 texture library (40 MB)
5. `batch_buildings.ps1` → `gltfpack -si <ratio> -cc` — decimate + meshopt compress per building
6. `build_building.py` — inject shared KTX2 references into each model
7. `split_propellers.py` + `fix_manifest.py` + `rebuild_rotors.ps1` — extract and animate spinning rotors

The propeller `model.gltf` has been pre-filtered to include only the 72 rotors belonging to the 7 selected landmark buildings (down from 143 in the full kit).

---

## License

Plugin code: MIT  
3D assets: KitBash3D commercial license — not redistributable. The `world/` directory contents require a valid KitBash3D "City in the Sky" license.
