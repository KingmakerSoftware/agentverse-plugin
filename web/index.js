import TA, { useRef as St, useState as Ji, useEffect as wr, useCallback as ao } from "react";
var ul = { exports: {} }, gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wA = TA, RA = Symbol.for("react.element"), DA = Symbol.for("react.fragment"), LA = Object.prototype.hasOwnProperty, PA = wA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, FA = { key: !0, ref: !0, __self: !0, __source: !0 };
function fl(s, e, t) {
  var n, i = {}, r = null, a = null;
  t !== void 0 && (r = "" + t), e.key !== void 0 && (r = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (n in e) LA.call(e, n) && !FA.hasOwnProperty(n) && (i[n] = e[n]);
  if (s && s.defaultProps) for (n in e = s.defaultProps, e) i[n] === void 0 && (i[n] = e[n]);
  return { $$typeof: RA, type: s, key: r, ref: a, props: i, _owner: PA.current };
}
gr.Fragment = DA;
gr.jsx = fl;
gr.jsxs = fl;
ul.exports = gr;
var $e = ul.exports;
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ha = "161", oi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ci = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, UA = 0, oo = 1, NA = 2, pl = 1, gl = 2, gn = 3, xn = 0, Pt = 1, Kt = 2, Un = 0, Fi = 1, co = 2, lo = 3, Ao = 4, QA = 5, jn = 100, OA = 101, kA = 102, ho = 103, uo = 104, GA = 200, HA = 201, zA = 202, VA = 203, xa = 204, Ca = 205, WA = 206, qA = 207, jA = 208, YA = 209, XA = 210, KA = 211, JA = 212, ZA = 213, $A = 214, eh = 0, th = 1, nh = 2, ar = 3, ih = 4, sh = 5, rh = 6, ah = 7, ml = 0, oh = 1, ch = 2, Nn = 0, lh = 1, Ah = 2, hh = 3, El = 4, dh = 5, uh = 6, fo = "attached", fh = "detached", _l = 300, ei = 301, Qi = 302, Ia = 303, Sa = 304, mr = 306, ti = 1e3, Gt = 1001, or = 1002, xt = 1003, va = 1004, wi = 1005, bt = 1006, tr = 1007, rn = 1008, ft = 1009, ph = 1010, gh = 1011, za = 1012, bl = 1013, Pn = 1014, Ut = 1015, bn = 1016, xl = 1017, Cl = 1018, Kn = 1020, mh = 1021, Ct = 1023, Eh = 1024, _h = 1025, Jn = 1026, Oi = 1027, Ri = 1028, Il = 1029, Di = 1030, Sl = 1031, vl = 1033, nr = 33776, Rr = 33777, Dr = 33778, ir = 33779, Ma = 35840, po = 35841, ya = 35842, go = 35843, Va = 36196, Ba = 37492, Ta = 37496, wa = 37808, mo = 37809, Eo = 37810, _o = 37811, cr = 37812, bo = 37813, xo = 37814, Co = 37815, Io = 37816, So = 37817, vo = 37818, Mo = 37819, yo = 37820, Bo = 37821, sr = 36492, To = 36494, wo = 36495, bh = 36283, Ro = 36284, Do = 36285, Lo = 36286, fs = 2300, ki = 2301, Lr = 2302, Po = 2400, Fo = 2401, Uo = 2402, xh = 2500, Ch = 0, Ml = 1, Ra = 2, yl = 3e3, Zn = 3001, Ih = 3200, Sh = 3201, Bl = 0, vh = 1, Nt = "", ot = "srgb", pt = "srgb-linear", Er = "display-p3", ms = "display-p3-linear", lr = "linear", at = "srgb", Ar = "rec709", hr = "p3", li = 7680, No = 519, Mh = 512, yh = 513, Bh = 514, Tl = 515, Th = 516, wh = 517, Rh = 518, Dh = 519, Da = 35044, Qo = "300 es", La = 1035, En = 2e3, dr = 2001;
class si {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const yt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Oo = 1234567;
const As = Math.PI / 180, Gi = 180 / Math.PI;
function $t() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (yt[s & 255] + yt[s >> 8 & 255] + yt[s >> 16 & 255] + yt[s >> 24 & 255] + "-" + yt[e & 255] + yt[e >> 8 & 255] + "-" + yt[e >> 16 & 15 | 64] + yt[e >> 24 & 255] + "-" + yt[t & 63 | 128] + yt[t >> 8 & 255] + "-" + yt[t >> 16 & 255] + yt[t >> 24 & 255] + yt[n & 255] + yt[n >> 8 & 255] + yt[n >> 16 & 255] + yt[n >> 24 & 255]).toLowerCase();
}
function vt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Wa(s, e) {
  return (s % e + e) % e;
}
function Lh(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Ph(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function hs(s, e, t) {
  return (1 - t) * s + t * e;
}
function Fh(s, e, t, n) {
  return hs(s, e, 1 - Math.exp(-t * n));
}
function Uh(s, e = 1) {
  return e - Math.abs(Wa(s, e * 2) - e);
}
function Nh(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function Qh(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Oh(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function kh(s, e) {
  return s + Math.random() * (e - s);
}
function Gh(s) {
  return s * (0.5 - Math.random());
}
function Hh(s) {
  s !== void 0 && (Oo = s);
  let e = Oo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function zh(s) {
  return s * As;
}
function Vh(s) {
  return s * Gi;
}
function Pa(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Wh(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function ur(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function qh(s, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), c = a(t / 2), l = r((e + n) / 2), A = a((e + n) / 2), h = r((e - n) / 2), d = a((e - n) / 2), p = r((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * A, c * h, c * d, o * l);
      break;
    case "YZY":
      s.set(c * d, o * A, c * h, o * l);
      break;
    case "ZXZ":
      s.set(c * h, c * d, o * A, o * l);
      break;
    case "XZX":
      s.set(o * A, c * g, c * p, o * l);
      break;
    case "YXY":
      s.set(c * p, o * A, c * g, o * l);
      break;
    case "ZYZ":
      s.set(c * g, c * p, o * A, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Jt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function nt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const fr = {
  DEG2RAD: As,
  RAD2DEG: Gi,
  generateUUID: $t,
  clamp: vt,
  euclideanModulo: Wa,
  mapLinear: Lh,
  inverseLerp: Ph,
  lerp: hs,
  damp: Fh,
  pingpong: Uh,
  smoothstep: Nh,
  smootherstep: Qh,
  randInt: Oh,
  randFloat: kh,
  randFloatSpread: Gh,
  seededRandom: Hh,
  degToRad: zh,
  radToDeg: Vh,
  isPowerOfTwo: Pa,
  ceilPowerOfTwo: Wh,
  floorPowerOfTwo: ur,
  setQuaternionFromProperEuler: qh,
  normalize: nt,
  denormalize: Jt
};
class ye {
  constructor(e = 0, t = 0) {
    ye.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(vt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ye {
  constructor(e, t, n, i, r, a, o, c, l) {
    Ye.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, c, l);
  }
  set(e, t, n, i, r, a, o, c, l) {
    const A = this.elements;
    return A[0] = e, A[1] = i, A[2] = o, A[3] = t, A[4] = r, A[5] = c, A[6] = n, A[7] = a, A[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], A = n[4], h = n[7], d = n[2], p = n[5], g = n[8], E = i[0], f = i[3], u = i[6], x = i[1], m = i[4], I = i[7], w = i[2], T = i[5], y = i[8];
    return r[0] = a * E + o * x + c * w, r[3] = a * f + o * m + c * T, r[6] = a * u + o * I + c * y, r[1] = l * E + A * x + h * w, r[4] = l * f + A * m + h * T, r[7] = l * u + A * I + h * y, r[2] = d * E + p * x + g * w, r[5] = d * f + p * m + g * T, r[8] = d * u + p * I + g * y, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], A = e[8];
    return t * a * A - t * o * l - n * r * A + n * o * c + i * r * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], A = e[8], h = A * a - o * l, d = o * c - A * r, p = l * r - a * c, g = t * h + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / g;
    return e[0] = h * E, e[1] = (i * l - A * n) * E, e[2] = (o * n - i * a) * E, e[3] = d * E, e[4] = (A * t - i * c) * E, e[5] = (i * r - o * t) * E, e[6] = p * E, e[7] = (n * c - l * t) * E, e[8] = (a * t - n * r) * E, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Pr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Pr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Pr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Pr = /* @__PURE__ */ new Ye();
function wl(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function ps(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function jh() {
  const s = ps("canvas");
  return s.style.display = "block", s;
}
const ko = {};
function $n(s) {
  s in ko || (ko[s] = !0, console.warn(s));
}
const Go = /* @__PURE__ */ new Ye().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ho = /* @__PURE__ */ new Ye().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Cs = {
  [pt]: {
    transfer: lr,
    primaries: Ar,
    toReference: (s) => s,
    fromReference: (s) => s
  },
  [ot]: {
    transfer: at,
    primaries: Ar,
    toReference: (s) => s.convertSRGBToLinear(),
    fromReference: (s) => s.convertLinearToSRGB()
  },
  [ms]: {
    transfer: lr,
    primaries: hr,
    toReference: (s) => s.applyMatrix3(Ho),
    fromReference: (s) => s.applyMatrix3(Go)
  },
  [Er]: {
    transfer: at,
    primaries: hr,
    toReference: (s) => s.convertSRGBToLinear().applyMatrix3(Ho),
    fromReference: (s) => s.applyMatrix3(Go).convertLinearToSRGB()
  }
}, Yh = /* @__PURE__ */ new Set([pt, ms]), et = {
  enabled: !0,
  _workingColorSpace: pt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(s) {
    if (!Yh.has(s))
      throw new Error(`Unsupported working color space, "${s}".`);
    this._workingColorSpace = s;
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = Cs[e].toReference, i = Cs[t].fromReference;
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this._workingColorSpace);
  },
  getPrimaries: function(s) {
    return Cs[s].primaries;
  },
  getTransfer: function(s) {
    return s === Nt ? lr : Cs[s].transfer;
  }
};
function Ui(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Fr(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let Ai;
class Rl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Ai === void 0 && (Ai = ps("canvas")), Ai.width = e.width, Ai.height = e.height;
      const n = Ai.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ai;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ps("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = Ui(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ui(t[n] / 255) * 255) : t[n] = Ui(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Xh = 0;
class Dl {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Xh++ }), this.uuid = $t(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(Ur(i[a].image)) : r.push(Ur(i[a]));
      } else
        r = Ur(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ur(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Rl.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Kh = 0;
class ut extends si {
  constructor(e = ut.DEFAULT_IMAGE, t = ut.DEFAULT_MAPPING, n = Gt, i = Gt, r = bt, a = rn, o = Ct, c = ft, l = ut.DEFAULT_ANISOTROPY, A = Nt) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Kh++ }), this.uuid = $t(), this.name = "", this.source = new Dl(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new ye(0, 0), this.repeat = new ye(1, 1), this.center = new ye(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ye(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof A == "string" ? this.colorSpace = A : ($n("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = A === Zn ? ot : Nt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== _l) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ti:
          e.x = e.x - Math.floor(e.x);
          break;
        case Gt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case or:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ti:
          e.y = e.y - Math.floor(e.y);
          break;
        case Gt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case or:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return $n("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === ot ? Zn : yl;
  }
  set encoding(e) {
    $n("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Zn ? ot : Nt;
  }
}
ut.DEFAULT_IMAGE = null;
ut.DEFAULT_MAPPING = _l;
ut.DEFAULT_ANISOTROPY = 1;
class st {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    st.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements, l = c[0], A = c[4], h = c[8], d = c[1], p = c[5], g = c[9], E = c[2], f = c[6], u = c[10];
    if (Math.abs(A - d) < 0.01 && Math.abs(h - E) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(A + d) < 0.1 && Math.abs(h + E) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(l + p + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const m = (l + 1) / 2, I = (p + 1) / 2, w = (u + 1) / 2, T = (A + d) / 4, y = (h + E) / 4, W = (g + f) / 4;
      return m > I && m > w ? m < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(m), i = T / n, r = y / n) : I > w ? I < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(I), n = T / i, r = W / i) : w < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(w), n = y / r, i = W / r), this.set(n, i, r, t), this;
    }
    let x = Math.sqrt((f - g) * (f - g) + (h - E) * (h - E) + (d - A) * (d - A));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (f - g) / x, this.y = (h - E) / x, this.z = (d - A) / x, this.w = Math.acos((l + p + u - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Jh extends si {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new st(0, 0, e, t), this.scissorTest = !1, this.viewport = new st(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && ($n("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Zn ? ot : Nt), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: bt,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new ut(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Dl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ni extends Jh {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ll extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = xt, this.minFilter = xt, this.wrapR = Gt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Pl extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = xt, this.minFilter = xt, this.wrapR = Gt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class nn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let c = n[i + 0], l = n[i + 1], A = n[i + 2], h = n[i + 3];
    const d = r[a + 0], p = r[a + 1], g = r[a + 2], E = r[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = A, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = E;
      return;
    }
    if (h !== E || c !== d || l !== p || A !== g) {
      let f = 1 - o;
      const u = c * d + l * p + A * g + h * E, x = u >= 0 ? 1 : -1, m = 1 - u * u;
      if (m > Number.EPSILON) {
        const w = Math.sqrt(m), T = Math.atan2(w, u * x);
        f = Math.sin(f * T) / w, o = Math.sin(o * T) / w;
      }
      const I = o * x;
      if (c = c * f + d * I, l = l * f + p * I, A = A * f + g * I, h = h * f + E * I, f === 1 - o) {
        const w = 1 / Math.sqrt(c * c + l * l + A * A + h * h);
        c *= w, l *= w, A *= w, h *= w;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = A, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], A = n[i + 3], h = r[a], d = r[a + 1], p = r[a + 2], g = r[a + 3];
    return e[t] = o * g + A * h + c * p - l * d, e[t + 1] = c * g + A * d + l * h - o * p, e[t + 2] = l * g + A * p + o * d - c * h, e[t + 3] = A * g - o * h - c * d - l * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), A = o(i / 2), h = o(r / 2), d = c(n / 2), p = c(i / 2), g = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * A * h + l * p * g, this._y = l * p * h - d * A * g, this._z = l * A * g + d * p * h, this._w = l * A * h - d * p * g;
        break;
      case "YXZ":
        this._x = d * A * h + l * p * g, this._y = l * p * h - d * A * g, this._z = l * A * g - d * p * h, this._w = l * A * h + d * p * g;
        break;
      case "ZXY":
        this._x = d * A * h - l * p * g, this._y = l * p * h + d * A * g, this._z = l * A * g + d * p * h, this._w = l * A * h - d * p * g;
        break;
      case "ZYX":
        this._x = d * A * h - l * p * g, this._y = l * p * h + d * A * g, this._z = l * A * g - d * p * h, this._w = l * A * h + d * p * g;
        break;
      case "YZX":
        this._x = d * A * h + l * p * g, this._y = l * p * h + d * A * g, this._z = l * A * g - d * p * h, this._w = l * A * h - d * p * g;
        break;
      case "XZY":
        this._x = d * A * h - l * p * g, this._y = l * p * h - d * A * g, this._z = l * A * g + d * p * h, this._w = l * A * h + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], c = t[9], l = t[2], A = t[6], h = t[10], d = n + o + h;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (A - c) * p, this._y = (r - l) * p, this._z = (a - i) * p;
    } else if (n > o && n > h) {
      const p = 2 * Math.sqrt(1 + n - o - h);
      this._w = (A - c) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (r + l) / p;
    } else if (o > h) {
      const p = 2 * Math.sqrt(1 + o - n - h);
      this._w = (r - l) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (c + A) / p;
    } else {
      const p = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - i) / p, this._x = (r + l) / p, this._y = (c + A) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(vt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, a = e._w, o = t._x, c = t._y, l = t._z, A = t._w;
    return this._x = n * A + a * o + i * l - r * c, this._y = i * A + a * c + r * o - n * l, this._z = r * A + a * l + n * c - i * o, this._w = a * A - n * o - i * c - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), A = Math.atan2(l, o), h = Math.sin((1 - t) * A) / l, d = Math.sin(t * A) / l;
    return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = r * h + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(zo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(zo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), A = 2 * (o * t - r * i), h = 2 * (r * n - a * t);
    return this.x = t + c * l + a * h - o * A, this.y = n + c * A + o * l - r * h, this.z = i + c * h + r * A - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - r * o, this.y = r * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Nr.copy(this).projectOnVector(e), this.sub(Nr);
  }
  reflect(e) {
    return this.sub(Nr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(vt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Nr = /* @__PURE__ */ new R(), zo = /* @__PURE__ */ new nn();
class Wt {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(jt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(jt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = jt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, jt) : jt.fromBufferAttribute(r, a), jt.applyMatrix4(e.matrixWorld), this.expandByPoint(jt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Is.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Is.copy(n.boundingBox)), Is.applyMatrix4(e.matrixWorld), this.union(Is);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, jt), jt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Zi), Ss.subVectors(this.max, Zi), hi.subVectors(e.a, Zi), di.subVectors(e.b, Zi), ui.subVectors(e.c, Zi), vn.subVectors(di, hi), Mn.subVectors(ui, di), kn.subVectors(hi, ui);
    let t = [
      0,
      -vn.z,
      vn.y,
      0,
      -Mn.z,
      Mn.y,
      0,
      -kn.z,
      kn.y,
      vn.z,
      0,
      -vn.x,
      Mn.z,
      0,
      -Mn.x,
      kn.z,
      0,
      -kn.x,
      -vn.y,
      vn.x,
      0,
      -Mn.y,
      Mn.x,
      0,
      -kn.y,
      kn.x,
      0
    ];
    return !Qr(t, hi, di, ui, Ss) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Qr(t, hi, di, ui, Ss)) ? !1 : (vs.crossVectors(vn, Mn), t = [vs.x, vs.y, vs.z], Qr(t, hi, di, ui, Ss));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, jt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(jt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (An[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), An[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), An[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), An[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), An[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), An[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), An[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), An[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(An), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const An = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], jt = /* @__PURE__ */ new R(), Is = /* @__PURE__ */ new Wt(), hi = /* @__PURE__ */ new R(), di = /* @__PURE__ */ new R(), ui = /* @__PURE__ */ new R(), vn = /* @__PURE__ */ new R(), Mn = /* @__PURE__ */ new R(), kn = /* @__PURE__ */ new R(), Zi = /* @__PURE__ */ new R(), Ss = /* @__PURE__ */ new R(), vs = /* @__PURE__ */ new R(), Gn = /* @__PURE__ */ new R();
function Qr(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Gn.fromArray(s, r);
    const o = i.x * Math.abs(Gn.x) + i.y * Math.abs(Gn.y) + i.z * Math.abs(Gn.z), c = e.dot(Gn), l = t.dot(Gn), A = n.dot(Gn);
    if (Math.max(-Math.max(c, l, A), Math.min(c, l, A)) > o)
      return !1;
  }
  return !0;
}
const Zh = /* @__PURE__ */ new Wt(), $i = /* @__PURE__ */ new R(), Or = /* @__PURE__ */ new R();
class on {
  constructor(e = new R(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Zh.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    $i.subVectors(e, this.center);
    const t = $i.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector($i, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Or.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint($i.copy(e.center).add(Or)), this.expandByPoint($i.copy(e.center).sub(Or))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hn = /* @__PURE__ */ new R(), kr = /* @__PURE__ */ new R(), Ms = /* @__PURE__ */ new R(), yn = /* @__PURE__ */ new R(), Gr = /* @__PURE__ */ new R(), ys = /* @__PURE__ */ new R(), Hr = /* @__PURE__ */ new R();
class Es {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, hn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = hn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (hn.copy(this.origin).addScaledVector(this.direction, t), hn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    kr.copy(e).add(t).multiplyScalar(0.5), Ms.copy(t).sub(e).normalize(), yn.copy(this.origin).sub(kr);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ms), o = yn.dot(this.direction), c = -yn.dot(Ms), l = yn.lengthSq(), A = Math.abs(1 - a * a);
    let h, d, p, g;
    if (A > 0)
      if (h = a * c - o, d = a * o - c, g = r * A, h >= 0)
        if (d >= -g)
          if (d <= g) {
            const E = 1 / A;
            h *= E, d *= E, p = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * c) + l;
          } else
            d = r, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * c) + l;
        else
          d = -r, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * c) + l;
      else
        d <= -g ? (h = Math.max(0, -(-a * r + o)), d = h > 0 ? -r : Math.min(Math.max(-r, -c), r), p = -h * h + d * (d + 2 * c) + l) : d <= g ? (h = 0, d = Math.min(Math.max(-r, -c), r), p = d * (d + 2 * c) + l) : (h = Math.max(0, -(a * r + o)), d = h > 0 ? r : Math.min(Math.max(-r, -c), r), p = -h * h + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -r : r, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(kr).addScaledVector(Ms, d), p;
  }
  intersectSphere(e, t) {
    hn.subVectors(e.center, this.origin);
    const n = hn.dot(this.direction), i = hn.dot(hn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, c;
    const l = 1 / this.direction.x, A = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), A >= 0 ? (r = (e.min.y - d.y) * A, a = (e.max.y - d.y) * A) : (r = (e.max.y - d.y) * A, a = (e.min.y - d.y) * A), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), h >= 0 ? (o = (e.min.z - d.z) * h, c = (e.max.z - d.z) * h) : (o = (e.max.z - d.z) * h, c = (e.min.z - d.z) * h), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, hn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Gr.subVectors(t, e), ys.subVectors(n, e), Hr.crossVectors(Gr, ys);
    let a = this.direction.dot(Hr), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    yn.subVectors(this.origin, e);
    const c = o * this.direction.dot(ys.crossVectors(yn, ys));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Gr.cross(yn));
    if (l < 0 || c + l > a)
      return null;
    const A = -o * yn.dot(Hr);
    return A < 0 ? null : this.at(A / a, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Re {
  constructor(e, t, n, i, r, a, o, c, l, A, h, d, p, g, E, f) {
    Re.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, c, l, A, h, d, p, g, E, f);
  }
  set(e, t, n, i, r, a, o, c, l, A, h, d, p, g, E, f) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = n, u[12] = i, u[1] = r, u[5] = a, u[9] = o, u[13] = c, u[2] = l, u[6] = A, u[10] = h, u[14] = d, u[3] = p, u[7] = g, u[11] = E, u[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Re().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / fi.setFromMatrixColumn(e, 0).length(), r = 1 / fi.setFromMatrixColumn(e, 1).length(), a = 1 / fi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), A = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * A, p = a * h, g = o * A, E = o * h;
      t[0] = c * A, t[4] = -c * h, t[8] = l, t[1] = p + g * l, t[5] = d - E * l, t[9] = -o * c, t[2] = E - d * l, t[6] = g + p * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * A, p = c * h, g = l * A, E = l * h;
      t[0] = d + E * o, t[4] = g * o - p, t[8] = a * l, t[1] = a * h, t[5] = a * A, t[9] = -o, t[2] = p * o - g, t[6] = E + d * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * A, p = c * h, g = l * A, E = l * h;
      t[0] = d - E * o, t[4] = -a * h, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * A, t[9] = E - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * A, p = a * h, g = o * A, E = o * h;
      t[0] = c * A, t[4] = g * l - p, t[8] = d * l + E, t[1] = c * h, t[5] = E * l + d, t[9] = p * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, p = a * l, g = o * c, E = o * l;
      t[0] = c * A, t[4] = E - d * h, t[8] = g * h + p, t[1] = h, t[5] = a * A, t[9] = -o * A, t[2] = -l * A, t[6] = p * h + g, t[10] = d - E * h;
    } else if (e.order === "XZY") {
      const d = a * c, p = a * l, g = o * c, E = o * l;
      t[0] = c * A, t[4] = -h, t[8] = l * A, t[1] = d * h + E, t[5] = a * A, t[9] = p * h - g, t[2] = g * h - p, t[6] = o * A, t[10] = E * h + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose($h, e, ed);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ot.subVectors(e, t), Ot.lengthSq() === 0 && (Ot.z = 1), Ot.normalize(), Bn.crossVectors(n, Ot), Bn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ot.x += 1e-4 : Ot.z += 1e-4, Ot.normalize(), Bn.crossVectors(n, Ot)), Bn.normalize(), Bs.crossVectors(Ot, Bn), i[0] = Bn.x, i[4] = Bs.x, i[8] = Ot.x, i[1] = Bn.y, i[5] = Bs.y, i[9] = Ot.y, i[2] = Bn.z, i[6] = Bs.z, i[10] = Ot.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], A = n[1], h = n[5], d = n[9], p = n[13], g = n[2], E = n[6], f = n[10], u = n[14], x = n[3], m = n[7], I = n[11], w = n[15], T = i[0], y = i[4], W = i[8], te = i[12], _ = i[1], M = i[5], K = i[9], ie = i[13], D = i[2], L = i[6], Q = i[10], q = i[14], N = i[3], H = i[7], J = i[11], Z = i[15];
    return r[0] = a * T + o * _ + c * D + l * N, r[4] = a * y + o * M + c * L + l * H, r[8] = a * W + o * K + c * Q + l * J, r[12] = a * te + o * ie + c * q + l * Z, r[1] = A * T + h * _ + d * D + p * N, r[5] = A * y + h * M + d * L + p * H, r[9] = A * W + h * K + d * Q + p * J, r[13] = A * te + h * ie + d * q + p * Z, r[2] = g * T + E * _ + f * D + u * N, r[6] = g * y + E * M + f * L + u * H, r[10] = g * W + E * K + f * Q + u * J, r[14] = g * te + E * ie + f * q + u * Z, r[3] = x * T + m * _ + I * D + w * N, r[7] = x * y + m * M + I * L + w * H, r[11] = x * W + m * K + I * Q + w * J, r[15] = x * te + m * ie + I * q + w * Z, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], c = e[9], l = e[13], A = e[2], h = e[6], d = e[10], p = e[14], g = e[3], E = e[7], f = e[11], u = e[15];
    return g * (+r * c * h - i * l * h - r * o * d + n * l * d + i * o * p - n * c * p) + E * (+t * c * p - t * l * d + r * a * d - i * a * p + i * l * A - r * c * A) + f * (+t * l * h - t * o * p - r * a * h + n * a * p + r * o * A - n * l * A) + u * (-i * o * A - t * c * h + t * o * d + i * a * h - n * a * d + n * c * A);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], A = e[8], h = e[9], d = e[10], p = e[11], g = e[12], E = e[13], f = e[14], u = e[15], x = h * f * l - E * d * l + E * c * p - o * f * p - h * c * u + o * d * u, m = g * d * l - A * f * l - g * c * p + a * f * p + A * c * u - a * d * u, I = A * E * l - g * h * l + g * o * p - a * E * p - A * o * u + a * h * u, w = g * h * c - A * E * c - g * o * d + a * E * d + A * o * f - a * h * f, T = t * x + n * m + i * I + r * w;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / T;
    return e[0] = x * y, e[1] = (E * d * r - h * f * r - E * i * p + n * f * p + h * i * u - n * d * u) * y, e[2] = (o * f * r - E * c * r + E * i * l - n * f * l - o * i * u + n * c * u) * y, e[3] = (h * c * r - o * d * r - h * i * l + n * d * l + o * i * p - n * c * p) * y, e[4] = m * y, e[5] = (A * f * r - g * d * r + g * i * p - t * f * p - A * i * u + t * d * u) * y, e[6] = (g * c * r - a * f * r - g * i * l + t * f * l + a * i * u - t * c * u) * y, e[7] = (a * d * r - A * c * r + A * i * l - t * d * l - a * i * p + t * c * p) * y, e[8] = I * y, e[9] = (g * h * r - A * E * r - g * n * p + t * E * p + A * n * u - t * h * u) * y, e[10] = (a * E * r - g * o * r + g * n * l - t * E * l - a * n * u + t * o * u) * y, e[11] = (A * o * r - a * h * r - A * n * l + t * h * l + a * n * p - t * o * p) * y, e[12] = w * y, e[13] = (A * E * i - g * h * i + g * n * d - t * E * d - A * n * f + t * h * f) * y, e[14] = (g * o * i - a * E * i - g * n * c + t * E * c + a * n * f - t * o * f) * y, e[15] = (a * h * i - A * o * i + A * n * c - t * h * c - a * n * d + t * o * d) * y, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, o = e.y, c = e.z, l = r * a, A = r * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      A * o + n,
      A * c - i * a,
      0,
      l * c - i * o,
      A * c + i * a,
      r * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, a = t._y, o = t._z, c = t._w, l = r + r, A = a + a, h = o + o, d = r * l, p = r * A, g = r * h, E = a * A, f = a * h, u = o * h, x = c * l, m = c * A, I = c * h, w = n.x, T = n.y, y = n.z;
    return i[0] = (1 - (E + u)) * w, i[1] = (p + I) * w, i[2] = (g - m) * w, i[3] = 0, i[4] = (p - I) * T, i[5] = (1 - (d + u)) * T, i[6] = (f + x) * T, i[7] = 0, i[8] = (g + m) * y, i[9] = (f - x) * y, i[10] = (1 - (d + E)) * y, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = fi.set(i[0], i[1], i[2]).length();
    const a = fi.set(i[4], i[5], i[6]).length(), o = fi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Yt.copy(this);
    const l = 1 / r, A = 1 / a, h = 1 / o;
    return Yt.elements[0] *= l, Yt.elements[1] *= l, Yt.elements[2] *= l, Yt.elements[4] *= A, Yt.elements[5] *= A, Yt.elements[6] *= A, Yt.elements[8] *= h, Yt.elements[9] *= h, Yt.elements[10] *= h, t.setFromRotationMatrix(Yt), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = En) {
    const c = this.elements, l = 2 * r / (t - e), A = 2 * r / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, g;
    if (o === En)
      p = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === dr)
      p = -a / (a - r), g = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = h, c[12] = 0, c[1] = 0, c[5] = A, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = En) {
    const c = this.elements, l = 1 / (t - e), A = 1 / (n - i), h = 1 / (a - r), d = (t + e) * l, p = (n + i) * A;
    let g, E;
    if (o === En)
      g = (a + r) * h, E = -2 * h;
    else if (o === dr)
      g = r * h, E = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * A, c[9] = 0, c[13] = -p, c[2] = 0, c[6] = 0, c[10] = E, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const fi = /* @__PURE__ */ new R(), Yt = /* @__PURE__ */ new Re(), $h = /* @__PURE__ */ new R(0, 0, 0), ed = /* @__PURE__ */ new R(1, 1, 1), Bn = /* @__PURE__ */ new R(), Bs = /* @__PURE__ */ new R(), Ot = /* @__PURE__ */ new R(), Vo = /* @__PURE__ */ new Re(), Wo = /* @__PURE__ */ new nn();
class _r {
  constructor(e = 0, t = 0, n = 0, i = _r.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], a = i[4], o = i[8], c = i[1], l = i[5], A = i[9], h = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(vt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-A, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-vt(A, -1, 1)), Math.abs(A) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(vt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-vt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(vt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-A, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-vt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-A, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Vo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Vo, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Wo.setFromEuler(this), this.setFromQuaternion(Wo, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
_r.DEFAULT_ORDER = "XYZ";
class Fl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let td = 0;
const qo = /* @__PURE__ */ new R(), pi = /* @__PURE__ */ new nn(), dn = /* @__PURE__ */ new Re(), Ts = /* @__PURE__ */ new R(), es = /* @__PURE__ */ new R(), nd = /* @__PURE__ */ new R(), id = /* @__PURE__ */ new nn(), jo = /* @__PURE__ */ new R(1, 0, 0), Yo = /* @__PURE__ */ new R(0, 1, 0), Xo = /* @__PURE__ */ new R(0, 0, 1), sd = { type: "added" }, rd = { type: "removed" };
class ct extends si {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: td++ }), this.uuid = $t(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ct.DEFAULT_UP.clone();
    const e = new R(), t = new _r(), n = new nn(), i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Re()
      },
      normalMatrix: {
        value: new Ye()
      }
    }), this.matrix = new Re(), this.matrixWorld = new Re(), this.matrixAutoUpdate = ct.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Fl(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return pi.setFromAxisAngle(e, t), this.quaternion.multiply(pi), this;
  }
  rotateOnWorldAxis(e, t) {
    return pi.setFromAxisAngle(e, t), this.quaternion.premultiply(pi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(jo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Yo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Xo, e);
  }
  translateOnAxis(e, t) {
    return qo.copy(e).applyQuaternion(this.quaternion), this.position.add(qo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(jo, e);
  }
  translateY(e) {
    return this.translateOnAxis(Yo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Xo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(dn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ts.copy(e) : Ts.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), es.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? dn.lookAt(es, Ts, this.up) : dn.lookAt(Ts, es, this.up), this.quaternion.setFromRotationMatrix(dn), i && (dn.extractRotation(i.matrixWorld), pi.setFromRotationMatrix(dn), this.quaternion.premultiply(pi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(sd)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(rd)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), dn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), dn.multiply(e.parent.matrixWorld)), e.applyMatrix4(dn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(es, e, nd), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(es, id, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) {
        const o = i[r];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, A = c.length; l < A; l++) {
            const h = c[l];
            r(e.shapes, h);
          }
        else
          r(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), A = a(e.images), h = a(e.shapes), d = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), A.length > 0 && (n.images = A), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const A = o[l];
        delete A.metadata, c.push(A);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ct.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
ct.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Xt = /* @__PURE__ */ new R(), un = /* @__PURE__ */ new R(), zr = /* @__PURE__ */ new R(), fn = /* @__PURE__ */ new R(), gi = /* @__PURE__ */ new R(), mi = /* @__PURE__ */ new R(), Ko = /* @__PURE__ */ new R(), Vr = /* @__PURE__ */ new R(), Wr = /* @__PURE__ */ new R(), qr = /* @__PURE__ */ new R();
class Zt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Xt.subVectors(e, t), i.cross(Xt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    Xt.subVectors(i, t), un.subVectors(n, t), zr.subVectors(e, t);
    const a = Xt.dot(Xt), o = Xt.dot(un), c = Xt.dot(zr), l = un.dot(un), A = un.dot(zr), h = a * l - o * o;
    if (h === 0)
      return r.set(0, 0, 0), null;
    const d = 1 / h, p = (l * c - o * A) * d, g = (a * A - o * c) * d;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, fn) === null ? !1 : fn.x >= 0 && fn.y >= 0 && fn.x + fn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, c) {
    return this.getBarycoord(e, t, n, i, fn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, fn.x), c.addScaledVector(a, fn.y), c.addScaledVector(o, fn.z), c);
  }
  static isFrontFacing(e, t, n, i) {
    return Xt.subVectors(n, t), un.subVectors(e, t), Xt.cross(un).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Xt.subVectors(this.c, this.b), un.subVectors(this.a, this.b), Xt.cross(un).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Zt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return Zt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Zt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    gi.subVectors(i, n), mi.subVectors(r, n), Vr.subVectors(e, n);
    const c = gi.dot(Vr), l = mi.dot(Vr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Wr.subVectors(e, i);
    const A = gi.dot(Wr), h = mi.dot(Wr);
    if (A >= 0 && h <= A)
      return t.copy(i);
    const d = c * h - A * l;
    if (d <= 0 && c >= 0 && A <= 0)
      return a = c / (c - A), t.copy(n).addScaledVector(gi, a);
    qr.subVectors(e, r);
    const p = gi.dot(qr), g = mi.dot(qr);
    if (g >= 0 && p <= g)
      return t.copy(r);
    const E = p * l - c * g;
    if (E <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(mi, o);
    const f = A * g - p * h;
    if (f <= 0 && h - A >= 0 && p - g >= 0)
      return Ko.subVectors(r, i), o = (h - A) / (h - A + (p - g)), t.copy(i).addScaledVector(Ko, o);
    const u = 1 / (f + E + d);
    return a = E * u, o = d * u, t.copy(n).addScaledVector(gi, a).addScaledVector(mi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Ul = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Tn = { h: 0, s: 0, l: 0 }, ws = { h: 0, s: 0, l: 0 };
function jr(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class Ne {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = ot) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, et.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = et.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, et.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = et.workingColorSpace) {
    if (e = Wa(e, 1), t = vt(t, 0, 1), n = vt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = jr(a, r, e + 1 / 3), this.g = jr(a, r, e), this.b = jr(a, r, e - 1 / 3);
    }
    return et.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = ot) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = ot) {
    const n = Ul[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ui(e.r), this.g = Ui(e.g), this.b = Ui(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Fr(e.r), this.g = Fr(e.g), this.b = Fr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ot) {
    return et.fromWorkingColorSpace(Bt.copy(this), e), Math.round(vt(Bt.r * 255, 0, 255)) * 65536 + Math.round(vt(Bt.g * 255, 0, 255)) * 256 + Math.round(vt(Bt.b * 255, 0, 255));
  }
  getHexString(e = ot) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = et.workingColorSpace) {
    et.fromWorkingColorSpace(Bt.copy(this), t);
    const n = Bt.r, i = Bt.g, r = Bt.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let c, l;
    const A = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const h = a - o;
      switch (l = A <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case n:
          c = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / h + 2;
          break;
        case r:
          c = (n - i) / h + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = A, e;
  }
  getRGB(e, t = et.workingColorSpace) {
    return et.fromWorkingColorSpace(Bt.copy(this), t), e.r = Bt.r, e.g = Bt.g, e.b = Bt.b, e;
  }
  getStyle(e = ot) {
    et.fromWorkingColorSpace(Bt.copy(this), e);
    const t = Bt.r, n = Bt.g, i = Bt.b;
    return e !== ot ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Tn), this.setHSL(Tn.h + e, Tn.s + t, Tn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Tn), e.getHSL(ws);
    const n = hs(Tn.h, ws.h, t), i = hs(Tn.s, ws.s, t), r = hs(Tn.l, ws.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Bt = /* @__PURE__ */ new Ne();
Ne.NAMES = Ul;
let ad = 0;
class en extends si {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ad++ }), this.uuid = $t(), this.name = "", this.type = "Material", this.blending = Fi, this.side = xn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = xa, this.blendDst = Ca, this.blendEquation = jn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ne(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ar, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = No, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = li, this.stencilZFail = li, this.stencilZPass = li, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Fi && (n.blending = this.blending), this.side !== xn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== xa && (n.blendSrc = this.blendSrc), this.blendDst !== Ca && (n.blendDst = this.blendDst), this.blendEquation !== jn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ar && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== No && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== li && (n.stencilFail = this.stencilFail), this.stencilZFail !== li && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== li && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures), a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Xn extends en {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ne(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ml, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const dt = /* @__PURE__ */ new R(), Rs = /* @__PURE__ */ new ye();
class Ft {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Da, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Ut, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return $n("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Rs.fromBufferAttribute(this, t), Rs.applyMatrix3(e), this.setXY(t, Rs.x, Rs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        dt.fromBufferAttribute(this, t), dt.applyMatrix3(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      dt.fromBufferAttribute(this, t), dt.applyMatrix4(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      dt.fromBufferAttribute(this, t), dt.applyNormalMatrix(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      dt.fromBufferAttribute(this, t), dt.transformDirection(e), this.setXYZ(t, dt.x, dt.y, dt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Jt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = nt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = nt(t, this.array), n = nt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = nt(t, this.array), n = nt(n, this.array), i = nt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = nt(t, this.array), n = nt(n, this.array), i = nt(i, this.array), r = nt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Da && (e.usage = this.usage), e;
  }
}
class Nl extends Ft {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ql extends Ft {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class tn extends Ft {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let od = 0;
const zt = /* @__PURE__ */ new Re(), Yr = /* @__PURE__ */ new ct(), Ei = /* @__PURE__ */ new R(), kt = /* @__PURE__ */ new Wt(), ts = /* @__PURE__ */ new Wt(), _t = /* @__PURE__ */ new R();
class qt extends si {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: od++ }), this.uuid = $t(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (wl(e) ? Ql : Nl)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ye().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return zt.makeRotationFromQuaternion(e), this.applyMatrix4(zt), this;
  }
  rotateX(e) {
    return zt.makeRotationX(e), this.applyMatrix4(zt), this;
  }
  rotateY(e) {
    return zt.makeRotationY(e), this.applyMatrix4(zt), this;
  }
  rotateZ(e) {
    return zt.makeRotationZ(e), this.applyMatrix4(zt), this;
  }
  translate(e, t, n) {
    return zt.makeTranslation(e, t, n), this.applyMatrix4(zt), this;
  }
  scale(e, t, n) {
    return zt.makeScale(e, t, n), this.applyMatrix4(zt), this;
  }
  lookAt(e) {
    return Yr.lookAt(e), Yr.updateMatrix(), this.applyMatrix4(Yr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ei).negate(), this.translate(Ei.x, Ei.y, Ei.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new tn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Wt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          kt.setFromBufferAttribute(r), this.morphTargetsRelative ? (_t.addVectors(this.boundingBox.min, kt.min), this.boundingBox.expandByPoint(_t), _t.addVectors(this.boundingBox.max, kt.max), this.boundingBox.expandByPoint(_t)) : (this.boundingBox.expandByPoint(kt.min), this.boundingBox.expandByPoint(kt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new on());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (kt.setFromBufferAttribute(e), t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          ts.setFromBufferAttribute(o), this.morphTargetsRelative ? (_t.addVectors(kt.min, ts.min), kt.expandByPoint(_t), _t.addVectors(kt.max, ts.max), kt.expandByPoint(_t)) : (kt.expandByPoint(ts.min), kt.expandByPoint(ts.max));
        }
      kt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        _t.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(_t));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], c = this.morphTargetsRelative;
          for (let l = 0, A = o.count; l < A; l++)
            _t.fromBufferAttribute(o, l), c && (Ei.fromBufferAttribute(e, l), _t.add(Ei)), i = Math.max(i, n.distanceToSquared(_t));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, r = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ft(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], A = [];
    for (let _ = 0; _ < o; _++)
      l[_] = new R(), A[_] = new R();
    const h = new R(), d = new R(), p = new R(), g = new ye(), E = new ye(), f = new ye(), u = new R(), x = new R();
    function m(_, M, K) {
      h.fromArray(i, _ * 3), d.fromArray(i, M * 3), p.fromArray(i, K * 3), g.fromArray(a, _ * 2), E.fromArray(a, M * 2), f.fromArray(a, K * 2), d.sub(h), p.sub(h), E.sub(g), f.sub(g);
      const ie = 1 / (E.x * f.y - f.x * E.y);
      isFinite(ie) && (u.copy(d).multiplyScalar(f.y).addScaledVector(p, -E.y).multiplyScalar(ie), x.copy(p).multiplyScalar(E.x).addScaledVector(d, -f.x).multiplyScalar(ie), l[_].add(u), l[M].add(u), l[K].add(u), A[_].add(x), A[M].add(x), A[K].add(x));
    }
    let I = this.groups;
    I.length === 0 && (I = [{
      start: 0,
      count: n.length
    }]);
    for (let _ = 0, M = I.length; _ < M; ++_) {
      const K = I[_], ie = K.start, D = K.count;
      for (let L = ie, Q = ie + D; L < Q; L += 3)
        m(
          n[L + 0],
          n[L + 1],
          n[L + 2]
        );
    }
    const w = new R(), T = new R(), y = new R(), W = new R();
    function te(_) {
      y.fromArray(r, _ * 3), W.copy(y);
      const M = l[_];
      w.copy(M), w.sub(y.multiplyScalar(y.dot(M))).normalize(), T.crossVectors(W, M);
      const ie = T.dot(A[_]) < 0 ? -1 : 1;
      c[_ * 4] = w.x, c[_ * 4 + 1] = w.y, c[_ * 4 + 2] = w.z, c[_ * 4 + 3] = ie;
    }
    for (let _ = 0, M = I.length; _ < M; ++_) {
      const K = I[_], ie = K.start, D = K.count;
      for (let L = ie, Q = ie + D; L < Q; L += 3)
        te(n[L + 0]), te(n[L + 1]), te(n[L + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Ft(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new R(), r = new R(), a = new R(), o = new R(), c = new R(), l = new R(), A = new R(), h = new R();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const g = e.getX(d + 0), E = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, E), a.fromBufferAttribute(t, f), A.subVectors(a, r), h.subVectors(i, r), A.cross(h), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, E), l.fromBufferAttribute(n, f), o.add(A), c.add(A), l.add(A), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(E, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), A.subVectors(a, r), h.subVectors(i, r), A.cross(h), n.setXYZ(d + 0, A.x, A.y, A.z), n.setXYZ(d + 1, A.x, A.y, A.z), n.setXYZ(d + 2, A.x, A.y, A.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      _t.fromBufferAttribute(e, t), _t.normalize(), e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, A = o.itemSize, h = o.normalized, d = new l.constructor(c.length * A);
      let p = 0, g = 0;
      for (let E = 0, f = c.length; E < f; E++) {
        o.isInterleavedBufferAttribute ? p = c[E] * o.data.stride + o.offset : p = c[E] * A;
        for (let u = 0; u < A; u++)
          d[g++] = l[p++];
      }
      return new Ft(d, A, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new qt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let A = 0, h = l.length; A < h; A++) {
        const d = l[A], p = e(d, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], A = [];
      for (let h = 0, d = l.length; h < d; h++) {
        const p = l[h];
        A.push(p.toJSON(e.data));
      }
      A.length > 0 && (i[c] = A, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const A = i[l];
      this.setAttribute(l, A.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const A = [], h = r[l];
      for (let d = 0, p = h.length; d < p; d++)
        A.push(h[d].clone(t));
      this.morphAttributes[l] = A;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, A = a.length; l < A; l++) {
      const h = a[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Jo = /* @__PURE__ */ new Re(), Hn = /* @__PURE__ */ new Es(), Ds = /* @__PURE__ */ new on(), Zo = /* @__PURE__ */ new R(), _i = /* @__PURE__ */ new R(), bi = /* @__PURE__ */ new R(), xi = /* @__PURE__ */ new R(), Xr = /* @__PURE__ */ new R(), Ls = /* @__PURE__ */ new R(), Ps = /* @__PURE__ */ new ye(), Fs = /* @__PURE__ */ new ye(), Us = /* @__PURE__ */ new ye(), $o = /* @__PURE__ */ new R(), ec = /* @__PURE__ */ new R(), tc = /* @__PURE__ */ new R(), Ns = /* @__PURE__ */ new R(), Qs = /* @__PURE__ */ new R();
class Lt extends ct {
  constructor(e = new qt(), t = new Xn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Ls.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const A = o[c], h = r[c];
        A !== 0 && (Xr.fromBufferAttribute(h, e), a ? Ls.addScaledVector(Xr, A) : Ls.addScaledVector(Xr.sub(t), A));
      }
      t.add(Ls);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ds.copy(n.boundingSphere), Ds.applyMatrix4(r), Hn.copy(e.ray).recast(e.near), !(Ds.containsPoint(Hn.origin) === !1 && (Hn.intersectSphere(Ds, Zo) === null || Hn.origin.distanceToSquared(Zo) > (e.far - e.near) ** 2)) && (Jo.copy(r).invert(), Hn.copy(e.ray).applyMatrix4(Jo), !(n.boundingBox !== null && Hn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Hn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, A = r.attributes.uv1, h = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, E = d.length; g < E; g++) {
          const f = d[g], u = a[f.materialIndex], x = Math.max(f.start, p.start), m = Math.min(o.count, Math.min(f.start + f.count, p.start + p.count));
          for (let I = x, w = m; I < w; I += 3) {
            const T = o.getX(I), y = o.getX(I + 1), W = o.getX(I + 2);
            i = Os(this, u, e, n, l, A, h, T, y, W), i && (i.faceIndex = Math.floor(I / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), E = Math.min(o.count, p.start + p.count);
        for (let f = g, u = E; f < u; f += 3) {
          const x = o.getX(f), m = o.getX(f + 1), I = o.getX(f + 2);
          i = Os(this, a, e, n, l, A, h, x, m, I), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, E = d.length; g < E; g++) {
          const f = d[g], u = a[f.materialIndex], x = Math.max(f.start, p.start), m = Math.min(c.count, Math.min(f.start + f.count, p.start + p.count));
          for (let I = x, w = m; I < w; I += 3) {
            const T = I, y = I + 1, W = I + 2;
            i = Os(this, u, e, n, l, A, h, T, y, W), i && (i.faceIndex = Math.floor(I / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), E = Math.min(c.count, p.start + p.count);
        for (let f = g, u = E; f < u; f += 3) {
          const x = f, m = f + 1, I = f + 2;
          i = Os(this, a, e, n, l, A, h, x, m, I), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
  }
}
function cd(s, e, t, n, i, r, a, o) {
  let c;
  if (e.side === Pt ? c = n.intersectTriangle(a, r, i, !0, o) : c = n.intersectTriangle(i, r, a, e.side === xn, o), c === null) return null;
  Qs.copy(o), Qs.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(Qs);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Qs.clone(),
    object: s
  };
}
function Os(s, e, t, n, i, r, a, o, c, l) {
  s.getVertexPosition(o, _i), s.getVertexPosition(c, bi), s.getVertexPosition(l, xi);
  const A = cd(s, e, t, n, _i, bi, xi, Ns);
  if (A) {
    i && (Ps.fromBufferAttribute(i, o), Fs.fromBufferAttribute(i, c), Us.fromBufferAttribute(i, l), A.uv = Zt.getInterpolation(Ns, _i, bi, xi, Ps, Fs, Us, new ye())), r && (Ps.fromBufferAttribute(r, o), Fs.fromBufferAttribute(r, c), Us.fromBufferAttribute(r, l), A.uv1 = Zt.getInterpolation(Ns, _i, bi, xi, Ps, Fs, Us, new ye()), A.uv2 = A.uv1), a && ($o.fromBufferAttribute(a, o), ec.fromBufferAttribute(a, c), tc.fromBufferAttribute(a, l), A.normal = Zt.getInterpolation(Ns, _i, bi, xi, $o, ec, tc, new R()), A.normal.dot(n.direction) > 0 && A.normal.multiplyScalar(-1));
    const h = {
      a: o,
      b: c,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    Zt.getNormal(_i, bi, xi, h.normal), A.face = h;
  }
  return A;
}
class Wi extends qt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], A = [], h = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new tn(l, 3)), this.setAttribute("normal", new tn(A, 3)), this.setAttribute("uv", new tn(h, 2));
    function g(E, f, u, x, m, I, w, T, y, W, te) {
      const _ = I / y, M = w / W, K = I / 2, ie = w / 2, D = T / 2, L = y + 1, Q = W + 1;
      let q = 0, N = 0;
      const H = new R();
      for (let J = 0; J < Q; J++) {
        const Z = J * M - ie;
        for (let ue = 0; ue < L; ue++) {
          const Ce = ue * _ - K;
          H[E] = Ce * x, H[f] = Z * m, H[u] = D, l.push(H.x, H.y, H.z), H[E] = 0, H[f] = 0, H[u] = T > 0 ? 1 : -1, A.push(H.x, H.y, H.z), h.push(ue / y), h.push(1 - J / W), q += 1;
        }
      }
      for (let J = 0; J < W; J++)
        for (let Z = 0; Z < y; Z++) {
          const ue = d + Z + L * J, Ce = d + Z + L * (J + 1), z = d + (Z + 1) + L * (J + 1), Y = d + (Z + 1) + L * J;
          c.push(ue, Ce, Y), c.push(Ce, z, Y), N += 6;
        }
      o.addGroup(p, N, te), p += N, d += q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Wi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Hi(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Rt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Hi(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function ld(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function Ol(s) {
  return s.getRenderTarget() === null ? s.outputColorSpace : et.workingColorSpace;
}
const kl = { clone: Hi, merge: Rt };
var Ad = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, hd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Cn extends en {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ad, this.fragmentShader = hd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Hi(e.uniforms), this.uniformsGroups = ld(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Gl extends ct {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Re(), this.projectionMatrix = new Re(), this.projectionMatrixInverse = new Re(), this.coordinateSystem = En;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = /* @__PURE__ */ new R(), nc = /* @__PURE__ */ new ye(), ic = /* @__PURE__ */ new ye();
class Dt extends Gl {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Gi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(As * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Gi * 2 * Math.atan(
      Math.tan(As * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    wn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(wn.x, wn.y).multiplyScalar(-e / wn.z), wn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(wn.x, wn.y).multiplyScalar(-e / wn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, nc, ic), t.subVectors(ic, nc);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(As * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ci = -90, Ii = 1;
class dd extends ct {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Dt(Ci, Ii, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Dt(Ci, Ii, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Dt(Ci, Ii, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Dt(Ci, Ii, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Dt(Ci, Ii, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Dt(Ci, Ii, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === En)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === dr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, c, l, A] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const E = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = E, e.setRenderTarget(n, 5, i), e.render(t, A), e.setRenderTarget(h, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Hl extends ut {
  constructor(e, t, n, i, r, a, o, c, l, A) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ei, super(e, t, n, i, r, a, o, c, l, A), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ud extends ni {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && ($n("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Zn ? ot : Nt), this.texture = new Hl(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : bt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Wi(5, 5, 5), r = new Cn({
      name: "CubemapFromEquirect",
      uniforms: Hi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Pt,
      blending: Un
    });
    r.uniforms.tEquirect.value = t;
    const a = new Lt(i, r), o = t.minFilter;
    return t.minFilter === rn && (t.minFilter = bt), new dd(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Kr = /* @__PURE__ */ new R(), fd = /* @__PURE__ */ new R(), pd = /* @__PURE__ */ new Ye();
class Dn {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Kr.subVectors(n, t).cross(fd.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Kr), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || pd.getNormalMatrix(e), i = this.coplanarPoint(Kr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const zn = /* @__PURE__ */ new on(), ks = /* @__PURE__ */ new R();
class qa {
  constructor(e = new Dn(), t = new Dn(), n = new Dn(), i = new Dn(), r = new Dn(), a = new Dn()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = En) {
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], c = i[3], l = i[4], A = i[5], h = i[6], d = i[7], p = i[8], g = i[9], E = i[10], f = i[11], u = i[12], x = i[13], m = i[14], I = i[15];
    if (n[0].setComponents(c - r, d - l, f - p, I - u).normalize(), n[1].setComponents(c + r, d + l, f + p, I + u).normalize(), n[2].setComponents(c + a, d + A, f + g, I + x).normalize(), n[3].setComponents(c - a, d - A, f - g, I - x).normalize(), n[4].setComponents(c - o, d - h, f - E, I - m).normalize(), t === En)
      n[5].setComponents(c + o, d + h, f + E, I + m).normalize();
    else if (t === dr)
      n[5].setComponents(o, h, E, m).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(zn);
  }
  intersectsSprite(e) {
    return zn.center.set(0, 0, 0), zn.radius = 0.7071067811865476, zn.applyMatrix4(e.matrixWorld), this.intersectsSphere(zn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (ks.x = i.normal.x > 0 ? e.max.x : e.min.x, ks.y = i.normal.y > 0 ? e.max.y : e.min.y, ks.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(ks) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function zl() {
  let s = null, e = !1, t = null, n = null;
  function i(r, a) {
    t(r, a), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function gd(s, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, A) {
    const h = l.array, d = l.usage, p = h.byteLength, g = s.createBuffer();
    s.bindBuffer(A, g), s.bufferData(A, h, d), l.onUploadCallback();
    let E;
    if (h instanceof Float32Array)
      E = s.FLOAT;
    else if (h instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          E = s.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        E = s.UNSIGNED_SHORT;
    else if (h instanceof Int16Array)
      E = s.SHORT;
    else if (h instanceof Uint32Array)
      E = s.UNSIGNED_INT;
    else if (h instanceof Int32Array)
      E = s.INT;
    else if (h instanceof Int8Array)
      E = s.BYTE;
    else if (h instanceof Uint8Array)
      E = s.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray)
      E = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: g,
      type: E,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: l.version,
      size: p
    };
  }
  function r(l, A, h) {
    const d = A.array, p = A._updateRange, g = A.updateRanges;
    if (s.bindBuffer(h, l), p.count === -1 && g.length === 0 && s.bufferSubData(h, 0, d), g.length !== 0) {
      for (let E = 0, f = g.length; E < f; E++) {
        const u = g[E];
        t ? s.bufferSubData(
          h,
          u.start * d.BYTES_PER_ELEMENT,
          d,
          u.start,
          u.count
        ) : s.bufferSubData(
          h,
          u.start * d.BYTES_PER_ELEMENT,
          d.subarray(u.start, u.start + u.count)
        );
      }
      A.clearUpdateRanges();
    }
    p.count !== -1 && (t ? s.bufferSubData(
      h,
      p.offset * d.BYTES_PER_ELEMENT,
      d,
      p.offset,
      p.count
    ) : s.bufferSubData(
      h,
      p.offset * d.BYTES_PER_ELEMENT,
      d.subarray(p.offset, p.offset + p.count)
    ), p.count = -1), A.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const A = n.get(l);
    A && (s.deleteBuffer(A.buffer), n.delete(l));
  }
  function c(l, A) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    if (h === void 0)
      n.set(l, i(l, A));
    else if (h.version < l.version) {
      if (h.size !== l.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      r(h.buffer, l, A), h.version = l.version;
    }
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class br extends qt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, A = c + 1, h = e / o, d = t / c, p = [], g = [], E = [], f = [];
    for (let u = 0; u < A; u++) {
      const x = u * d - a;
      for (let m = 0; m < l; m++) {
        const I = m * h - r;
        g.push(I, -x, 0), E.push(0, 0, 1), f.push(m / o), f.push(1 - u / c);
      }
    }
    for (let u = 0; u < c; u++)
      for (let x = 0; x < o; x++) {
        const m = x + l * u, I = x + l * (u + 1), w = x + 1 + l * (u + 1), T = x + 1 + l * u;
        p.push(m, I, T), p.push(I, w, T);
      }
    this.setIndex(p), this.setAttribute("position", new tn(g, 3)), this.setAttribute("normal", new tn(E, 3)), this.setAttribute("uv", new tn(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new br(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var md = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Ed = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, _d = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, bd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Cd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Id = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Sd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, vd = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Md = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, yd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Bd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Td = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, wd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Rd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Dd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ld = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Pd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Fd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ud = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Nd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Qd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Od = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, kd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Gd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Hd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, zd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Vd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Wd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, qd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, jd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Yd = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Xd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Kd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Jd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Zd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, $d = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, eu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, tu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, nu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, iu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, su = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, ru = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, au = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ou = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, cu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, lu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Au = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, hu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, du = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, uu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, fu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, pu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, gu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, mu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Eu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, _u = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, bu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, xu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Cu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Iu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Su = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Mu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, yu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Bu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Tu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, wu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Ru = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Du = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Lu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Pu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Fu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Uu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Nu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Qu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ou = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, ku = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Gu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Hu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, zu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Vu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Wu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, qu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, ju = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Yu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Xu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ku = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ju = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Zu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, $u = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ef = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, tf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, nf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, sf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, rf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, af = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, of = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, cf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, lf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Af = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, hf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, df = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, uf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ff = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, pf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, gf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const mf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ef = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, _f = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, bf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Cf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, If = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Sf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, vf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Mf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, yf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Bf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Tf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, wf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Rf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Df = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ff = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Uf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Qf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Of = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Hf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Vf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, qf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, jf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Yf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Xf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Kf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, We = {
  alphahash_fragment: md,
  alphahash_pars_fragment: Ed,
  alphamap_fragment: _d,
  alphamap_pars_fragment: bd,
  alphatest_fragment: xd,
  alphatest_pars_fragment: Cd,
  aomap_fragment: Id,
  aomap_pars_fragment: Sd,
  batching_pars_vertex: vd,
  batching_vertex: Md,
  begin_vertex: yd,
  beginnormal_vertex: Bd,
  bsdfs: Td,
  iridescence_fragment: wd,
  bumpmap_pars_fragment: Rd,
  clipping_planes_fragment: Dd,
  clipping_planes_pars_fragment: Ld,
  clipping_planes_pars_vertex: Pd,
  clipping_planes_vertex: Fd,
  color_fragment: Ud,
  color_pars_fragment: Nd,
  color_pars_vertex: Qd,
  color_vertex: Od,
  common: kd,
  cube_uv_reflection_fragment: Gd,
  defaultnormal_vertex: Hd,
  displacementmap_pars_vertex: zd,
  displacementmap_vertex: Vd,
  emissivemap_fragment: Wd,
  emissivemap_pars_fragment: qd,
  colorspace_fragment: jd,
  colorspace_pars_fragment: Yd,
  envmap_fragment: Xd,
  envmap_common_pars_fragment: Kd,
  envmap_pars_fragment: Jd,
  envmap_pars_vertex: Zd,
  envmap_physical_pars_fragment: Au,
  envmap_vertex: $d,
  fog_vertex: eu,
  fog_pars_vertex: tu,
  fog_fragment: nu,
  fog_pars_fragment: iu,
  gradientmap_pars_fragment: su,
  lightmap_fragment: ru,
  lightmap_pars_fragment: au,
  lights_lambert_fragment: ou,
  lights_lambert_pars_fragment: cu,
  lights_pars_begin: lu,
  lights_toon_fragment: hu,
  lights_toon_pars_fragment: du,
  lights_phong_fragment: uu,
  lights_phong_pars_fragment: fu,
  lights_physical_fragment: pu,
  lights_physical_pars_fragment: gu,
  lights_fragment_begin: mu,
  lights_fragment_maps: Eu,
  lights_fragment_end: _u,
  logdepthbuf_fragment: bu,
  logdepthbuf_pars_fragment: xu,
  logdepthbuf_pars_vertex: Cu,
  logdepthbuf_vertex: Iu,
  map_fragment: Su,
  map_pars_fragment: vu,
  map_particle_fragment: Mu,
  map_particle_pars_fragment: yu,
  metalnessmap_fragment: Bu,
  metalnessmap_pars_fragment: Tu,
  morphcolor_vertex: wu,
  morphnormal_vertex: Ru,
  morphtarget_pars_vertex: Du,
  morphtarget_vertex: Lu,
  normal_fragment_begin: Pu,
  normal_fragment_maps: Fu,
  normal_pars_fragment: Uu,
  normal_pars_vertex: Nu,
  normal_vertex: Qu,
  normalmap_pars_fragment: Ou,
  clearcoat_normal_fragment_begin: ku,
  clearcoat_normal_fragment_maps: Gu,
  clearcoat_pars_fragment: Hu,
  iridescence_pars_fragment: zu,
  opaque_fragment: Vu,
  packing: Wu,
  premultiplied_alpha_fragment: qu,
  project_vertex: ju,
  dithering_fragment: Yu,
  dithering_pars_fragment: Xu,
  roughnessmap_fragment: Ku,
  roughnessmap_pars_fragment: Ju,
  shadowmap_pars_fragment: Zu,
  shadowmap_pars_vertex: $u,
  shadowmap_vertex: ef,
  shadowmask_pars_fragment: tf,
  skinbase_vertex: nf,
  skinning_pars_vertex: sf,
  skinning_vertex: rf,
  skinnormal_vertex: af,
  specularmap_fragment: of,
  specularmap_pars_fragment: cf,
  tonemapping_fragment: lf,
  tonemapping_pars_fragment: Af,
  transmission_fragment: hf,
  transmission_pars_fragment: df,
  uv_pars_fragment: uf,
  uv_pars_vertex: ff,
  uv_vertex: pf,
  worldpos_vertex: gf,
  background_vert: mf,
  background_frag: Ef,
  backgroundCube_vert: _f,
  backgroundCube_frag: bf,
  cube_vert: xf,
  cube_frag: Cf,
  depth_vert: If,
  depth_frag: Sf,
  distanceRGBA_vert: vf,
  distanceRGBA_frag: Mf,
  equirect_vert: yf,
  equirect_frag: Bf,
  linedashed_vert: Tf,
  linedashed_frag: wf,
  meshbasic_vert: Rf,
  meshbasic_frag: Df,
  meshlambert_vert: Lf,
  meshlambert_frag: Pf,
  meshmatcap_vert: Ff,
  meshmatcap_frag: Uf,
  meshnormal_vert: Nf,
  meshnormal_frag: Qf,
  meshphong_vert: Of,
  meshphong_frag: kf,
  meshphysical_vert: Gf,
  meshphysical_frag: Hf,
  meshtoon_vert: zf,
  meshtoon_frag: Vf,
  points_vert: Wf,
  points_frag: qf,
  shadow_vert: jf,
  shadow_frag: Yf,
  sprite_vert: Xf,
  sprite_frag: Kf
}, he = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ne(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ye() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ye() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ye() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ye() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ye() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ye() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ye() },
    normalScale: { value: /* @__PURE__ */ new ye(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ye() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ye() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ye() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ye() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ne(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ne(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ye() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ye() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ne(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ye(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ye() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ye() },
    alphaTest: { value: 0 }
  }
}, sn = {
  basic: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.fog
    ]),
    vertexShader: We.meshbasic_vert,
    fragmentShader: We.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) }
      }
    ]),
    vertexShader: We.meshlambert_vert,
    fragmentShader: We.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) },
        specular: { value: /* @__PURE__ */ new Ne(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: We.meshphong_vert,
    fragmentShader: We.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.roughnessmap,
      he.metalnessmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: We.meshphysical_vert,
    fragmentShader: We.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.gradientmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) }
      }
    ]),
    vertexShader: We.meshtoon_vert,
    fragmentShader: We.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: We.meshmatcap_vert,
    fragmentShader: We.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Rt([
      he.points,
      he.fog
    ]),
    vertexShader: We.points_vert,
    fragmentShader: We.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: We.linedashed_vert,
    fragmentShader: We.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.displacementmap
    ]),
    vertexShader: We.depth_vert,
    fragmentShader: We.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.meshnormal_vert,
    fragmentShader: We.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Rt([
      he.sprite,
      he.fog
    ]),
    vertexShader: We.sprite_vert,
    fragmentShader: We.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ye() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.background_vert,
    fragmentShader: We.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.backgroundCube_vert,
    fragmentShader: We.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: We.cube_vert,
    fragmentShader: We.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: We.equirect_vert,
    fragmentShader: We.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Rt([
      he.common,
      he.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: We.distanceRGBA_vert,
    fragmentShader: We.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Rt([
      he.lights,
      he.fog,
      {
        color: { value: /* @__PURE__ */ new Ne(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.shadow_vert,
    fragmentShader: We.shadow_frag
  }
};
sn.physical = {
  uniforms: /* @__PURE__ */ Rt([
    sn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ye() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ye() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ye(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ye() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ye() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ye() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ne(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ye() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ye() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ye() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ye() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ye() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ne(0) },
      specularColor: { value: /* @__PURE__ */ new Ne(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ye() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ye() },
      anisotropyVector: { value: /* @__PURE__ */ new ye() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ye() }
    }
  ]),
  vertexShader: We.meshphysical_vert,
  fragmentShader: We.meshphysical_frag
};
const Gs = { r: 0, b: 0, g: 0 };
function Jf(s, e, t, n, i, r, a) {
  const o = new Ne(0);
  let c = r === !0 ? 0 : 1, l, A, h = null, d = 0, p = null;
  function g(f, u) {
    let x = !1, m = u.isScene === !0 ? u.background : null;
    m && m.isTexture && (m = (u.backgroundBlurriness > 0 ? t : e).get(m)), m === null ? E(o, c) : m && m.isColor && (E(m, 1), x = !0);
    const I = s.xr.getEnvironmentBlendMode();
    I === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : I === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || x) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), m && (m.isCubeTexture || m.mapping === mr) ? (A === void 0 && (A = new Lt(
      new Wi(1, 1, 1),
      new Cn({
        name: "BackgroundCubeMaterial",
        uniforms: Hi(sn.backgroundCube.uniforms),
        vertexShader: sn.backgroundCube.vertexShader,
        fragmentShader: sn.backgroundCube.fragmentShader,
        side: Pt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), A.geometry.deleteAttribute("normal"), A.geometry.deleteAttribute("uv"), A.onBeforeRender = function(w, T, y) {
      this.matrixWorld.copyPosition(y.matrixWorld);
    }, Object.defineProperty(A.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(A)), A.material.uniforms.envMap.value = m, A.material.uniforms.flipEnvMap.value = m.isCubeTexture && m.isRenderTargetTexture === !1 ? -1 : 1, A.material.uniforms.backgroundBlurriness.value = u.backgroundBlurriness, A.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, A.material.toneMapped = et.getTransfer(m.colorSpace) !== at, (h !== m || d !== m.version || p !== s.toneMapping) && (A.material.needsUpdate = !0, h = m, d = m.version, p = s.toneMapping), A.layers.enableAll(), f.unshift(A, A.geometry, A.material, 0, 0, null)) : m && m.isTexture && (l === void 0 && (l = new Lt(
      new br(2, 2),
      new Cn({
        name: "BackgroundMaterial",
        uniforms: Hi(sn.background.uniforms),
        vertexShader: sn.background.vertexShader,
        fragmentShader: sn.background.fragmentShader,
        side: xn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = m, l.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, l.material.toneMapped = et.getTransfer(m.colorSpace) !== at, m.matrixAutoUpdate === !0 && m.updateMatrix(), l.material.uniforms.uvTransform.value.copy(m.matrix), (h !== m || d !== m.version || p !== s.toneMapping) && (l.material.needsUpdate = !0, h = m, d = m.version, p = s.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function E(f, u) {
    f.getRGB(Gs, Ol(s)), n.buffers.color.setClear(Gs.r, Gs.g, Gs.b, u, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(f, u = 1) {
      o.set(f), c = u, E(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(f) {
      c = f, E(o, c);
    },
    render: g
  };
}
function Zf(s, e, t, n) {
  const i = s.getParameter(s.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || r !== null, o = {}, c = f(null);
  let l = c, A = !1;
  function h(D, L, Q, q, N) {
    let H = !1;
    if (a) {
      const J = E(q, Q, L);
      l !== J && (l = J, p(l.object)), H = u(D, q, Q, N), H && x(D, q, Q, N);
    } else {
      const J = L.wireframe === !0;
      (l.geometry !== q.id || l.program !== Q.id || l.wireframe !== J) && (l.geometry = q.id, l.program = Q.id, l.wireframe = J, H = !0);
    }
    N !== null && t.update(N, s.ELEMENT_ARRAY_BUFFER), (H || A) && (A = !1, W(D, L, Q, q), N !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(N).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function p(D) {
    return n.isWebGL2 ? s.bindVertexArray(D) : r.bindVertexArrayOES(D);
  }
  function g(D) {
    return n.isWebGL2 ? s.deleteVertexArray(D) : r.deleteVertexArrayOES(D);
  }
  function E(D, L, Q) {
    const q = Q.wireframe === !0;
    let N = o[D.id];
    N === void 0 && (N = {}, o[D.id] = N);
    let H = N[L.id];
    H === void 0 && (H = {}, N[L.id] = H);
    let J = H[q];
    return J === void 0 && (J = f(d()), H[q] = J), J;
  }
  function f(D) {
    const L = [], Q = [], q = [];
    for (let N = 0; N < i; N++)
      L[N] = 0, Q[N] = 0, q[N] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: Q,
      attributeDivisors: q,
      object: D,
      attributes: {},
      index: null
    };
  }
  function u(D, L, Q, q) {
    const N = l.attributes, H = L.attributes;
    let J = 0;
    const Z = Q.getAttributes();
    for (const ue in Z)
      if (Z[ue].location >= 0) {
        const z = N[ue];
        let Y = H[ue];
        if (Y === void 0 && (ue === "instanceMatrix" && D.instanceMatrix && (Y = D.instanceMatrix), ue === "instanceColor" && D.instanceColor && (Y = D.instanceColor)), z === void 0 || z.attribute !== Y || Y && z.data !== Y.data) return !0;
        J++;
      }
    return l.attributesNum !== J || l.index !== q;
  }
  function x(D, L, Q, q) {
    const N = {}, H = L.attributes;
    let J = 0;
    const Z = Q.getAttributes();
    for (const ue in Z)
      if (Z[ue].location >= 0) {
        let z = H[ue];
        z === void 0 && (ue === "instanceMatrix" && D.instanceMatrix && (z = D.instanceMatrix), ue === "instanceColor" && D.instanceColor && (z = D.instanceColor));
        const Y = {};
        Y.attribute = z, z && z.data && (Y.data = z.data), N[ue] = Y, J++;
      }
    l.attributes = N, l.attributesNum = J, l.index = q;
  }
  function m() {
    const D = l.newAttributes;
    for (let L = 0, Q = D.length; L < Q; L++)
      D[L] = 0;
  }
  function I(D) {
    w(D, 0);
  }
  function w(D, L) {
    const Q = l.newAttributes, q = l.enabledAttributes, N = l.attributeDivisors;
    Q[D] = 1, q[D] === 0 && (s.enableVertexAttribArray(D), q[D] = 1), N[D] !== L && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, L), N[D] = L);
  }
  function T() {
    const D = l.newAttributes, L = l.enabledAttributes;
    for (let Q = 0, q = L.length; Q < q; Q++)
      L[Q] !== D[Q] && (s.disableVertexAttribArray(Q), L[Q] = 0);
  }
  function y(D, L, Q, q, N, H, J) {
    J === !0 ? s.vertexAttribIPointer(D, L, Q, N, H) : s.vertexAttribPointer(D, L, Q, q, N, H);
  }
  function W(D, L, Q, q) {
    if (n.isWebGL2 === !1 && (D.isInstancedMesh || q.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    m();
    const N = q.attributes, H = Q.getAttributes(), J = L.defaultAttributeValues;
    for (const Z in H) {
      const ue = H[Z];
      if (ue.location >= 0) {
        let Ce = N[Z];
        if (Ce === void 0 && (Z === "instanceMatrix" && D.instanceMatrix && (Ce = D.instanceMatrix), Z === "instanceColor" && D.instanceColor && (Ce = D.instanceColor)), Ce !== void 0) {
          const z = Ce.normalized, Y = Ce.itemSize, le = t.get(Ce);
          if (le === void 0) continue;
          const de = le.buffer, ve = le.type, ge = le.bytesPerElement, Oe = n.isWebGL2 === !0 && (ve === s.INT || ve === s.UNSIGNED_INT || Ce.gpuType === bl);
          if (Ce.isInterleavedBufferAttribute) {
            const Ie = Ce.data, P = Ie.stride, tt = Ce.offset;
            if (Ie.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < ue.locationSize; _e++)
                w(ue.location + _e, Ie.meshPerAttribute);
              D.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = Ie.meshPerAttribute * Ie.count);
            } else
              for (let _e = 0; _e < ue.locationSize; _e++)
                I(ue.location + _e);
            s.bindBuffer(s.ARRAY_BUFFER, de);
            for (let _e = 0; _e < ue.locationSize; _e++)
              y(
                ue.location + _e,
                Y / ue.locationSize,
                ve,
                z,
                P * ge,
                (tt + Y / ue.locationSize * _e) * ge,
                Oe
              );
          } else {
            if (Ce.isInstancedBufferAttribute) {
              for (let Ie = 0; Ie < ue.locationSize; Ie++)
                w(ue.location + Ie, Ce.meshPerAttribute);
              D.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = Ce.meshPerAttribute * Ce.count);
            } else
              for (let Ie = 0; Ie < ue.locationSize; Ie++)
                I(ue.location + Ie);
            s.bindBuffer(s.ARRAY_BUFFER, de);
            for (let Ie = 0; Ie < ue.locationSize; Ie++)
              y(
                ue.location + Ie,
                Y / ue.locationSize,
                ve,
                z,
                Y * ge,
                Y / ue.locationSize * Ie * ge,
                Oe
              );
          }
        } else if (J !== void 0) {
          const z = J[Z];
          if (z !== void 0)
            switch (z.length) {
              case 2:
                s.vertexAttrib2fv(ue.location, z);
                break;
              case 3:
                s.vertexAttrib3fv(ue.location, z);
                break;
              case 4:
                s.vertexAttrib4fv(ue.location, z);
                break;
              default:
                s.vertexAttrib1fv(ue.location, z);
            }
        }
      }
    }
    T();
  }
  function te() {
    K();
    for (const D in o) {
      const L = o[D];
      for (const Q in L) {
        const q = L[Q];
        for (const N in q)
          g(q[N].object), delete q[N];
        delete L[Q];
      }
      delete o[D];
    }
  }
  function _(D) {
    if (o[D.id] === void 0) return;
    const L = o[D.id];
    for (const Q in L) {
      const q = L[Q];
      for (const N in q)
        g(q[N].object), delete q[N];
      delete L[Q];
    }
    delete o[D.id];
  }
  function M(D) {
    for (const L in o) {
      const Q = o[L];
      if (Q[D.id] === void 0) continue;
      const q = Q[D.id];
      for (const N in q)
        g(q[N].object), delete q[N];
      delete Q[D.id];
    }
  }
  function K() {
    ie(), A = !0, l !== c && (l = c, p(l.object));
  }
  function ie() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: h,
    reset: K,
    resetDefaultState: ie,
    dispose: te,
    releaseStatesOfGeometry: _,
    releaseStatesOfProgram: M,
    initAttributes: m,
    enableAttribute: I,
    disableUnusedAttributes: T
  };
}
function $f(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(A) {
    r = A;
  }
  function o(A, h) {
    s.drawArrays(r, A, h), t.update(h, r, 1);
  }
  function c(A, h, d) {
    if (d === 0) return;
    let p, g;
    if (i)
      p = s, g = "drawArraysInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", p === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[g](r, A, h, d), t.update(h, r, d);
  }
  function l(A, h, d) {
    if (d === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < d; g++)
        this.render(A[g], h[g]);
    else {
      p.multiDrawArraysWEBGL(r, A, 0, h, 0, d);
      let g = 0;
      for (let E = 0; E < d; E++)
        g += h[E];
      t.update(g, r, 1);
    }
  }
  this.setMode = a, this.render = o, this.renderInstances = c, this.renderMultiDraw = l;
}
function ep(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const y = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(y) {
    if (y === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      y = "mediump";
    }
    return y === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && s.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = r(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), A = t.logarithmicDepthBuffer === !0, h = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = s.getParameter(s.MAX_TEXTURE_SIZE), g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), E = s.getParameter(s.MAX_VERTEX_ATTRIBS), f = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), u = s.getParameter(s.MAX_VARYING_VECTORS), x = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), m = d > 0, I = a || e.has("OES_texture_float"), w = m && I, T = a ? s.getParameter(s.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: o,
    logarithmicDepthBuffer: A,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: E,
    maxVertexUniforms: f,
    maxVaryings: u,
    maxFragmentUniforms: x,
    vertexTextures: m,
    floatFragmentTextures: I,
    floatVertexTextures: w,
    maxSamples: T
  };
}
function tp(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const a = new Dn(), o = new Ye(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
    const p = h.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = h.length, p;
  }, this.beginShadows = function() {
    r = !0, A(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(h, d) {
    t = A(h, d, 0);
  }, this.setState = function(h, d, p) {
    const g = h.clippingPlanes, E = h.clipIntersection, f = h.clipShadows, u = s.get(h);
    if (!i || g === null || g.length === 0 || r && !f)
      r ? A(null) : l();
    else {
      const x = r ? 0 : n, m = x * 4;
      let I = u.clippingState || null;
      c.value = I, I = A(g, d, m, p);
      for (let w = 0; w !== m; ++w)
        I[w] = t[w];
      u.clippingState = I, this.numIntersection = E ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function A(h, d, p, g) {
    const E = h !== null ? h.length : 0;
    let f = null;
    if (E !== 0) {
      if (f = c.value, g !== !0 || f === null) {
        const u = p + E * 4, x = d.matrixWorldInverse;
        o.getNormalMatrix(x), (f === null || f.length < u) && (f = new Float32Array(u));
        for (let m = 0, I = p; m !== E; ++m, I += 4)
          a.copy(h[m]).applyMatrix4(x, o), a.normal.toArray(f, I), f[I + 3] = a.constant;
      }
      c.value = f, c.needsUpdate = !0;
    }
    return e.numPlanes = E, e.numIntersection = 0, f;
  }
}
function np(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ia ? a.mapping = ei : o === Sa && (a.mapping = Qi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ia || o === Sa)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new ud(c.height);
            return l.fromEquirectangularTexture(s, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class ja extends Gl {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, A = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= A * this.view.offsetY, c = o - A * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Li = 4, sc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Yn = 20, Jr = /* @__PURE__ */ new ja(), rc = /* @__PURE__ */ new Ne();
let Zr = null, $r = 0, ea = 0;
const qn = (1 + Math.sqrt(5)) / 2, Si = 1 / qn, ac = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, qn, Si),
  /* @__PURE__ */ new R(0, qn, -Si),
  /* @__PURE__ */ new R(Si, 0, qn),
  /* @__PURE__ */ new R(-Si, 0, qn),
  /* @__PURE__ */ new R(qn, Si, 0),
  /* @__PURE__ */ new R(-qn, Si, 0)
];
class Fa {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Zr = this._renderer.getRenderTarget(), $r = this._renderer.getActiveCubeFace(), ea = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = lc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = cc(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Zr, $r, ea), e.scissorTest = !1, Hs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ei || e.mapping === Qi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Zr = this._renderer.getRenderTarget(), $r = this._renderer.getActiveCubeFace(), ea = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: bt,
      minFilter: bt,
      generateMipmaps: !1,
      type: bn,
      format: Ct,
      colorSpace: pt,
      depthBuffer: !1
    }, i = oc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = oc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ip(r)), this._blurMaterial = sp(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Lt(this._lodPlanes[0], e);
    this._renderer.compile(t, Jr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Dt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], A = this._renderer, h = A.autoClear, d = A.toneMapping;
    A.getClearColor(rc), A.toneMapping = Nn, A.autoClear = !1;
    const p = new Xn({
      name: "PMREM.Background",
      side: Pt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Lt(new Wi(), p);
    let E = !1;
    const f = e.background;
    f ? f.isColor && (p.color.copy(f), e.background = null, E = !0) : (p.color.copy(rc), E = !0);
    for (let u = 0; u < 6; u++) {
      const x = u % 3;
      x === 0 ? (o.up.set(0, c[u], 0), o.lookAt(l[u], 0, 0)) : x === 1 ? (o.up.set(0, 0, c[u]), o.lookAt(0, l[u], 0)) : (o.up.set(0, c[u], 0), o.lookAt(0, 0, l[u]));
      const m = this._cubeSize;
      Hs(i, x * m, u > 2 ? m : 0, m, m), A.setRenderTarget(i), E && A.render(g, o), A.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), A.toneMapping = d, A.autoClear = h, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === ei || e.mapping === Qi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = lc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = cc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new Lt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Hs(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Jr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = ac[(i - 1) % ac.length];
      this._blur(e, i - 1, i, r, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const A = 3, h = new Lt(this._lodPlanes[i], l), d = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Yn - 1), E = r / g, f = isFinite(r) ? 1 + Math.floor(A * E) : Yn;
    f > Yn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Yn}`);
    const u = [];
    let x = 0;
    for (let y = 0; y < Yn; ++y) {
      const W = y / E, te = Math.exp(-W * W / 2);
      u.push(te), y === 0 ? x += te : y < f && (x += 2 * te);
    }
    for (let y = 0; y < u.length; y++)
      u[y] = u[y] / x;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = u, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: m } = this;
    d.dTheta.value = g, d.mipInt.value = m - n;
    const I = this._sizeLods[i], w = 3 * I * (i > m - Li ? i - m + Li : 0), T = 4 * (this._cubeSize - I);
    Hs(t, w, T, 3 * I, 2 * I), c.setRenderTarget(t), c.render(h, Jr);
  }
}
function ip(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Li + 1 + sc.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > s - Li ? c = sc[a - s + Li - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), A = -l, h = 1 + l, d = [A, A, h, A, h, h, A, A, h, h, A, h], p = 6, g = 6, E = 3, f = 2, u = 1, x = new Float32Array(E * g * p), m = new Float32Array(f * g * p), I = new Float32Array(u * g * p);
    for (let T = 0; T < p; T++) {
      const y = T % 3 * 2 / 3 - 1, W = T > 2 ? 0 : -1, te = [
        y,
        W,
        0,
        y + 2 / 3,
        W,
        0,
        y + 2 / 3,
        W + 1,
        0,
        y,
        W,
        0,
        y + 2 / 3,
        W + 1,
        0,
        y,
        W + 1,
        0
      ];
      x.set(te, E * g * T), m.set(d, f * g * T);
      const _ = [T, T, T, T, T, T];
      I.set(_, u * g * T);
    }
    const w = new qt();
    w.setAttribute("position", new Ft(x, E)), w.setAttribute("uv", new Ft(m, f)), w.setAttribute("faceIndex", new Ft(I, u)), e.push(w), i > Li && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function oc(s, e, t) {
  const n = new ni(s, e, t);
  return n.texture.mapping = mr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Hs(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function sp(s, e, t) {
  const n = new Float32Array(Yn), i = new R(0, 1, 0);
  return new Cn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Yn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Ya(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Un,
    depthTest: !1,
    depthWrite: !1
  });
}
function cc() {
  return new Cn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ya(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Un,
    depthTest: !1,
    depthWrite: !1
  });
}
function lc() {
  return new Cn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ya(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Un,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ya() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function rp(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Ia || c === Sa, A = c === ei || c === Qi;
      if (l || A)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return t === null && (t = new Fa(s)), h = l ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), e.set(o, h), h.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const h = o.image;
            if (l && h && h.height > 0 || A && h && i(h)) {
              t === null && (t = new Fa(s));
              const d = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", r), d.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let A = 0; A < l; A++)
      o[A] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function ap(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function op(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const E = d.morphAttributes[g];
      for (let f = 0, u = E.length; f < u; f++)
        e.remove(E[f]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(h) {
    const d = h.attributes;
    for (const g in d)
      e.update(d[g], s.ARRAY_BUFFER);
    const p = h.morphAttributes;
    for (const g in p) {
      const E = p[g];
      for (let f = 0, u = E.length; f < u; f++)
        e.update(E[f], s.ARRAY_BUFFER);
    }
  }
  function l(h) {
    const d = [], p = h.index, g = h.attributes.position;
    let E = 0;
    if (p !== null) {
      const x = p.array;
      E = p.version;
      for (let m = 0, I = x.length; m < I; m += 3) {
        const w = x[m + 0], T = x[m + 1], y = x[m + 2];
        d.push(w, T, T, y, y, w);
      }
    } else if (g !== void 0) {
      const x = g.array;
      E = g.version;
      for (let m = 0, I = x.length / 3 - 1; m < I; m += 3) {
        const w = m + 0, T = m + 1, y = m + 2;
        d.push(w, T, T, y, y, w);
      }
    } else
      return;
    const f = new (wl(d) ? Ql : Nl)(d, 1);
    f.version = E;
    const u = r.get(h);
    u && e.remove(u), r.set(h, f);
  }
  function A(h) {
    const d = r.get(h);
    if (d) {
      const p = h.index;
      p !== null && d.version < p.version && l(h);
    } else
      l(h);
    return r.get(h);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: A
  };
}
function cp(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(p) {
    r = p;
  }
  let o, c;
  function l(p) {
    o = p.type, c = p.bytesPerElement;
  }
  function A(p, g) {
    s.drawElements(r, g, o, p * c), t.update(g, r, 1);
  }
  function h(p, g, E) {
    if (E === 0) return;
    let f, u;
    if (i)
      f = s, u = "drawElementsInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", f === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[u](r, g, o, p * c, E), t.update(g, r, E);
  }
  function d(p, g, E) {
    if (E === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let u = 0; u < E; u++)
        this.render(p[u] / c, g[u]);
    else {
      f.multiDrawElementsWEBGL(r, g, 0, o, p, 0, E);
      let u = 0;
      for (let x = 0; x < E; x++)
        u += g[x];
      t.update(u, r, 1);
    }
  }
  this.setMode = a, this.setIndex = l, this.render = A, this.renderInstances = h, this.renderMultiDraw = d;
}
function lp(s) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Ap(s, e) {
  return s[0] - e[0];
}
function hp(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function dp(s, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), a = new st(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, A, h) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p = A.morphAttributes.position || A.morphAttributes.normal || A.morphAttributes.color, g = p !== void 0 ? p.length : 0;
      let E = r.get(A);
      if (E === void 0 || E.count !== g) {
        let D = function() {
          K.dispose(), r.delete(A), A.removeEventListener("dispose", D);
        };
        E !== void 0 && E.texture.dispose();
        const x = A.morphAttributes.position !== void 0, m = A.morphAttributes.normal !== void 0, I = A.morphAttributes.color !== void 0, w = A.morphAttributes.position || [], T = A.morphAttributes.normal || [], y = A.morphAttributes.color || [];
        let W = 0;
        x === !0 && (W = 1), m === !0 && (W = 2), I === !0 && (W = 3);
        let te = A.attributes.position.count * W, _ = 1;
        te > e.maxTextureSize && (_ = Math.ceil(te / e.maxTextureSize), te = e.maxTextureSize);
        const M = new Float32Array(te * _ * 4 * g), K = new Ll(M, te, _, g);
        K.type = Ut, K.needsUpdate = !0;
        const ie = W * 4;
        for (let L = 0; L < g; L++) {
          const Q = w[L], q = T[L], N = y[L], H = te * _ * 4 * L;
          for (let J = 0; J < Q.count; J++) {
            const Z = J * ie;
            x === !0 && (a.fromBufferAttribute(Q, J), M[H + Z + 0] = a.x, M[H + Z + 1] = a.y, M[H + Z + 2] = a.z, M[H + Z + 3] = 0), m === !0 && (a.fromBufferAttribute(q, J), M[H + Z + 4] = a.x, M[H + Z + 5] = a.y, M[H + Z + 6] = a.z, M[H + Z + 7] = 0), I === !0 && (a.fromBufferAttribute(N, J), M[H + Z + 8] = a.x, M[H + Z + 9] = a.y, M[H + Z + 10] = a.z, M[H + Z + 11] = N.itemSize === 4 ? a.w : 1);
          }
        }
        E = {
          count: g,
          texture: K,
          size: new ye(te, _)
        }, r.set(A, E), A.addEventListener("dispose", D);
      }
      let f = 0;
      for (let x = 0; x < d.length; x++)
        f += d[x];
      const u = A.morphTargetsRelative ? 1 : 1 - f;
      h.getUniforms().setValue(s, "morphTargetBaseInfluence", u), h.getUniforms().setValue(s, "morphTargetInfluences", d), h.getUniforms().setValue(s, "morphTargetsTexture", E.texture, t), h.getUniforms().setValue(s, "morphTargetsTextureSize", E.size);
    } else {
      const p = d === void 0 ? 0 : d.length;
      let g = n[A.id];
      if (g === void 0 || g.length !== p) {
        g = [];
        for (let m = 0; m < p; m++)
          g[m] = [m, 0];
        n[A.id] = g;
      }
      for (let m = 0; m < p; m++) {
        const I = g[m];
        I[0] = m, I[1] = d[m];
      }
      g.sort(hp);
      for (let m = 0; m < 8; m++)
        m < p && g[m][1] ? (o[m][0] = g[m][0], o[m][1] = g[m][1]) : (o[m][0] = Number.MAX_SAFE_INTEGER, o[m][1] = 0);
      o.sort(Ap);
      const E = A.morphAttributes.position, f = A.morphAttributes.normal;
      let u = 0;
      for (let m = 0; m < 8; m++) {
        const I = o[m], w = I[0], T = I[1];
        w !== Number.MAX_SAFE_INTEGER && T ? (E && A.getAttribute("morphTarget" + m) !== E[w] && A.setAttribute("morphTarget" + m, E[w]), f && A.getAttribute("morphNormal" + m) !== f[w] && A.setAttribute("morphNormal" + m, f[w]), i[m] = T, u += T) : (E && A.hasAttribute("morphTarget" + m) === !0 && A.deleteAttribute("morphTarget" + m), f && A.hasAttribute("morphNormal" + m) === !0 && A.deleteAttribute("morphNormal" + m), i[m] = 0);
      }
      const x = A.morphTargetsRelative ? 1 : 1 - u;
      h.getUniforms().setValue(s, "morphTargetBaseInfluence", x), h.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function up(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, A = c.geometry, h = e.get(c, A);
    if (i.get(h) !== l && (e.update(h), i.set(h, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return h;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
class Vl extends ut {
  constructor(e, t, n, i, r, a, o, c, l, A) {
    if (A = A !== void 0 ? A : Jn, A !== Jn && A !== Oi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && A === Jn && (n = Pn), n === void 0 && A === Oi && (n = Kn), super(null, i, r, a, o, c, A, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : xt, this.minFilter = c !== void 0 ? c : xt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Wl = /* @__PURE__ */ new ut(), ql = /* @__PURE__ */ new Vl(1, 1);
ql.compareFunction = Tl;
const jl = /* @__PURE__ */ new Ll(), Yl = /* @__PURE__ */ new Pl(), Xl = /* @__PURE__ */ new Hl(), Ac = [], hc = [], dc = new Float32Array(16), uc = new Float32Array(9), fc = new Float32Array(4);
function qi(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Ac[i];
  if (r === void 0 && (r = new Float32Array(i), Ac[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, s[a].toArray(r, o);
  }
  return r;
}
function gt(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t]) return !1;
  return !0;
}
function mt(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function xr(s, e) {
  let t = hc[e];
  t === void 0 && (t = new Int32Array(e), hc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function fp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function pp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    s.uniform2fv(this.addr, e), mt(t, e);
  }
}
function gp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (gt(t, e)) return;
    s.uniform3fv(this.addr, e), mt(t, e);
  }
}
function mp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    s.uniform4fv(this.addr, e), mt(t, e);
  }
}
function Ep(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), mt(t, e);
  } else {
    if (gt(t, n)) return;
    fc.set(n), s.uniformMatrix2fv(this.addr, !1, fc), mt(t, n);
  }
}
function _p(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), mt(t, e);
  } else {
    if (gt(t, n)) return;
    uc.set(n), s.uniformMatrix3fv(this.addr, !1, uc), mt(t, n);
  }
}
function bp(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), mt(t, e);
  } else {
    if (gt(t, n)) return;
    dc.set(n), s.uniformMatrix4fv(this.addr, !1, dc), mt(t, n);
  }
}
function xp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Cp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    s.uniform2iv(this.addr, e), mt(t, e);
  }
}
function Ip(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    s.uniform3iv(this.addr, e), mt(t, e);
  }
}
function Sp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    s.uniform4iv(this.addr, e), mt(t, e);
  }
}
function vp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Mp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    s.uniform2uiv(this.addr, e), mt(t, e);
  }
}
function yp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    s.uniform3uiv(this.addr, e), mt(t, e);
  }
}
function Bp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    s.uniform4uiv(this.addr, e), mt(t, e);
  }
}
function Tp(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  const r = this.type === s.SAMPLER_2D_SHADOW ? ql : Wl;
  t.setTexture2D(e || r, i);
}
function wp(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Yl, i);
}
function Rp(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Xl, i);
}
function Dp(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || jl, i);
}
function Lp(s) {
  switch (s) {
    case 5126:
      return fp;
    case 35664:
      return pp;
    case 35665:
      return gp;
    case 35666:
      return mp;
    case 35674:
      return Ep;
    case 35675:
      return _p;
    case 35676:
      return bp;
    case 5124:
    case 35670:
      return xp;
    case 35667:
    case 35671:
      return Cp;
    case 35668:
    case 35672:
      return Ip;
    case 35669:
    case 35673:
      return Sp;
    case 5125:
      return vp;
    case 36294:
      return Mp;
    case 36295:
      return yp;
    case 36296:
      return Bp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Tp;
    case 35679:
    case 36299:
    case 36307:
      return wp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Rp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Dp;
  }
}
function Pp(s, e) {
  s.uniform1fv(this.addr, e);
}
function Fp(s, e) {
  const t = qi(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Up(s, e) {
  const t = qi(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Np(s, e) {
  const t = qi(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Qp(s, e) {
  const t = qi(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function Op(s, e) {
  const t = qi(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function kp(s, e) {
  const t = qi(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Gp(s, e) {
  s.uniform1iv(this.addr, e);
}
function Hp(s, e) {
  s.uniform2iv(this.addr, e);
}
function zp(s, e) {
  s.uniform3iv(this.addr, e);
}
function Vp(s, e) {
  s.uniform4iv(this.addr, e);
}
function Wp(s, e) {
  s.uniform1uiv(this.addr, e);
}
function qp(s, e) {
  s.uniform2uiv(this.addr, e);
}
function jp(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Yp(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Xp(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  gt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Wl, r[a]);
}
function Kp(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  gt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Yl, r[a]);
}
function Jp(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  gt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Xl, r[a]);
}
function Zp(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  gt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || jl, r[a]);
}
function $p(s) {
  switch (s) {
    case 5126:
      return Pp;
    case 35664:
      return Fp;
    case 35665:
      return Up;
    case 35666:
      return Np;
    case 35674:
      return Qp;
    case 35675:
      return Op;
    case 35676:
      return kp;
    case 5124:
    case 35670:
      return Gp;
    case 35667:
    case 35671:
      return Hp;
    case 35668:
    case 35672:
      return zp;
    case 35669:
    case 35673:
      return Vp;
    case 5125:
      return Wp;
    case 36294:
      return qp;
    case 36295:
      return jp;
    case 36296:
      return Yp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Xp;
    case 35679:
    case 36299:
    case 36307:
      return Kp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Jp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Zp;
  }
}
class eg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Lp(t.type);
  }
}
class tg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = $p(t.type);
  }
}
class ng {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ta = /(\w+)(\])?(\[|\.)?/g;
function pc(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function ig(s, e, t) {
  const n = s.name, i = n.length;
  for (ta.lastIndex = 0; ; ) {
    const r = ta.exec(n), a = ta.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      pc(t, l === void 0 ? new eg(o, s, e) : new tg(o, s, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new ng(o), pc(t, h)), t = h;
    }
  }
}
class rr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      ig(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function gc(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const sg = 37297;
let rg = 0;
function ag(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function og(s) {
  const e = et.getPrimaries(et.workingColorSpace), t = et.getPrimaries(s);
  let n;
  switch (e === t ? n = "" : e === hr && t === Ar ? n = "LinearDisplayP3ToLinearSRGB" : e === Ar && t === hr && (n = "LinearSRGBToLinearDisplayP3"), s) {
    case pt:
    case ms:
      return [n, "LinearTransferOETF"];
    case ot:
    case Er:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"];
  }
}
function mc(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + ag(s.getShaderSource(e), a);
  } else
    return i;
}
function cg(s, e) {
  const t = og(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function lg(s, e) {
  let t;
  switch (e) {
    case lh:
      t = "Linear";
      break;
    case Ah:
      t = "Reinhard";
      break;
    case hh:
      t = "OptimizedCineon";
      break;
    case El:
      t = "ACESFilmic";
      break;
    case uh:
      t = "AgX";
      break;
    case dh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Ag(s) {
  return [
    s.extensionDerivatives || s.envMapCubeUVHeight || s.bumpMap || s.normalMapTangentSpace || s.clearcoatNormalMap || s.flatShading || s.alphaToCoverage || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Pi).join(`
`);
}
function hg(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Pi).join(`
`);
}
function dg(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function ug(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2), r.type === s.FLOAT_MAT3 && (o = 3), r.type === s.FLOAT_MAT4 && (o = 4), t[a] = {
      type: r.type,
      location: s.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Pi(s) {
  return s !== "";
}
function Ec(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function _c(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const fg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ua(s) {
  return s.replace(fg, gg);
}
const pg = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function gg(s, e) {
  let t = We[e];
  if (t === void 0) {
    const n = pg.get(e);
    if (n !== void 0)
      t = We[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ua(t);
}
const mg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function bc(s) {
  return s.replace(mg, Eg);
}
function Eg(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function xc(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;
  return s.isWebGL2 && (e += `precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`), s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function _g(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === pl ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === gl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === gn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function bg(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case ei:
      case Qi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case mr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function xg(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Qi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Cg(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case ml:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case oh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ch:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Ig(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Sg(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = _g(t), l = bg(t), A = xg(t), h = Cg(t), d = Ig(t), p = t.isWebGL2 ? "" : Ag(t), g = hg(t), E = dg(r), f = i.createProgram();
  let u, x, m = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E
  ].filter(Pi).join(`
`), u.length > 0 && (u += `
`), x = [
    p,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E
  ].filter(Pi).join(`
`), x.length > 0 && (x += `
`)) : (u = [
    xc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + A : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Pi).join(`
`), x = [
    p,
    xc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    E,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + A : "",
    t.envMap ? "#define " + h : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Nn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Nn ? We.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Nn ? lg("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    We.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    cg("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Pi).join(`
`)), a = Ua(a), a = Ec(a, t), a = _c(a, t), o = Ua(o), o = Ec(o, t), o = _c(o, t), a = bc(a), o = bc(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (m = `#version 300 es
`, u = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + u, x = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === Qo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Qo ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + x);
  const I = m + u + a, w = m + x + o, T = gc(i, i.VERTEX_SHADER, I), y = gc(i, i.FRAGMENT_SHADER, w);
  i.attachShader(f, T), i.attachShader(f, y), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f);
  function W(K) {
    if (s.debug.checkShaderErrors) {
      const ie = i.getProgramInfoLog(f).trim(), D = i.getShaderInfoLog(T).trim(), L = i.getShaderInfoLog(y).trim();
      let Q = !0, q = !0;
      if (i.getProgramParameter(f, i.LINK_STATUS) === !1)
        if (Q = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, f, T, y);
        else {
          const N = mc(i, T, "vertex"), H = mc(i, y, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, i.VALIDATE_STATUS) + `

Material Name: ` + K.name + `
Material Type: ` + K.type + `

Program Info Log: ` + ie + `
` + N + `
` + H
          );
        }
      else ie !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ie) : (D === "" || L === "") && (q = !1);
      q && (K.diagnostics = {
        runnable: Q,
        programLog: ie,
        vertexShader: {
          log: D,
          prefix: u
        },
        fragmentShader: {
          log: L,
          prefix: x
        }
      });
    }
    i.deleteShader(T), i.deleteShader(y), te = new rr(i, f), _ = ug(i, f);
  }
  let te;
  this.getUniforms = function() {
    return te === void 0 && W(this), te;
  };
  let _;
  this.getAttributes = function() {
    return _ === void 0 && W(this), _;
  };
  let M = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = i.getProgramParameter(f, sg)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = rg++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = T, this.fragmentShader = y, this;
}
let vg = 0;
class Mg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new yg(e), t.set(e, n)), n;
  }
}
class yg {
  constructor(e) {
    this.id = vg++, this.code = e, this.usedTimes = 0;
  }
}
function Bg(s, e, t, n, i, r, a) {
  const o = new Fl(), c = new Mg(), l = /* @__PURE__ */ new Set(), A = [], h = i.isWebGL2, d = i.logarithmicDepthBuffer, p = i.vertexTextures;
  let g = i.precision;
  const E = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function f(_) {
    return l.add(_), _ === 0 ? "uv" : `uv${_}`;
  }
  function u(_, M, K, ie, D) {
    const L = ie.fog, Q = D.geometry, q = _.isMeshStandardMaterial ? ie.environment : null, N = (_.isMeshStandardMaterial ? t : e).get(_.envMap || q), H = N && N.mapping === mr ? N.image.height : null, J = E[_.type];
    _.precision !== null && (g = i.getMaxPrecision(_.precision), g !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", g, "instead."));
    const Z = Q.morphAttributes.position || Q.morphAttributes.normal || Q.morphAttributes.color, ue = Z !== void 0 ? Z.length : 0;
    let Ce = 0;
    Q.morphAttributes.position !== void 0 && (Ce = 1), Q.morphAttributes.normal !== void 0 && (Ce = 2), Q.morphAttributes.color !== void 0 && (Ce = 3);
    let z, Y, le, de;
    if (J) {
      const Be = sn[J];
      z = Be.vertexShader, Y = Be.fragmentShader;
    } else
      z = _.vertexShader, Y = _.fragmentShader, c.update(_), le = c.getVertexShaderID(_), de = c.getFragmentShaderID(_);
    const ve = s.getRenderTarget(), ge = D.isInstancedMesh === !0, Oe = D.isBatchedMesh === !0, Ie = !!_.map, P = !!_.matcap, tt = !!N, _e = !!_.aoMap, Te = !!_.lightMap, be = !!_.bumpMap, Ze = !!_.normalMap, Fe = !!_.displacementMap, v = !!_.emissiveMap, b = !!_.metalnessMap, U = !!_.roughnessMap, re = _.anisotropy > 0, $ = _.clearcoat > 0, ne = _.iridescence > 0, me = _.sheen > 0, oe = _.transmission > 0, pe = re && !!_.anisotropyMap, xe = $ && !!_.clearcoatMap, De = $ && !!_.clearcoatNormalMap, se = $ && !!_.clearcoatRoughnessMap, Ke = ne && !!_.iridescenceMap, ze = ne && !!_.iridescenceThicknessMap, Ue = me && !!_.sheenColorMap, Se = me && !!_.sheenRoughnessMap, fe = !!_.specularMap, ke = !!_.specularColorMap, B = !!_.specularIntensityMap, ae = oe && !!_.transmissionMap, ee = oe && !!_.thicknessMap, ce = !!_.gradientMap, S = !!_.alphaMap, j = _.alphaTest > 0, X = !!_.alphaHash, O = !!_.extensions;
    let Ae = Nn;
    _.toneMapped && (ve === null || ve.isXRRenderTarget === !0) && (Ae = s.toneMapping);
    const we = {
      isWebGL2: h,
      shaderID: J,
      shaderType: _.type,
      shaderName: _.name,
      vertexShader: z,
      fragmentShader: Y,
      defines: _.defines,
      customVertexShaderID: le,
      customFragmentShaderID: de,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: g,
      batching: Oe,
      instancing: ge,
      instancingColor: ge && D.instanceColor !== null,
      supportsVertexTextures: p,
      outputColorSpace: ve === null ? s.outputColorSpace : ve.isXRRenderTarget === !0 ? ve.texture.colorSpace : pt,
      alphaToCoverage: !!_.alphaToCoverage,
      map: Ie,
      matcap: P,
      envMap: tt,
      envMapMode: tt && N.mapping,
      envMapCubeUVHeight: H,
      aoMap: _e,
      lightMap: Te,
      bumpMap: be,
      normalMap: Ze,
      displacementMap: p && Fe,
      emissiveMap: v,
      normalMapObjectSpace: Ze && _.normalMapType === vh,
      normalMapTangentSpace: Ze && _.normalMapType === Bl,
      metalnessMap: b,
      roughnessMap: U,
      anisotropy: re,
      anisotropyMap: pe,
      clearcoat: $,
      clearcoatMap: xe,
      clearcoatNormalMap: De,
      clearcoatRoughnessMap: se,
      iridescence: ne,
      iridescenceMap: Ke,
      iridescenceThicknessMap: ze,
      sheen: me,
      sheenColorMap: Ue,
      sheenRoughnessMap: Se,
      specularMap: fe,
      specularColorMap: ke,
      specularIntensityMap: B,
      transmission: oe,
      transmissionMap: ae,
      thicknessMap: ee,
      gradientMap: ce,
      opaque: _.transparent === !1 && _.blending === Fi && _.alphaToCoverage === !1,
      alphaMap: S,
      alphaTest: j,
      alphaHash: X,
      combine: _.combine,
      //
      mapUv: Ie && f(_.map.channel),
      aoMapUv: _e && f(_.aoMap.channel),
      lightMapUv: Te && f(_.lightMap.channel),
      bumpMapUv: be && f(_.bumpMap.channel),
      normalMapUv: Ze && f(_.normalMap.channel),
      displacementMapUv: Fe && f(_.displacementMap.channel),
      emissiveMapUv: v && f(_.emissiveMap.channel),
      metalnessMapUv: b && f(_.metalnessMap.channel),
      roughnessMapUv: U && f(_.roughnessMap.channel),
      anisotropyMapUv: pe && f(_.anisotropyMap.channel),
      clearcoatMapUv: xe && f(_.clearcoatMap.channel),
      clearcoatNormalMapUv: De && f(_.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: se && f(_.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ke && f(_.iridescenceMap.channel),
      iridescenceThicknessMapUv: ze && f(_.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ue && f(_.sheenColorMap.channel),
      sheenRoughnessMapUv: Se && f(_.sheenRoughnessMap.channel),
      specularMapUv: fe && f(_.specularMap.channel),
      specularColorMapUv: ke && f(_.specularColorMap.channel),
      specularIntensityMapUv: B && f(_.specularIntensityMap.channel),
      transmissionMapUv: ae && f(_.transmissionMap.channel),
      thicknessMapUv: ee && f(_.thicknessMap.channel),
      alphaMapUv: S && f(_.alphaMap.channel),
      //
      vertexTangents: !!Q.attributes.tangent && (Ze || re),
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && !!Q.attributes.color && Q.attributes.color.itemSize === 4,
      pointsUvs: D.isPoints === !0 && !!Q.attributes.uv && (Ie || S),
      fog: !!L,
      useFog: _.fog === !0,
      fogExp2: !!L && L.isFogExp2,
      flatShading: _.flatShading === !0,
      sizeAttenuation: _.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: D.isSkinnedMesh === !0,
      morphTargets: Q.morphAttributes.position !== void 0,
      morphNormals: Q.morphAttributes.normal !== void 0,
      morphColors: Q.morphAttributes.color !== void 0,
      morphTargetsCount: ue,
      morphTextureStride: Ce,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: s.shadowMap.enabled && K.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: Ae,
      useLegacyLights: s._useLegacyLights,
      decodeVideoTexture: Ie && _.map.isVideoTexture === !0 && et.getTransfer(_.map.colorSpace) === at,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === Kt,
      flipSided: _.side === Pt,
      useDepthPacking: _.depthPacking >= 0,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: O && _.extensions.derivatives === !0,
      extensionFragDepth: O && _.extensions.fragDepth === !0,
      extensionDrawBuffers: O && _.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: O && _.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: O && _.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: O && _.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: _.customProgramCacheKey()
    };
    return we.vertexUv1s = l.has(1), we.vertexUv2s = l.has(2), we.vertexUv3s = l.has(3), l.clear(), we;
  }
  function x(_) {
    const M = [];
    if (_.shaderID ? M.push(_.shaderID) : (M.push(_.customVertexShaderID), M.push(_.customFragmentShaderID)), _.defines !== void 0)
      for (const K in _.defines)
        M.push(K), M.push(_.defines[K]);
    return _.isRawShaderMaterial === !1 && (m(M, _), I(M, _), M.push(s.outputColorSpace)), M.push(_.customProgramCacheKey), M.join();
  }
  function m(_, M) {
    _.push(M.precision), _.push(M.outputColorSpace), _.push(M.envMapMode), _.push(M.envMapCubeUVHeight), _.push(M.mapUv), _.push(M.alphaMapUv), _.push(M.lightMapUv), _.push(M.aoMapUv), _.push(M.bumpMapUv), _.push(M.normalMapUv), _.push(M.displacementMapUv), _.push(M.emissiveMapUv), _.push(M.metalnessMapUv), _.push(M.roughnessMapUv), _.push(M.anisotropyMapUv), _.push(M.clearcoatMapUv), _.push(M.clearcoatNormalMapUv), _.push(M.clearcoatRoughnessMapUv), _.push(M.iridescenceMapUv), _.push(M.iridescenceThicknessMapUv), _.push(M.sheenColorMapUv), _.push(M.sheenRoughnessMapUv), _.push(M.specularMapUv), _.push(M.specularColorMapUv), _.push(M.specularIntensityMapUv), _.push(M.transmissionMapUv), _.push(M.thicknessMapUv), _.push(M.combine), _.push(M.fogExp2), _.push(M.sizeAttenuation), _.push(M.morphTargetsCount), _.push(M.morphAttributeCount), _.push(M.numDirLights), _.push(M.numPointLights), _.push(M.numSpotLights), _.push(M.numSpotLightMaps), _.push(M.numHemiLights), _.push(M.numRectAreaLights), _.push(M.numDirLightShadows), _.push(M.numPointLightShadows), _.push(M.numSpotLightShadows), _.push(M.numSpotLightShadowsWithMaps), _.push(M.numLightProbes), _.push(M.shadowMapType), _.push(M.toneMapping), _.push(M.numClippingPlanes), _.push(M.numClipIntersection), _.push(M.depthPacking);
  }
  function I(_, M) {
    o.disableAll(), M.isWebGL2 && o.enable(0), M.supportsVertexTextures && o.enable(1), M.instancing && o.enable(2), M.instancingColor && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), _.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.skinning && o.enable(4), M.morphTargets && o.enable(5), M.morphNormals && o.enable(6), M.morphColors && o.enable(7), M.premultipliedAlpha && o.enable(8), M.shadowMapEnabled && o.enable(9), M.useLegacyLights && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.alphaToCoverage && o.enable(20), _.push(o.mask);
  }
  function w(_) {
    const M = E[_.type];
    let K;
    if (M) {
      const ie = sn[M];
      K = kl.clone(ie.uniforms);
    } else
      K = _.uniforms;
    return K;
  }
  function T(_, M) {
    let K;
    for (let ie = 0, D = A.length; ie < D; ie++) {
      const L = A[ie];
      if (L.cacheKey === M) {
        K = L, ++K.usedTimes;
        break;
      }
    }
    return K === void 0 && (K = new Sg(s, M, _, r), A.push(K)), K;
  }
  function y(_) {
    if (--_.usedTimes === 0) {
      const M = A.indexOf(_);
      A[M] = A[A.length - 1], A.pop(), _.destroy();
    }
  }
  function W(_) {
    c.remove(_);
  }
  function te() {
    c.dispose();
  }
  return {
    getParameters: u,
    getProgramCacheKey: x,
    getUniforms: w,
    acquireProgram: T,
    releaseProgram: y,
    releaseShaderCache: W,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: A,
    dispose: te
  };
}
function Tg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let a = s.get(r);
    return a === void 0 && (a = {}, s.set(r, a)), a;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, a, o) {
    s.get(r)[a] = o;
  }
  function i() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function wg(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Cc(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Ic() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(h, d, p, g, E, f) {
    let u = s[e];
    return u === void 0 ? (u = {
      id: h.id,
      object: h,
      geometry: d,
      material: p,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: E,
      group: f
    }, s[e] = u) : (u.id = h.id, u.object = h, u.geometry = d, u.material = p, u.groupOrder = g, u.renderOrder = h.renderOrder, u.z = E, u.group = f), e++, u;
  }
  function o(h, d, p, g, E, f) {
    const u = a(h, d, p, g, E, f);
    p.transmission > 0 ? n.push(u) : p.transparent === !0 ? i.push(u) : t.push(u);
  }
  function c(h, d, p, g, E, f) {
    const u = a(h, d, p, g, E, f);
    p.transmission > 0 ? n.unshift(u) : p.transparent === !0 ? i.unshift(u) : t.unshift(u);
  }
  function l(h, d) {
    t.length > 1 && t.sort(h || wg), n.length > 1 && n.sort(d || Cc), i.length > 1 && i.sort(d || Cc);
  }
  function A() {
    for (let h = e, d = s.length; h < d; h++) {
      const p = s[h];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: c,
    finish: A,
    sort: l
  };
}
function Rg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new Ic(), s.set(n, [a])) : i >= r.length ? (a = new Ic(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Dg() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new Ne()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Ne(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new Ne(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new Ne(),
            groundColor: new Ne()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ne(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function Lg() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ye(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let Pg = 0;
function Fg(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function Ug(s, e) {
  const t = new Dg(), n = Lg(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let A = 0; A < 9; A++) i.probe.push(new R());
  const r = new R(), a = new Re(), o = new Re();
  function c(A, h) {
    let d = 0, p = 0, g = 0;
    for (let K = 0; K < 9; K++) i.probe[K].set(0, 0, 0);
    let E = 0, f = 0, u = 0, x = 0, m = 0, I = 0, w = 0, T = 0, y = 0, W = 0, te = 0;
    A.sort(Fg);
    const _ = h === !0 ? Math.PI : 1;
    for (let K = 0, ie = A.length; K < ie; K++) {
      const D = A[K], L = D.color, Q = D.intensity, q = D.distance, N = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        d += L.r * Q * _, p += L.g * Q * _, g += L.b * Q * _;
      else if (D.isLightProbe) {
        for (let H = 0; H < 9; H++)
          i.probe[H].addScaledVector(D.sh.coefficients[H], Q);
        te++;
      } else if (D.isDirectionalLight) {
        const H = t.get(D);
        if (H.color.copy(D.color).multiplyScalar(D.intensity * _), D.castShadow) {
          const J = D.shadow, Z = n.get(D);
          Z.shadowBias = J.bias, Z.shadowNormalBias = J.normalBias, Z.shadowRadius = J.radius, Z.shadowMapSize = J.mapSize, i.directionalShadow[E] = Z, i.directionalShadowMap[E] = N, i.directionalShadowMatrix[E] = D.shadow.matrix, I++;
        }
        i.directional[E] = H, E++;
      } else if (D.isSpotLight) {
        const H = t.get(D);
        H.position.setFromMatrixPosition(D.matrixWorld), H.color.copy(L).multiplyScalar(Q * _), H.distance = q, H.coneCos = Math.cos(D.angle), H.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), H.decay = D.decay, i.spot[u] = H;
        const J = D.shadow;
        if (D.map && (i.spotLightMap[y] = D.map, y++, J.updateMatrices(D), D.castShadow && W++), i.spotLightMatrix[u] = J.matrix, D.castShadow) {
          const Z = n.get(D);
          Z.shadowBias = J.bias, Z.shadowNormalBias = J.normalBias, Z.shadowRadius = J.radius, Z.shadowMapSize = J.mapSize, i.spotShadow[u] = Z, i.spotShadowMap[u] = N, T++;
        }
        u++;
      } else if (D.isRectAreaLight) {
        const H = t.get(D);
        H.color.copy(L).multiplyScalar(Q), H.halfWidth.set(D.width * 0.5, 0, 0), H.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[x] = H, x++;
      } else if (D.isPointLight) {
        const H = t.get(D);
        if (H.color.copy(D.color).multiplyScalar(D.intensity * _), H.distance = D.distance, H.decay = D.decay, D.castShadow) {
          const J = D.shadow, Z = n.get(D);
          Z.shadowBias = J.bias, Z.shadowNormalBias = J.normalBias, Z.shadowRadius = J.radius, Z.shadowMapSize = J.mapSize, Z.shadowCameraNear = J.camera.near, Z.shadowCameraFar = J.camera.far, i.pointShadow[f] = Z, i.pointShadowMap[f] = N, i.pointShadowMatrix[f] = D.shadow.matrix, w++;
        }
        i.point[f] = H, f++;
      } else if (D.isHemisphereLight) {
        const H = t.get(D);
        H.skyColor.copy(D.color).multiplyScalar(Q * _), H.groundColor.copy(D.groundColor).multiplyScalar(Q * _), i.hemi[m] = H, m++;
      }
    }
    x > 0 && (e.isWebGL2 ? s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = he.LTC_FLOAT_1, i.rectAreaLTC2 = he.LTC_FLOAT_2) : (i.rectAreaLTC1 = he.LTC_HALF_1, i.rectAreaLTC2 = he.LTC_HALF_2) : s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = he.LTC_FLOAT_1, i.rectAreaLTC2 = he.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = he.LTC_HALF_1, i.rectAreaLTC2 = he.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = p, i.ambient[2] = g;
    const M = i.hash;
    (M.directionalLength !== E || M.pointLength !== f || M.spotLength !== u || M.rectAreaLength !== x || M.hemiLength !== m || M.numDirectionalShadows !== I || M.numPointShadows !== w || M.numSpotShadows !== T || M.numSpotMaps !== y || M.numLightProbes !== te) && (i.directional.length = E, i.spot.length = u, i.rectArea.length = x, i.point.length = f, i.hemi.length = m, i.directionalShadow.length = I, i.directionalShadowMap.length = I, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = T, i.spotShadowMap.length = T, i.directionalShadowMatrix.length = I, i.pointShadowMatrix.length = w, i.spotLightMatrix.length = T + y - W, i.spotLightMap.length = y, i.numSpotLightShadowsWithMaps = W, i.numLightProbes = te, M.directionalLength = E, M.pointLength = f, M.spotLength = u, M.rectAreaLength = x, M.hemiLength = m, M.numDirectionalShadows = I, M.numPointShadows = w, M.numSpotShadows = T, M.numSpotMaps = y, M.numLightProbes = te, i.version = Pg++);
  }
  function l(A, h) {
    let d = 0, p = 0, g = 0, E = 0, f = 0;
    const u = h.matrixWorldInverse;
    for (let x = 0, m = A.length; x < m; x++) {
      const I = A[x];
      if (I.isDirectionalLight) {
        const w = i.directional[d];
        w.direction.setFromMatrixPosition(I.matrixWorld), r.setFromMatrixPosition(I.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(u), d++;
      } else if (I.isSpotLight) {
        const w = i.spot[g];
        w.position.setFromMatrixPosition(I.matrixWorld), w.position.applyMatrix4(u), w.direction.setFromMatrixPosition(I.matrixWorld), r.setFromMatrixPosition(I.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(u), g++;
      } else if (I.isRectAreaLight) {
        const w = i.rectArea[E];
        w.position.setFromMatrixPosition(I.matrixWorld), w.position.applyMatrix4(u), o.identity(), a.copy(I.matrixWorld), a.premultiply(u), o.extractRotation(a), w.halfWidth.set(I.width * 0.5, 0, 0), w.halfHeight.set(0, I.height * 0.5, 0), w.halfWidth.applyMatrix4(o), w.halfHeight.applyMatrix4(o), E++;
      } else if (I.isPointLight) {
        const w = i.point[p];
        w.position.setFromMatrixPosition(I.matrixWorld), w.position.applyMatrix4(u), p++;
      } else if (I.isHemisphereLight) {
        const w = i.hemi[f];
        w.direction.setFromMatrixPosition(I.matrixWorld), w.direction.transformDirection(u), f++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Sc(s, e) {
  const t = new Ug(s, e), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function c(h) {
    t.setup(n, h);
  }
  function l(h) {
    t.setupView(n, h);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o
  };
}
function Ng(s, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, a = 0) {
    const o = t.get(r);
    let c;
    return o === void 0 ? (c = new Sc(s, e), t.set(r, [c])) : a >= o.length ? (c = new Sc(s, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Qg extends en {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ih, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Og extends en {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const kg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Hg(s, e, t) {
  let n = new qa();
  const i = new ye(), r = new ye(), a = new st(), o = new Qg({ depthPacking: Sh }), c = new Og(), l = {}, A = t.maxTextureSize, h = { [xn]: Pt, [Pt]: xn, [Kt]: Kt }, d = new Cn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ye() },
      radius: { value: 4 }
    },
    vertexShader: kg,
    fragmentShader: Gg
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new qt();
  g.setAttribute(
    "position",
    new Ft(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const E = new Lt(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = pl;
  let u = this.type;
  this.render = function(T, y, W) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || T.length === 0) return;
    const te = s.getRenderTarget(), _ = s.getActiveCubeFace(), M = s.getActiveMipmapLevel(), K = s.state;
    K.setBlending(Un), K.buffers.color.setClear(1, 1, 1, 1), K.buffers.depth.setTest(!0), K.setScissorTest(!1);
    const ie = u !== gn && this.type === gn, D = u === gn && this.type !== gn;
    for (let L = 0, Q = T.length; L < Q; L++) {
      const q = T[L], N = q.shadow;
      if (N === void 0) {
        console.warn("THREE.WebGLShadowMap:", q, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === !1 && N.needsUpdate === !1) continue;
      i.copy(N.mapSize);
      const H = N.getFrameExtents();
      if (i.multiply(H), r.copy(N.mapSize), (i.x > A || i.y > A) && (i.x > A && (r.x = Math.floor(A / H.x), i.x = r.x * H.x, N.mapSize.x = r.x), i.y > A && (r.y = Math.floor(A / H.y), i.y = r.y * H.y, N.mapSize.y = r.y)), N.map === null || ie === !0 || D === !0) {
        const Z = this.type !== gn ? { minFilter: xt, magFilter: xt } : {};
        N.map !== null && N.map.dispose(), N.map = new ni(i.x, i.y, Z), N.map.texture.name = q.name + ".shadowMap", N.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(N.map), s.clear();
      const J = N.getViewportCount();
      for (let Z = 0; Z < J; Z++) {
        const ue = N.getViewport(Z);
        a.set(
          r.x * ue.x,
          r.y * ue.y,
          r.x * ue.z,
          r.y * ue.w
        ), K.viewport(a), N.updateMatrices(q, Z), n = N.getFrustum(), I(y, W, N.camera, q, this.type);
      }
      N.isPointLightShadow !== !0 && this.type === gn && x(N, W), N.needsUpdate = !1;
    }
    u = this.type, f.needsUpdate = !1, s.setRenderTarget(te, _, M);
  };
  function x(T, y) {
    const W = e.update(E);
    d.defines.VSM_SAMPLES !== T.blurSamples && (d.defines.VSM_SAMPLES = T.blurSamples, p.defines.VSM_SAMPLES = T.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), T.mapPass === null && (T.mapPass = new ni(i.x, i.y)), d.uniforms.shadow_pass.value = T.map.texture, d.uniforms.resolution.value = T.mapSize, d.uniforms.radius.value = T.radius, s.setRenderTarget(T.mapPass), s.clear(), s.renderBufferDirect(y, null, W, d, E, null), p.uniforms.shadow_pass.value = T.mapPass.texture, p.uniforms.resolution.value = T.mapSize, p.uniforms.radius.value = T.radius, s.setRenderTarget(T.map), s.clear(), s.renderBufferDirect(y, null, W, p, E, null);
  }
  function m(T, y, W, te) {
    let _ = null;
    const M = W.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (M !== void 0)
      _ = M;
    else if (_ = W.isPointLight === !0 ? c : o, s.localClippingEnabled && y.clipShadows === !0 && Array.isArray(y.clippingPlanes) && y.clippingPlanes.length !== 0 || y.displacementMap && y.displacementScale !== 0 || y.alphaMap && y.alphaTest > 0 || y.map && y.alphaTest > 0) {
      const K = _.uuid, ie = y.uuid;
      let D = l[K];
      D === void 0 && (D = {}, l[K] = D);
      let L = D[ie];
      L === void 0 && (L = _.clone(), D[ie] = L, y.addEventListener("dispose", w)), _ = L;
    }
    if (_.visible = y.visible, _.wireframe = y.wireframe, te === gn ? _.side = y.shadowSide !== null ? y.shadowSide : y.side : _.side = y.shadowSide !== null ? y.shadowSide : h[y.side], _.alphaMap = y.alphaMap, _.alphaTest = y.alphaTest, _.map = y.map, _.clipShadows = y.clipShadows, _.clippingPlanes = y.clippingPlanes, _.clipIntersection = y.clipIntersection, _.displacementMap = y.displacementMap, _.displacementScale = y.displacementScale, _.displacementBias = y.displacementBias, _.wireframeLinewidth = y.wireframeLinewidth, _.linewidth = y.linewidth, W.isPointLight === !0 && _.isMeshDistanceMaterial === !0) {
      const K = s.properties.get(_);
      K.light = W;
    }
    return _;
  }
  function I(T, y, W, te, _) {
    if (T.visible === !1) return;
    if (T.layers.test(y.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && _ === gn) && (!T.frustumCulled || n.intersectsObject(T))) {
      T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, T.matrixWorld);
      const ie = e.update(T), D = T.material;
      if (Array.isArray(D)) {
        const L = ie.groups;
        for (let Q = 0, q = L.length; Q < q; Q++) {
          const N = L[Q], H = D[N.materialIndex];
          if (H && H.visible) {
            const J = m(T, H, te, _);
            T.onBeforeShadow(s, T, y, W, ie, J, N), s.renderBufferDirect(W, null, ie, J, T, N), T.onAfterShadow(s, T, y, W, ie, J, N);
          }
        }
      } else if (D.visible) {
        const L = m(T, D, te, _);
        T.onBeforeShadow(s, T, y, W, ie, L, null), s.renderBufferDirect(W, null, ie, L, T, null), T.onAfterShadow(s, T, y, W, ie, L, null);
      }
    }
    const K = T.children;
    for (let ie = 0, D = K.length; ie < D; ie++)
      I(K[ie], y, W, te, _);
  }
  function w(T) {
    T.target.removeEventListener("dispose", w);
    for (const W in l) {
      const te = l[W], _ = T.target.uuid;
      _ in te && (te[_].dispose(), delete te[_]);
    }
  }
}
function zg(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let S = !1;
    const j = new st();
    let X = null;
    const O = new st(0, 0, 0, 0);
    return {
      setMask: function(Ae) {
        X !== Ae && !S && (s.colorMask(Ae, Ae, Ae, Ae), X = Ae);
      },
      setLocked: function(Ae) {
        S = Ae;
      },
      setClear: function(Ae, we, Be, Ge, Je) {
        Je === !0 && (Ae *= Ge, we *= Ge, Be *= Ge), j.set(Ae, we, Be, Ge), O.equals(j) === !1 && (s.clearColor(Ae, we, Be, Ge), O.copy(j));
      },
      reset: function() {
        S = !1, X = null, O.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let S = !1, j = null, X = null, O = null;
    return {
      setTest: function(Ae) {
        Ae ? ge(s.DEPTH_TEST) : Oe(s.DEPTH_TEST);
      },
      setMask: function(Ae) {
        j !== Ae && !S && (s.depthMask(Ae), j = Ae);
      },
      setFunc: function(Ae) {
        if (X !== Ae) {
          switch (Ae) {
            case eh:
              s.depthFunc(s.NEVER);
              break;
            case th:
              s.depthFunc(s.ALWAYS);
              break;
            case nh:
              s.depthFunc(s.LESS);
              break;
            case ar:
              s.depthFunc(s.LEQUAL);
              break;
            case ih:
              s.depthFunc(s.EQUAL);
              break;
            case sh:
              s.depthFunc(s.GEQUAL);
              break;
            case rh:
              s.depthFunc(s.GREATER);
              break;
            case ah:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          X = Ae;
        }
      },
      setLocked: function(Ae) {
        S = Ae;
      },
      setClear: function(Ae) {
        O !== Ae && (s.clearDepth(Ae), O = Ae);
      },
      reset: function() {
        S = !1, j = null, X = null, O = null;
      }
    };
  }
  function a() {
    let S = !1, j = null, X = null, O = null, Ae = null, we = null, Be = null, Ge = null, Je = null;
    return {
      setTest: function(Le) {
        S || (Le ? ge(s.STENCIL_TEST) : Oe(s.STENCIL_TEST));
      },
      setMask: function(Le) {
        j !== Le && !S && (s.stencilMask(Le), j = Le);
      },
      setFunc: function(Le, rt, It) {
        (X !== Le || O !== rt || Ae !== It) && (s.stencilFunc(Le, rt, It), X = Le, O = rt, Ae = It);
      },
      setOp: function(Le, rt, It) {
        (we !== Le || Be !== rt || Ge !== It) && (s.stencilOp(Le, rt, It), we = Le, Be = rt, Ge = It);
      },
      setLocked: function(Le) {
        S = Le;
      },
      setClear: function(Le) {
        Je !== Le && (s.clearStencil(Le), Je = Le);
      },
      reset: function() {
        S = !1, j = null, X = null, O = null, Ae = null, we = null, Be = null, Ge = null, Je = null;
      }
    };
  }
  const o = new i(), c = new r(), l = new a(), A = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let d = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), E = [], f = null, u = !1, x = null, m = null, I = null, w = null, T = null, y = null, W = null, te = new Ne(0, 0, 0), _ = 0, M = !1, K = null, ie = null, D = null, L = null, Q = null;
  const q = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let N = !1, H = 0;
  const J = s.getParameter(s.VERSION);
  J.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL (\d)/.exec(J)[1]), N = H >= 1) : J.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), N = H >= 2);
  let Z = null, ue = {};
  const Ce = s.getParameter(s.SCISSOR_BOX), z = s.getParameter(s.VIEWPORT), Y = new st().fromArray(Ce), le = new st().fromArray(z);
  function de(S, j, X, O) {
    const Ae = new Uint8Array(4), we = s.createTexture();
    s.bindTexture(S, we), s.texParameteri(S, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(S, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Be = 0; Be < X; Be++)
      n && (S === s.TEXTURE_3D || S === s.TEXTURE_2D_ARRAY) ? s.texImage3D(j, 0, s.RGBA, 1, 1, O, 0, s.RGBA, s.UNSIGNED_BYTE, Ae) : s.texImage2D(j + Be, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, Ae);
    return we;
  }
  const ve = {};
  ve[s.TEXTURE_2D] = de(s.TEXTURE_2D, s.TEXTURE_2D, 1), ve[s.TEXTURE_CUBE_MAP] = de(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (ve[s.TEXTURE_2D_ARRAY] = de(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), ve[s.TEXTURE_3D] = de(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), ge(s.DEPTH_TEST), c.setFunc(ar), Fe(!1), v(oo), ge(s.CULL_FACE), be(Un);
  function ge(S) {
    d[S] !== !0 && (s.enable(S), d[S] = !0);
  }
  function Oe(S) {
    d[S] !== !1 && (s.disable(S), d[S] = !1);
  }
  function Ie(S, j) {
    return p[S] !== j ? (s.bindFramebuffer(S, j), p[S] = j, n && (S === s.DRAW_FRAMEBUFFER && (p[s.FRAMEBUFFER] = j), S === s.FRAMEBUFFER && (p[s.DRAW_FRAMEBUFFER] = j)), !0) : !1;
  }
  function P(S, j) {
    let X = E, O = !1;
    if (S)
      if (X = g.get(j), X === void 0 && (X = [], g.set(j, X)), S.isWebGLMultipleRenderTargets) {
        const Ae = S.texture;
        if (X.length !== Ae.length || X[0] !== s.COLOR_ATTACHMENT0) {
          for (let we = 0, Be = Ae.length; we < Be; we++)
            X[we] = s.COLOR_ATTACHMENT0 + we;
          X.length = Ae.length, O = !0;
        }
      } else
        X[0] !== s.COLOR_ATTACHMENT0 && (X[0] = s.COLOR_ATTACHMENT0, O = !0);
    else
      X[0] !== s.BACK && (X[0] = s.BACK, O = !0);
    O && (t.isWebGL2 ? s.drawBuffers(X) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X));
  }
  function tt(S) {
    return f !== S ? (s.useProgram(S), f = S, !0) : !1;
  }
  const _e = {
    [jn]: s.FUNC_ADD,
    [OA]: s.FUNC_SUBTRACT,
    [kA]: s.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    _e[ho] = s.MIN, _e[uo] = s.MAX;
  else {
    const S = e.get("EXT_blend_minmax");
    S !== null && (_e[ho] = S.MIN_EXT, _e[uo] = S.MAX_EXT);
  }
  const Te = {
    [GA]: s.ZERO,
    [HA]: s.ONE,
    [zA]: s.SRC_COLOR,
    [xa]: s.SRC_ALPHA,
    [XA]: s.SRC_ALPHA_SATURATE,
    [jA]: s.DST_COLOR,
    [WA]: s.DST_ALPHA,
    [VA]: s.ONE_MINUS_SRC_COLOR,
    [Ca]: s.ONE_MINUS_SRC_ALPHA,
    [YA]: s.ONE_MINUS_DST_COLOR,
    [qA]: s.ONE_MINUS_DST_ALPHA,
    [KA]: s.CONSTANT_COLOR,
    [JA]: s.ONE_MINUS_CONSTANT_COLOR,
    [ZA]: s.CONSTANT_ALPHA,
    [$A]: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function be(S, j, X, O, Ae, we, Be, Ge, Je, Le) {
    if (S === Un) {
      u === !0 && (Oe(s.BLEND), u = !1);
      return;
    }
    if (u === !1 && (ge(s.BLEND), u = !0), S !== QA) {
      if (S !== x || Le !== M) {
        if ((m !== jn || T !== jn) && (s.blendEquation(s.FUNC_ADD), m = jn, T = jn), Le)
          switch (S) {
            case Fi:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case co:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case lo:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Ao:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", S);
              break;
          }
        else
          switch (S) {
            case Fi:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case co:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case lo:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Ao:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", S);
              break;
          }
        I = null, w = null, y = null, W = null, te.set(0, 0, 0), _ = 0, x = S, M = Le;
      }
      return;
    }
    Ae = Ae || j, we = we || X, Be = Be || O, (j !== m || Ae !== T) && (s.blendEquationSeparate(_e[j], _e[Ae]), m = j, T = Ae), (X !== I || O !== w || we !== y || Be !== W) && (s.blendFuncSeparate(Te[X], Te[O], Te[we], Te[Be]), I = X, w = O, y = we, W = Be), (Ge.equals(te) === !1 || Je !== _) && (s.blendColor(Ge.r, Ge.g, Ge.b, Je), te.copy(Ge), _ = Je), x = S, M = !1;
  }
  function Ze(S, j) {
    S.side === Kt ? Oe(s.CULL_FACE) : ge(s.CULL_FACE);
    let X = S.side === Pt;
    j && (X = !X), Fe(X), S.blending === Fi && S.transparent === !1 ? be(Un) : be(S.blending, S.blendEquation, S.blendSrc, S.blendDst, S.blendEquationAlpha, S.blendSrcAlpha, S.blendDstAlpha, S.blendColor, S.blendAlpha, S.premultipliedAlpha), c.setFunc(S.depthFunc), c.setTest(S.depthTest), c.setMask(S.depthWrite), o.setMask(S.colorWrite);
    const O = S.stencilWrite;
    l.setTest(O), O && (l.setMask(S.stencilWriteMask), l.setFunc(S.stencilFunc, S.stencilRef, S.stencilFuncMask), l.setOp(S.stencilFail, S.stencilZFail, S.stencilZPass)), U(S.polygonOffset, S.polygonOffsetFactor, S.polygonOffsetUnits), S.alphaToCoverage === !0 ? ge(s.SAMPLE_ALPHA_TO_COVERAGE) : Oe(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Fe(S) {
    K !== S && (S ? s.frontFace(s.CW) : s.frontFace(s.CCW), K = S);
  }
  function v(S) {
    S !== UA ? (ge(s.CULL_FACE), S !== ie && (S === oo ? s.cullFace(s.BACK) : S === NA ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Oe(s.CULL_FACE), ie = S;
  }
  function b(S) {
    S !== D && (N && s.lineWidth(S), D = S);
  }
  function U(S, j, X) {
    S ? (ge(s.POLYGON_OFFSET_FILL), (L !== j || Q !== X) && (s.polygonOffset(j, X), L = j, Q = X)) : Oe(s.POLYGON_OFFSET_FILL);
  }
  function re(S) {
    S ? ge(s.SCISSOR_TEST) : Oe(s.SCISSOR_TEST);
  }
  function $(S) {
    S === void 0 && (S = s.TEXTURE0 + q - 1), Z !== S && (s.activeTexture(S), Z = S);
  }
  function ne(S, j, X) {
    X === void 0 && (Z === null ? X = s.TEXTURE0 + q - 1 : X = Z);
    let O = ue[X];
    O === void 0 && (O = { type: void 0, texture: void 0 }, ue[X] = O), (O.type !== S || O.texture !== j) && (Z !== X && (s.activeTexture(X), Z = X), s.bindTexture(S, j || ve[S]), O.type = S, O.texture = j);
  }
  function me() {
    const S = ue[Z];
    S !== void 0 && S.type !== void 0 && (s.bindTexture(S.type, null), S.type = void 0, S.texture = void 0);
  }
  function oe() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function pe() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function xe() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function De() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function se() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function Ke() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function ze() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function Ue() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function Se() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function fe() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (S) {
      console.error("THREE.WebGLState:", S);
    }
  }
  function ke(S) {
    Y.equals(S) === !1 && (s.scissor(S.x, S.y, S.z, S.w), Y.copy(S));
  }
  function B(S) {
    le.equals(S) === !1 && (s.viewport(S.x, S.y, S.z, S.w), le.copy(S));
  }
  function ae(S, j) {
    let X = h.get(j);
    X === void 0 && (X = /* @__PURE__ */ new WeakMap(), h.set(j, X));
    let O = X.get(S);
    O === void 0 && (O = s.getUniformBlockIndex(j, S.name), X.set(S, O));
  }
  function ee(S, j) {
    const O = h.get(j).get(S);
    A.get(j) !== O && (s.uniformBlockBinding(j, O, S.__bindingPointIndex), A.set(j, O));
  }
  function ce() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), n === !0 && (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), d = {}, Z = null, ue = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), E = [], f = null, u = !1, x = null, m = null, I = null, w = null, T = null, y = null, W = null, te = new Ne(0, 0, 0), _ = 0, M = !1, K = null, ie = null, D = null, L = null, Q = null, Y.set(0, 0, s.canvas.width, s.canvas.height), le.set(0, 0, s.canvas.width, s.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: ge,
    disable: Oe,
    bindFramebuffer: Ie,
    drawBuffers: P,
    useProgram: tt,
    setBlending: be,
    setMaterial: Ze,
    setFlipSided: Fe,
    setCullFace: v,
    setLineWidth: b,
    setPolygonOffset: U,
    setScissorTest: re,
    activeTexture: $,
    bindTexture: ne,
    unbindTexture: me,
    compressedTexImage2D: oe,
    compressedTexImage3D: pe,
    texImage2D: Se,
    texImage3D: fe,
    updateUBOMapping: ae,
    uniformBlockBinding: ee,
    texStorage2D: ze,
    texStorage3D: Ue,
    texSubImage2D: xe,
    texSubImage3D: De,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: Ke,
    scissor: ke,
    viewport: B,
    reset: ce
  };
}
function Vg(s, e, t, n, i, r, a) {
  const o = i.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), A = /* @__PURE__ */ new WeakMap();
  let h;
  const d = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(v, b) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(v, b)
    ) : ps("canvas");
  }
  function E(v, b, U, re) {
    let $ = 1;
    if ((v.width > re || v.height > re) && ($ = re / Math.max(v.width, v.height)), $ < 1 || b === !0)
      if (typeof HTMLImageElement < "u" && v instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && v instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && v instanceof ImageBitmap) {
        const ne = b ? ur : Math.floor, me = ne($ * v.width), oe = ne($ * v.height);
        h === void 0 && (h = g(me, oe));
        const pe = U ? g(me, oe) : h;
        return pe.width = me, pe.height = oe, pe.getContext("2d").drawImage(v, 0, 0, me, oe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + v.width + "x" + v.height + ") to (" + me + "x" + oe + ")."), pe;
      } else
        return "data" in v && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + v.width + "x" + v.height + ")."), v;
    return v;
  }
  function f(v) {
    return Pa(v.width) && Pa(v.height);
  }
  function u(v) {
    return o ? !1 : v.wrapS !== Gt || v.wrapT !== Gt || v.minFilter !== xt && v.minFilter !== bt;
  }
  function x(v, b) {
    return v.generateMipmaps && b && v.minFilter !== xt && v.minFilter !== bt;
  }
  function m(v) {
    s.generateMipmap(v);
  }
  function I(v, b, U, re, $ = !1) {
    if (o === !1) return b;
    if (v !== null) {
      if (s[v] !== void 0) return s[v];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + v + "'");
    }
    let ne = b;
    if (b === s.RED && (U === s.FLOAT && (ne = s.R32F), U === s.HALF_FLOAT && (ne = s.R16F), U === s.UNSIGNED_BYTE && (ne = s.R8)), b === s.RED_INTEGER && (U === s.UNSIGNED_BYTE && (ne = s.R8UI), U === s.UNSIGNED_SHORT && (ne = s.R16UI), U === s.UNSIGNED_INT && (ne = s.R32UI), U === s.BYTE && (ne = s.R8I), U === s.SHORT && (ne = s.R16I), U === s.INT && (ne = s.R32I)), b === s.RG && (U === s.FLOAT && (ne = s.RG32F), U === s.HALF_FLOAT && (ne = s.RG16F), U === s.UNSIGNED_BYTE && (ne = s.RG8)), b === s.RGBA) {
      const me = $ ? lr : et.getTransfer(re);
      U === s.FLOAT && (ne = s.RGBA32F), U === s.HALF_FLOAT && (ne = s.RGBA16F), U === s.UNSIGNED_BYTE && (ne = me === at ? s.SRGB8_ALPHA8 : s.RGBA8), U === s.UNSIGNED_SHORT_4_4_4_4 && (ne = s.RGBA4), U === s.UNSIGNED_SHORT_5_5_5_1 && (ne = s.RGB5_A1);
    }
    return (ne === s.R16F || ne === s.R32F || ne === s.RG16F || ne === s.RG32F || ne === s.RGBA16F || ne === s.RGBA32F) && e.get("EXT_color_buffer_float"), ne;
  }
  function w(v, b, U) {
    return x(v, U) === !0 || v.isFramebufferTexture && v.minFilter !== xt && v.minFilter !== bt ? Math.log2(Math.max(b.width, b.height)) + 1 : v.mipmaps !== void 0 && v.mipmaps.length > 0 ? v.mipmaps.length : v.isCompressedTexture && Array.isArray(v.image) ? b.mipmaps.length : 1;
  }
  function T(v) {
    return v === xt || v === va || v === wi ? s.NEAREST : s.LINEAR;
  }
  function y(v) {
    const b = v.target;
    b.removeEventListener("dispose", y), te(b), b.isVideoTexture && A.delete(b);
  }
  function W(v) {
    const b = v.target;
    b.removeEventListener("dispose", W), M(b);
  }
  function te(v) {
    const b = n.get(v);
    if (b.__webglInit === void 0) return;
    const U = v.source, re = d.get(U);
    if (re) {
      const $ = re[b.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && _(v), Object.keys(re).length === 0 && d.delete(U);
    }
    n.remove(v);
  }
  function _(v) {
    const b = n.get(v);
    s.deleteTexture(b.__webglTexture);
    const U = v.source, re = d.get(U);
    delete re[b.__cacheKey], a.memory.textures--;
  }
  function M(v) {
    const b = v.texture, U = n.get(v), re = n.get(b);
    if (re.__webglTexture !== void 0 && (s.deleteTexture(re.__webglTexture), a.memory.textures--), v.depthTexture && v.depthTexture.dispose(), v.isWebGLCubeRenderTarget)
      for (let $ = 0; $ < 6; $++) {
        if (Array.isArray(U.__webglFramebuffer[$]))
          for (let ne = 0; ne < U.__webglFramebuffer[$].length; ne++) s.deleteFramebuffer(U.__webglFramebuffer[$][ne]);
        else
          s.deleteFramebuffer(U.__webglFramebuffer[$]);
        U.__webglDepthbuffer && s.deleteRenderbuffer(U.__webglDepthbuffer[$]);
      }
    else {
      if (Array.isArray(U.__webglFramebuffer))
        for (let $ = 0; $ < U.__webglFramebuffer.length; $++) s.deleteFramebuffer(U.__webglFramebuffer[$]);
      else
        s.deleteFramebuffer(U.__webglFramebuffer);
      if (U.__webglDepthbuffer && s.deleteRenderbuffer(U.__webglDepthbuffer), U.__webglMultisampledFramebuffer && s.deleteFramebuffer(U.__webglMultisampledFramebuffer), U.__webglColorRenderbuffer)
        for (let $ = 0; $ < U.__webglColorRenderbuffer.length; $++)
          U.__webglColorRenderbuffer[$] && s.deleteRenderbuffer(U.__webglColorRenderbuffer[$]);
      U.__webglDepthRenderbuffer && s.deleteRenderbuffer(U.__webglDepthRenderbuffer);
    }
    if (v.isWebGLMultipleRenderTargets)
      for (let $ = 0, ne = b.length; $ < ne; $++) {
        const me = n.get(b[$]);
        me.__webglTexture && (s.deleteTexture(me.__webglTexture), a.memory.textures--), n.remove(b[$]);
      }
    n.remove(b), n.remove(v);
  }
  let K = 0;
  function ie() {
    K = 0;
  }
  function D() {
    const v = K;
    return v >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + v + " texture units while this GPU supports only " + i.maxTextures), K += 1, v;
  }
  function L(v) {
    const b = [];
    return b.push(v.wrapS), b.push(v.wrapT), b.push(v.wrapR || 0), b.push(v.magFilter), b.push(v.minFilter), b.push(v.anisotropy), b.push(v.internalFormat), b.push(v.format), b.push(v.type), b.push(v.generateMipmaps), b.push(v.premultiplyAlpha), b.push(v.flipY), b.push(v.unpackAlignment), b.push(v.colorSpace), b.join();
  }
  function Q(v, b) {
    const U = n.get(v);
    if (v.isVideoTexture && Ze(v), v.isRenderTargetTexture === !1 && v.version > 0 && U.__version !== v.version) {
      const re = v.image;
      if (re === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (re.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(U, v, b);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, U.__webglTexture, s.TEXTURE0 + b);
  }
  function q(v, b) {
    const U = n.get(v);
    if (v.version > 0 && U.__version !== v.version) {
      Y(U, v, b);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, U.__webglTexture, s.TEXTURE0 + b);
  }
  function N(v, b) {
    const U = n.get(v);
    if (v.version > 0 && U.__version !== v.version) {
      Y(U, v, b);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, U.__webglTexture, s.TEXTURE0 + b);
  }
  function H(v, b) {
    const U = n.get(v);
    if (v.version > 0 && U.__version !== v.version) {
      le(U, v, b);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, U.__webglTexture, s.TEXTURE0 + b);
  }
  const J = {
    [ti]: s.REPEAT,
    [Gt]: s.CLAMP_TO_EDGE,
    [or]: s.MIRRORED_REPEAT
  }, Z = {
    [xt]: s.NEAREST,
    [va]: s.NEAREST_MIPMAP_NEAREST,
    [wi]: s.NEAREST_MIPMAP_LINEAR,
    [bt]: s.LINEAR,
    [tr]: s.LINEAR_MIPMAP_NEAREST,
    [rn]: s.LINEAR_MIPMAP_LINEAR
  }, ue = {
    [Mh]: s.NEVER,
    [Dh]: s.ALWAYS,
    [yh]: s.LESS,
    [Tl]: s.LEQUAL,
    [Bh]: s.EQUAL,
    [Rh]: s.GEQUAL,
    [Th]: s.GREATER,
    [wh]: s.NOTEQUAL
  };
  function Ce(v, b, U) {
    if (b.type === Ut && e.has("OES_texture_float_linear") === !1 && (b.magFilter === bt || b.magFilter === tr || b.magFilter === wi || b.magFilter === rn || b.minFilter === bt || b.minFilter === tr || b.minFilter === wi || b.minFilter === rn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), U ? (s.texParameteri(v, s.TEXTURE_WRAP_S, J[b.wrapS]), s.texParameteri(v, s.TEXTURE_WRAP_T, J[b.wrapT]), (v === s.TEXTURE_3D || v === s.TEXTURE_2D_ARRAY) && s.texParameteri(v, s.TEXTURE_WRAP_R, J[b.wrapR]), s.texParameteri(v, s.TEXTURE_MAG_FILTER, Z[b.magFilter]), s.texParameteri(v, s.TEXTURE_MIN_FILTER, Z[b.minFilter])) : (s.texParameteri(v, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(v, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), (v === s.TEXTURE_3D || v === s.TEXTURE_2D_ARRAY) && s.texParameteri(v, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE), (b.wrapS !== Gt || b.wrapT !== Gt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(v, s.TEXTURE_MAG_FILTER, T(b.magFilter)), s.texParameteri(v, s.TEXTURE_MIN_FILTER, T(b.minFilter)), b.minFilter !== xt && b.minFilter !== bt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), b.compareFunction && (s.texParameteri(v, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(v, s.TEXTURE_COMPARE_FUNC, ue[b.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const re = e.get("EXT_texture_filter_anisotropic");
      if (b.magFilter === xt || b.minFilter !== wi && b.minFilter !== rn || b.type === Ut && e.has("OES_texture_float_linear") === !1 || o === !1 && b.type === bn && e.has("OES_texture_half_float_linear") === !1) return;
      (b.anisotropy > 1 || n.get(b).__currentAnisotropy) && (s.texParameterf(v, re.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, i.getMaxAnisotropy())), n.get(b).__currentAnisotropy = b.anisotropy);
    }
  }
  function z(v, b) {
    let U = !1;
    v.__webglInit === void 0 && (v.__webglInit = !0, b.addEventListener("dispose", y));
    const re = b.source;
    let $ = d.get(re);
    $ === void 0 && ($ = {}, d.set(re, $));
    const ne = L(b);
    if (ne !== v.__cacheKey) {
      $[ne] === void 0 && ($[ne] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, U = !0), $[ne].usedTimes++;
      const me = $[v.__cacheKey];
      me !== void 0 && ($[v.__cacheKey].usedTimes--, me.usedTimes === 0 && _(b)), v.__cacheKey = ne, v.__webglTexture = $[ne].texture;
    }
    return U;
  }
  function Y(v, b, U) {
    let re = s.TEXTURE_2D;
    (b.isDataArrayTexture || b.isCompressedArrayTexture) && (re = s.TEXTURE_2D_ARRAY), b.isData3DTexture && (re = s.TEXTURE_3D);
    const $ = z(v, b), ne = b.source;
    t.bindTexture(re, v.__webglTexture, s.TEXTURE0 + U);
    const me = n.get(ne);
    if (ne.version !== me.__version || $ === !0) {
      t.activeTexture(s.TEXTURE0 + U);
      const oe = et.getPrimaries(et.workingColorSpace), pe = b.colorSpace === Nt ? null : et.getPrimaries(b.colorSpace), xe = b.colorSpace === Nt || oe === pe ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, b.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, b.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      const De = u(b) && f(b.image) === !1;
      let se = E(b.image, De, !1, i.maxTextureSize);
      se = Fe(b, se);
      const Ke = f(se) || o, ze = r.convert(b.format, b.colorSpace);
      let Ue = r.convert(b.type), Se = I(b.internalFormat, ze, Ue, b.colorSpace, b.isVideoTexture);
      Ce(re, b, Ke);
      let fe;
      const ke = b.mipmaps, B = o && b.isVideoTexture !== !0 && Se !== Va, ae = me.__version === void 0 || $ === !0, ee = ne.dataReady, ce = w(b, se, Ke);
      if (b.isDepthTexture)
        Se = s.DEPTH_COMPONENT, o ? b.type === Ut ? Se = s.DEPTH_COMPONENT32F : b.type === Pn ? Se = s.DEPTH_COMPONENT24 : b.type === Kn ? Se = s.DEPTH24_STENCIL8 : Se = s.DEPTH_COMPONENT16 : b.type === Ut && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), b.format === Jn && Se === s.DEPTH_COMPONENT && b.type !== za && b.type !== Pn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), b.type = Pn, Ue = r.convert(b.type)), b.format === Oi && Se === s.DEPTH_COMPONENT && (Se = s.DEPTH_STENCIL, b.type !== Kn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), b.type = Kn, Ue = r.convert(b.type))), ae && (B ? t.texStorage2D(s.TEXTURE_2D, 1, Se, se.width, se.height) : t.texImage2D(s.TEXTURE_2D, 0, Se, se.width, se.height, 0, ze, Ue, null));
      else if (b.isDataTexture)
        if (ke.length > 0 && Ke) {
          B && ae && t.texStorage2D(s.TEXTURE_2D, ce, Se, ke[0].width, ke[0].height);
          for (let S = 0, j = ke.length; S < j; S++)
            fe = ke[S], B ? ee && t.texSubImage2D(s.TEXTURE_2D, S, 0, 0, fe.width, fe.height, ze, Ue, fe.data) : t.texImage2D(s.TEXTURE_2D, S, Se, fe.width, fe.height, 0, ze, Ue, fe.data);
          b.generateMipmaps = !1;
        } else
          B ? (ae && t.texStorage2D(s.TEXTURE_2D, ce, Se, se.width, se.height), ee && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, se.width, se.height, ze, Ue, se.data)) : t.texImage2D(s.TEXTURE_2D, 0, Se, se.width, se.height, 0, ze, Ue, se.data);
      else if (b.isCompressedTexture)
        if (b.isCompressedArrayTexture) {
          B && ae && t.texStorage3D(s.TEXTURE_2D_ARRAY, ce, Se, ke[0].width, ke[0].height, se.depth);
          for (let S = 0, j = ke.length; S < j; S++)
            fe = ke[S], b.format !== Ct ? ze !== null ? B ? ee && t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, S, 0, 0, 0, fe.width, fe.height, se.depth, ze, fe.data, 0, 0) : t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, S, Se, fe.width, fe.height, se.depth, 0, fe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : B ? ee && t.texSubImage3D(s.TEXTURE_2D_ARRAY, S, 0, 0, 0, fe.width, fe.height, se.depth, ze, Ue, fe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, S, Se, fe.width, fe.height, se.depth, 0, ze, Ue, fe.data);
        } else {
          B && ae && t.texStorage2D(s.TEXTURE_2D, ce, Se, ke[0].width, ke[0].height);
          for (let S = 0, j = ke.length; S < j; S++)
            fe = ke[S], b.format !== Ct ? ze !== null ? B ? ee && t.compressedTexSubImage2D(s.TEXTURE_2D, S, 0, 0, fe.width, fe.height, ze, fe.data) : t.compressedTexImage2D(s.TEXTURE_2D, S, Se, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : B ? ee && t.texSubImage2D(s.TEXTURE_2D, S, 0, 0, fe.width, fe.height, ze, Ue, fe.data) : t.texImage2D(s.TEXTURE_2D, S, Se, fe.width, fe.height, 0, ze, Ue, fe.data);
        }
      else if (b.isDataArrayTexture)
        B ? (ae && t.texStorage3D(s.TEXTURE_2D_ARRAY, ce, Se, se.width, se.height, se.depth), ee && t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, se.width, se.height, se.depth, ze, Ue, se.data)) : t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Se, se.width, se.height, se.depth, 0, ze, Ue, se.data);
      else if (b.isData3DTexture)
        B ? (ae && t.texStorage3D(s.TEXTURE_3D, ce, Se, se.width, se.height, se.depth), ee && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, se.width, se.height, se.depth, ze, Ue, se.data)) : t.texImage3D(s.TEXTURE_3D, 0, Se, se.width, se.height, se.depth, 0, ze, Ue, se.data);
      else if (b.isFramebufferTexture) {
        if (ae)
          if (B)
            t.texStorage2D(s.TEXTURE_2D, ce, Se, se.width, se.height);
          else {
            let S = se.width, j = se.height;
            for (let X = 0; X < ce; X++)
              t.texImage2D(s.TEXTURE_2D, X, Se, S, j, 0, ze, Ue, null), S >>= 1, j >>= 1;
          }
      } else if (ke.length > 0 && Ke) {
        B && ae && t.texStorage2D(s.TEXTURE_2D, ce, Se, ke[0].width, ke[0].height);
        for (let S = 0, j = ke.length; S < j; S++)
          fe = ke[S], B ? ee && t.texSubImage2D(s.TEXTURE_2D, S, 0, 0, ze, Ue, fe) : t.texImage2D(s.TEXTURE_2D, S, Se, ze, Ue, fe);
        b.generateMipmaps = !1;
      } else
        B ? (ae && t.texStorage2D(s.TEXTURE_2D, ce, Se, se.width, se.height), ee && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ze, Ue, se)) : t.texImage2D(s.TEXTURE_2D, 0, Se, ze, Ue, se);
      x(b, Ke) && m(re), me.__version = ne.version, b.onUpdate && b.onUpdate(b);
    }
    v.__version = b.version;
  }
  function le(v, b, U) {
    if (b.image.length !== 6) return;
    const re = z(v, b), $ = b.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, v.__webglTexture, s.TEXTURE0 + U);
    const ne = n.get($);
    if ($.version !== ne.__version || re === !0) {
      t.activeTexture(s.TEXTURE0 + U);
      const me = et.getPrimaries(et.workingColorSpace), oe = b.colorSpace === Nt ? null : et.getPrimaries(b.colorSpace), pe = b.colorSpace === Nt || me === oe ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, b.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, b.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, pe);
      const xe = b.isCompressedTexture || b.image[0].isCompressedTexture, De = b.image[0] && b.image[0].isDataTexture, se = [];
      for (let S = 0; S < 6; S++)
        !xe && !De ? se[S] = E(b.image[S], !1, !0, i.maxCubemapSize) : se[S] = De ? b.image[S].image : b.image[S], se[S] = Fe(b, se[S]);
      const Ke = se[0], ze = f(Ke) || o, Ue = r.convert(b.format, b.colorSpace), Se = r.convert(b.type), fe = I(b.internalFormat, Ue, Se, b.colorSpace), ke = o && b.isVideoTexture !== !0, B = ne.__version === void 0 || re === !0, ae = $.dataReady;
      let ee = w(b, Ke, ze);
      Ce(s.TEXTURE_CUBE_MAP, b, ze);
      let ce;
      if (xe) {
        ke && B && t.texStorage2D(s.TEXTURE_CUBE_MAP, ee, fe, Ke.width, Ke.height);
        for (let S = 0; S < 6; S++) {
          ce = se[S].mipmaps;
          for (let j = 0; j < ce.length; j++) {
            const X = ce[j];
            b.format !== Ct ? Ue !== null ? ke ? ae && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j, 0, 0, X.width, X.height, Ue, X.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j, fe, X.width, X.height, 0, X.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ke ? ae && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j, 0, 0, X.width, X.height, Ue, Se, X.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j, fe, X.width, X.height, 0, Ue, Se, X.data);
          }
        }
      } else {
        ce = b.mipmaps, ke && B && (ce.length > 0 && ee++, t.texStorage2D(s.TEXTURE_CUBE_MAP, ee, fe, se[0].width, se[0].height));
        for (let S = 0; S < 6; S++)
          if (De) {
            ke ? ae && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, 0, 0, 0, se[S].width, se[S].height, Ue, Se, se[S].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, 0, fe, se[S].width, se[S].height, 0, Ue, Se, se[S].data);
            for (let j = 0; j < ce.length; j++) {
              const O = ce[j].image[S].image;
              ke ? ae && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j + 1, 0, 0, O.width, O.height, Ue, Se, O.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j + 1, fe, O.width, O.height, 0, Ue, Se, O.data);
            }
          } else {
            ke ? ae && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, 0, 0, 0, Ue, Se, se[S]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, 0, fe, Ue, Se, se[S]);
            for (let j = 0; j < ce.length; j++) {
              const X = ce[j];
              ke ? ae && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j + 1, 0, 0, Ue, Se, X.image[S]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + S, j + 1, fe, Ue, Se, X.image[S]);
            }
          }
      }
      x(b, ze) && m(s.TEXTURE_CUBE_MAP), ne.__version = $.version, b.onUpdate && b.onUpdate(b);
    }
    v.__version = b.version;
  }
  function de(v, b, U, re, $, ne) {
    const me = r.convert(U.format, U.colorSpace), oe = r.convert(U.type), pe = I(U.internalFormat, me, oe, U.colorSpace);
    if (!n.get(b).__hasExternalTextures) {
      const De = Math.max(1, b.width >> ne), se = Math.max(1, b.height >> ne);
      $ === s.TEXTURE_3D || $ === s.TEXTURE_2D_ARRAY ? t.texImage3D($, ne, pe, De, se, b.depth, 0, me, oe, null) : t.texImage2D($, ne, pe, De, se, 0, me, oe, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, v), be(b) ? c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, re, $, n.get(U).__webglTexture, 0, Te(b)) : ($ === s.TEXTURE_2D || $ >= s.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, re, $, n.get(U).__webglTexture, ne), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ve(v, b, U) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, v), b.depthBuffer && !b.stencilBuffer) {
      let re = o === !0 ? s.DEPTH_COMPONENT24 : s.DEPTH_COMPONENT16;
      if (U || be(b)) {
        const $ = b.depthTexture;
        $ && $.isDepthTexture && ($.type === Ut ? re = s.DEPTH_COMPONENT32F : $.type === Pn && (re = s.DEPTH_COMPONENT24));
        const ne = Te(b);
        be(b) ? c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ne, re, b.width, b.height) : s.renderbufferStorageMultisample(s.RENDERBUFFER, ne, re, b.width, b.height);
      } else
        s.renderbufferStorage(s.RENDERBUFFER, re, b.width, b.height);
      s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, v);
    } else if (b.depthBuffer && b.stencilBuffer) {
      const re = Te(b);
      U && be(b) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, re, s.DEPTH24_STENCIL8, b.width, b.height) : be(b) ? c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, re, s.DEPTH24_STENCIL8, b.width, b.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, b.width, b.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, v);
    } else {
      const re = b.isWebGLMultipleRenderTargets === !0 ? b.texture : [b.texture];
      for (let $ = 0; $ < re.length; $++) {
        const ne = re[$], me = r.convert(ne.format, ne.colorSpace), oe = r.convert(ne.type), pe = I(ne.internalFormat, me, oe, ne.colorSpace), xe = Te(b);
        U && be(b) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, xe, pe, b.width, b.height) : be(b) ? c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, xe, pe, b.width, b.height) : s.renderbufferStorage(s.RENDERBUFFER, pe, b.width, b.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function ge(v, b) {
    if (b && b.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, v), !(b.depthTexture && b.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(b.depthTexture).__webglTexture || b.depthTexture.image.width !== b.width || b.depthTexture.image.height !== b.height) && (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate = !0), Q(b.depthTexture, 0);
    const re = n.get(b.depthTexture).__webglTexture, $ = Te(b);
    if (b.depthTexture.format === Jn)
      be(b) ? c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, re, 0, $) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, re, 0);
    else if (b.depthTexture.format === Oi)
      be(b) ? c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, re, 0, $) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, re, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Oe(v) {
    const b = n.get(v), U = v.isWebGLCubeRenderTarget === !0;
    if (v.depthTexture && !b.__autoAllocateDepthBuffer) {
      if (U) throw new Error("target.depthTexture not supported in Cube render targets");
      ge(b.__webglFramebuffer, v);
    } else if (U) {
      b.__webglDepthbuffer = [];
      for (let re = 0; re < 6; re++)
        t.bindFramebuffer(s.FRAMEBUFFER, b.__webglFramebuffer[re]), b.__webglDepthbuffer[re] = s.createRenderbuffer(), ve(b.__webglDepthbuffer[re], v, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, b.__webglFramebuffer), b.__webglDepthbuffer = s.createRenderbuffer(), ve(b.__webglDepthbuffer, v, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Ie(v, b, U) {
    const re = n.get(v);
    b !== void 0 && de(re.__webglFramebuffer, v, v.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), U !== void 0 && Oe(v);
  }
  function P(v) {
    const b = v.texture, U = n.get(v), re = n.get(b);
    v.addEventListener("dispose", W), v.isWebGLMultipleRenderTargets !== !0 && (re.__webglTexture === void 0 && (re.__webglTexture = s.createTexture()), re.__version = b.version, a.memory.textures++);
    const $ = v.isWebGLCubeRenderTarget === !0, ne = v.isWebGLMultipleRenderTargets === !0, me = f(v) || o;
    if ($) {
      U.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++)
        if (o && b.mipmaps && b.mipmaps.length > 0) {
          U.__webglFramebuffer[oe] = [];
          for (let pe = 0; pe < b.mipmaps.length; pe++)
            U.__webglFramebuffer[oe][pe] = s.createFramebuffer();
        } else
          U.__webglFramebuffer[oe] = s.createFramebuffer();
    } else {
      if (o && b.mipmaps && b.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let oe = 0; oe < b.mipmaps.length; oe++)
          U.__webglFramebuffer[oe] = s.createFramebuffer();
      } else
        U.__webglFramebuffer = s.createFramebuffer();
      if (ne)
        if (i.drawBuffers) {
          const oe = v.texture;
          for (let pe = 0, xe = oe.length; pe < xe; pe++) {
            const De = n.get(oe[pe]);
            De.__webglTexture === void 0 && (De.__webglTexture = s.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && v.samples > 0 && be(v) === !1) {
        const oe = ne ? b : [b];
        U.__webglMultisampledFramebuffer = s.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let pe = 0; pe < oe.length; pe++) {
          const xe = oe[pe];
          U.__webglColorRenderbuffer[pe] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, U.__webglColorRenderbuffer[pe]);
          const De = r.convert(xe.format, xe.colorSpace), se = r.convert(xe.type), Ke = I(xe.internalFormat, De, se, xe.colorSpace, v.isXRRenderTarget === !0), ze = Te(v);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, ze, Ke, v.width, v.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + pe, s.RENDERBUFFER, U.__webglColorRenderbuffer[pe]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), v.depthBuffer && (U.__webglDepthRenderbuffer = s.createRenderbuffer(), ve(U.__webglDepthRenderbuffer, v, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if ($) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, re.__webglTexture), Ce(s.TEXTURE_CUBE_MAP, b, me);
      for (let oe = 0; oe < 6; oe++)
        if (o && b.mipmaps && b.mipmaps.length > 0)
          for (let pe = 0; pe < b.mipmaps.length; pe++)
            de(U.__webglFramebuffer[oe][pe], v, b, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + oe, pe);
        else
          de(U.__webglFramebuffer[oe], v, b, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
      x(b, me) && m(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ne) {
      const oe = v.texture;
      for (let pe = 0, xe = oe.length; pe < xe; pe++) {
        const De = oe[pe], se = n.get(De);
        t.bindTexture(s.TEXTURE_2D, se.__webglTexture), Ce(s.TEXTURE_2D, De, me), de(U.__webglFramebuffer, v, De, s.COLOR_ATTACHMENT0 + pe, s.TEXTURE_2D, 0), x(De, me) && m(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let oe = s.TEXTURE_2D;
      if ((v.isWebGL3DRenderTarget || v.isWebGLArrayRenderTarget) && (o ? oe = v.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(oe, re.__webglTexture), Ce(oe, b, me), o && b.mipmaps && b.mipmaps.length > 0)
        for (let pe = 0; pe < b.mipmaps.length; pe++)
          de(U.__webglFramebuffer[pe], v, b, s.COLOR_ATTACHMENT0, oe, pe);
      else
        de(U.__webglFramebuffer, v, b, s.COLOR_ATTACHMENT0, oe, 0);
      x(b, me) && m(oe), t.unbindTexture();
    }
    v.depthBuffer && Oe(v);
  }
  function tt(v) {
    const b = f(v) || o, U = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
    for (let re = 0, $ = U.length; re < $; re++) {
      const ne = U[re];
      if (x(ne, b)) {
        const me = v.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, oe = n.get(ne).__webglTexture;
        t.bindTexture(me, oe), m(me), t.unbindTexture();
      }
    }
  }
  function _e(v) {
    if (o && v.samples > 0 && be(v) === !1) {
      const b = v.isWebGLMultipleRenderTargets ? v.texture : [v.texture], U = v.width, re = v.height;
      let $ = s.COLOR_BUFFER_BIT;
      const ne = [], me = v.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, oe = n.get(v), pe = v.isWebGLMultipleRenderTargets === !0;
      if (pe)
        for (let xe = 0; xe < b.length; xe++)
          t.bindFramebuffer(s.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + xe, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, oe.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + xe, s.TEXTURE_2D, null, 0);
      t.bindFramebuffer(s.READ_FRAMEBUFFER, oe.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, oe.__webglFramebuffer);
      for (let xe = 0; xe < b.length; xe++) {
        ne.push(s.COLOR_ATTACHMENT0 + xe), v.depthBuffer && ne.push(me);
        const De = oe.__ignoreDepthValues !== void 0 ? oe.__ignoreDepthValues : !1;
        if (De === !1 && (v.depthBuffer && ($ |= s.DEPTH_BUFFER_BIT), v.stencilBuffer && ($ |= s.STENCIL_BUFFER_BIT)), pe && s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, oe.__webglColorRenderbuffer[xe]), De === !0 && (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [me]), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [me])), pe) {
          const se = n.get(b[xe]).__webglTexture;
          s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, se, 0);
        }
        s.blitFramebuffer(0, 0, U, re, 0, 0, U, re, $, s.NEAREST), l && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, ne);
      }
      if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), pe)
        for (let xe = 0; xe < b.length; xe++) {
          t.bindFramebuffer(s.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + xe, s.RENDERBUFFER, oe.__webglColorRenderbuffer[xe]);
          const De = n.get(b[xe]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, oe.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + xe, s.TEXTURE_2D, De, 0);
        }
      t.bindFramebuffer(s.DRAW_FRAMEBUFFER, oe.__webglMultisampledFramebuffer);
    }
  }
  function Te(v) {
    return Math.min(i.maxSamples, v.samples);
  }
  function be(v) {
    const b = n.get(v);
    return o && v.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && b.__useRenderToTexture !== !1;
  }
  function Ze(v) {
    const b = a.render.frame;
    A.get(v) !== b && (A.set(v, b), v.update());
  }
  function Fe(v, b) {
    const U = v.colorSpace, re = v.format, $ = v.type;
    return v.isCompressedTexture === !0 || v.isVideoTexture === !0 || v.format === La || U !== pt && U !== Nt && (et.getTransfer(U) === at ? o === !1 ? e.has("EXT_sRGB") === !0 && re === Ct ? (v.format = La, v.minFilter = bt, v.generateMipmaps = !1) : b = Rl.sRGBToLinear(b) : (re !== Ct || $ !== ft) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), b;
  }
  this.allocateTextureUnit = D, this.resetTextureUnits = ie, this.setTexture2D = Q, this.setTexture2DArray = q, this.setTexture3D = N, this.setTextureCube = H, this.rebindTextures = Ie, this.setupRenderTarget = P, this.updateRenderTargetMipmap = tt, this.updateMultisampleRenderTarget = _e, this.setupDepthRenderbuffer = Oe, this.setupFrameBufferTexture = de, this.useMultisampledRTT = be;
}
function Wg(s, e, t) {
  const n = t.isWebGL2;
  function i(r, a = Nt) {
    let o;
    const c = et.getTransfer(a);
    if (r === ft) return s.UNSIGNED_BYTE;
    if (r === xl) return s.UNSIGNED_SHORT_4_4_4_4;
    if (r === Cl) return s.UNSIGNED_SHORT_5_5_5_1;
    if (r === ph) return s.BYTE;
    if (r === gh) return s.SHORT;
    if (r === za) return s.UNSIGNED_SHORT;
    if (r === bl) return s.INT;
    if (r === Pn) return s.UNSIGNED_INT;
    if (r === Ut) return s.FLOAT;
    if (r === bn)
      return n ? s.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (r === mh) return s.ALPHA;
    if (r === Ct) return s.RGBA;
    if (r === Eh) return s.LUMINANCE;
    if (r === _h) return s.LUMINANCE_ALPHA;
    if (r === Jn) return s.DEPTH_COMPONENT;
    if (r === Oi) return s.DEPTH_STENCIL;
    if (r === La)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (r === Ri) return s.RED;
    if (r === Il) return s.RED_INTEGER;
    if (r === Di) return s.RG;
    if (r === Sl) return s.RG_INTEGER;
    if (r === vl) return s.RGBA_INTEGER;
    if (r === nr || r === Rr || r === Dr || r === ir)
      if (c === at)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (r === nr) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Rr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Dr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === ir) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (r === nr) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Rr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Dr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === ir) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Ma || r === po || r === ya || r === go)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (r === Ma) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === po) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === ya) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === go) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === Va)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Ba || r === Ta)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (r === Ba) return c === at ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (r === Ta) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === wa || r === mo || r === Eo || r === _o || r === cr || r === bo || r === xo || r === Co || r === Io || r === So || r === vo || r === Mo || r === yo || r === Bo)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (r === wa) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === mo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Eo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === _o) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === cr) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === bo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === xo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Co) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Io) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === So) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === vo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Mo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === yo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Bo) return c === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === sr || r === To || r === wo)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (r === sr) return c === at ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === To) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === wo) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (r === bh || r === Ro || r === Do || r === Lo)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (r === sr) return o.COMPRESSED_RED_RGTC1_EXT;
        if (r === Ro) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === Do) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === Lo) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === Kn ? n ? s.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null;
  }
  return { convert: i };
}
class qg extends Dt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class _n extends ct {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const jg = { type: "move" };
class na {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new _n(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new _n(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new _n(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const E of e.hand.values()) {
          const f = t.getJointPose(E, n), u = this._getHandJoint(l, E);
          f !== null && (u.matrix.fromArray(f.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = f.radius), u.visible = f !== null;
        }
        const A = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], d = A.position.distanceTo(h.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && d > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(jg)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new _n();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Yg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Xg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Kg {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new ut(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const n = t.cameras[0].viewport, i = new Cn({
          extensions: { fragDepth: !0 },
          vertexShader: Yg,
          fragmentShader: Xg,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: n.z },
            depthHeight: { value: n.w }
          }
        });
        this.mesh = new Lt(new br(20, 20), i);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
}
class Jg extends si {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", c = 1, l = null, A = null, h = null, d = null, p = null, g = null;
    const E = new Kg(), f = t.getContextAttributes();
    let u = null, x = null;
    const m = [], I = [], w = new ye();
    let T = null;
    const y = new Dt();
    y.layers.enable(1), y.viewport = new st();
    const W = new Dt();
    W.layers.enable(2), W.viewport = new st();
    const te = [y, W], _ = new qg();
    _.layers.enable(1), _.layers.enable(2);
    let M = null, K = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(z) {
      let Y = m[z];
      return Y === void 0 && (Y = new na(), m[z] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(z) {
      let Y = m[z];
      return Y === void 0 && (Y = new na(), m[z] = Y), Y.getGripSpace();
    }, this.getHand = function(z) {
      let Y = m[z];
      return Y === void 0 && (Y = new na(), m[z] = Y), Y.getHandSpace();
    };
    function ie(z) {
      const Y = I.indexOf(z.inputSource);
      if (Y === -1)
        return;
      const le = m[Y];
      le !== void 0 && (le.update(z.inputSource, z.frame, l || a), le.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function D() {
      i.removeEventListener("select", ie), i.removeEventListener("selectstart", ie), i.removeEventListener("selectend", ie), i.removeEventListener("squeeze", ie), i.removeEventListener("squeezestart", ie), i.removeEventListener("squeezeend", ie), i.removeEventListener("end", D), i.removeEventListener("inputsourceschange", L);
      for (let z = 0; z < m.length; z++) {
        const Y = I[z];
        Y !== null && (I[z] = null, m[z].disconnect(Y));
      }
      M = null, K = null, E.reset(), e.setRenderTarget(u), p = null, d = null, h = null, i = null, x = null, Ce.stop(), n.isPresenting = !1, e.setPixelRatio(T), e.setSize(w.width, w.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(z) {
      r = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(z) {
      o = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(z) {
      l = z;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(z) {
      if (i = z, i !== null) {
        if (u = e.getRenderTarget(), i.addEventListener("select", ie), i.addEventListener("selectstart", ie), i.addEventListener("selectend", ie), i.addEventListener("squeeze", ie), i.addEventListener("squeezestart", ie), i.addEventListener("squeezeend", ie), i.addEventListener("end", D), i.addEventListener("inputsourceschange", L), f.xrCompatible !== !0 && await t.makeXRCompatible(), T = e.getPixelRatio(), e.getSize(w), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Y = {
            antialias: i.renderState.layers === void 0 ? f.antialias : !0,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: r
          };
          p = new XRWebGLLayer(i, t, Y), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), x = new ni(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: Ct,
              type: ft,
              colorSpace: e.outputColorSpace,
              stencilBuffer: f.stencil
            }
          );
        } else {
          let Y = null, le = null, de = null;
          f.depth && (de = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Y = f.stencil ? Oi : Jn, le = f.stencil ? Kn : Pn);
          const ve = {
            colorFormat: t.RGBA8,
            depthFormat: de,
            scaleFactor: r
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(ve), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), x = new ni(
            d.textureWidth,
            d.textureHeight,
            {
              format: Ct,
              type: ft,
              depthTexture: new Vl(d.textureWidth, d.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, Y),
              stencilBuffer: f.stencil,
              colorSpace: e.outputColorSpace,
              samples: f.antialias ? 4 : 0
            }
          );
          const ge = e.properties.get(x);
          ge.__ignoreDepthValues = d.ignoreDepthValues;
        }
        x.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Ce.setContext(i), Ce.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function L(z) {
      for (let Y = 0; Y < z.removed.length; Y++) {
        const le = z.removed[Y], de = I.indexOf(le);
        de >= 0 && (I[de] = null, m[de].disconnect(le));
      }
      for (let Y = 0; Y < z.added.length; Y++) {
        const le = z.added[Y];
        let de = I.indexOf(le);
        if (de === -1) {
          for (let ge = 0; ge < m.length; ge++)
            if (ge >= I.length) {
              I.push(le), de = ge;
              break;
            } else if (I[ge] === null) {
              I[ge] = le, de = ge;
              break;
            }
          if (de === -1) break;
        }
        const ve = m[de];
        ve && ve.connect(le);
      }
    }
    const Q = new R(), q = new R();
    function N(z, Y, le) {
      Q.setFromMatrixPosition(Y.matrixWorld), q.setFromMatrixPosition(le.matrixWorld);
      const de = Q.distanceTo(q), ve = Y.projectionMatrix.elements, ge = le.projectionMatrix.elements, Oe = ve[14] / (ve[10] - 1), Ie = ve[14] / (ve[10] + 1), P = (ve[9] + 1) / ve[5], tt = (ve[9] - 1) / ve[5], _e = (ve[8] - 1) / ve[0], Te = (ge[8] + 1) / ge[0], be = Oe * _e, Ze = Oe * Te, Fe = de / (-_e + Te), v = Fe * -_e;
      Y.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(v), z.translateZ(Fe), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const b = Oe + Fe, U = Ie + Fe, re = be - v, $ = Ze + (de - v), ne = P * Ie / U * b, me = tt * Ie / U * b;
      z.projectionMatrix.makePerspective(re, $, ne, me, b, U), z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
    }
    function H(z, Y) {
      Y === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(Y.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function(z) {
      if (i === null) return;
      E.texture !== null && (z.near = E.depthNear, z.far = E.depthFar), _.near = W.near = y.near = z.near, _.far = W.far = y.far = z.far, (M !== _.near || K !== _.far) && (i.updateRenderState({
        depthNear: _.near,
        depthFar: _.far
      }), M = _.near, K = _.far, y.near = M, y.far = K, W.near = M, W.far = K, y.updateProjectionMatrix(), W.updateProjectionMatrix(), z.updateProjectionMatrix());
      const Y = z.parent, le = _.cameras;
      H(_, Y);
      for (let de = 0; de < le.length; de++)
        H(le[de], Y);
      le.length === 2 ? N(_, y, W) : _.projectionMatrix.copy(y.projectionMatrix), J(z, _, Y);
    };
    function J(z, Y, le) {
      le === null ? z.matrix.copy(Y.matrixWorld) : (z.matrix.copy(le.matrixWorld), z.matrix.invert(), z.matrix.multiply(Y.matrixWorld)), z.matrix.decompose(z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0), z.projectionMatrix.copy(Y.projectionMatrix), z.projectionMatrixInverse.copy(Y.projectionMatrixInverse), z.isPerspectiveCamera && (z.fov = Gi * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z.zoom = 1);
    }
    this.getCamera = function() {
      return _;
    }, this.getFoveation = function() {
      if (!(d === null && p === null))
        return c;
    }, this.setFoveation = function(z) {
      c = z, d !== null && (d.fixedFoveation = z), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = z);
    }, this.hasDepthSensing = function() {
      return E.texture !== null;
    };
    let Z = null;
    function ue(z, Y) {
      if (A = Y.getViewerPose(l || a), g = Y, A !== null) {
        const le = A.views;
        p !== null && (e.setRenderTargetFramebuffer(x, p.framebuffer), e.setRenderTarget(x));
        let de = !1;
        le.length !== _.cameras.length && (_.cameras.length = 0, de = !0);
        for (let ge = 0; ge < le.length; ge++) {
          const Oe = le[ge];
          let Ie = null;
          if (p !== null)
            Ie = p.getViewport(Oe);
          else {
            const tt = h.getViewSubImage(d, Oe);
            Ie = tt.viewport, ge === 0 && (e.setRenderTargetTextures(
              x,
              tt.colorTexture,
              d.ignoreDepthValues ? void 0 : tt.depthStencilTexture
            ), e.setRenderTarget(x));
          }
          let P = te[ge];
          P === void 0 && (P = new Dt(), P.layers.enable(ge), P.viewport = new st(), te[ge] = P), P.matrix.fromArray(Oe.transform.matrix), P.matrix.decompose(P.position, P.quaternion, P.scale), P.projectionMatrix.fromArray(Oe.projectionMatrix), P.projectionMatrixInverse.copy(P.projectionMatrix).invert(), P.viewport.set(Ie.x, Ie.y, Ie.width, Ie.height), ge === 0 && (_.matrix.copy(P.matrix), _.matrix.decompose(_.position, _.quaternion, _.scale)), de === !0 && _.cameras.push(P);
        }
        const ve = i.enabledFeatures;
        if (ve && ve.includes("depth-sensing")) {
          const ge = h.getDepthInformation(le[0]);
          ge && ge.isValid && ge.texture && E.init(e, ge, i.renderState);
        }
      }
      for (let le = 0; le < m.length; le++) {
        const de = I[le], ve = m[le];
        de !== null && ve !== void 0 && ve.update(de, Y, l || a);
      }
      E.render(e, _), Z && Z(z, Y), Y.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Y }), g = null;
    }
    const Ce = new zl();
    Ce.setAnimationLoop(ue), this.setAnimationLoop = function(z) {
      Z = z;
    }, this.dispose = function() {
    };
  }
}
function Zg(s, e) {
  function t(f, u) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), u.value.copy(f.matrix);
  }
  function n(f, u) {
    u.color.getRGB(f.fogColor.value, Ol(s)), u.isFog ? (f.fogNear.value = u.near, f.fogFar.value = u.far) : u.isFogExp2 && (f.fogDensity.value = u.density);
  }
  function i(f, u, x, m, I) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? r(f, u) : u.isMeshToonMaterial ? (r(f, u), h(f, u)) : u.isMeshPhongMaterial ? (r(f, u), A(f, u)) : u.isMeshStandardMaterial ? (r(f, u), d(f, u), u.isMeshPhysicalMaterial && p(f, u, I)) : u.isMeshMatcapMaterial ? (r(f, u), g(f, u)) : u.isMeshDepthMaterial ? r(f, u) : u.isMeshDistanceMaterial ? (r(f, u), E(f, u)) : u.isMeshNormalMaterial ? r(f, u) : u.isLineBasicMaterial ? (a(f, u), u.isLineDashedMaterial && o(f, u)) : u.isPointsMaterial ? c(f, u, x, m) : u.isSpriteMaterial ? l(f, u) : u.isShadowMaterial ? (f.color.value.copy(u.color), f.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function r(f, u) {
    f.opacity.value = u.opacity, u.color && f.diffuse.value.copy(u.color), u.emissive && f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (f.map.value = u.map, t(u.map, f.mapTransform)), u.alphaMap && (f.alphaMap.value = u.alphaMap, t(u.alphaMap, f.alphaMapTransform)), u.bumpMap && (f.bumpMap.value = u.bumpMap, t(u.bumpMap, f.bumpMapTransform), f.bumpScale.value = u.bumpScale, u.side === Pt && (f.bumpScale.value *= -1)), u.normalMap && (f.normalMap.value = u.normalMap, t(u.normalMap, f.normalMapTransform), f.normalScale.value.copy(u.normalScale), u.side === Pt && f.normalScale.value.negate()), u.displacementMap && (f.displacementMap.value = u.displacementMap, t(u.displacementMap, f.displacementMapTransform), f.displacementScale.value = u.displacementScale, f.displacementBias.value = u.displacementBias), u.emissiveMap && (f.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, f.emissiveMapTransform)), u.specularMap && (f.specularMap.value = u.specularMap, t(u.specularMap, f.specularMapTransform)), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
    const x = e.get(u).envMap;
    if (x && (f.envMap.value = x, f.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = u.reflectivity, f.ior.value = u.ior, f.refractionRatio.value = u.refractionRatio), u.lightMap) {
      f.lightMap.value = u.lightMap;
      const m = s._useLegacyLights === !0 ? Math.PI : 1;
      f.lightMapIntensity.value = u.lightMapIntensity * m, t(u.lightMap, f.lightMapTransform);
    }
    u.aoMap && (f.aoMap.value = u.aoMap, f.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, f.aoMapTransform));
  }
  function a(f, u) {
    f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, u.map && (f.map.value = u.map, t(u.map, f.mapTransform));
  }
  function o(f, u) {
    f.dashSize.value = u.dashSize, f.totalSize.value = u.dashSize + u.gapSize, f.scale.value = u.scale;
  }
  function c(f, u, x, m) {
    f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, f.size.value = u.size * x, f.scale.value = m * 0.5, u.map && (f.map.value = u.map, t(u.map, f.uvTransform)), u.alphaMap && (f.alphaMap.value = u.alphaMap, t(u.alphaMap, f.alphaMapTransform)), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
  }
  function l(f, u) {
    f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, f.rotation.value = u.rotation, u.map && (f.map.value = u.map, t(u.map, f.mapTransform)), u.alphaMap && (f.alphaMap.value = u.alphaMap, t(u.alphaMap, f.alphaMapTransform)), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
  }
  function A(f, u) {
    f.specular.value.copy(u.specular), f.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function h(f, u) {
    u.gradientMap && (f.gradientMap.value = u.gradientMap);
  }
  function d(f, u) {
    f.metalness.value = u.metalness, u.metalnessMap && (f.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, f.metalnessMapTransform)), f.roughness.value = u.roughness, u.roughnessMap && (f.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, f.roughnessMapTransform)), e.get(u).envMap && (f.envMapIntensity.value = u.envMapIntensity);
  }
  function p(f, u, x) {
    f.ior.value = u.ior, u.sheen > 0 && (f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), f.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (f.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, f.sheenColorMapTransform)), u.sheenRoughnessMap && (f.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, f.sheenRoughnessMapTransform))), u.clearcoat > 0 && (f.clearcoat.value = u.clearcoat, f.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (f.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, f.clearcoatMapTransform)), u.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (f.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === Pt && f.clearcoatNormalScale.value.negate())), u.iridescence > 0 && (f.iridescence.value = u.iridescence, f.iridescenceIOR.value = u.iridescenceIOR, f.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (f.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, f.iridescenceMapTransform)), u.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), u.transmission > 0 && (f.transmission.value = u.transmission, f.transmissionSamplerMap.value = x.texture, f.transmissionSamplerSize.value.set(x.width, x.height), u.transmissionMap && (f.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, f.transmissionMapTransform)), f.thickness.value = u.thickness, u.thicknessMap && (f.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = u.attenuationDistance, f.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (f.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (f.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = u.specularIntensity, f.specularColor.value.copy(u.specularColor), u.specularColorMap && (f.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, f.specularColorMapTransform)), u.specularIntensityMap && (f.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function g(f, u) {
    u.matcap && (f.matcap.value = u.matcap);
  }
  function E(f, u) {
    const x = e.get(u).light;
    f.referencePosition.value.setFromMatrixPosition(x.matrixWorld), f.nearDistance.value = x.shadow.camera.near, f.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function $g(s, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(x, m) {
    const I = m.program;
    n.uniformBlockBinding(x, I);
  }
  function l(x, m) {
    let I = i[x.id];
    I === void 0 && (g(x), I = A(x), i[x.id] = I, x.addEventListener("dispose", f));
    const w = m.program;
    n.updateUBOMapping(x, w);
    const T = e.render.frame;
    r[x.id] !== T && (d(x), r[x.id] = T);
  }
  function A(x) {
    const m = h();
    x.__bindingPointIndex = m;
    const I = s.createBuffer(), w = x.__size, T = x.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, I), s.bufferData(s.UNIFORM_BUFFER, w, T), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, m, I), I;
  }
  function h() {
    for (let x = 0; x < o; x++)
      if (a.indexOf(x) === -1)
        return a.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(x) {
    const m = i[x.id], I = x.uniforms, w = x.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, m);
    for (let T = 0, y = I.length; T < y; T++) {
      const W = Array.isArray(I[T]) ? I[T] : [I[T]];
      for (let te = 0, _ = W.length; te < _; te++) {
        const M = W[te];
        if (p(M, T, te, w) === !0) {
          const K = M.__offset, ie = Array.isArray(M.value) ? M.value : [M.value];
          let D = 0;
          for (let L = 0; L < ie.length; L++) {
            const Q = ie[L], q = E(Q);
            typeof Q == "number" || typeof Q == "boolean" ? (M.__data[0] = Q, s.bufferSubData(s.UNIFORM_BUFFER, K + D, M.__data)) : Q.isMatrix3 ? (M.__data[0] = Q.elements[0], M.__data[1] = Q.elements[1], M.__data[2] = Q.elements[2], M.__data[3] = 0, M.__data[4] = Q.elements[3], M.__data[5] = Q.elements[4], M.__data[6] = Q.elements[5], M.__data[7] = 0, M.__data[8] = Q.elements[6], M.__data[9] = Q.elements[7], M.__data[10] = Q.elements[8], M.__data[11] = 0) : (Q.toArray(M.__data, D), D += q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, K, M.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function p(x, m, I, w) {
    const T = x.value, y = m + "_" + I;
    if (w[y] === void 0)
      return typeof T == "number" || typeof T == "boolean" ? w[y] = T : w[y] = T.clone(), !0;
    {
      const W = w[y];
      if (typeof T == "number" || typeof T == "boolean") {
        if (W !== T)
          return w[y] = T, !0;
      } else if (W.equals(T) === !1)
        return W.copy(T), !0;
    }
    return !1;
  }
  function g(x) {
    const m = x.uniforms;
    let I = 0;
    const w = 16;
    for (let y = 0, W = m.length; y < W; y++) {
      const te = Array.isArray(m[y]) ? m[y] : [m[y]];
      for (let _ = 0, M = te.length; _ < M; _++) {
        const K = te[_], ie = Array.isArray(K.value) ? K.value : [K.value];
        for (let D = 0, L = ie.length; D < L; D++) {
          const Q = ie[D], q = E(Q), N = I % w;
          N !== 0 && w - N < q.boundary && (I += w - N), K.__data = new Float32Array(q.storage / Float32Array.BYTES_PER_ELEMENT), K.__offset = I, I += q.storage;
        }
      }
    }
    const T = I % w;
    return T > 0 && (I += w - T), x.__size = I, x.__cache = {}, this;
  }
  function E(x) {
    const m = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" || typeof x == "boolean" ? (m.boundary = 4, m.storage = 4) : x.isVector2 ? (m.boundary = 8, m.storage = 8) : x.isVector3 || x.isColor ? (m.boundary = 16, m.storage = 12) : x.isVector4 ? (m.boundary = 16, m.storage = 16) : x.isMatrix3 ? (m.boundary = 48, m.storage = 48) : x.isMatrix4 ? (m.boundary = 64, m.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), m;
  }
  function f(x) {
    const m = x.target;
    m.removeEventListener("dispose", f);
    const I = a.indexOf(m.__bindingPointIndex);
    a.splice(I, 1), s.deleteBuffer(i[m.id]), delete i[m.id], delete r[m.id];
  }
  function u() {
    for (const x in i)
      s.deleteBuffer(i[x]);
    a = [], i = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: u
  };
}
class Kl {
  constructor(e = {}) {
    const {
      canvas: t = jh(),
      context: n = null,
      depth: i = !0,
      stencil: r = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: A = "default",
      failIfMajorPerformanceCaveat: h = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = a;
    const p = new Uint32Array(4), g = new Int32Array(4);
    let E = null, f = null;
    const u = [], x = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ot, this._useLegacyLights = !1, this.toneMapping = Nn, this.toneMappingExposure = 1;
    const m = this;
    let I = !1, w = 0, T = 0, y = null, W = -1, te = null;
    const _ = new st(), M = new st();
    let K = null;
    const ie = new Ne(0);
    let D = 0, L = t.width, Q = t.height, q = 1, N = null, H = null;
    const J = new st(0, 0, L, Q), Z = new st(0, 0, L, Q);
    let ue = !1;
    const Ce = new qa();
    let z = !1, Y = !1, le = null;
    const de = new Re(), ve = new ye(), ge = new R(), Oe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ie() {
      return y === null ? q : 1;
    }
    let P = n;
    function tt(C, F) {
      for (let G = 0; G < C.length; G++) {
        const V = C[G], k = t.getContext(V, F);
        if (k !== null) return k;
      }
      return null;
    }
    try {
      const C = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: A,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ha}`), t.addEventListener("webglcontextlost", ce, !1), t.addEventListener("webglcontextrestored", S, !1), t.addEventListener("webglcontextcreationerror", j, !1), P === null) {
        const F = ["webgl2", "webgl", "experimental-webgl"];
        if (m.isWebGL1Renderer === !0 && F.shift(), P = tt(F, C), P === null)
          throw tt(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && P instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), P.getShaderPrecisionFormat === void 0 && (P.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (C) {
      throw console.error("THREE.WebGLRenderer: " + C.message), C;
    }
    let _e, Te, be, Ze, Fe, v, b, U, re, $, ne, me, oe, pe, xe, De, se, Ke, ze, Ue, Se, fe, ke, B;
    function ae() {
      _e = new ap(P), Te = new ep(P, _e, e), _e.init(Te), fe = new Wg(P, _e, Te), be = new zg(P, _e, Te), Ze = new lp(P), Fe = new Tg(), v = new Vg(P, _e, be, Fe, Te, fe, Ze), b = new np(m), U = new rp(m), re = new gd(P, Te), ke = new Zf(P, _e, re, Te), $ = new op(P, re, Ze, ke), ne = new up(P, $, re, Ze), ze = new dp(P, Te, v), De = new tp(Fe), me = new Bg(m, b, U, _e, Te, ke, De), oe = new Zg(m, Fe), pe = new Rg(), xe = new Ng(_e, Te), Ke = new Jf(m, b, U, be, ne, d, c), se = new Hg(m, ne, Te), B = new $g(P, Ze, Te, be), Ue = new $f(P, _e, Ze, Te), Se = new cp(P, _e, Ze, Te), Ze.programs = me.programs, m.capabilities = Te, m.extensions = _e, m.properties = Fe, m.renderLists = pe, m.shadowMap = se, m.state = be, m.info = Ze;
    }
    ae();
    const ee = new Jg(m, P);
    this.xr = ee, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const C = _e.get("WEBGL_lose_context");
      C && C.loseContext();
    }, this.forceContextRestore = function() {
      const C = _e.get("WEBGL_lose_context");
      C && C.restoreContext();
    }, this.getPixelRatio = function() {
      return q;
    }, this.setPixelRatio = function(C) {
      C !== void 0 && (q = C, this.setSize(L, Q, !1));
    }, this.getSize = function(C) {
      return C.set(L, Q);
    }, this.setSize = function(C, F, G = !0) {
      if (ee.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      L = C, Q = F, t.width = Math.floor(C * q), t.height = Math.floor(F * q), G === !0 && (t.style.width = C + "px", t.style.height = F + "px"), this.setViewport(0, 0, C, F);
    }, this.getDrawingBufferSize = function(C) {
      return C.set(L * q, Q * q).floor();
    }, this.setDrawingBufferSize = function(C, F, G) {
      L = C, Q = F, q = G, t.width = Math.floor(C * G), t.height = Math.floor(F * G), this.setViewport(0, 0, C, F);
    }, this.getCurrentViewport = function(C) {
      return C.copy(_);
    }, this.getViewport = function(C) {
      return C.copy(J);
    }, this.setViewport = function(C, F, G, V) {
      C.isVector4 ? J.set(C.x, C.y, C.z, C.w) : J.set(C, F, G, V), be.viewport(_.copy(J).multiplyScalar(q).floor());
    }, this.getScissor = function(C) {
      return C.copy(Z);
    }, this.setScissor = function(C, F, G, V) {
      C.isVector4 ? Z.set(C.x, C.y, C.z, C.w) : Z.set(C, F, G, V), be.scissor(M.copy(Z).multiplyScalar(q).floor());
    }, this.getScissorTest = function() {
      return ue;
    }, this.setScissorTest = function(C) {
      be.setScissorTest(ue = C);
    }, this.setOpaqueSort = function(C) {
      N = C;
    }, this.setTransparentSort = function(C) {
      H = C;
    }, this.getClearColor = function(C) {
      return C.copy(Ke.getClearColor());
    }, this.setClearColor = function() {
      Ke.setClearColor.apply(Ke, arguments);
    }, this.getClearAlpha = function() {
      return Ke.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ke.setClearAlpha.apply(Ke, arguments);
    }, this.clear = function(C = !0, F = !0, G = !0) {
      let V = 0;
      if (C) {
        let k = !1;
        if (y !== null) {
          const Ee = y.texture.format;
          k = Ee === vl || Ee === Sl || Ee === Il;
        }
        if (k) {
          const Ee = y.texture.type, Me = Ee === ft || Ee === Pn || Ee === za || Ee === Kn || Ee === xl || Ee === Cl, Pe = Ke.getClearColor(), Qe = Ke.getClearAlpha(), qe = Pe.r, He = Pe.g, Ve = Pe.b;
          Me ? (p[0] = qe, p[1] = He, p[2] = Ve, p[3] = Qe, P.clearBufferuiv(P.COLOR, 0, p)) : (g[0] = qe, g[1] = He, g[2] = Ve, g[3] = Qe, P.clearBufferiv(P.COLOR, 0, g));
        } else
          V |= P.COLOR_BUFFER_BIT;
      }
      F && (V |= P.DEPTH_BUFFER_BIT), G && (V |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), P.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ce, !1), t.removeEventListener("webglcontextrestored", S, !1), t.removeEventListener("webglcontextcreationerror", j, !1), pe.dispose(), xe.dispose(), Fe.dispose(), b.dispose(), U.dispose(), ne.dispose(), ke.dispose(), B.dispose(), me.dispose(), ee.dispose(), ee.removeEventListener("sessionstart", Je), ee.removeEventListener("sessionend", Le), le && (le.dispose(), le = null), rt.stop();
    };
    function ce(C) {
      C.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0;
    }
    function S() {
      console.log("THREE.WebGLRenderer: Context Restored."), I = !1;
      const C = Ze.autoReset, F = se.enabled, G = se.autoUpdate, V = se.needsUpdate, k = se.type;
      ae(), Ze.autoReset = C, se.enabled = F, se.autoUpdate = G, se.needsUpdate = V, se.type = k;
    }
    function j(C) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", C.statusMessage);
    }
    function X(C) {
      const F = C.target;
      F.removeEventListener("dispose", X), O(F);
    }
    function O(C) {
      Ae(C), Fe.remove(C);
    }
    function Ae(C) {
      const F = Fe.get(C).programs;
      F !== void 0 && (F.forEach(function(G) {
        me.releaseProgram(G);
      }), C.isShaderMaterial && me.releaseShaderCache(C));
    }
    this.renderBufferDirect = function(C, F, G, V, k, Ee) {
      F === null && (F = Oe);
      const Me = k.isMesh && k.matrixWorld.determinant() < 0, Pe = vA(C, F, G, V, k);
      be.setMaterial(V, Me);
      let Qe = G.index, qe = 1;
      if (V.wireframe === !0) {
        if (Qe = $.getWireframeAttribute(G), Qe === void 0) return;
        qe = 2;
      }
      const He = G.drawRange, Ve = G.attributes.position;
      let ht = He.start * qe, Qt = (He.start + He.count) * qe;
      Ee !== null && (ht = Math.max(ht, Ee.start * qe), Qt = Math.min(Qt, (Ee.start + Ee.count) * qe)), Qe !== null ? (ht = Math.max(ht, 0), Qt = Math.min(Qt, Qe.count)) : Ve != null && (ht = Math.max(ht, 0), Qt = Math.min(Qt, Ve.count));
      const Et = Qt - ht;
      if (Et < 0 || Et === 1 / 0) return;
      ke.setup(k, V, Pe, G, Qe);
      let ln, lt = Ue;
      if (Qe !== null && (ln = re.get(Qe), lt = Se, lt.setIndex(ln)), k.isMesh)
        V.wireframe === !0 ? (be.setLineWidth(V.wireframeLinewidth * Ie()), lt.setMode(P.LINES)) : lt.setMode(P.TRIANGLES);
      else if (k.isLine) {
        let je = V.linewidth;
        je === void 0 && (je = 1), be.setLineWidth(je * Ie()), k.isLineSegments ? lt.setMode(P.LINES) : k.isLineLoop ? lt.setMode(P.LINE_LOOP) : lt.setMode(P.LINE_STRIP);
      } else k.isPoints ? lt.setMode(P.POINTS) : k.isSprite && lt.setMode(P.TRIANGLES);
      if (k.isBatchedMesh)
        lt.renderMultiDraw(k._multiDrawStarts, k._multiDrawCounts, k._multiDrawCount);
      else if (k.isInstancedMesh)
        lt.renderInstances(ht, Et, k.count);
      else if (G.isInstancedBufferGeometry) {
        const je = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0, Mr = Math.min(G.instanceCount, je);
        lt.renderInstances(ht, Et, Mr);
      } else
        lt.render(ht, Et);
    };
    function we(C, F, G) {
      C.transparent === !0 && C.side === Kt && C.forceSinglePass === !1 ? (C.side = Pt, C.needsUpdate = !0, xs(C, F, G), C.side = xn, C.needsUpdate = !0, xs(C, F, G), C.side = Kt) : xs(C, F, G);
    }
    this.compile = function(C, F, G = null) {
      G === null && (G = C), f = xe.get(G), f.init(), x.push(f), G.traverseVisible(function(k) {
        k.isLight && k.layers.test(F.layers) && (f.pushLight(k), k.castShadow && f.pushShadow(k));
      }), C !== G && C.traverseVisible(function(k) {
        k.isLight && k.layers.test(F.layers) && (f.pushLight(k), k.castShadow && f.pushShadow(k));
      }), f.setupLights(m._useLegacyLights);
      const V = /* @__PURE__ */ new Set();
      return C.traverse(function(k) {
        const Ee = k.material;
        if (Ee)
          if (Array.isArray(Ee))
            for (let Me = 0; Me < Ee.length; Me++) {
              const Pe = Ee[Me];
              we(Pe, G, k), V.add(Pe);
            }
          else
            we(Ee, G, k), V.add(Ee);
      }), x.pop(), f = null, V;
    }, this.compileAsync = function(C, F, G = null) {
      const V = this.compile(C, F, G);
      return new Promise((k) => {
        function Ee() {
          if (V.forEach(function(Me) {
            Fe.get(Me).currentProgram.isReady() && V.delete(Me);
          }), V.size === 0) {
            k(C);
            return;
          }
          setTimeout(Ee, 10);
        }
        _e.get("KHR_parallel_shader_compile") !== null ? Ee() : setTimeout(Ee, 10);
      });
    };
    let Be = null;
    function Ge(C) {
      Be && Be(C);
    }
    function Je() {
      rt.stop();
    }
    function Le() {
      rt.start();
    }
    const rt = new zl();
    rt.setAnimationLoop(Ge), typeof self < "u" && rt.setContext(self), this.setAnimationLoop = function(C) {
      Be = C, ee.setAnimationLoop(C), C === null ? rt.stop() : rt.start();
    }, ee.addEventListener("sessionstart", Je), ee.addEventListener("sessionend", Le), this.render = function(C, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (I === !0) return;
      C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(), ee.enabled === !0 && ee.isPresenting === !0 && (ee.cameraAutoUpdate === !0 && ee.updateCamera(F), F = ee.getCamera()), C.isScene === !0 && C.onBeforeRender(m, C, F, y), f = xe.get(C, x.length), f.init(), x.push(f), de.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), Ce.setFromProjectionMatrix(de), Y = this.localClippingEnabled, z = De.init(this.clippingPlanes, Y), E = pe.get(C, u.length), E.init(), u.push(E), It(C, F, 0, m.sortObjects), E.finish(), m.sortObjects === !0 && E.sort(N, H), this.info.render.frame++, z === !0 && De.beginShadows();
      const G = f.state.shadowsArray;
      if (se.render(G, C, F), z === !0 && De.endShadows(), this.info.autoReset === !0 && this.info.reset(), (ee.enabled === !1 || ee.isPresenting === !1 || ee.hasDepthSensing() === !1) && Ke.render(E, C), f.setupLights(m._useLegacyLights), F.isArrayCamera) {
        const V = F.cameras;
        for (let k = 0, Ee = V.length; k < Ee; k++) {
          const Me = V[k];
          bs(E, C, Me, Me.viewport);
        }
      } else
        bs(E, C, F);
      y !== null && (v.updateMultisampleRenderTarget(y), v.updateRenderTargetMipmap(y)), C.isScene === !0 && C.onAfterRender(m, C, F), ke.resetDefaultState(), W = -1, te = null, x.pop(), x.length > 0 ? f = x[x.length - 1] : f = null, u.pop(), u.length > 0 ? E = u[u.length - 1] : E = null;
    };
    function It(C, F, G, V) {
      if (C.visible === !1) return;
      if (C.layers.test(F.layers)) {
        if (C.isGroup)
          G = C.renderOrder;
        else if (C.isLOD)
          C.autoUpdate === !0 && C.update(F);
        else if (C.isLight)
          f.pushLight(C), C.castShadow && f.pushShadow(C);
        else if (C.isSprite) {
          if (!C.frustumCulled || Ce.intersectsSprite(C)) {
            V && ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);
            const Me = ne.update(C), Pe = C.material;
            Pe.visible && E.push(C, Me, Pe, G, ge.z, null);
          }
        } else if ((C.isMesh || C.isLine || C.isPoints) && (!C.frustumCulled || Ce.intersectsObject(C))) {
          const Me = ne.update(C), Pe = C.material;
          if (V && (C.boundingSphere !== void 0 ? (C.boundingSphere === null && C.computeBoundingSphere(), ge.copy(C.boundingSphere.center)) : (Me.boundingSphere === null && Me.computeBoundingSphere(), ge.copy(Me.boundingSphere.center)), ge.applyMatrix4(C.matrixWorld).applyMatrix4(de)), Array.isArray(Pe)) {
            const Qe = Me.groups;
            for (let qe = 0, He = Qe.length; qe < He; qe++) {
              const Ve = Qe[qe], ht = Pe[Ve.materialIndex];
              ht && ht.visible && E.push(C, Me, ht, G, ge.z, Ve);
            }
          } else Pe.visible && E.push(C, Me, Pe, G, ge.z, null);
        }
      }
      const Ee = C.children;
      for (let Me = 0, Pe = Ee.length; Me < Pe; Me++)
        It(Ee[Me], F, G, V);
    }
    function bs(C, F, G, V) {
      const k = C.opaque, Ee = C.transmissive, Me = C.transparent;
      f.setupLightsView(G), z === !0 && De.setGlobalState(m.clippingPlanes, G), Ee.length > 0 && Xi(k, Ee, F, G), V && be.viewport(_.copy(V)), k.length > 0 && ai(k, F, G), Ee.length > 0 && ai(Ee, F, G), Me.length > 0 && ai(Me, F, G), be.buffers.depth.setTest(!0), be.buffers.depth.setMask(!0), be.buffers.color.setMask(!0), be.setPolygonOffset(!1);
    }
    function Xi(C, F, G, V) {
      if ((G.isScene === !0 ? G.overrideMaterial : null) !== null)
        return;
      const Ee = Te.isWebGL2;
      le === null && (le = new ni(1, 1, {
        generateMipmaps: !0,
        type: _e.has("EXT_color_buffer_half_float") ? bn : ft,
        minFilter: rn,
        samples: Ee ? 4 : 0
      })), m.getDrawingBufferSize(ve), Ee ? le.setSize(ve.x, ve.y) : le.setSize(ur(ve.x), ur(ve.y));
      const Me = m.getRenderTarget();
      m.setRenderTarget(le), m.getClearColor(ie), D = m.getClearAlpha(), D < 1 && m.setClearColor(16777215, 0.5), m.clear();
      const Pe = m.toneMapping;
      m.toneMapping = Nn, ai(C, G, V), v.updateMultisampleRenderTarget(le), v.updateRenderTargetMipmap(le);
      let Qe = !1;
      for (let qe = 0, He = F.length; qe < He; qe++) {
        const Ve = F[qe], ht = Ve.object, Qt = Ve.geometry, Et = Ve.material, ln = Ve.group;
        if (Et.side === Kt && ht.layers.test(V.layers)) {
          const lt = Et.side;
          Et.side = Pt, Et.needsUpdate = !0, Sn(ht, G, V, Qt, Et, ln), Et.side = lt, Et.needsUpdate = !0, Qe = !0;
        }
      }
      Qe === !0 && (v.updateMultisampleRenderTarget(le), v.updateRenderTargetMipmap(le)), m.setRenderTarget(Me), m.setClearColor(ie, D), m.toneMapping = Pe;
    }
    function ai(C, F, G) {
      const V = F.isScene === !0 ? F.overrideMaterial : null;
      for (let k = 0, Ee = C.length; k < Ee; k++) {
        const Me = C[k], Pe = Me.object, Qe = Me.geometry, qe = V === null ? Me.material : V, He = Me.group;
        Pe.layers.test(G.layers) && Sn(Pe, F, G, Qe, qe, He);
      }
    }
    function Sn(C, F, G, V, k, Ee) {
      C.onBeforeRender(m, F, G, V, k, Ee), C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, C.matrixWorld), C.normalMatrix.getNormalMatrix(C.modelViewMatrix), k.onBeforeRender(m, F, G, V, C, Ee), k.transparent === !0 && k.side === Kt && k.forceSinglePass === !1 ? (k.side = Pt, k.needsUpdate = !0, m.renderBufferDirect(G, F, V, k, C, Ee), k.side = xn, k.needsUpdate = !0, m.renderBufferDirect(G, F, V, k, C, Ee), k.side = Kt) : m.renderBufferDirect(G, F, V, k, C, Ee), C.onAfterRender(m, F, G, V, k, Ee);
    }
    function xs(C, F, G) {
      F.isScene !== !0 && (F = Oe);
      const V = Fe.get(C), k = f.state.lights, Ee = f.state.shadowsArray, Me = k.state.version, Pe = me.getParameters(C, k.state, Ee, F, G), Qe = me.getProgramCacheKey(Pe);
      let qe = V.programs;
      V.environment = C.isMeshStandardMaterial ? F.environment : null, V.fog = F.fog, V.envMap = (C.isMeshStandardMaterial ? U : b).get(C.envMap || V.environment), qe === void 0 && (C.addEventListener("dispose", X), qe = /* @__PURE__ */ new Map(), V.programs = qe);
      let He = qe.get(Qe);
      if (He !== void 0) {
        if (V.currentProgram === He && V.lightsStateVersion === Me)
          return io(C, Pe), He;
      } else
        Pe.uniforms = me.getUniforms(C), C.onBuild(G, Pe, m), C.onBeforeCompile(Pe, m), He = me.acquireProgram(Pe, Qe), qe.set(Qe, He), V.uniforms = Pe.uniforms;
      const Ve = V.uniforms;
      return (!C.isShaderMaterial && !C.isRawShaderMaterial || C.clipping === !0) && (Ve.clippingPlanes = De.uniform), io(C, Pe), V.needsLights = yA(C), V.lightsStateVersion = Me, V.needsLights && (Ve.ambientLightColor.value = k.state.ambient, Ve.lightProbe.value = k.state.probe, Ve.directionalLights.value = k.state.directional, Ve.directionalLightShadows.value = k.state.directionalShadow, Ve.spotLights.value = k.state.spot, Ve.spotLightShadows.value = k.state.spotShadow, Ve.rectAreaLights.value = k.state.rectArea, Ve.ltc_1.value = k.state.rectAreaLTC1, Ve.ltc_2.value = k.state.rectAreaLTC2, Ve.pointLights.value = k.state.point, Ve.pointLightShadows.value = k.state.pointShadow, Ve.hemisphereLights.value = k.state.hemi, Ve.directionalShadowMap.value = k.state.directionalShadowMap, Ve.directionalShadowMatrix.value = k.state.directionalShadowMatrix, Ve.spotShadowMap.value = k.state.spotShadowMap, Ve.spotLightMatrix.value = k.state.spotLightMatrix, Ve.spotLightMap.value = k.state.spotLightMap, Ve.pointShadowMap.value = k.state.pointShadowMap, Ve.pointShadowMatrix.value = k.state.pointShadowMatrix), V.currentProgram = He, V.uniformsList = null, He;
    }
    function no(C) {
      if (C.uniformsList === null) {
        const F = C.currentProgram.getUniforms();
        C.uniformsList = rr.seqWithValue(F.seq, C.uniforms);
      }
      return C.uniformsList;
    }
    function io(C, F) {
      const G = Fe.get(C);
      G.outputColorSpace = F.outputColorSpace, G.batching = F.batching, G.instancing = F.instancing, G.instancingColor = F.instancingColor, G.skinning = F.skinning, G.morphTargets = F.morphTargets, G.morphNormals = F.morphNormals, G.morphColors = F.morphColors, G.morphTargetsCount = F.morphTargetsCount, G.numClippingPlanes = F.numClippingPlanes, G.numIntersection = F.numClipIntersection, G.vertexAlphas = F.vertexAlphas, G.vertexTangents = F.vertexTangents, G.toneMapping = F.toneMapping;
    }
    function vA(C, F, G, V, k) {
      F.isScene !== !0 && (F = Oe), v.resetTextureUnits();
      const Ee = F.fog, Me = V.isMeshStandardMaterial ? F.environment : null, Pe = y === null ? m.outputColorSpace : y.isXRRenderTarget === !0 ? y.texture.colorSpace : pt, Qe = (V.isMeshStandardMaterial ? U : b).get(V.envMap || Me), qe = V.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, He = !!G.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), Ve = !!G.morphAttributes.position, ht = !!G.morphAttributes.normal, Qt = !!G.morphAttributes.color;
      let Et = Nn;
      V.toneMapped && (y === null || y.isXRRenderTarget === !0) && (Et = m.toneMapping);
      const ln = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, lt = ln !== void 0 ? ln.length : 0, je = Fe.get(V), Mr = f.state.lights;
      if (z === !0 && (Y === !0 || C !== te)) {
        const Ht = C === te && V.id === W;
        De.setState(V, C, Ht);
      }
      let At = !1;
      V.version === je.__version ? (je.needsLights && je.lightsStateVersion !== Mr.state.version || je.outputColorSpace !== Pe || k.isBatchedMesh && je.batching === !1 || !k.isBatchedMesh && je.batching === !0 || k.isInstancedMesh && je.instancing === !1 || !k.isInstancedMesh && je.instancing === !0 || k.isSkinnedMesh && je.skinning === !1 || !k.isSkinnedMesh && je.skinning === !0 || k.isInstancedMesh && je.instancingColor === !0 && k.instanceColor === null || k.isInstancedMesh && je.instancingColor === !1 && k.instanceColor !== null || je.envMap !== Qe || V.fog === !0 && je.fog !== Ee || je.numClippingPlanes !== void 0 && (je.numClippingPlanes !== De.numPlanes || je.numIntersection !== De.numIntersection) || je.vertexAlphas !== qe || je.vertexTangents !== He || je.morphTargets !== Ve || je.morphNormals !== ht || je.morphColors !== Qt || je.toneMapping !== Et || Te.isWebGL2 === !0 && je.morphTargetsCount !== lt) && (At = !0) : (At = !0, je.__version = V.version);
      let Qn = je.currentProgram;
      At === !0 && (Qn = xs(V, F, k));
      let so = !1, Ki = !1, yr = !1;
      const Mt = Qn.getUniforms(), On = je.uniforms;
      if (be.useProgram(Qn.program) && (so = !0, Ki = !0, yr = !0), V.id !== W && (W = V.id, Ki = !0), so || te !== C) {
        Mt.setValue(P, "projectionMatrix", C.projectionMatrix), Mt.setValue(P, "viewMatrix", C.matrixWorldInverse);
        const Ht = Mt.map.cameraPosition;
        Ht !== void 0 && Ht.setValue(P, ge.setFromMatrixPosition(C.matrixWorld)), Te.logarithmicDepthBuffer && Mt.setValue(
          P,
          "logDepthBufFC",
          2 / (Math.log(C.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && Mt.setValue(P, "isOrthographic", C.isOrthographicCamera === !0), te !== C && (te = C, Ki = !0, yr = !0);
      }
      if (k.isSkinnedMesh) {
        Mt.setOptional(P, k, "bindMatrix"), Mt.setOptional(P, k, "bindMatrixInverse");
        const Ht = k.skeleton;
        Ht && (Te.floatVertexTextures ? (Ht.boneTexture === null && Ht.computeBoneTexture(), Mt.setValue(P, "boneTexture", Ht.boneTexture, v)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      k.isBatchedMesh && (Mt.setOptional(P, k, "batchingTexture"), Mt.setValue(P, "batchingTexture", k._matricesTexture, v));
      const Br = G.morphAttributes;
      if ((Br.position !== void 0 || Br.normal !== void 0 || Br.color !== void 0 && Te.isWebGL2 === !0) && ze.update(k, G, Qn), (Ki || je.receiveShadow !== k.receiveShadow) && (je.receiveShadow = k.receiveShadow, Mt.setValue(P, "receiveShadow", k.receiveShadow)), V.isMeshGouraudMaterial && V.envMap !== null && (On.envMap.value = Qe, On.flipEnvMap.value = Qe.isCubeTexture && Qe.isRenderTargetTexture === !1 ? -1 : 1), Ki && (Mt.setValue(P, "toneMappingExposure", m.toneMappingExposure), je.needsLights && MA(On, yr), Ee && V.fog === !0 && oe.refreshFogUniforms(On, Ee), oe.refreshMaterialUniforms(On, V, q, Q, le), rr.upload(P, no(je), On, v)), V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (rr.upload(P, no(je), On, v), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && Mt.setValue(P, "center", k.center), Mt.setValue(P, "modelViewMatrix", k.modelViewMatrix), Mt.setValue(P, "normalMatrix", k.normalMatrix), Mt.setValue(P, "modelMatrix", k.matrixWorld), V.isShaderMaterial || V.isRawShaderMaterial) {
        const Ht = V.uniformsGroups;
        for (let Tr = 0, BA = Ht.length; Tr < BA; Tr++)
          if (Te.isWebGL2) {
            const ro = Ht[Tr];
            B.update(ro, Qn), B.bind(ro, Qn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Qn;
    }
    function MA(C, F) {
      C.ambientLightColor.needsUpdate = F, C.lightProbe.needsUpdate = F, C.directionalLights.needsUpdate = F, C.directionalLightShadows.needsUpdate = F, C.pointLights.needsUpdate = F, C.pointLightShadows.needsUpdate = F, C.spotLights.needsUpdate = F, C.spotLightShadows.needsUpdate = F, C.rectAreaLights.needsUpdate = F, C.hemisphereLights.needsUpdate = F;
    }
    function yA(C) {
      return C.isMeshLambertMaterial || C.isMeshToonMaterial || C.isMeshPhongMaterial || C.isMeshStandardMaterial || C.isShadowMaterial || C.isShaderMaterial && C.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return T;
    }, this.getRenderTarget = function() {
      return y;
    }, this.setRenderTargetTextures = function(C, F, G) {
      Fe.get(C.texture).__webglTexture = F, Fe.get(C.depthTexture).__webglTexture = G;
      const V = Fe.get(C);
      V.__hasExternalTextures = !0, V.__hasExternalTextures && (V.__autoAllocateDepthBuffer = G === void 0, V.__autoAllocateDepthBuffer || _e.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), V.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(C, F) {
      const G = Fe.get(C);
      G.__webglFramebuffer = F, G.__useDefaultFramebuffer = F === void 0;
    }, this.setRenderTarget = function(C, F = 0, G = 0) {
      y = C, w = F, T = G;
      let V = !0, k = null, Ee = !1, Me = !1;
      if (C) {
        const Qe = Fe.get(C);
        Qe.__useDefaultFramebuffer !== void 0 ? (be.bindFramebuffer(P.FRAMEBUFFER, null), V = !1) : Qe.__webglFramebuffer === void 0 ? v.setupRenderTarget(C) : Qe.__hasExternalTextures && v.rebindTextures(C, Fe.get(C.texture).__webglTexture, Fe.get(C.depthTexture).__webglTexture);
        const qe = C.texture;
        (qe.isData3DTexture || qe.isDataArrayTexture || qe.isCompressedArrayTexture) && (Me = !0);
        const He = Fe.get(C).__webglFramebuffer;
        C.isWebGLCubeRenderTarget ? (Array.isArray(He[F]) ? k = He[F][G] : k = He[F], Ee = !0) : Te.isWebGL2 && C.samples > 0 && v.useMultisampledRTT(C) === !1 ? k = Fe.get(C).__webglMultisampledFramebuffer : Array.isArray(He) ? k = He[G] : k = He, _.copy(C.viewport), M.copy(C.scissor), K = C.scissorTest;
      } else
        _.copy(J).multiplyScalar(q).floor(), M.copy(Z).multiplyScalar(q).floor(), K = ue;
      if (be.bindFramebuffer(P.FRAMEBUFFER, k) && Te.drawBuffers && V && be.drawBuffers(C, k), be.viewport(_), be.scissor(M), be.setScissorTest(K), Ee) {
        const Qe = Fe.get(C.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + F, Qe.__webglTexture, G);
      } else if (Me) {
        const Qe = Fe.get(C.texture), qe = F || 0;
        P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, Qe.__webglTexture, G || 0, qe);
      }
      W = -1;
    }, this.readRenderTargetPixels = function(C, F, G, V, k, Ee, Me) {
      if (!(C && C.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Pe = Fe.get(C).__webglFramebuffer;
      if (C.isWebGLCubeRenderTarget && Me !== void 0 && (Pe = Pe[Me]), Pe) {
        be.bindFramebuffer(P.FRAMEBUFFER, Pe);
        try {
          const Qe = C.texture, qe = Qe.format, He = Qe.type;
          if (qe !== Ct && fe.convert(qe) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ve = He === bn && (_e.has("EXT_color_buffer_half_float") || Te.isWebGL2 && _e.has("EXT_color_buffer_float"));
          if (He !== ft && fe.convert(He) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(He === Ut && (Te.isWebGL2 || _e.has("OES_texture_float") || _e.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ve) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= C.width - V && G >= 0 && G <= C.height - k && P.readPixels(F, G, V, k, fe.convert(qe), fe.convert(He), Ee);
        } finally {
          const Qe = y !== null ? Fe.get(y).__webglFramebuffer : null;
          be.bindFramebuffer(P.FRAMEBUFFER, Qe);
        }
      }
    }, this.copyFramebufferToTexture = function(C, F, G = 0) {
      const V = Math.pow(2, -G), k = Math.floor(F.image.width * V), Ee = Math.floor(F.image.height * V);
      v.setTexture2D(F, 0), P.copyTexSubImage2D(P.TEXTURE_2D, G, 0, 0, C.x, C.y, k, Ee), be.unbindTexture();
    }, this.copyTextureToTexture = function(C, F, G, V = 0) {
      const k = F.image.width, Ee = F.image.height, Me = fe.convert(G.format), Pe = fe.convert(G.type);
      v.setTexture2D(G, 0), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, G.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, G.unpackAlignment), F.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, V, C.x, C.y, k, Ee, Me, Pe, F.image.data) : F.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, V, C.x, C.y, F.mipmaps[0].width, F.mipmaps[0].height, Me, F.mipmaps[0].data) : P.texSubImage2D(P.TEXTURE_2D, V, C.x, C.y, Me, Pe, F.image), V === 0 && G.generateMipmaps && P.generateMipmap(P.TEXTURE_2D), be.unbindTexture();
    }, this.copyTextureToTexture3D = function(C, F, G, V, k = 0) {
      if (m.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Ee = C.max.x - C.min.x + 1, Me = C.max.y - C.min.y + 1, Pe = C.max.z - C.min.z + 1, Qe = fe.convert(V.format), qe = fe.convert(V.type);
      let He;
      if (V.isData3DTexture)
        v.setTexture3D(V, 0), He = P.TEXTURE_3D;
      else if (V.isDataArrayTexture || V.isCompressedArrayTexture)
        v.setTexture2DArray(V, 0), He = P.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, V.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, V.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, V.unpackAlignment);
      const Ve = P.getParameter(P.UNPACK_ROW_LENGTH), ht = P.getParameter(P.UNPACK_IMAGE_HEIGHT), Qt = P.getParameter(P.UNPACK_SKIP_PIXELS), Et = P.getParameter(P.UNPACK_SKIP_ROWS), ln = P.getParameter(P.UNPACK_SKIP_IMAGES), lt = G.isCompressedTexture ? G.mipmaps[k] : G.image;
      P.pixelStorei(P.UNPACK_ROW_LENGTH, lt.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, lt.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, C.min.x), P.pixelStorei(P.UNPACK_SKIP_ROWS, C.min.y), P.pixelStorei(P.UNPACK_SKIP_IMAGES, C.min.z), G.isDataTexture || G.isData3DTexture ? P.texSubImage3D(He, k, F.x, F.y, F.z, Ee, Me, Pe, Qe, qe, lt.data) : G.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), P.compressedTexSubImage3D(He, k, F.x, F.y, F.z, Ee, Me, Pe, Qe, lt.data)) : P.texSubImage3D(He, k, F.x, F.y, F.z, Ee, Me, Pe, Qe, qe, lt), P.pixelStorei(P.UNPACK_ROW_LENGTH, Ve), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ht), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Qt), P.pixelStorei(P.UNPACK_SKIP_ROWS, Et), P.pixelStorei(P.UNPACK_SKIP_IMAGES, ln), k === 0 && V.generateMipmaps && P.generateMipmap(He), be.unbindTexture();
    }, this.initTexture = function(C) {
      C.isCubeTexture ? v.setTextureCube(C, 0) : C.isData3DTexture ? v.setTexture3D(C, 0) : C.isDataArrayTexture || C.isCompressedArrayTexture ? v.setTexture2DArray(C, 0) : v.setTexture2D(C, 0), be.unbindTexture();
    }, this.resetState = function() {
      w = 0, T = 0, y = null, be.reset(), ke.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return En;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Er ? "display-p3" : "srgb", t.unpackColorSpace = et.workingColorSpace === ms ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === ot ? Zn : yl;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Zn ? ot : pt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class em extends Kl {
}
em.prototype.isWebGL1Renderer = !0;
class pr {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new Ne(e), this.near = t, this.far = n;
  }
  clone() {
    return new pr(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class vc extends ct {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class Jl {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Da, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = $t();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return $n("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = $t()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = $t()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Tt = /* @__PURE__ */ new R();
class gs {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyMatrix4(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyNormalMatrix(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.transformDirection(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Jt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = nt(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = nt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = nt(t, this.array), n = nt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = nt(t, this.array), n = nt(n, this.array), i = nt(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = nt(t, this.array), n = nt(n, this.array), i = nt(i, this.array), r = nt(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new Ft(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new gs(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class Xa extends en {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Ne(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let vi;
const ns = /* @__PURE__ */ new R(), Mi = /* @__PURE__ */ new R(), yi = /* @__PURE__ */ new R(), Bi = /* @__PURE__ */ new ye(), is = /* @__PURE__ */ new ye(), Zl = /* @__PURE__ */ new Re(), zs = /* @__PURE__ */ new R(), ss = /* @__PURE__ */ new R(), Vs = /* @__PURE__ */ new R(), Mc = /* @__PURE__ */ new ye(), ia = /* @__PURE__ */ new ye(), yc = /* @__PURE__ */ new ye();
class $l extends ct {
  constructor(e = new Xa()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", vi === void 0) {
      vi = new qt();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new Jl(t, 5);
      vi.setIndex([0, 1, 2, 0, 2, 3]), vi.setAttribute("position", new gs(n, 3, 0, !1)), vi.setAttribute("uv", new gs(n, 2, 3, !1));
    }
    this.geometry = vi, this.material = e, this.center = new ye(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Mi.setFromMatrixScale(this.matrixWorld), Zl.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), yi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Mi.multiplyScalar(-yi.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && (r = Math.cos(n), i = Math.sin(n));
    const a = this.center;
    Ws(zs.set(-0.5, -0.5, 0), yi, a, Mi, i, r), Ws(ss.set(0.5, -0.5, 0), yi, a, Mi, i, r), Ws(Vs.set(0.5, 0.5, 0), yi, a, Mi, i, r), Mc.set(0, 0), ia.set(1, 0), yc.set(1, 1);
    let o = e.ray.intersectTriangle(zs, ss, Vs, !1, ns);
    if (o === null && (Ws(ss.set(-0.5, 0.5, 0), yi, a, Mi, i, r), ia.set(0, 1), o = e.ray.intersectTriangle(zs, Vs, ss, !1, ns), o === null))
      return;
    const c = e.ray.origin.distanceTo(ns);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: ns.clone(),
      uv: Zt.getInterpolation(ns, zs, ss, Vs, Mc, ia, yc, new ye()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Ws(s, e, t, n, i, r) {
  Bi.subVectors(s, t).addScalar(0.5).multiply(n), i !== void 0 ? (is.x = r * Bi.x - i * Bi.y, is.y = i * Bi.x + r * Bi.y) : is.copy(Bi), s.copy(e), s.x += is.x, s.y += is.y, s.applyMatrix4(Zl);
}
const Bc = /* @__PURE__ */ new R(), Tc = /* @__PURE__ */ new st(), wc = /* @__PURE__ */ new st(), tm = /* @__PURE__ */ new R(), Rc = /* @__PURE__ */ new Re(), qs = /* @__PURE__ */ new R(), sa = /* @__PURE__ */ new on(), Dc = /* @__PURE__ */ new Re(), ra = /* @__PURE__ */ new Es();
class nm extends Lt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = fo, this.bindMatrix = new Re(), this.bindMatrixInverse = new Re(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Wt()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, qs), this.boundingBox.expandByPoint(qs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new on()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, qs), this.boundingSphere.expandByPoint(qs);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), sa.copy(this.boundingSphere), sa.applyMatrix4(i), e.ray.intersectsSphere(sa) !== !1 && (Dc.copy(i).invert(), ra.copy(e.ray).applyMatrix4(Dc), !(this.boundingBox !== null && ra.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, ra)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new st(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === fo ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === fh ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Tc.fromBufferAttribute(i.attributes.skinIndex, e), wc.fromBufferAttribute(i.attributes.skinWeight, e), Bc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = wc.getComponent(r);
      if (a !== 0) {
        const o = Tc.getComponent(r);
        Rc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(tm.copy(Bc).applyMatrix4(Rc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class eA extends ct {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class tA extends ut {
  constructor(e = null, t = 1, n = 1, i, r, a, o, c, l = xt, A = xt, h, d) {
    super(null, a, o, c, l, A, i, r, h, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Lc = /* @__PURE__ */ new Re(), im = /* @__PURE__ */ new Re();
class Ka {
  constructor(e = [], t = []) {
    this.uuid = $t(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Re());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Re();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : im;
      Lc.multiplyMatrices(o, t[r]), Lc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Ka(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new tA(t, e, e, Ct, Ut);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new eA()), this.bones.push(a), this.boneInverses.push(new Re().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Na extends Ft {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Ti = /* @__PURE__ */ new Re(), Pc = /* @__PURE__ */ new Re(), js = [], Fc = /* @__PURE__ */ new Wt(), sm = /* @__PURE__ */ new Re(), rs = /* @__PURE__ */ new Lt(), as = /* @__PURE__ */ new on();
class rm extends Lt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Na(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, sm);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Wt()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ti), Fc.copy(e.boundingBox).applyMatrix4(Ti), this.boundingBox.union(Fc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new on()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ti), as.copy(e.boundingSphere).applyMatrix4(Ti), this.boundingSphere.union(as);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (rs.geometry = this.geometry, rs.material = this.material, rs.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), as.copy(this.boundingSphere), as.applyMatrix4(n), e.ray.intersectsSphere(as) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ti), Pc.multiplyMatrices(n, Ti), rs.matrixWorld = Pc, rs.raycast(e, js);
        for (let a = 0, o = js.length; a < o; a++) {
          const c = js[a];
          c.instanceId = r, c.object = this, t.push(c);
        }
        js.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Na(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class nA extends en {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ne(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Uc = /* @__PURE__ */ new R(), Nc = /* @__PURE__ */ new R(), Qc = /* @__PURE__ */ new Re(), aa = /* @__PURE__ */ new Es(), Ys = /* @__PURE__ */ new on();
class Ja extends ct {
  constructor(e = new qt(), t = new nA()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Uc.fromBufferAttribute(t, i - 1), Nc.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Uc.distanceTo(Nc);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ys.copy(n.boundingSphere), Ys.applyMatrix4(i), Ys.radius += r, e.ray.intersectsSphere(Ys) === !1) return;
    Qc.copy(i).invert(), aa.copy(e.ray).applyMatrix4(Qc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new R(), A = new R(), h = new R(), d = new R(), p = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const u = Math.max(0, a.start), x = Math.min(g.count, a.start + a.count);
      for (let m = u, I = x - 1; m < I; m += p) {
        const w = g.getX(m), T = g.getX(m + 1);
        if (l.fromBufferAttribute(f, w), A.fromBufferAttribute(f, T), aa.distanceSqToSegment(l, A, d, h) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const W = e.ray.origin.distanceTo(d);
        W < e.near || W > e.far || t.push({
          distance: W,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: m,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const u = Math.max(0, a.start), x = Math.min(f.count, a.start + a.count);
      for (let m = u, I = x - 1; m < I; m += p) {
        if (l.fromBufferAttribute(f, m), A.fromBufferAttribute(f, m + 1), aa.distanceSqToSegment(l, A, d, h) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const T = e.ray.origin.distanceTo(d);
        T < e.near || T > e.far || t.push({
          distance: T,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: m,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
const Oc = /* @__PURE__ */ new R(), kc = /* @__PURE__ */ new R();
class am extends Ja {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Oc.fromBufferAttribute(t, i), kc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Oc.distanceTo(kc);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class om extends Ja {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class iA extends en {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ne(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Gc = /* @__PURE__ */ new Re(), Qa = /* @__PURE__ */ new Es(), Xs = /* @__PURE__ */ new on(), Ks = /* @__PURE__ */ new R();
class cm extends ct {
  constructor(e = new qt(), t = new iA()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Xs.copy(n.boundingSphere), Xs.applyMatrix4(i), Xs.radius += r, e.ray.intersectsSphere(Xs) === !1) return;
    Gc.copy(i).invert(), Qa.copy(e.ray).applyMatrix4(Gc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, h = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start), p = Math.min(l.count, a.start + a.count);
      for (let g = d, E = p; g < E; g++) {
        const f = l.getX(g);
        Ks.fromBufferAttribute(h, f), Hc(Ks, f, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(h.count, a.start + a.count);
      for (let g = d, E = p; g < E; g++)
        Ks.fromBufferAttribute(h, g), Hc(Ks, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Hc(s, e, t, n, i, r, a) {
  const o = Qa.distanceSqToPoint(s);
  if (o < t) {
    const c = new R();
    Qa.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a
    });
  }
}
class Cr extends ut {
  constructor(e, t, n, i, r, a, o, c, l, A, h, d) {
    super(null, a, o, c, l, A, i, r, h, d), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class lm extends Cr {
  constructor(e, t, n, i, r, a) {
    super(e, t, n, r, a), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = Gt;
  }
}
class Am extends Cr {
  constructor(e, t, n) {
    super(void 0, e[0].width, e[0].height, t, n, ei), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
  }
}
class Za extends ut {
  constructor(e, t, n, i, r, a, o, c, l) {
    super(e, t, n, i, r, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Ir extends en {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ne(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Bl, this.normalScale = new ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class In extends Ir {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ye(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return vt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ne(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ne(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ne(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function Js(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function hm(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function dm(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function zc(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = s[o + c];
  }
  return i;
}
function sA(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push.apply(t, a)), r = s[i++];
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        a = r[n], a !== void 0 && (e.push(r.time), a.toArray(t, t.length)), r = s[i++];
      while (r !== void 0);
    else
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push(a)), r = s[i++];
      while (r !== void 0);
}
class _s {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = i, i = t[++n], e < i)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let c = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = r, r = t[--n - 1], e >= r)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[r + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class um extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Po,
      endingEnd: Po
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, a = e + 1, o = i[r], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Fo:
          r = e, o = 2 * t - n;
          break;
        case Uo:
          r = i.length - 2, o = t + i[r] - i[r + 1];
          break;
        default:
          r = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Fo:
          a = e, c = 2 * n - t;
          break;
        case Uo:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, A = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = r * A, this._offsetNext = a * A;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, A = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), E = g * g, f = E * g, u = -d * f + 2 * d * E - d * g, x = (1 + d) * f + (-1.5 - 2 * d) * E + (-0.5 + d) * g + 1, m = (-1 - p) * f + (1.5 + p) * E + 0.5 * g, I = p * f - p * E;
    for (let w = 0; w !== o; ++w)
      r[w] = u * a[A + w] + x * a[l + w] + m * a[c + w] + I * a[h + w];
    return r;
  }
}
class fm extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, A = (n - t) / (i - t), h = 1 - A;
    for (let d = 0; d !== o; ++d)
      r[d] = a[l + d] * h + a[c + d] * A;
    return r;
  }
}
class pm extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class cn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Js(t, this.TimeBufferType), this.values = Js(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Js(e.times, Array),
        values: Js(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new pm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new fm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new um(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case fs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ki:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Lr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return fs;
      case this.InterpolantFactoryMethodLinear:
        return ki;
      case this.InterpolantFactoryMethodSmooth:
        return Lr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, a = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== r; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), e = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), e = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && hm(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Lr, r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let c = !1;
      const l = e[o], A = e[o + 1];
      if (l !== A && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const h = o * n, d = h - n, p = h + n;
          for (let g = 0; g !== n; ++g) {
            const E = t[h + g];
            if (E !== t[d + g] || E !== t[p + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const h = o * n, d = a * n;
          for (let p = 0; p !== n; ++p)
            t[d + p] = t[h + p];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, c = a * n, l = 0; l !== n; ++l)
        t[c + l] = t[o + l];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
cn.prototype.TimeBufferType = Float32Array;
cn.prototype.ValueBufferType = Float32Array;
cn.prototype.DefaultInterpolation = ki;
class ji extends cn {
}
ji.prototype.ValueTypeName = "bool";
ji.prototype.ValueBufferType = Array;
ji.prototype.DefaultInterpolation = fs;
ji.prototype.InterpolantFactoryMethodLinear = void 0;
ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class rA extends cn {
}
rA.prototype.ValueTypeName = "color";
class zi extends cn {
}
zi.prototype.ValueTypeName = "number";
class gm extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let A = l + o; l !== A; l += 4)
      nn.slerpFlat(r, 0, a, l - o, a, l, c);
    return r;
  }
}
class ii extends cn {
  InterpolantFactoryMethodLinear(e) {
    return new gm(this.times, this.values, this.getValueSize(), e);
  }
}
ii.prototype.ValueTypeName = "quaternion";
ii.prototype.DefaultInterpolation = ki;
ii.prototype.InterpolantFactoryMethodSmooth = void 0;
class Yi extends cn {
}
Yi.prototype.ValueTypeName = "string";
Yi.prototype.ValueBufferType = Array;
Yi.prototype.DefaultInterpolation = fs;
Yi.prototype.InterpolantFactoryMethodLinear = void 0;
Yi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Vi extends cn {
}
Vi.prototype.ValueTypeName = "vector";
class mm {
  constructor(e, t = -1, n, i = xh) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = $t(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(_m(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, a = n.length; r !== a; ++r)
      t.push(cn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, a = [];
    for (let o = 0; o < r; o++) {
      let c = [], l = [];
      c.push(
        (o + r - 1) % r,
        o,
        (o + 1) % r
      ), l.push(0, 1, 0);
      const A = dm(c);
      c = zc(c, 1, A), l = zc(l, 1, A), !i && c[0] === 0 && (c.push(r), l.push(l[0])), a.push(
        new zi(
          ".morphTargetInfluences[" + t[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], A = l.name.match(r);
      if (A && A.length > 1) {
        const h = A[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, d, p, g, E) {
      if (p.length !== 0) {
        const f = [], u = [];
        sA(p, f, u, g), f.length !== 0 && E.push(new h(d, f, u));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let h = 0; h < l.length; h++) {
      const d = l[h].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let E = 0; E < d[g].morphTargets.length; E++)
                p[d[g].morphTargets[E]] = -1;
          for (const E in p) {
            const f = [], u = [];
            for (let x = 0; x !== d[g].morphTargets.length; ++x) {
              const m = d[g];
              f.push(m.time), u.push(m.morphTarget === E ? 1 : 0);
            }
            i.push(new zi(".morphTargetInfluence[" + E + "]", f, u));
          }
          c = p.length * a;
        } else {
          const p = ".bones[" + t[h].name + "]";
          n(
            Vi,
            p + ".position",
            d,
            "pos",
            i
          ), n(
            ii,
            p + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Vi,
            p + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Em(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return zi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Vi;
    case "color":
      return rA;
    case "quaternion":
      return ii;
    case "bool":
    case "boolean":
      return ji;
    case "string":
      return Yi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function _m(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Em(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    sA(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const Fn = {
  enabled: !1,
  files: {},
  add: function(s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function(s) {
    if (this.enabled !== !1)
      return this.files[s];
  },
  remove: function(s) {
    delete this.files[s];
  },
  clear: function() {
    this.files = {};
  }
};
class bm {
  constructor(e, t, n) {
    const i = this;
    let r = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(A) {
      o++, r === !1 && i.onStart !== void 0 && i.onStart(A, a, o), r = !0;
    }, this.itemEnd = function(A) {
      a++, i.onProgress !== void 0 && i.onProgress(A, a, o), a === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(A) {
      i.onError !== void 0 && i.onError(A);
    }, this.resolveURL = function(A) {
      return c ? c(A) : A;
    }, this.setURLModifier = function(A) {
      return c = A, this;
    }, this.addHandler = function(A, h) {
      return l.push(A, h), this;
    }, this.removeHandler = function(A) {
      const h = l.indexOf(A);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(A) {
      for (let h = 0, d = l.length; h < d; h += 2) {
        const p = l[h], g = l[h + 1];
        if (p.global && (p.lastIndex = 0), p.test(A))
          return g;
      }
      return null;
    };
  }
}
const xm = /* @__PURE__ */ new bm();
class ri {
  constructor(e) {
    this.manager = e !== void 0 ? e : xm, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
ri.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const pn = {};
class Cm extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class ds extends ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Fn.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (pn[e] !== void 0) {
      pn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    pn[e] = [], pn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const A = pn[e], h = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), p = d ? parseInt(d) : 0, g = p !== 0;
        let E = 0;
        const f = new ReadableStream({
          start(u) {
            x();
            function x() {
              h.read().then(({ done: m, value: I }) => {
                if (m)
                  u.close();
                else {
                  E += I.byteLength;
                  const w = new ProgressEvent("progress", { lengthComputable: g, loaded: E, total: p });
                  for (let T = 0, y = A.length; T < y; T++) {
                    const W = A[T];
                    W.onProgress && W.onProgress(w);
                  }
                  u.enqueue(I), x();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new Cm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((A) => new DOMParser().parseFromString(A, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(o), d = h && h[1] ? h[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return l.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((l) => {
      Fn.add(e, l);
      const A = pn[e];
      delete pn[e];
      for (let h = 0, d = A.length; h < d; h++) {
        const p = A[h];
        p.onLoad && p.onLoad(l);
      }
    }).catch((l) => {
      const A = pn[e];
      if (A === void 0)
        throw this.manager.itemError(e), l;
      delete pn[e];
      for (let h = 0, d = A.length; h < d; h++) {
        const p = A[h];
        p.onError && p.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Im extends ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Fn.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const o = ps("img");
    function c() {
      A(), Fn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(h) {
      A(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function A() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class Sm extends ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new ut(), a = new Im(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Sr extends ct {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ne(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class vm extends Sr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ne(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const oa = /* @__PURE__ */ new Re(), Vc = /* @__PURE__ */ new R(), Wc = /* @__PURE__ */ new R();
class $a {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ye(512, 512), this.map = null, this.mapPass = null, this.matrix = new Re(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new qa(), this._frameExtents = new ye(1, 1), this._viewportCount = 1, this._viewports = [
      new st(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Vc.setFromMatrixPosition(e.matrixWorld), t.position.copy(Vc), Wc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Wc), t.updateMatrixWorld(), oa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(oa), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(oa);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Mm extends $a {
  constructor() {
    super(new Dt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Gi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class ym extends Sr {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new Mm();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const qc = /* @__PURE__ */ new Re(), os = /* @__PURE__ */ new R(), ca = /* @__PURE__ */ new R();
class Bm extends $a {
  constructor() {
    super(new Dt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ye(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new st(2, 1, 1, 1),
      // negative X
      new st(0, 1, 1, 1),
      // positive Z
      new st(3, 1, 1, 1),
      // negative Z
      new st(1, 1, 1, 1),
      // positive Y
      new st(3, 0, 1, 1),
      // negative Y
      new st(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), os.setFromMatrixPosition(e.matrixWorld), n.position.copy(os), ca.copy(n.position), ca.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ca), n.updateMatrixWorld(), i.makeTranslation(-os.x, -os.y, -os.z), qc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(qc);
  }
}
class aA extends Sr {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Bm();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Tm extends $a {
  constructor() {
    super(new ja(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class oA extends Sr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct(), this.shadow = new Tm();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class us {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class wm extends ri {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Fn.get(e);
    if (a !== void 0) {
      if (r.manager.itemStart(e), a.then) {
        a.then((l) => {
          t && t(l), r.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const c = fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return Fn.add(e, l), t && t(l), r.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), Fn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Fn.add(e, c), r.manager.itemStart(e);
  }
}
class Rm {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = jc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = jc();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function jc() {
  return (typeof performance > "u" ? Date : performance).now();
}
const eo = "\\[\\]\\.:\\/", Dm = new RegExp("[" + eo + "]", "g"), to = "[^" + eo + "]", Lm = "[^" + eo.replace("\\.", "") + "]", Pm = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", to), Fm = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Lm), Um = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", to), Nm = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", to), Qm = new RegExp(
  "^" + Pm + Fm + Um + Nm + "$"
), Om = ["material", "materials", "bones", "map"];
class km {
  constructor(e, t, n) {
    const i = n || it.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class it {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || it.parseTrackName(t), this.node = it.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new it.Composite(e, t, n) : new it(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Dm, "");
  }
  static parseTrackName(e) {
    const t = Qm.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Om.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          if (o.name === t || o.uuid === t)
            return o;
          const c = n(o.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = it.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let A = 0; A < e.length; A++)
            if (e[A].name === l) {
              l = A;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
it.Composite = km;
it.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
it.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
it.prototype.GetterByBindingType = [
  it.prototype._getValue_direct,
  it.prototype._getValue_array,
  it.prototype._getValue_arrayElement,
  it.prototype._getValue_toArray
];
it.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    it.prototype._setValue_direct,
    it.prototype._setValue_direct_setNeedsUpdate,
    it.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    it.prototype._setValue_array,
    it.prototype._setValue_array_setNeedsUpdate,
    it.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    it.prototype._setValue_arrayElement,
    it.prototype._setValue_arrayElement_setNeedsUpdate,
    it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    it.prototype._setValue_fromArray,
    it.prototype._setValue_fromArray_setNeedsUpdate,
    it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Yc {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(vt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ha
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ha);
const Xc = { type: "change" }, la = { type: "start" }, Kc = { type: "end" }, Zs = new Es(), Jc = new Dn(), Gm = Math.cos(70 * fr.DEG2RAD);
class Hm extends si {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: oi.ROTATE, MIDDLE: oi.DOLLY, RIGHT: oi.PAN }, this.touches = { ONE: ci.ROTATE, TWO: ci.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(B) {
      B.addEventListener("keydown", xe), this._domElementKeyEvents = B;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", xe), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Xc), n.update(), r = i.NONE;
    }, this.update = function() {
      const B = new R(), ae = new nn().setFromUnitVectors(e.up, new R(0, 1, 0)), ee = ae.clone().invert(), ce = new R(), S = new nn(), j = new R(), X = 2 * Math.PI;
      return function(Ae = null) {
        const we = n.object.position;
        B.copy(we).sub(n.target), B.applyQuaternion(ae), o.setFromVector3(B), n.autoRotate && r === i.NONE && K(_(Ae)), n.enableDamping ? (o.theta += c.theta * n.dampingFactor, o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta, o.phi += c.phi);
        let Be = n.minAzimuthAngle, Ge = n.maxAzimuthAngle;
        isFinite(Be) && isFinite(Ge) && (Be < -Math.PI ? Be += X : Be > Math.PI && (Be -= X), Ge < -Math.PI ? Ge += X : Ge > Math.PI && (Ge -= X), Be <= Ge ? o.theta = Math.max(Be, Math.min(Ge, o.theta)) : o.theta = o.theta > (Be + Ge) / 2 ? Math.max(Be, o.theta) : Math.min(Ge, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(A, n.dampingFactor) : n.target.add(A), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && T || n.object.isOrthographicCamera ? o.radius = J(o.radius) : o.radius = J(o.radius * l), B.setFromSpherical(o), B.applyQuaternion(ee), we.copy(n.target).add(B), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, A.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), A.set(0, 0, 0));
        let Je = !1;
        if (n.zoomToCursor && T) {
          let Le = null;
          if (n.object.isPerspectiveCamera) {
            const rt = B.length();
            Le = J(rt * l);
            const It = rt - Le;
            n.object.position.addScaledVector(I, It), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const rt = new R(w.x, w.y, 0);
            rt.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), Je = !0;
            const It = new R(w.x, w.y, 0);
            It.unproject(n.object), n.object.position.sub(It).add(rt), n.object.updateMatrixWorld(), Le = B.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          Le !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Le).add(n.object.position) : (Zs.origin.copy(n.object.position), Zs.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Zs.direction)) < Gm ? e.lookAt(n.target) : (Jc.setFromNormalAndCoplanarPoint(n.object.up, n.target), Zs.intersectPlane(Jc, n.target))));
        } else n.object.isOrthographicCamera && (Je = l !== 1, Je && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix()));
        return l = 1, T = !1, Je || ce.distanceToSquared(n.object.position) > a || 8 * (1 - S.dot(n.object.quaternion)) > a || j.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(Xc), ce.copy(n.object.position), S.copy(n.object.quaternion), j.copy(n.target), !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", Ke), n.domElement.removeEventListener("pointerdown", v), n.domElement.removeEventListener("pointercancel", U), n.domElement.removeEventListener("wheel", ne), n.domElement.removeEventListener("pointermove", b), n.domElement.removeEventListener("pointerup", U), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", xe), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let r = i.NONE;
    const a = 1e-6, o = new Yc(), c = new Yc();
    let l = 1;
    const A = new R(), h = new ye(), d = new ye(), p = new ye(), g = new ye(), E = new ye(), f = new ye(), u = new ye(), x = new ye(), m = new ye(), I = new R(), w = new ye();
    let T = !1;
    const y = [], W = {};
    let te = !1;
    function _(B) {
      return B !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * B : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function M(B) {
      const ae = Math.abs(B * 0.01);
      return Math.pow(0.95, n.zoomSpeed * ae);
    }
    function K(B) {
      c.theta -= B;
    }
    function ie(B) {
      c.phi -= B;
    }
    const D = function() {
      const B = new R();
      return function(ee, ce) {
        B.setFromMatrixColumn(ce, 0), B.multiplyScalar(-ee), A.add(B);
      };
    }(), L = function() {
      const B = new R();
      return function(ee, ce) {
        n.screenSpacePanning === !0 ? B.setFromMatrixColumn(ce, 1) : (B.setFromMatrixColumn(ce, 0), B.crossVectors(n.object.up, B)), B.multiplyScalar(ee), A.add(B);
      };
    }(), Q = function() {
      const B = new R();
      return function(ee, ce) {
        const S = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const j = n.object.position;
          B.copy(j).sub(n.target);
          let X = B.length();
          X *= Math.tan(n.object.fov / 2 * Math.PI / 180), D(2 * ee * X / S.clientHeight, n.object.matrix), L(2 * ce * X / S.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (D(ee * (n.object.right - n.object.left) / n.object.zoom / S.clientWidth, n.object.matrix), L(ce * (n.object.top - n.object.bottom) / n.object.zoom / S.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function q(B) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= B : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function N(B) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= B : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function H(B, ae) {
      if (!n.zoomToCursor)
        return;
      T = !0;
      const ee = n.domElement.getBoundingClientRect(), ce = B - ee.left, S = ae - ee.top, j = ee.width, X = ee.height;
      w.x = ce / j * 2 - 1, w.y = -(S / X) * 2 + 1, I.set(w.x, w.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function J(B) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, B));
    }
    function Z(B) {
      h.set(B.clientX, B.clientY);
    }
    function ue(B) {
      H(B.clientX, B.clientX), u.set(B.clientX, B.clientY);
    }
    function Ce(B) {
      g.set(B.clientX, B.clientY);
    }
    function z(B) {
      d.set(B.clientX, B.clientY), p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const ae = n.domElement;
      K(2 * Math.PI * p.x / ae.clientHeight), ie(2 * Math.PI * p.y / ae.clientHeight), h.copy(d), n.update();
    }
    function Y(B) {
      x.set(B.clientX, B.clientY), m.subVectors(x, u), m.y > 0 ? q(M(m.y)) : m.y < 0 && N(M(m.y)), u.copy(x), n.update();
    }
    function le(B) {
      E.set(B.clientX, B.clientY), f.subVectors(E, g).multiplyScalar(n.panSpeed), Q(f.x, f.y), g.copy(E), n.update();
    }
    function de(B) {
      H(B.clientX, B.clientY), B.deltaY < 0 ? N(M(B.deltaY)) : B.deltaY > 0 && q(M(B.deltaY)), n.update();
    }
    function ve(B) {
      let ae = !1;
      switch (B.code) {
        case n.keys.UP:
          B.ctrlKey || B.metaKey || B.shiftKey ? ie(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : Q(0, n.keyPanSpeed), ae = !0;
          break;
        case n.keys.BOTTOM:
          B.ctrlKey || B.metaKey || B.shiftKey ? ie(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : Q(0, -n.keyPanSpeed), ae = !0;
          break;
        case n.keys.LEFT:
          B.ctrlKey || B.metaKey || B.shiftKey ? K(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : Q(n.keyPanSpeed, 0), ae = !0;
          break;
        case n.keys.RIGHT:
          B.ctrlKey || B.metaKey || B.shiftKey ? K(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : Q(-n.keyPanSpeed, 0), ae = !0;
          break;
      }
      ae && (B.preventDefault(), n.update());
    }
    function ge(B) {
      if (y.length === 1)
        h.set(B.pageX, B.pageY);
      else {
        const ae = fe(B), ee = 0.5 * (B.pageX + ae.x), ce = 0.5 * (B.pageY + ae.y);
        h.set(ee, ce);
      }
    }
    function Oe(B) {
      if (y.length === 1)
        g.set(B.pageX, B.pageY);
      else {
        const ae = fe(B), ee = 0.5 * (B.pageX + ae.x), ce = 0.5 * (B.pageY + ae.y);
        g.set(ee, ce);
      }
    }
    function Ie(B) {
      const ae = fe(B), ee = B.pageX - ae.x, ce = B.pageY - ae.y, S = Math.sqrt(ee * ee + ce * ce);
      u.set(0, S);
    }
    function P(B) {
      n.enableZoom && Ie(B), n.enablePan && Oe(B);
    }
    function tt(B) {
      n.enableZoom && Ie(B), n.enableRotate && ge(B);
    }
    function _e(B) {
      if (y.length == 1)
        d.set(B.pageX, B.pageY);
      else {
        const ee = fe(B), ce = 0.5 * (B.pageX + ee.x), S = 0.5 * (B.pageY + ee.y);
        d.set(ce, S);
      }
      p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const ae = n.domElement;
      K(2 * Math.PI * p.x / ae.clientHeight), ie(2 * Math.PI * p.y / ae.clientHeight), h.copy(d);
    }
    function Te(B) {
      if (y.length === 1)
        E.set(B.pageX, B.pageY);
      else {
        const ae = fe(B), ee = 0.5 * (B.pageX + ae.x), ce = 0.5 * (B.pageY + ae.y);
        E.set(ee, ce);
      }
      f.subVectors(E, g).multiplyScalar(n.panSpeed), Q(f.x, f.y), g.copy(E);
    }
    function be(B) {
      const ae = fe(B), ee = B.pageX - ae.x, ce = B.pageY - ae.y, S = Math.sqrt(ee * ee + ce * ce);
      x.set(0, S), m.set(0, Math.pow(x.y / u.y, n.zoomSpeed)), q(m.y), u.copy(x);
      const j = (B.pageX + ae.x) * 0.5, X = (B.pageY + ae.y) * 0.5;
      H(j, X);
    }
    function Ze(B) {
      n.enableZoom && be(B), n.enablePan && Te(B);
    }
    function Fe(B) {
      n.enableZoom && be(B), n.enableRotate && _e(B);
    }
    function v(B) {
      n.enabled !== !1 && (y.length === 0 && (n.domElement.setPointerCapture(B.pointerId), n.domElement.addEventListener("pointermove", b), n.domElement.addEventListener("pointerup", U)), ze(B), B.pointerType === "touch" ? De(B) : re(B));
    }
    function b(B) {
      n.enabled !== !1 && (B.pointerType === "touch" ? se(B) : $(B));
    }
    function U(B) {
      switch (Ue(B), y.length) {
        case 0:
          n.domElement.releasePointerCapture(B.pointerId), n.domElement.removeEventListener("pointermove", b), n.domElement.removeEventListener("pointerup", U), n.dispatchEvent(Kc), r = i.NONE;
          break;
        case 1:
          const ae = y[0], ee = W[ae];
          De({ pointerId: ae, pageX: ee.x, pageY: ee.y });
          break;
      }
    }
    function re(B) {
      let ae;
      switch (B.button) {
        case 0:
          ae = n.mouseButtons.LEFT;
          break;
        case 1:
          ae = n.mouseButtons.MIDDLE;
          break;
        case 2:
          ae = n.mouseButtons.RIGHT;
          break;
        default:
          ae = -1;
      }
      switch (ae) {
        case oi.DOLLY:
          if (n.enableZoom === !1) return;
          ue(B), r = i.DOLLY;
          break;
        case oi.ROTATE:
          if (B.ctrlKey || B.metaKey || B.shiftKey) {
            if (n.enablePan === !1) return;
            Ce(B), r = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            Z(B), r = i.ROTATE;
          }
          break;
        case oi.PAN:
          if (B.ctrlKey || B.metaKey || B.shiftKey) {
            if (n.enableRotate === !1) return;
            Z(B), r = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            Ce(B), r = i.PAN;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(la);
    }
    function $(B) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          z(B);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          Y(B);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          le(B);
          break;
      }
    }
    function ne(B) {
      n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (B.preventDefault(), n.dispatchEvent(la), de(me(B)), n.dispatchEvent(Kc));
    }
    function me(B) {
      const ae = B.deltaMode, ee = {
        clientX: B.clientX,
        clientY: B.clientY,
        deltaY: B.deltaY
      };
      switch (ae) {
        case 1:
          ee.deltaY *= 16;
          break;
        case 2:
          ee.deltaY *= 100;
          break;
      }
      return B.ctrlKey && !te && (ee.deltaY *= 10), ee;
    }
    function oe(B) {
      B.key === "Control" && (te = !0, n.domElement.getRootNode().addEventListener("keyup", pe, { passive: !0, capture: !0 }));
    }
    function pe(B) {
      B.key === "Control" && (te = !1, n.domElement.getRootNode().removeEventListener("keyup", pe, { passive: !0, capture: !0 }));
    }
    function xe(B) {
      n.enabled === !1 || n.enablePan === !1 || ve(B);
    }
    function De(B) {
      switch (Se(B), y.length) {
        case 1:
          switch (n.touches.ONE) {
            case ci.ROTATE:
              if (n.enableRotate === !1) return;
              ge(B), r = i.TOUCH_ROTATE;
              break;
            case ci.PAN:
              if (n.enablePan === !1) return;
              Oe(B), r = i.TOUCH_PAN;
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case ci.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              P(B), r = i.TOUCH_DOLLY_PAN;
              break;
            case ci.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              tt(B), r = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(la);
    }
    function se(B) {
      switch (Se(B), r) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          _e(B), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          Te(B), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ze(B), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Fe(B), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function Ke(B) {
      n.enabled !== !1 && B.preventDefault();
    }
    function ze(B) {
      y.push(B.pointerId);
    }
    function Ue(B) {
      delete W[B.pointerId];
      for (let ae = 0; ae < y.length; ae++)
        if (y[ae] == B.pointerId) {
          y.splice(ae, 1);
          return;
        }
    }
    function Se(B) {
      let ae = W[B.pointerId];
      ae === void 0 && (ae = new ye(), W[B.pointerId] = ae), ae.set(B.pageX, B.pageY);
    }
    function fe(B) {
      const ae = B.pointerId === y[0] ? y[1] : y[0];
      return W[ae];
    }
    n.domElement.addEventListener("contextmenu", Ke), n.domElement.addEventListener("pointerdown", v), n.domElement.addEventListener("pointercancel", U), n.domElement.addEventListener("wheel", ne, { passive: !1 }), n.domElement.getRootNode().addEventListener("keydown", oe, { passive: !0, capture: !0 }), this.update();
  }
}
function Zc(s, e) {
  if (e === Ch)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === Ra || e === Ml) {
    let t = s.getIndex();
    if (t === null) {
      const a = [], o = s.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          a.push(c);
        s.setIndex(a), t = s.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === Ra)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class zm extends ri {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Ym(t);
    }), this.register(function(t) {
      return new iE(t);
    }), this.register(function(t) {
      return new sE(t);
    }), this.register(function(t) {
      return new rE(t);
    }), this.register(function(t) {
      return new Km(t);
    }), this.register(function(t) {
      return new Jm(t);
    }), this.register(function(t) {
      return new Zm(t);
    }), this.register(function(t) {
      return new $m(t);
    }), this.register(function(t) {
      return new jm(t);
    }), this.register(function(t) {
      return new eE(t);
    }), this.register(function(t) {
      return new Xm(t);
    }), this.register(function(t) {
      return new nE(t);
    }), this.register(function(t) {
      return new tE(t);
    }), this.register(function(t) {
      return new Wm(t);
    }), this.register(function(t) {
      return new aE(t);
    }), this.register(function(t) {
      return new oE(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const l = us.extractUrlBase(e);
      a = us.resolveURL(l, this.path);
    } else
      a = us.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }, c = new ds(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        r.parse(l, a, function(A) {
          t(A), r.manager.itemEnd(e);
        }, o);
      } catch (A) {
        o(A);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const a = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === cA) {
        try {
          a[Xe.KHR_BINARY_GLTF] = new cE(e);
        } catch (h) {
          i && i(h);
          return;
        }
        r = JSON.parse(a[Xe.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(c.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new xE(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let A = 0; A < this.pluginCallbacks.length; A++) {
      const h = this.pluginCallbacks[A](l);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[h.name] = h, a[h.name] = !0;
    }
    if (r.extensionsUsed)
      for (let A = 0; A < r.extensionsUsed.length; ++A) {
        const h = r.extensionsUsed[A], d = r.extensionsRequired || [];
        switch (h) {
          case Xe.KHR_MATERIALS_UNLIT:
            a[h] = new qm();
            break;
          case Xe.KHR_DRACO_MESH_COMPRESSION:
            a[h] = new lE(r, this.dracoLoader);
            break;
          case Xe.KHR_TEXTURE_TRANSFORM:
            a[h] = new AE();
            break;
          case Xe.KHR_MESH_QUANTIZATION:
            a[h] = new hE();
            break;
          default:
            d.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function Vm() {
  let s = {};
  return {
    get: function(e) {
      return s[e];
    },
    add: function(e, t) {
      s[e] = t;
    },
    remove: function(e) {
      delete s[e];
    },
    removeAll: function() {
      s = {};
    }
  };
}
const Xe = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Wm {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, c = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let l;
    const A = new Ne(16777215);
    c.color !== void 0 && A.setRGB(c.color[0], c.color[1], c.color[2], pt);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new oA(A), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new aA(A), l.distance = h;
        break;
      case "spot":
        l = new ym(A), l.distance = h, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Ln(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return n._getNodeRef(t.cache, o, c);
    });
  }
}
class qm {
  constructor() {
    this.name = Xe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Xn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ne(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], pt), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, ot));
    }
    return Promise.all(i);
  }
}
class jm {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class Ym {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ye(o, o);
    }
    return Promise.all(r);
  }
}
class Xm {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class Km {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new Ne(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], pt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, ot)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class Jm {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class Zm {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ne().setRGB(o[0], o[1], o[2], pt), Promise.all(r);
  }
}
class $m {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class eE {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ne().setRGB(o[0], o[1], o[2], pt), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, ot)), Promise.all(r);
  }
}
class tE {
  constructor(e) {
    this.parser = e, this.name = Xe.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class nE {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : In;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class iE {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const r = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class sE {
  constructor(e) {
    this.parser = e, this.name = Xe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class rE {
  constructor(e) {
    this.parser = e, this.name = Xe.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class aE {
  constructor(e) {
    this.name = Xe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, A = i.count, h = i.byteStride, d = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(A, h, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(A * h);
          return a.decodeGltfBuffer(new Uint8Array(p), A, h, d, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class oE {
  constructor(e) {
    this.name = Xe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== Vt.TRIANGLES && l.mode !== Vt.TRIANGLE_STRIP && l.mode !== Vt.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((A) => (c[l] = A, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const A = l.pop(), h = A.isGroup ? A.children : [A], d = l[0].count, p = [];
      for (const g of h) {
        const E = new Re(), f = new R(), u = new nn(), x = new R(1, 1, 1), m = new rm(g.geometry, g.material, d);
        for (let I = 0; I < d; I++)
          c.TRANSLATION && f.fromBufferAttribute(c.TRANSLATION, I), c.ROTATION && u.fromBufferAttribute(c.ROTATION, I), c.SCALE && x.fromBufferAttribute(c.SCALE, I), m.setMatrixAt(I, E.compose(f, u, x));
        for (const I in c)
          if (I === "_COLOR_0") {
            const w = c[I];
            m.instanceColor = new Na(w.array, w.itemSize, w.normalized);
          } else I !== "TRANSLATION" && I !== "ROTATION" && I !== "SCALE" && g.geometry.setAttribute(I, c[I]);
        ct.prototype.copy.call(m, g), this.parser.assignFinalMaterial(m), p.push(m);
      }
      return A.isGroup ? (A.clear(), A.add(...p), A) : p[0];
    }));
  }
}
const cA = "glTF", cs = 12, $c = { JSON: 1313821514, BIN: 5130562 };
class cE {
  constructor(e) {
    this.name = Xe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, cs), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== cA)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - cs, r = new DataView(e, cs);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const c = r.getUint32(a, !0);
      if (a += 4, c === $c.JSON) {
        const l = new Uint8Array(e, cs + a, o);
        this.content = n.decode(l);
      } else if (c === $c.BIN) {
        const l = cs + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class lE {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Xe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const A in a) {
      const h = Oa[A] || A.toLowerCase();
      o[h] = a[A];
    }
    for (const A in e.attributes) {
      const h = Oa[A] || A.toLowerCase();
      if (a[A] !== void 0) {
        const d = n.accessors[e.attributes[A]], p = Ni[d.componentType];
        l[h] = p.name, c[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(A) {
      return new Promise(function(h, d) {
        i.decodeDracoFile(A, function(p) {
          for (const g in p.attributes) {
            const E = p.attributes[g], f = c[g];
            f !== void 0 && (E.normalized = f);
          }
          h(p);
        }, o, l, pt, d);
      });
    });
  }
}
class AE {
  constructor() {
    this.name = Xe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class hE {
  constructor() {
    this.name = Xe.KHR_MESH_QUANTIZATION;
  }
}
class lA extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, A = i - t, h = (n - t) / A, d = h * h, p = d * h, g = e * l, E = g - l, f = -2 * p + 3 * d, u = p - d, x = 1 - f, m = u - d + h;
    for (let I = 0; I !== o; I++) {
      const w = a[E + I + o], T = a[E + I + c] * A, y = a[g + I + o], W = a[g + I] * A;
      r[I] = x * w + m * T + f * y + u * W;
    }
    return r;
  }
}
const dE = new nn();
class uE extends lA {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return dE.fromArray(r).normalize().toArray(r), r;
  }
}
const Vt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Ni = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, el = {
  9728: xt,
  9729: bt,
  9984: va,
  9985: tr,
  9986: wi,
  9987: rn
}, tl = {
  33071: Gt,
  33648: or,
  10497: ti
}, Aa = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Oa = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Rn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, fE = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: ki,
  STEP: fs
}, ha = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function pE(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Ir({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: xn
  })), s.DefaultMaterial;
}
function Vn(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Ln(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function gE(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let l = 0, A = e.length; l < A; l++) {
    const h = e[l];
    if (h.POSITION !== void 0 && (n = !0), h.NORMAL !== void 0 && (i = !0), h.COLOR_0 !== void 0 && (r = !0), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [], o = [], c = [];
  for (let l = 0, A = e.length; l < A; l++) {
    const h = e[l];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : s.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : s.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : s.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const A = l[0], h = l[1], d = l[2];
    return n && (s.morphAttributes.position = A), i && (s.morphAttributes.normal = h), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s;
  });
}
function mE(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function EE(s) {
  let e;
  const t = s.extensions && s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + da(t.attributes) : e = s.indices + ":" + da(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + da(s.targets[n]);
  return e;
}
function da(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function ka(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function _E(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const bE = new Re();
class xE {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Vm(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, r = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new Sm(this.options.manager) : this.textureLoader = new wm(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ds(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Vn(r, o, i), Ln(o, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (a, o) => {
      const c = this.associations.get(a);
      c != null && this.associations.set(o, c);
      for (const [l, A] of a.children.entries())
        r(A, o.children[l]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, a) {
      n.load(us.resolveURL(t.uri, i.path), r, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Aa[i.type], o = Ni[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new Ft(l, a, c));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], c = Aa[i.type], l = Ni[i.componentType], A = l.BYTES_PER_ELEMENT, h = A * c, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let E, f;
      if (p && p !== h) {
        const u = Math.floor(d / p), x = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + u + ":" + i.count;
        let m = t.cache.get(x);
        m || (E = new l(o, u * p, i.count * p / A), m = new Jl(E, p / A), t.cache.add(x, m)), f = new gs(m, c, d % p / A, g);
      } else
        o === null ? E = new l(i.count * c) : E = new l(o, d, i.count * c), f = new Ft(E, c, g);
      if (i.sparse !== void 0) {
        const u = Aa.SCALAR, x = Ni[i.sparse.indices.componentType], m = i.sparse.indices.byteOffset || 0, I = i.sparse.values.byteOffset || 0, w = new x(a[1], m, i.sparse.count * u), T = new l(a[2], I, i.sparse.count * c);
        o !== null && (f = new Ft(f.array.slice(), f.itemSize, f.normalized));
        for (let y = 0, W = w.length; y < W; y++) {
          const te = w[y];
          if (f.setX(te, T[y * c]), c >= 2 && f.setY(te, T[y * c + 1]), c >= 3 && f.setZ(te, T[y * c + 2]), c >= 4 && f.setW(te, T[y * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, a = r.textures[e], o = r.images[t], c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(A) {
      A.flipY = !1, A.name = a.name || o.name || "", A.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (A.name = o.uri);
      const d = (r.samplers || {})[a.sampler] || {};
      return A.magFilter = el[d.magFilter] || bt, A.minFilter = el[d.minFilter] || rn, A.wrapS = tl[d.wrapS] || ti, A.wrapT = tl[d.wrapT] || ti, i.associations.set(A, { textures: e }), A;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(h) {
        l = !0;
        const d = new Blob([h], { type: a.mimeType });
        return c = o.createObjectURL(d), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const A = Promise.resolve(c).then(function(h) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(E) {
          const f = new ut(E);
          f.needsUpdate = !0, d(f);
        }), t.load(us.resolveURL(h, r.path), g, void 0, p);
      });
    }).then(function(h) {
      return l === !0 && o.revokeObjectURL(c), h.userData.mimeType = a.mimeType || _E(a.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), h;
    });
    return this.sourceCache[e] = A, A;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[Xe.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Xe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = r.associations.get(a);
          a = r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new iA(), en.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new nA(), en.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = n.clone(), r && (c.vertexColors = !0), a && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return Ir;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let a;
    const o = {}, c = r.extensions || {}, l = [];
    if (c[Xe.KHR_MATERIALS_UNLIT]) {
      const h = i[Xe.KHR_MATERIALS_UNLIT];
      a = h.getMaterialType(), l.push(h.extendParams(o, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (o.color = new Ne(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], pt), o.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", h.baseColorTexture, ot)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === !0 && (o.side = Kt);
    const A = r.alphaMode || ha.OPAQUE;
    if (A === ha.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, A === ha.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== Xn && (l.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new ye(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && a !== Xn && (l.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== Xn) {
      const h = r.emissiveFactor;
      o.emissive = new Ne().setRGB(h[0], h[1], h[2], pt);
    }
    return r.emissiveTexture !== void 0 && a !== Xn && l.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, ot)), Promise.all(l).then(function() {
      const h = new a(o);
      return r.name && (h.name = r.name), Ln(h, r), t.associations.set(h, { materials: e }), r.extensions && Vn(i, h, r), h;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = it.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(o) {
      return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return nl(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], A = EE(l), h = i[A];
      if (h)
        a.push(h.promise);
      else {
        let d;
        l.extensions && l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION] ? d = r(l) : d = nl(new qt(), l, t), i[A] = { primitive: l, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], a = r.primitives, o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const A = a[c].material === void 0 ? pE(this.cache) : this.getDependency("material", a[c].material);
      o.push(A);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), A = c[c.length - 1], h = [];
      for (let p = 0, g = A.length; p < g; p++) {
        const E = A[p], f = a[p];
        let u;
        const x = l[p];
        if (f.mode === Vt.TRIANGLES || f.mode === Vt.TRIANGLE_STRIP || f.mode === Vt.TRIANGLE_FAN || f.mode === void 0)
          u = r.isSkinnedMesh === !0 ? new nm(E, x) : new Lt(E, x), u.isSkinnedMesh === !0 && u.normalizeSkinWeights(), f.mode === Vt.TRIANGLE_STRIP ? u.geometry = Zc(u.geometry, Ml) : f.mode === Vt.TRIANGLE_FAN && (u.geometry = Zc(u.geometry, Ra));
        else if (f.mode === Vt.LINES)
          u = new am(E, x);
        else if (f.mode === Vt.LINE_STRIP)
          u = new Ja(E, x);
        else if (f.mode === Vt.LINE_LOOP)
          u = new om(E, x);
        else if (f.mode === Vt.POINTS)
          u = new cm(E, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(u.geometry.morphAttributes).length > 0 && mE(u, r), u.name = t.createUniqueName(r.name || "mesh_" + e), Ln(u, r), f.extensions && Vn(i, u, f), t.assignFinalMaterial(u), h.push(u);
      }
      for (let p = 0, g = h.length; p < g; p++)
        t.associations.set(h[p], {
          meshes: e,
          primitives: p
        });
      if (h.length === 1)
        return r.extensions && Vn(i, h[0], r), h[0];
      const d = new _n();
      r.extensions && Vn(i, d, r), t.associations.set(d, { meshes: e });
      for (let p = 0, g = h.length; p < g; p++)
        d.add(h[p]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Dt(fr.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new ja(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Ln(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), a = i, o = [], c = [];
      for (let l = 0, A = a.length; l < A; l++) {
        const h = a[l];
        if (h) {
          o.push(h);
          const d = new Re();
          r !== null && d.fromArray(r.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Ka(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], A = [];
    for (let h = 0, d = i.channels.length; h < d; h++) {
      const p = i.channels[h], g = i.samplers[p.sampler], E = p.target, f = E.node, u = i.parameters !== void 0 ? i.parameters[g.input] : g.input, x = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      E.node !== void 0 && (a.push(this.getDependency("node", f)), o.push(this.getDependency("accessor", u)), c.push(this.getDependency("accessor", x)), l.push(g), A.push(E));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(A)
    ]).then(function(h) {
      const d = h[0], p = h[1], g = h[2], E = h[3], f = h[4], u = [];
      for (let x = 0, m = d.length; x < m; x++) {
        const I = d[x], w = p[x], T = g[x], y = E[x], W = f[x];
        if (I === void 0) continue;
        I.updateMatrix && I.updateMatrix();
        const te = n._createAnimationTracks(I, w, T, y, W);
        if (te)
          for (let _ = 0; _ < te.length; _++)
            u.push(te[_]);
      }
      return new mm(r, void 0, u);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const a = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            o.morphTargetInfluences[c] = i.weights[c];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let l = 0, A = o.length; l < A; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(a),
      c
    ]).then(function(l) {
      const A = l[0], h = l[1], d = l[2];
      d !== null && A.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, bE);
      });
      for (let p = 0, g = h.length; p < g; p++)
        A.add(h[p]);
      return A;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], a = r.name ? i.createUniqueName(r.name) : "", o = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && o.push(c), r.camera !== void 0 && o.push(i.getDependency("camera", r.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, r.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      o.push(l);
    }), this.nodeCache[e] = Promise.all(o).then(function(l) {
      let A;
      if (r.isBone === !0 ? A = new eA() : l.length > 1 ? A = new _n() : l.length === 1 ? A = l[0] : A = new ct(), A !== l[0])
        for (let h = 0, d = l.length; h < d; h++)
          A.add(l[h]);
      if (r.name && (A.userData.name = r.name, A.name = a), Ln(A, r), r.extensions && Vn(n, A, r), r.matrix !== void 0) {
        const h = new Re();
        h.fromArray(r.matrix), A.applyMatrix4(h);
      } else
        r.translation !== void 0 && A.position.fromArray(r.translation), r.rotation !== void 0 && A.quaternion.fromArray(r.rotation), r.scale !== void 0 && A.scale.fromArray(r.scale);
      return i.associations.has(A) || i.associations.set(A, {}), i.associations.get(A).nodes = e, A;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new _n();
    n.name && (r.name = i.createUniqueName(n.name)), Ln(r, n), n.extensions && Vn(t, r, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let A = 0, h = c.length; A < h; A++)
        r.add(c[A]);
      const l = (A) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations)
          (d instanceof en || d instanceof ut) && h.set(d, p);
        return A.traverse((d) => {
          const p = i.associations.get(d);
          p != null && h.set(d, p);
        }), h;
      };
      return i.associations = l(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    Rn[r.path] === Rn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(o);
    let l;
    switch (Rn[r.path]) {
      case Rn.weights:
        l = zi;
        break;
      case Rn.rotation:
        l = ii;
        break;
      case Rn.position:
      case Rn.scale:
        l = Vi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = zi;
            break;
          case 2:
          case 3:
          default:
            l = Vi;
            break;
        }
        break;
    }
    const A = i.interpolation !== void 0 ? fE[i.interpolation] : ki, h = this._getArrayFromAccessor(n);
    for (let d = 0, p = c.length; d < p; d++) {
      const g = new l(
        c[d] + "." + Rn[r.path],
        t.array,
        h,
        A
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = ka(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ii ? uE : lA;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function CE(s, e, t) {
  const n = e.attributes, i = new Wt();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new R(c[0], c[1], c[2]),
        new R(l[0], l[1], l[2])
      ), o.normalized) {
        const A = ka(Ni[o.componentType]);
        i.min.multiplyScalar(A), i.max.multiplyScalar(A);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new R(), c = new R();
    for (let l = 0, A = r.length; l < A; l++) {
      const h = r[l];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const E = ka(Ni[d.componentType]);
            c.multiplyScalar(E);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new on();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = a;
}
function nl(s, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      s.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = Oa[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return et.workingColorSpace !== pt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`), Ln(s, e), CE(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? gE(s, e.targets, t) : s;
  });
}
class IE {
  constructor(e = 4) {
    this.pool = e, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0;
  }
  _initWorker(e) {
    if (!this.workers[e]) {
      const t = this.workerCreator();
      t.addEventListener("message", this._onMessage.bind(this, e)), this.workers[e] = t;
    }
  }
  _getIdleWorker() {
    for (let e = 0; e < this.pool; e++)
      if (!(this.workerStatus & 1 << e)) return e;
    return -1;
  }
  _onMessage(e, t) {
    const n = this.workersResolve[e];
    if (n && n(t), this.queue.length) {
      const { resolve: i, msg: r, transfer: a } = this.queue.shift();
      this.workersResolve[e] = i, this.workers[e].postMessage(r, a);
    } else
      this.workerStatus ^= 1 << e;
  }
  setWorkerCreator(e) {
    this.workerCreator = e;
  }
  setWorkerLimit(e) {
    this.pool = e;
  }
  postMessage(e, t) {
    return new Promise((n) => {
      const i = this._getIdleWorker();
      i !== -1 ? (this._initWorker(i), this.workerStatus |= 1 << i, this.workersResolve[i] = n, this.workers[i].postMessage(e, t)) : this.queue.push({ resolve: n, msg: e, transfer: t });
    });
  }
  dispose() {
    this.workers.forEach((e) => e.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const SE = 0, il = 2, vE = 1, sl = 2, ME = 0, yE = 1, BE = 10, TE = 0, AA = 9, hA = 15, dA = 16, uA = 22, fA = 37, pA = 43, gA = 76, mA = 83, EA = 97, _A = 100, bA = 103, xA = 109, CA = 165, IA = 166;
class wE {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class ls {
  constructor(e, t, n, i) {
    this._dataView = new DataView(e.buffer, e.byteOffset + t, n), this._littleEndian = i, this._offset = 0;
  }
  _nextUint8() {
    const e = this._dataView.getUint8(this._offset);
    return this._offset += 1, e;
  }
  _nextUint16() {
    const e = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, e;
  }
  _nextUint32() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _nextUint64() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, e;
  }
  _nextInt32() {
    const e = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _skip(e) {
    return this._offset += e, this;
  }
  _scan(e, t = 0) {
    const n = this._offset;
    let i = 0;
    for (; this._dataView.getUint8(this._offset) !== t && i < e; ) i++, this._offset++;
    return i < e && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, i);
  }
}
const wt = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function rl(s) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(s) : Buffer.from(s).toString("utf8");
}
function RE(s) {
  const e = new Uint8Array(s.buffer, s.byteOffset, wt.length);
  if (e[0] !== wt[0] || e[1] !== wt[1] || e[2] !== wt[2] || e[3] !== wt[3] || e[4] !== wt[4] || e[5] !== wt[5] || e[6] !== wt[6] || e[7] !== wt[7] || e[8] !== wt[8] || e[9] !== wt[9] || e[10] !== wt[10] || e[11] !== wt[11]) throw new Error("Missing KTX 2.0 identifier.");
  const t = new wE(), n = 17 * Uint32Array.BYTES_PER_ELEMENT, i = new ls(s, wt.length, n, !0);
  t.vkFormat = i._nextUint32(), t.typeSize = i._nextUint32(), t.pixelWidth = i._nextUint32(), t.pixelHeight = i._nextUint32(), t.pixelDepth = i._nextUint32(), t.layerCount = i._nextUint32(), t.faceCount = i._nextUint32();
  const r = i._nextUint32();
  t.supercompressionScheme = i._nextUint32();
  const a = i._nextUint32(), o = i._nextUint32(), c = i._nextUint32(), l = i._nextUint32(), A = i._nextUint64(), h = i._nextUint64(), d = new ls(s, wt.length + n, 3 * r * 8, !0);
  for (let q = 0; q < r; q++) t.levels.push({ levelData: new Uint8Array(s.buffer, s.byteOffset + d._nextUint64(), d._nextUint64()), uncompressedByteLength: d._nextUint64() });
  const p = new ls(s, a, o, !0), g = { vendorId: p._skip(4)._nextUint16(), descriptorType: p._nextUint16(), versionNumber: p._nextUint16(), descriptorBlockSize: p._nextUint16(), colorModel: p._nextUint8(), colorPrimaries: p._nextUint8(), transferFunction: p._nextUint8(), flags: p._nextUint8(), texelBlockDimension: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], bytesPlane: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], samples: [] }, E = (g.descriptorBlockSize / 4 - 6) / 4;
  for (let q = 0; q < E; q++) {
    const N = { bitOffset: p._nextUint16(), bitLength: p._nextUint8(), channelType: p._nextUint8(), samplePosition: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & N.channelType ? (N.sampleLower = p._nextInt32(), N.sampleUpper = p._nextInt32()) : (N.sampleLower = p._nextUint32(), N.sampleUpper = p._nextUint32()), g.samples[q] = N;
  }
  t.dataFormatDescriptor.length = 0, t.dataFormatDescriptor.push(g);
  const f = new ls(s, c, l, !0);
  for (; f._offset < l; ) {
    const q = f._nextUint32(), N = f._scan(q), H = rl(N), J = f._scan(q - N.byteLength);
    t.keyValue[H] = H.match(/^ktx/i) ? rl(J) : J, f._offset % 4 && f._skip(4 - f._offset % 4);
  }
  if (h <= 0) return t;
  const u = new ls(s, A, h, !0), x = u._nextUint16(), m = u._nextUint16(), I = u._nextUint32(), w = u._nextUint32(), T = u._nextUint32(), y = u._nextUint32(), W = [];
  for (let q = 0; q < r; q++) W.push({ imageFlags: u._nextUint32(), rgbSliceByteOffset: u._nextUint32(), rgbSliceByteLength: u._nextUint32(), alphaSliceByteOffset: u._nextUint32(), alphaSliceByteLength: u._nextUint32() });
  const te = A + u._offset, _ = te + I, M = _ + w, K = M + T, ie = new Uint8Array(s.buffer, s.byteOffset + te, I), D = new Uint8Array(s.buffer, s.byteOffset + _, w), L = new Uint8Array(s.buffer, s.byteOffset + M, T), Q = new Uint8Array(s.buffer, s.byteOffset + K, y);
  return t.globalData = { endpointCount: x, selectorCount: m, imageDescs: W, endpointsData: ie, selectorsData: D, tablesData: L, extendedData: Q }, t;
}
let ua, mn, Ga;
const fa = { env: { emscripten_notify_memory_growth: function(s) {
  Ga = new Uint8Array(mn.exports.memory.buffer);
} } };
class DE {
  init() {
    return ua || (ua = typeof fetch < "u" ? fetch("data:application/wasm;base64," + al).then((e) => e.arrayBuffer()).then((e) => WebAssembly.instantiate(e, fa)).then(this._init) : WebAssembly.instantiate(Buffer.from(al, "base64"), fa).then(this._init), ua);
  }
  _init(e) {
    mn = e.instance, fa.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!mn) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const n = e.byteLength, i = mn.exports.malloc(n);
    Ga.set(e, i), t = t || Number(mn.exports.ZSTD_findDecompressedSize(i, n));
    const r = mn.exports.malloc(t), a = mn.exports.ZSTD_decompress(r, t, i, n), o = Ga.slice(r, r + a);
    return mn.exports.free(i), mn.exports.free(r), o;
  }
}
const al = "AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ", pa = /* @__PURE__ */ new WeakMap();
let ga = 0, ma;
class an extends ri {
  constructor(e) {
    super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new IE(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
      'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
    );
  }
  setTranscoderPath(e) {
    return this.transcoderPath = e, this;
  }
  setWorkerLimit(e) {
    return this.workerPool.setWorkerLimit(e), this;
  }
  async detectSupportAsync(e) {
    return this.workerConfig = {
      astcSupported: await e.hasFeatureAsync("texture-compression-astc"),
      etc1Supported: await e.hasFeatureAsync("texture-compression-etc1"),
      etc2Supported: await e.hasFeatureAsync("texture-compression-etc2"),
      dxtSupported: await e.hasFeatureAsync("texture-compression-bc"),
      bptcSupported: await e.hasFeatureAsync("texture-compression-bptc"),
      pvrtcSupported: await e.hasFeatureAsync("texture-compression-pvrtc")
    }, this;
  }
  detectSupport(e) {
    return e.isWebGPURenderer === !0 ? this.workerConfig = {
      astcSupported: e.hasFeature("texture-compression-astc"),
      etc1Supported: e.hasFeature("texture-compression-etc1"),
      etc2Supported: e.hasFeature("texture-compression-etc2"),
      dxtSupported: e.hasFeature("texture-compression-bc"),
      bptcSupported: e.hasFeature("texture-compression-bptc"),
      pvrtcSupported: e.hasFeature("texture-compression-pvrtc")
    } : (this.workerConfig = {
      astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
      etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
      etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
      dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
      bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
      pvrtcSupported: e.extensions.has("WEBGL_compressed_texture_pvrtc") || e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
    }, e.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1)), this;
  }
  init() {
    if (!this.transcoderPending) {
      const e = new ds(this.manager);
      e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
      const t = e.loadAsync("basis_transcoder.js"), n = new ds(this.manager);
      n.setPath(this.transcoderPath), n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials);
      const i = n.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([t, i]).then(([r, a]) => {
        const o = an.BasisWorker.toString(), c = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(an.EngineFormat),
          "let _TranscoderFormat = " + JSON.stringify(an.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(an.BasisFormat),
          "/* basis_transcoder.js */",
          r,
          "/* worker */",
          o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([c])), this.transcoderBinary = a, this.workerPool.setWorkerCreator(() => {
          const l = new Worker(this.workerSourceURL), A = this.transcoderBinary.slice(0);
          return l.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: A }, [A]), l;
        });
      }), ga > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), ga++;
    }
    return this.transcoderPending;
  }
  load(e, t, n, i) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const r = new ds(this.manager);
    r.setResponseType("arraybuffer"), r.setWithCredentials(this.withCredentials), r.load(e, (a) => {
      if (pa.has(a))
        return pa.get(a).promise.then(t).catch(i);
      this._createTexture(a).then((o) => t ? t(o) : null).catch(i);
    }, n, i);
  }
  _createTextureFrom(e, t) {
    const { faces: n, width: i, height: r, format: a, type: o, error: c, dfdFlags: l } = e;
    if (o === "error") return Promise.reject(c);
    let A;
    if (t.faceCount === 6)
      A = new Am(n, a, ft);
    else {
      const h = n[0].mipmaps;
      A = t.layerCount > 1 ? new lm(h, i, r, t.layerCount, a, ft) : new Cr(h, i, r, a, ft);
    }
    return A.minFilter = n[0].mipmaps.length === 1 ? bt : rn, A.magFilter = bt, A.generateMipmaps = !1, A.needsUpdate = !0, A.colorSpace = SA(t), A.premultiplyAlpha = !!(l & vE), A;
  }
  /**
   * @param {ArrayBuffer} buffer
   * @param {object?} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(e, t = {}) {
    const n = RE(new Uint8Array(e));
    if (n.vkFormat !== TE)
      return PE(n);
    const i = t, r = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: i }, [e])).then((a) => this._createTextureFrom(a.data, n));
    return pa.set(e, { promise: r }), r;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), ga--, this;
  }
}
an.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
an.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16
};
an.EngineFormat = {
  RGBAFormat: Ct,
  RGBA_ASTC_4x4_Format: wa,
  RGBA_BPTC_Format: sr,
  RGBA_ETC2_EAC_Format: Ta,
  RGBA_PVRTC_4BPPV1_Format: ya,
  RGBA_S3TC_DXT5_Format: ir,
  RGB_ETC1_Format: Va,
  RGB_ETC2_Format: Ba,
  RGB_PVRTC_4BPPV1_Format: Ma,
  RGB_S3TC_DXT1_Format: nr
};
an.BasisWorker = function() {
  let s, e, t;
  const n = _EngineFormat, i = _TranscoderFormat, r = _BasisFormat;
  self.addEventListener("message", function(g) {
    const E = g.data;
    switch (E.type) {
      case "init":
        s = E.config, a(E.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const { faces: f, buffers: u, width: x, height: m, hasAlpha: I, format: w, dfdFlags: T } = o(E.buffer);
            self.postMessage({ type: "transcode", id: E.id, faces: f, width: x, height: m, hasAlpha: I, format: w, dfdFlags: T }, u);
          } catch (f) {
            console.error(f), self.postMessage({ type: "error", id: E.id, error: f.message });
          }
        });
        break;
    }
  });
  function a(g) {
    e = new Promise((E) => {
      t = { wasmBinary: g, onRuntimeInitialized: E }, BASIS(t);
    }).then(() => {
      t.initializeBasis(), t.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function o(g) {
    const E = new t.KTX2File(new Uint8Array(g));
    function f() {
      E.close(), E.delete();
    }
    if (!E.isValid())
      throw f(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    const u = E.isUASTC() ? r.UASTC_4x4 : r.ETC1S, x = E.getWidth(), m = E.getHeight(), I = E.getLayers() || 1, w = E.getLevels(), T = E.getFaces(), y = E.getHasAlpha(), W = E.getDFDFlags(), { transcoderFormat: te, engineFormat: _ } = h(u, x, m, y);
    if (!x || !m || !w)
      throw f(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!E.startTranscoding())
      throw f(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const M = [], K = [];
    for (let ie = 0; ie < T; ie++) {
      const D = [];
      for (let L = 0; L < w; L++) {
        const Q = [];
        let q, N;
        for (let J = 0; J < I; J++) {
          const Z = E.getImageLevelInfo(L, J, ie);
          ie === 0 && L === 0 && J === 0 && (Z.origWidth % 4 !== 0 || Z.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), w > 1 ? (q = Z.origWidth, N = Z.origHeight) : (q = Z.width, N = Z.height);
          const ue = new Uint8Array(E.getImageTranscodedSizeInBytes(L, J, 0, te));
          if (!E.transcodeImage(ue, L, J, ie, te, 0, -1, -1))
            throw f(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          Q.push(ue);
        }
        const H = p(Q);
        D.push({ data: H, width: q, height: N }), K.push(H.buffer);
      }
      M.push({ mipmaps: D, width: x, height: m, format: _ });
    }
    return f(), { faces: M, buffers: K, width: x, height: m, hasAlpha: y, format: _, dfdFlags: W };
  }
  const c = [
    {
      if: "astcSupported",
      basisFormat: [r.UASTC_4x4],
      transcoderFormat: [i.ASTC_4x4, i.ASTC_4x4],
      engineFormat: [n.RGBA_ASTC_4x4_Format, n.RGBA_ASTC_4x4_Format],
      priorityETC1S: 1 / 0,
      priorityUASTC: 1,
      needsPowerOfTwo: !1
    },
    {
      if: "bptcSupported",
      basisFormat: [r.ETC1S, r.UASTC_4x4],
      transcoderFormat: [i.BC7_M5, i.BC7_M5],
      engineFormat: [n.RGBA_BPTC_Format, n.RGBA_BPTC_Format],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: !1
    },
    {
      if: "dxtSupported",
      basisFormat: [r.ETC1S, r.UASTC_4x4],
      transcoderFormat: [i.BC1, i.BC3],
      engineFormat: [n.RGB_S3TC_DXT1_Format, n.RGBA_S3TC_DXT5_Format],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: !1
    },
    {
      if: "etc2Supported",
      basisFormat: [r.ETC1S, r.UASTC_4x4],
      transcoderFormat: [i.ETC1, i.ETC2],
      engineFormat: [n.RGB_ETC2_Format, n.RGBA_ETC2_EAC_Format],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: !1
    },
    {
      if: "etc1Supported",
      basisFormat: [r.ETC1S, r.UASTC_4x4],
      transcoderFormat: [i.ETC1],
      engineFormat: [n.RGB_ETC1_Format],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: !1
    },
    {
      if: "pvrtcSupported",
      basisFormat: [r.ETC1S, r.UASTC_4x4],
      transcoderFormat: [i.PVRTC1_4_RGB, i.PVRTC1_4_RGBA],
      engineFormat: [n.RGB_PVRTC_4BPPV1_Format, n.RGBA_PVRTC_4BPPV1_Format],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0
    }
  ], l = c.sort(function(g, E) {
    return g.priorityETC1S - E.priorityETC1S;
  }), A = c.sort(function(g, E) {
    return g.priorityUASTC - E.priorityUASTC;
  });
  function h(g, E, f, u) {
    let x, m;
    const I = g === r.ETC1S ? l : A;
    for (let w = 0; w < I.length; w++) {
      const T = I[w];
      if (s[T.if] && T.basisFormat.includes(g) && !(u && T.transcoderFormat.length < 2) && !(T.needsPowerOfTwo && !(d(E) && d(f))))
        return x = T.transcoderFormat[u ? 1 : 0], m = T.engineFormat[u ? 1 : 0], { transcoderFormat: x, engineFormat: m };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), x = i.RGBA32, m = n.RGBAFormat, { transcoderFormat: x, engineFormat: m };
  }
  function d(g) {
    return g <= 2 ? !0 : (g & g - 1) === 0 && g !== 0;
  }
  function p(g) {
    if (g.length === 1) return g[0];
    let E = 0;
    for (let x = 0; x < g.length; x++) {
      const m = g[x];
      E += m.byteLength;
    }
    const f = new Uint8Array(E);
    let u = 0;
    for (let x = 0; x < g.length; x++) {
      const m = g[x];
      f.set(m, u), u += m.byteLength;
    }
    return f;
  }
};
const LE = /* @__PURE__ */ new Set([Ct, Di, Ri]), Ea = {
  [xA]: Ct,
  [EA]: Ct,
  [fA]: Ct,
  [pA]: Ct,
  [bA]: Di,
  [mA]: Di,
  [dA]: Di,
  [uA]: Di,
  [_A]: Ri,
  [gA]: Ri,
  [hA]: Ri,
  [AA]: Ri,
  [IA]: cr,
  [CA]: cr
}, _a = {
  [xA]: Ut,
  [EA]: bn,
  [fA]: ft,
  [pA]: ft,
  [bA]: Ut,
  [mA]: bn,
  [dA]: ft,
  [uA]: ft,
  [_A]: Ut,
  [gA]: bn,
  [hA]: ft,
  [AA]: ft,
  [IA]: ft,
  [CA]: ft
};
async function PE(s) {
  const { vkFormat: e } = s;
  if (Ea[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let t;
  s.supercompressionScheme === il && (ma || (ma = new Promise(async (r) => {
    const a = new DE();
    await a.init(), r(a);
  })), t = await ma);
  const n = [];
  for (let r = 0; r < s.levels.length; r++) {
    const a = Math.max(1, s.pixelWidth >> r), o = Math.max(1, s.pixelHeight >> r), c = s.pixelDepth ? Math.max(1, s.pixelDepth >> r) : 0, l = s.levels[r];
    let A;
    if (s.supercompressionScheme === SE)
      A = l.levelData;
    else if (s.supercompressionScheme === il)
      A = t.decode(l.levelData, l.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let h;
    _a[e] === Ut ? h = new Float32Array(
      A.buffer,
      A.byteOffset,
      A.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : _a[e] === bn ? h = new Uint16Array(
      A.buffer,
      A.byteOffset,
      A.byteLength / Uint16Array.BYTES_PER_ELEMENT
    ) : h = A, n.push({
      data: h,
      width: a,
      height: o,
      depth: c
    });
  }
  let i;
  if (LE.has(Ea[e]))
    i = s.pixelDepth === 0 ? new tA(n[0].data, s.pixelWidth, s.pixelHeight) : new Pl(n[0].data, s.pixelWidth, s.pixelHeight, s.pixelDepth);
  else {
    if (s.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    i = new Cr(n, s.pixelWidth, s.pixelHeight);
  }
  return i.mipmaps = n, i.type = _a[e], i.format = Ea[e], i.colorSpace = SA(s), i.needsUpdate = !0, Promise.resolve(i);
}
function SA(s) {
  const e = s.dataFormatDescriptor[0];
  return e.colorPrimaries === yE ? e.transferFunction === sl ? ot : pt : e.colorPrimaries === BE ? e.transferFunction === sl ? Er : ms : (e.colorPrimaries === ME || console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`), Nt);
}
var FE = function() {
  var s = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : s, r, a = WebAssembly.instantiate(o(i), {}).then(function(u) {
    r = u.instance, r.exports.__wasm_call_ctors();
  });
  function o(u) {
    for (var x = new Uint8Array(u.length), m = 0; m < u.length; ++m) {
      var I = u.charCodeAt(m);
      x[m] = I > 96 ? I - 97 : I > 64 ? I - 39 : I + 4;
    }
    for (var w = 0, m = 0; m < u.length; ++m)
      x[w++] = x[m] < 60 ? n[x[m]] : (x[m] - 60) * 64 + x[++m];
    return x.buffer.slice(0, w);
  }
  function c(u, x, m, I, w, T) {
    var y = r.exports.sbrk, W = m + 3 & -4, te = y(W * I), _ = y(w.length), M = new Uint8Array(r.exports.memory.buffer);
    M.set(w, _);
    var K = u(te, m, I, _, w.length);
    if (K == 0 && T && T(te, W, I), x.set(M.subarray(te, te + m * I)), y(te - y(0)), K != 0)
      throw new Error("Malformed buffer data: " + K);
  }
  var l = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, A = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, h = [], d = 0;
  function p(u) {
    var x = {
      object: new Worker(u),
      pending: 0,
      requests: {}
    };
    return x.object.onmessage = function(m) {
      var I = m.data;
      x.pending -= I.count, x.requests[I.id][I.action](I.value), delete x.requests[I.id];
    }, x;
  }
  function g(u) {
    for (var x = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + f.toString(), m = new Blob([x], { type: "text/javascript" }), I = URL.createObjectURL(m), w = 0; w < u; ++w)
      h[w] = p(I);
    URL.revokeObjectURL(I);
  }
  function E(u, x, m, I, w) {
    for (var T = h[0], y = 1; y < h.length; ++y)
      h[y].pending < T.pending && (T = h[y]);
    return new Promise(function(W, te) {
      var _ = new Uint8Array(m), M = d++;
      T.pending += u, T.requests[M] = { resolve: W, reject: te }, T.object.postMessage({ id: M, count: u, size: x, source: _, mode: I, filter: w }, [_.buffer]);
    });
  }
  function f(u) {
    a.then(function() {
      var x = u.data;
      try {
        var m = new Uint8Array(x.count * x.size);
        c(r.exports[x.mode], m, x.count, x.size, x.source, r.exports[x.filter]), self.postMessage({ id: x.id, count: x.count, action: "resolve", value: m }, [m.buffer]);
      } catch (I) {
        self.postMessage({ id: x.id, count: x.count, action: "reject", value: I });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(u) {
      g(u);
    },
    decodeVertexBuffer: function(u, x, m, I, w) {
      c(r.exports.meshopt_decodeVertexBuffer, u, x, m, I, r.exports[l[w]]);
    },
    decodeIndexBuffer: function(u, x, m, I) {
      c(r.exports.meshopt_decodeIndexBuffer, u, x, m, I);
    },
    decodeIndexSequence: function(u, x, m, I) {
      c(r.exports.meshopt_decodeIndexSequence, u, x, m, I);
    },
    decodeGltfBuffer: function(u, x, m, I, w, T) {
      c(r.exports[A[w]], u, x, m, I, r.exports[l[T]]);
    },
    decodeGltfBufferAsync: function(u, x, m, I, w) {
      return h.length > 0 ? E(u, x, m, A[I], l[w]) : a.then(function() {
        var T = new Uint8Array(u * x);
        return c(r.exports[A[I]], T, u, x, m, r.exports[l[w]]), T;
      });
    }
  };
}();
class vr extends Lt {
  constructor() {
    const e = vr.SkyShader, t = new Cn({
      name: e.name,
      uniforms: kl.clone(e.uniforms),
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader,
      side: Pt,
      depthWrite: !1
    });
    super(new Wi(1, 1, 1), t), this.isSky = !0;
  }
}
vr.SkyShader = {
  name: "SkyShader",
  uniforms: {
    turbidity: { value: 2 },
    rayleigh: { value: 1 },
    mieCoefficient: { value: 5e-3 },
    mieDirectionalG: { value: 0.8 },
    sunPosition: { value: new R() },
    up: { value: new R(0, 1, 0) }
  },
  vertexShader: (
    /* glsl */
    `
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
  )
};
const $s = "/api/plugins/agentverse/assets/v0.2.0/world", UE = "/api/plugins/agentverse/assets/v0.2.0/basis/", Wn = [
  "KB3D_CSK_BldgLgAirPort",
  "KB3D_CSK_BldgMdFlyingFarm",
  "KB3D_CSK_BldgMdFloatingManor",
  "KB3D_CSK_BldgMdObservatory",
  "KB3D_CSK_BldgLgAirFactory",
  "KB3D_CSK_BldgSmPostOffice",
  "KB3D_CSK_BldgSmFishingVillage"
], NE = "KB3D_CSK_BldgSmNomadsHouse", ba = {
  KB3D_CSK_BldgLgAirPort: { angle: 0, dist: 0, rotY: 0 },
  KB3D_CSK_BldgLgAirFactory: { angle: 0, dist: 1, rotY: -Math.PI / 2 },
  KB3D_CSK_BldgMdObservatory: { angle: Math.PI / 3, dist: 1, rotY: 0 },
  KB3D_CSK_BldgMdFlyingFarm: { angle: Math.PI * 2 / 3, dist: 1, rotY: 0 },
  KB3D_CSK_BldgSmFishingVillage: { angle: Math.PI, dist: 1, rotY: 0 },
  KB3D_CSK_BldgSmPostOffice: { angle: Math.PI * 4 / 3, dist: 1, rotY: 0 },
  KB3D_CSK_BldgMdFloatingManor: { angle: Math.PI * 5 / 3, dist: 1, rotY: 0 }
}, ol = [
  6724095,
  11163135,
  4513177,
  16763972,
  16733542,
  4508927
], QE = 70, OE = 22, kE = 5, GE = 15, er = 15, cl = 35, HE = `
  @keyframes av-drift {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-200%); }
  }
  .av-cloud {
    position: absolute; border-radius: 50%;
    filter: blur(38px); background: rgba(140,170,220,0.18);
    animation: av-drift linear infinite;
  }
`, zE = [
  { top: "10%", left: "5%", w: 420, h: 96, dur: "14s", delay: "0s" },
  { top: "30%", left: "55%", w: 300, h: 75, dur: "21s", delay: "-5s" },
  { top: "52%", left: "12%", w: 500, h: 108, dur: "11s", delay: "-2s" },
  { top: "66%", left: "68%", w: 340, h: 82, dur: "18s", delay: "-8s" },
  { top: "78%", left: "28%", w: 440, h: 94, dur: "13s", delay: "-4s" },
  { top: "40%", left: "82%", w: 280, h: 68, dur: "23s", delay: "-11s" }
], VE = Array.from({ length: 28 }, (s, e) => ({
  left: (e * 73 + 11) % 100 + "%",
  top: (e * 47 + 7) % 60 + "%",
  op: 0.25 + e % 5 * 0.1
}));
function WE(s) {
  const e = Math.max(0, Math.min(1, s));
  return e * e * e * (e * (e * 6 - 15) + 10);
}
function qE(s, e) {
  const i = document.createElement("canvas");
  i.width = 256, i.height = 52;
  const r = i.getContext("2d");
  r.fillStyle = "rgba(8,16,28,0.85)", r.beginPath(), r.roundRect(2, 2, 252, 48, 10), r.fill();
  const a = "#" + e.toString(16).padStart(6, "0");
  r.fillStyle = a, r.beginPath(), r.arc(20, 52 / 2, 8, 0, Math.PI * 2), r.fill(), r.fillStyle = "#dfe9f5", r.font = "bold 19px ui-monospace, Consolas, monospace", r.textBaseline = "middle";
  const o = s.length > 13 ? s.slice(0, 12) + "…" : s;
  r.fillText(o, 36, 52 / 2);
  const c = new Za(i), l = new Xa({ map: c, depthWrite: !1, transparent: !0, depthTest: !1 }), A = new $l(l);
  return A.scale.set(14, 2.8, 1), A;
}
function jE() {
  const e = document.createElement("canvas");
  e.width = e.height = 256;
  const t = e.getContext("2d");
  for (let i = 0; i < 16; i++) {
    const r = 256 * (0.5 + (Math.random() - 0.5) * 0.62), a = 256 * (0.52 + (Math.random() - 0.5) * 0.42), o = 256 * (0.1 + Math.random() * 0.2), c = t.createRadialGradient(r, a, 0, r, a, o);
    c.addColorStop(0, "rgba(255,255,255," + (0.45 + Math.random() * 0.4) + ")"), c.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = c, t.beginPath(), t.arc(r, a, o, 0, Math.PI * 2), t.fill();
  }
  const n = new Za(e);
  return n.colorSpace = ot, n;
}
function YE(s) {
  const t = document.createElement("canvas");
  t.width = t.height = 512;
  const n = t.getContext("2d"), i = [-512, 0, 512];
  n.fillStyle = "#2b71b0", n.fillRect(0, 0, 512, 512);
  for (let o = 0; o < 240; o++) {
    const c = Math.random() * 512, l = Math.random() * 512, A = Math.random() * 26;
    n.fillStyle = "rgba(255,255,255," + Math.random() * 0.025 + ")";
    for (const h of i) for (const d of i)
      n.beginPath(), n.arc(c + h, l + d, A, 0, Math.PI * 2), n.fill();
  }
  const r = (o, c, l, A, h) => {
    n.fillStyle = h;
    for (const d of i) for (const p of i) {
      n.beginPath();
      for (let g = 0; g <= A.length; g++) {
        const E = g / A.length * Math.PI * 2, f = l * A[g % A.length], u = o + d + Math.cos(E) * f, x = c + p + Math.sin(E) * f;
        g ? n.lineTo(u, x) : n.moveTo(u, x);
      }
      n.closePath(), n.fill();
    }
  };
  for (let o = 0; o < 14; o++) {
    const c = Math.random() * 512, l = Math.random() * 512, A = 512 * (0.04 + Math.random() * 0.11), h = 11 + (Math.random() * 8 | 0), d = Array.from({ length: h }, () => 0.65 + Math.random() * 0.5);
    r(c, l, A * 1.16, d, "#cabe8c"), r(c, l, A, d, "#6f9152"), r(c, l, A * 0.55, d, "#577b41");
  }
  const a = new Za(t);
  return a.colorSpace = ot, a.wrapS = a.wrapT = ti, a.repeat.set(6, 6), a.anisotropy = s.capabilities.getMaxAnisotropy(), a;
}
function XE(s, e, t, n, i) {
  const r = [], a = [], o = [];
  for (let A = 0; A <= e; A++) {
    const h = s * (A / e), d = -n * h * h;
    for (let p = 0; p <= t; p++) {
      const g = p / t * Math.PI * 2;
      r.push(Math.cos(g) * h, d, Math.sin(g) * h), a.push(Math.cos(g) * h / i, Math.sin(g) * h / i);
    }
  }
  const c = t + 1;
  for (let A = 0; A < e; A++) for (let h = 0; h < t; h++) {
    const d = A * c + h, p = d + 1, g = d + c, E = g + 1;
    o.push(d, g, p, p, g, E);
  }
  const l = new qt();
  return l.setAttribute("position", new tn(r, 3)), l.setAttribute("uv", new tn(a, 2)), l.setIndex(o), l.computeVertexNormals(), l;
}
function g_({ api: s }) {
  const e = St(null), t = St(null), n = St(null), i = St(null), r = St(null), a = St(new Rm()), o = St(null), c = St(/* @__PURE__ */ new Map()), l = St(/* @__PURE__ */ new Map()), A = St(null), h = St([]), d = St([]), p = St(0), g = St([]), E = St({ min: -1e4, max: 1e4 }), f = St(null), u = St(0), [x, m] = Ji("Loading world…"), [I, w] = Ji(0), [T, y] = Ji(!0), [W, te] = Ji([]), [_, M] = Ji("idle");
  wr(() => {
    if (I < 100) return;
    const L = setTimeout(() => y(!1), 900);
    return () => clearTimeout(L);
  }, [I]);
  const K = ao(async (L) => {
    const Q = L.clientWidth, q = L.clientHeight, N = new Kl({ antialias: !0, powerPreference: "high-performance" });
    N.setPixelRatio(1), N.setSize(Q, q), N.toneMapping = El, N.toneMappingExposure = 0.7, N.shadowMap.enabled = !0, N.shadowMap.type = gl, N.shadowMap.autoUpdate = !1, L.appendChild(N.domElement), t.current = N;
    const H = new vc();
    H.fog = new pr(12769004, 700, 5500), n.current = H;
    const J = new Fa(N), Z = new vr();
    Z.scale.setScalar(6e5);
    const ue = new R(), Ce = Z.material.uniforms;
    Ce.turbidity.value = 1.5, Ce.rayleigh.value = 3, Ce.mieCoefficient.value = 1e-3, Ce.mieDirectionalG.value = 0.85, ue.setFromSphericalCoords(1, fr.degToRad(62), fr.degToRad(135)), Ce.sunPosition.value.copy(ue);
    const z = new vc();
    z.add(Z), H.environment = J.fromScene(z, 0, 1, 7e5).texture, H.add(Z);
    const Y = new oA(16774370, 3.2);
    Y.castShadow = !0, Y.shadow.mapSize.set(1024, 1024), Y.shadow.bias = -4e-4, Y.shadow.normalBias = 0.6, H.add(Y), H.add(Y.target), H.add(new vm(12572914, 4870476, 0.5));
    const le = new Dt(55, Q / q, 0.1, 1e4);
    le.position.set(150, 120, 150), i.current = le;
    const de = new Hm(le, N.domElement);
    de.enableDamping = !0, r.current = de;
    const ve = new an().setTranscoderPath(UE).detectSupport(N), ge = new zm().setMeshoptDecoder(FE).setKTX2Loader(ve), Oe = new _n();
    H.add(Oe);
    let Ie = 0;
    const P = Wn.length + 1, tt = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map();
    await Promise.all(Wn.map((ee) => new Promise((ce) => {
      ge.load(
        $s + "/buildings/" + ee + "/model.gltf",
        (S) => {
          const j = S.scene;
          j.traverse((Be) => {
            const Ge = Be;
            Ge.isMesh && (Be.matrixAutoUpdate = !1, Ge.castShadow = !0, Ge.receiveShadow = !0);
          });
          const X = new Wt().setFromObject(j), O = X.getCenter(new R());
          j.position.set(-O.x, -X.min.y, -O.z), Te.set(ee, O.clone()), be.set(ee, X.min.y);
          const Ae = new _n(), we = ba[ee] ?? { rotY: 0 };
          Ae.rotation.y = we.rotY, Ae.add(j), Oe.add(Ae), tt.set(ee, Ae), _e.set(ee, X.getSize(new R())), Ie++, w(Math.round(Ie / P * 100)), ce();
        },
        void 0,
        () => {
          Ie++, w(Math.round(Ie / P * 100)), ce();
        }
      );
    })));
    const Ze = _e.get("KB3D_CSK_BldgLgAirPort") ?? new R(100, 50, 100), Fe = Math.max(Ze.x, Ze.z);
    let v = 0;
    for (const [ee, ce] of _e)
      ee !== "KB3D_CSK_BldgLgAirPort" && (v = Math.max(v, Math.max(ce.x, ce.z)));
    const b = Fe * 0.5 + v * 0.65 + 20;
    for (const [ee, ce] of tt) {
      const S = ba[ee] ?? { angle: 0, dist: 0 }, j = S.dist * b;
      ce.position.set(Math.sin(S.angle) * j, 0, Math.cos(S.angle) * j);
    }
    const U = /* @__PURE__ */ new Map();
    for (const [ee, ce] of tt) {
      const S = Te.get(ee), j = be.get(ee), X = ba[ee] ?? { rotY: 0 }, O = new Re().makeTranslation(-S.x, -j, -S.z), Ae = new Re().makeRotationY(X.rotY), { x: we, y: Be, z: Ge } = ce.position, Je = new Re().makeTranslation(we, Be, Ge);
      U.set(ee, new Re().multiplyMatrices(Je, new Re().multiplyMatrices(Ae, O)));
    }
    d.current = [], Wn.forEach((ee, ce) => {
      const S = tt.get(ee);
      if (!S) return;
      const j = _e.get(ee) ?? new R();
      d.current.push({
        anchor: S,
        fam: ee,
        baseY: S.position.y,
        phase: ce * 1.6180339 % (Math.PI * 2),
        speed: 0.2 + ce % 5 * 0.045,
        // ~5-8 s per cycle
        amplitude: 8 + ce % 4 * 2.5,
        // 8-15.5 units (~3× previous)
        gatherYOffset: j.y * 0.05,
        currentYOffset: 0
      });
    });
    const re = new Wt().setFromObject(Oe), $ = re.getCenter(new R()), ne = re.getSize(new R()), me = Math.max(ne.x, ne.z);
    for (const [ee, ce] of tt) {
      const S = ce.position.clone(), j = _e.get(ee) ?? new R();
      S.y = j.y * 0.05, c.current.set(ee, S);
    }
    await new Promise((ee) => {
      ge.load(
        $s + "/buildings/" + NE + "/model.gltf",
        (ce) => {
          const S = ce.scene, j = new Wt().setFromObject(S), X = j.getCenter(new R());
          S.position.x -= X.x, S.position.z -= X.z, S.position.y -= j.min.y, A.current = S, Ie++, w(Math.round(Ie / P * 100)), ee();
        },
        void 0,
        () => {
          Ie++, ee();
        }
      );
    });
    const oe = Math.max(ne.y * 18, me * 2);
    de.target.copy($);
    const pe = ne.length() / 2;
    le.position.set($.x + pe * 0.9, $.y + pe * 0.6, $.z + pe * 0.9), le.near = Math.max(0.5, pe * 0.01), le.far = oe * 6 + me * 40, le.updateProjectionMatrix(), de.update(), H.fog = new pr(12769004, me * 2, oe * 8);
    const xe = Math.max(ne.x, ne.z) * 0.62;
    Y.position.copy(ue).multiplyScalar(xe * 2.4).add($), Y.target.position.copy($), Y.target.updateMatrixWorld();
    const De = Y.shadow.camera;
    De.left = -xe, De.right = xe, De.top = xe, De.bottom = -xe, De.near = xe * 0.1, De.far = xe * 6, De.updateProjectionMatrix();
    const se = oe * 24, Ke = new Lt(
      XE(se, 48, 128, 1 / (60 * oe), oe * 16),
      new Ir({
        map: YE(N),
        roughness: 0.9,
        metalness: 0,
        fog: !0,
        side: Kt
      })
    );
    Ke.position.set($.x, re.min.y - oe, $.z), H.add(Ke), f.current = Ke.material.map, u.current = 6 / (oe * 16);
    const ze = jE(), Ue = re.max.y + ne.y * 2.5, Se = re.min.y - oe + oe * 0.12;
    E.current = { min: $.x - me * 3.6, max: $.x + me * 3.6 };
    for (let ee = 0; ee < 24; ee++) {
      const ce = Math.random() * Math.PI * 2, S = me * (0.1 + Math.random() * 2.9), j = $.x + Math.cos(ce) * S, X = $.z + Math.sin(ce) * S, O = Se + Math.random() * (Ue - Se), Ae = 2 + (Math.random() * 2 | 0), we = 0.85 + Math.random() * 0.3;
      for (let Be = 0; Be < Ae; Be++) {
        const Ge = new Xa({
          map: ze,
          transparent: !0,
          depthWrite: !1,
          opacity: 0.4 + Math.random() * 0.45,
          fog: !0
        }), Je = new $l(Ge), Le = me * (0.16 + Math.random() * 0.3);
        Je.scale.set(Le * (1 + Math.random() * 0.8), Le * (0.5 + Math.random() * 0.3), 1), Je.position.set(
          j + (Math.random() - 0.5) * Le,
          O + (Math.random() - 0.5) * Le * 0.3,
          X + (Math.random() - 0.5) * Le
        ), H.add(Je), g.current.push({ sp: Je, vx: we });
      }
    }
    N.shadowMap.needsUpdate = !0, w(100), m("Realm at rest");
    const fe = new Re(), ke = new Re(), B = new nn();
    function ae() {
      o.current = requestAnimationFrame(ae), de.update();
      const ee = Math.min(a.current.getDelta(), 0.1), ce = QE * ee, { min: S, max: j } = E.current;
      for (const { sp: O, vx: Ae } of g.current)
        O.position.x -= ce * Ae, O.position.x < S && (O.position.x = j);
      f.current && (f.current.offset.x += ce * u.current), p.current += ee;
      for (const O of d.current) {
        O.anchor.position.y = O.baseY + Math.sin(p.current * O.speed + O.phase) * O.amplitude, O.currentYOffset = O.anchor.position.y - O.baseY;
        const Ae = c.current.get(O.fam);
        Ae && (Ae.y = O.anchor.position.y + O.gatherYOffset);
      }
      for (const O of h.current) {
        B.setFromAxisAngle(O.axis, O.phase + p.current * O.speed), ke.makeRotationFromQuaternion(B), fe.copy(O.tP).multiply(ke).multiply(O.preM);
        const Ae = O.node.matrix;
        Ae.copy(O.parentInv).multiply(fe), O.floatIdx >= 0 && (Ae.elements[13] += d.current[O.floatIdx].currentYOffset), O.node.matrixWorldNeedsUpdate = !0;
      }
      const X = new R();
      for (const O of l.current.values()) {
        const Ae = c.current.get(O.wanderTargetFam);
        if (Ae && O.targetPos.set(
          Ae.x + O.dockOffset.x,
          Ae.y,
          Ae.z + O.dockOffset.z
        ), O.wanderState === "docked") {
          if (O.dockTimer -= ee, O.currentPos.copy(O.targetPos), O.dockTimer <= 0) {
            const we = Wn.filter((rt) => rt !== O.wanderTargetFam);
            O.wanderTargetFam = we[Math.floor(Math.random() * we.length)];
            const Be = Math.random() * Math.PI * 2, Ge = er + Math.random() * (cl - er);
            O.dockOffset.set(Math.sin(Be) * Ge, 0, Math.cos(Be) * Ge), O.flightStartPos.copy(O.currentPos);
            const Je = c.current.get(O.wanderTargetFam), Le = Je ? O.flightStartPos.distanceTo(
              X.set(Je.x + O.dockOffset.x, Je.y, Je.z + O.dockOffset.z)
            ) : 200;
            O.flightDuration = Math.max(kE, Math.min(GE, Le / OE)), O.flightProgress = 0, O.wanderState = "flying";
          }
        } else {
          O.flightProgress = Math.min(1, O.flightProgress + ee / O.flightDuration);
          const we = WE(O.flightProgress);
          O.currentPos.lerpVectors(O.flightStartPos, O.targetPos, we);
          const Be = O.targetPos.x - O.flightStartPos.x, Ge = O.targetPos.z - O.flightStartPos.z;
          if (Math.abs(Be) > 0.5 || Math.abs(Ge) > 0.5) {
            let Le = Math.atan2(Be, Ge) - O.facingAngle;
            for (; Le > Math.PI; ) Le -= Math.PI * 2;
            for (; Le < -Math.PI; ) Le += Math.PI * 2;
            O.facingAngle += Le * (1 - Math.pow(0.05, ee)), O.root.rotation.y = O.facingAngle;
          }
          O.flightProgress >= 1 && (O.currentPos.copy(O.targetPos), O.wanderState = "docked", O.dockTimer = 8 + Math.random() * 4);
        }
        O.root.position.copy(O.currentPos), X.copy(O.currentPos).add(ll), O.light.position.copy(X), X.copy(O.currentPos).add(Al), O.label.position.copy(X);
      }
      N.render(H, le);
    }
    ae(), (async () => {
      try {
        const ee = await fetch($s + "/propellers/manifest.json").then((ce) => ce.json());
        await new Promise((ce) => {
          ge.load($s + "/propellers/model.gltf", (S) => {
            Oe.add(S.scene), Oe.updateMatrixWorld(!0), S.scene.traverse((j) => {
              const X = ee[j.name];
              if (!X) return;
              j.matrixAutoUpdate = !1;
              const O = Wn.find((Sn) => j.name.startsWith(Sn)), Ae = O ? U.get(O) : void 0, we = new R().fromArray(X.pivot);
              Ae && we.applyMatrix4(Ae);
              const Be = new R().fromArray(X.axis);
              Ae && Be.applyMatrix4(new Re().extractRotation(Ae)), Be.normalize();
              const Ge = Ae ? new Re().multiplyMatrices(Ae, j.matrixWorld) : j.matrixWorld.clone(), Je = new Re();
              j.parent && Je.copy(j.parent.matrixWorld).invert();
              const Le = new Re().makeTranslation(we.x, we.y, we.z), rt = new Re().makeTranslation(-we.x, -we.y, -we.z).multiply(Ge), It = ["Observatory", "SmallFactory", "FlyingFarm"].some((Sn) => j.name.includes(Sn)), bs = /Windmill|WindTurbine|Turbine|EnergyWheel|Fan|Rotor|Sail/.test(j.name), Xi = j.name.length % 5 / 5, ai = d.current.findIndex((Sn) => Sn.fam === O);
              h.current.push({
                node: j,
                pivot: we,
                axis: Be,
                world0: Ge,
                parentInv: Je,
                tP: Le,
                preM: rt,
                phase: j.name.length % 13 / 13 * Math.PI * 2,
                speed: It ? 3.6 + Xi * 1.6 : bs ? 2 + Xi * 1.2 : 0.25 + Xi * 0.45,
                floatIdx: ai ?? -1
              });
            }), N.shadowMap.needsUpdate = !0, ce();
          }, void 0, () => ce());
        });
      } catch {
      }
    })();
  }, []);
  wr(() => {
    const L = e.current;
    if (!L) return;
    K(L).catch((N) => m("Scene error: " + String(N)));
    const Q = () => {
      const N = e.current;
      if (!N || !t.current || !i.current) return;
      const H = N.clientWidth, J = N.clientHeight;
      t.current.setSize(H, J), i.current.aspect = H / J, i.current.updateProjectionMatrix();
    };
    window.addEventListener("resize", Q);
    const q = new ResizeObserver(Q);
    return q.observe(L), () => {
      var N;
      window.removeEventListener("resize", Q), q.disconnect(), o.current !== null && cancelAnimationFrame(o.current), (N = t.current) == null || N.dispose(), t.current = null, L && (L.innerHTML = "");
    };
  }, [K]);
  const ie = ao((L, Q) => {
    const q = n.current, N = A.current;
    if (!q) return;
    const H = /* @__PURE__ */ new Map();
    (Q.activeTasks ?? []).forEach((Y) => {
      Y.agentId && H.set(Y.agentId, Y);
    });
    const J = /* @__PURE__ */ new Set(), Z = l.current, ue = [];
    L.forEach((Y, le) => {
      var P;
      J.add(Y.agentId);
      const de = H.get(Y.agentId), ve = (de == null ? void 0 : de.status) === "running" ? "working" : (de == null ? void 0 : de.status) === "waiting_approval" ? "waiting" : (de == null ? void 0 : de.status) === "pending" ? "queued" : "idle", ge = le % ol.length, Oe = ol[ge];
      if (!Z.has(Y.agentId) && N) {
        const tt = N.clone(!0);
        q.add(tt);
        const _e = new aA(Oe, 3.5, 80);
        q.add(_e);
        const Te = qE(Y.name, Oe);
        q.add(Te);
        const be = Wn[le % Wn.length], Ze = Math.random() * Math.PI * 2, Fe = er + Math.random() * (cl - er), v = new R(Math.sin(Ze) * Fe, 0, Math.cos(Ze) * Fe), b = c.current.get(be), U = b ? new R(b.x + v.x, b.y, b.z + v.z) : new R(0, 0, 0);
        tt.position.copy(U), _e.position.copy(U).add(ll), Te.position.copy(U).add(Al), Z.set(Y.agentId, {
          agentId: Y.agentId,
          name: Y.name,
          colorIdx: ge,
          root: tt,
          light: _e,
          label: Te,
          currentPos: U.clone(),
          targetPos: U.clone(),
          state: ve,
          task: (de == null ? void 0 : de.summary) ?? "",
          wanderTargetFam: be,
          wanderState: "docked",
          dockTimer: le * 3.5,
          dockOffset: v,
          flightStartPos: U.clone(),
          flightProgress: 0,
          flightDuration: 1,
          facingAngle: Math.random() * Math.PI * 2
        });
      }
      const Ie = Z.get(Y.agentId);
      Ie && (Ie.name = Y.name, Ie.state = ve, Ie.task = (de == null ? void 0 : de.summary) ?? ""), ue.push({
        id: Y.agentId,
        name: Y.name,
        state: ve,
        task: ((P = de == null ? void 0 : de.summary) == null ? void 0 : P.slice(0, 60)) ?? "",
        color: "#" + Oe.toString(16).padStart(6, "0")
      });
    });
    for (const [Y, le] of Z)
      J.has(Y) || (q.remove(le.root, le.light, le.label), Z.delete(Y));
    te(ue), M(Q.run_state ?? "idle");
    const Ce = Q.active_count ?? 0, z = Q.queue_length ?? 0;
    Ce > 0 ? m(Ce + " agent" + (Ce !== 1 ? "s" : "") + " working" + (z > 0 ? ", " + z + " queued" : "")) : z > 0 ? m(z + " task" + (z !== 1 ? "s" : "") + " queued") : m("Realm at rest");
  }, []);
  wr(() => {
    let L = !1;
    async function Q() {
      if (!L) {
        try {
          const [q, N] = await Promise.all([
            s.host.get("/api/runtime/status"),
            s.host.get("/api/agents")
          ]);
          L || ie(
            N.agents ?? [],
            q
          );
        } catch {
        }
        L || setTimeout(Q, 4e3);
      }
    }
    return Q(), () => {
      L = !0;
    };
  }, [s, ie]);
  const D = _ !== "idle";
  return /* @__PURE__ */ $e.jsxs("div", { style: ZE, children: [
    /* @__PURE__ */ $e.jsx("div", { ref: e, style: $E, children: T && /* @__PURE__ */ $e.jsxs("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 20,
      overflow: "hidden",
      background: "linear-gradient(175deg, #060c18 0%, #0c1628 55%, #182438 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: I >= 100 ? 0 : 1,
      transition: "opacity 0.85s ease",
      pointerEvents: I >= 100 ? "none" : "auto"
    }, children: [
      /* @__PURE__ */ $e.jsx("style", { children: HE }),
      VE.map((L, Q) => /* @__PURE__ */ $e.jsx("div", { style: {
        position: "absolute",
        width: 2,
        height: 2,
        borderRadius: "50%",
        background: "#fff",
        opacity: L.op,
        left: L.left,
        top: L.top
      } }, Q)),
      zE.map((L, Q) => /* @__PURE__ */ $e.jsx("div", { className: "av-cloud", style: {
        width: L.w,
        height: L.h,
        top: L.top,
        left: L.left,
        animationDuration: L.dur,
        animationDelay: L.delay
      } }, Q)),
      /* @__PURE__ */ $e.jsxs("div", { style: { position: "relative", zIndex: 5, textAlign: "center", userSelect: "none" }, children: [
        /* @__PURE__ */ $e.jsx("div", { style: {
          fontSize: 38,
          fontWeight: 800,
          letterSpacing: "0.22em",
          color: "#ddeeff",
          textShadow: "0 0 48px rgba(80,140,255,0.5)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif"
        }, children: "AGENTVERSE" }),
        /* @__PURE__ */ $e.jsx("div", { style: {
          fontSize: 11,
          letterSpacing: "0.35em",
          color: "#4a6a98",
          marginTop: 6,
          fontFamily: "ui-monospace, monospace"
        }, children: "CITY IN THE SKY" }),
        /* @__PURE__ */ $e.jsx("div", { style: {
          width: 260,
          height: 2,
          background: "rgba(255,255,255,0.07)",
          borderRadius: 2,
          margin: "28px auto 0",
          overflow: "hidden"
        }, children: /* @__PURE__ */ $e.jsx("div", { style: {
          height: "100%",
          borderRadius: 2,
          background: "linear-gradient(to right, #3366cc, #66aaff)",
          width: I + "%",
          transition: "width 0.35s ease"
        } }) }),
        /* @__PURE__ */ $e.jsx("div", { style: {
          marginTop: 10,
          fontSize: 10,
          letterSpacing: "0.12em",
          color: "#304868",
          fontFamily: "ui-monospace, monospace"
        }, children: I < 100 ? `LOADING · ${I}%` : "READY" })
      ] })
    ] }) }),
    /* @__PURE__ */ $e.jsxs("aside", { style: e_, children: [
      /* @__PURE__ */ $e.jsxs("div", { style: t_, children: [
        /* @__PURE__ */ $e.jsx("span", { style: {
          ...hl,
          background: D ? "#60e060" : "#505860",
          boxShadow: D ? "0 0 8px #60e06088" : "none"
        } }),
        /* @__PURE__ */ $e.jsx("span", { style: n_, children: x })
      ] }),
      I < 100 && /* @__PURE__ */ $e.jsx("div", { style: i_, children: /* @__PURE__ */ $e.jsx("div", { style: { ...s_, width: I + "%" } }) }),
      /* @__PURE__ */ $e.jsx("div", { style: dl, children: "Agents" }),
      W.length === 0 ? /* @__PURE__ */ $e.jsx("div", { style: r_, children: "No agents configured" }) : W.map((L) => /* @__PURE__ */ $e.jsxs("div", { style: a_, children: [
        /* @__PURE__ */ $e.jsx("span", { style: { ...hl, background: L.color } }),
        /* @__PURE__ */ $e.jsxs("div", { style: o_, children: [
          /* @__PURE__ */ $e.jsx("div", { style: c_, children: L.name }),
          L.state !== "idle" && /* @__PURE__ */ $e.jsxs("div", { style: l_, children: [
            KE[L.state] ?? L.state,
            L.task ? " — " + L.task : ""
          ] })
        ] })
      ] }, L.id)),
      /* @__PURE__ */ $e.jsx("div", { style: { ...dl, marginTop: "auto", paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)" }, children: "Landmarks" }),
      JE.map((L) => /* @__PURE__ */ $e.jsxs("div", { style: A_, children: [
        /* @__PURE__ */ $e.jsx("span", { style: h_ }),
        /* @__PURE__ */ $e.jsx("span", { style: d_, children: L.label }),
        /* @__PURE__ */ $e.jsx("span", { style: u_, children: L.role })
      ] }, L.id)),
      /* @__PURE__ */ $e.jsx("div", { style: f_, children: "Agentverse v0.2 · City in the Sky" })
    ] })
  ] });
}
const ll = new R(0, 18, 0), Al = new R(0, 22, 0), KE = {
  working: "Working",
  waiting: "Awaiting approval",
  queued: "Queued",
  idle: "Idle",
  walking: "Traveling"
}, JE = [
  { id: "airport", label: "Air Port", role: "–" },
  { id: "farm", label: "Flying Farm", role: "–" },
  { id: "manor", label: "Floating Manor", role: "Waiting" },
  { id: "obs", label: "Observatory", role: "–" },
  { id: "factory", label: "Air Factory", role: "Working" },
  { id: "post", label: "Post Office", role: "Queued" },
  { id: "fishing", label: "Fishing Village", role: "Idle" }
], ZE = {
  display: "flex",
  height: "100%",
  minHeight: "100dvh",
  width: "100%",
  fontFamily: "ui-sans-serif, -apple-system, system-ui, sans-serif",
  background: "#0b111c",
  color: "#d8deea",
  boxSizing: "border-box",
  overflow: "hidden"
}, $E = { flex: "1 1 auto", overflow: "hidden", minWidth: 0, position: "relative" }, e_ = {
  flex: "0 0 224px",
  width: 224,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "18px 14px",
  borderLeft: "1px solid rgba(255,255,255,0.07)",
  overflowY: "auto",
  background: "rgba(0,0,0,0.25)"
}, t_ = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "9px 11px",
  borderRadius: 8,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.07)"
}, hl = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  display: "inline-block",
  flexShrink: 0,
  transition: "background 0.4s"
}, n_ = { fontSize: 12, color: "#9ba8b8" }, i_ = { height: 3, background: "#1a2740", borderRadius: 2, overflow: "hidden" }, s_ = { height: "100%", background: "#7fc0ff", transition: "width 0.3s", borderRadius: 2 }, dl = {
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#6a7888",
  marginBottom: 2
}, r_ = { fontSize: 12, color: "#4a5870", fontStyle: "italic" }, a_ = { display: "flex", alignItems: "flex-start", gap: 8 }, o_ = { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }, c_ = {
  fontSize: 13,
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}, l_ = {
  fontSize: 11,
  color: "#7888a0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}, A_ = { display: "flex", alignItems: "center", gap: 6, fontSize: 11 }, h_ = { width: 5, height: 5, borderRadius: "50%", background: "#4a6080", flexShrink: 0 }, d_ = { color: "#8898b0", flex: "1 1 auto" }, u_ = { color: "#4a5870", fontSize: 10 }, f_ = { fontSize: 10, color: "#3a4858", paddingTop: 8 };
export {
  g_ as default
};
//# sourceMappingURL=index.js.map
