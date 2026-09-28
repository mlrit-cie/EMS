import { r as __toESM } from "../_runtime.mjs";
import { i as performance_default } from "../_libs/h3-v2+rou3+srvx+unenv.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MousePointer2, i as Sparkles } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-shell-u06cjFZZ.mjs";
import { t as clubs } from "./ems-data-DREOOOk7.mjs";
import { a as Mesh, i as Texture, n as Plane, o as Renderer, r as RenderTarget, s as Program, t as Triangle } from "../_libs/ogl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clubs.index-KZx1mGrK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var photo = (id) => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=max`;
var DEFAULT_ITEMS = [
	{
		src: photo("photo-1737071371043-761e02b1ef95"),
		alt: "An iridescent chrome sculpture of a head",
		title: "Iridescence"
	},
	{
		src: photo("photo-1693645325828-62cd35c8da8f"),
		alt: "A person in dark clothes standing in front of a white backdrop",
		title: "White Room"
	},
	{
		src: photo("photo-1739056238917-d89cd05c48d5"),
		alt: "A twisted chrome form on black",
		title: "Liquid Metal"
	},
	{
		src: photo("photo-1747191092806-c7da11881986"),
		alt: "A clay bust shown in profile",
		title: "Clay Study"
	},
	{
		src: photo("photo-1605034313761-73ea4a0cfbf3"),
		alt: "Black and white low top sneakers",
		title: "Low Tops"
	},
	{
		src: photo("photo-1495462911434-be47104d70fa"),
		alt: "A woman in a wide black hat",
		title: "Brim"
	},
	{
		src: photo("photo-1786835568925-20cd20007ed0"),
		alt: "Three swirling shapes in white, gold and silver on grey",
		title: "Three Forms"
	},
	{
		src: photo("photo-1770249196550-ff6c641165cb"),
		alt: "A chrome humanoid sculpture",
		title: "Automaton"
	},
	{
		src: photo("photo-1787181875088-087d612262a7"),
		alt: "A black textured sculpture with an opening at its center",
		title: "Obsidian"
	},
	{
		src: photo("photo-1770062422885-2dfcbe8fb65b"),
		alt: "A woman in a white shirt crouching on a dark set",
		title: "Poise"
	},
	{
		src: photo("photo-1726910133626-9b573eca70ff"),
		alt: "Black curved shapes stacked like a fan",
		title: "Fins"
	},
	{
		src: photo("photo-1604854574958-59047362c165"),
		alt: "A white plaster bust on a black table",
		title: "Plaster"
	}
];
var BEND_PRESETS = {
	liquid: {
		lensWidth: .74,
		lensHeight: 1.18,
		tilt: 62,
		roundness: 1,
		bend: .34,
		reach: .38,
		curl: "twist",
		dispersion: .45,
		liquid: 0,
		followCursor: false
	},
	ribbon: {
		lensWidth: .8,
		lensHeight: .8,
		tilt: 0,
		roundness: 1,
		bend: .34,
		reach: .34,
		curl: "twist",
		dispersion: .4,
		liquid: 0,
		followCursor: false
	},
	vortex: {
		lensWidth: .7,
		lensHeight: .95,
		tilt: 30,
		roundness: 1,
		bend: .46,
		reach: .3,
		curl: "twist",
		dispersion: .5,
		liquid: 0,
		followCursor: false
	},
	arch: {
		lensWidth: .8,
		lensHeight: .8,
		tilt: 0,
		roundness: 1,
		bend: .3,
		reach: .36,
		curl: "rise",
		dispersion: .4,
		liquid: 0,
		followCursor: false
	}
};
var FIT_ASPECT = {
	portrait: .75,
	square: 1,
	landscape: 4 / 3
};
var TAPS = 12;
var PIXEL_BUDGET = 45e5;
var INTRO_DURATION = {
	rise: 2.1,
	bloom: 1.6,
	spin: 2.2,
	deal: 1.5,
	fade: .35
};
var wrap = (value, size) => ((value + size / 2) % size + size) % size - size / 2;
var clamp01 = (value) => Math.min(Math.max(value, 0), 1);
var easeOut = (value) => 1 - Math.pow(1 - clamp01(value), 3);
var easeOutQuint = (value) => 1 - Math.pow(1 - clamp01(value), 5);
var easeInOut = (value) => {
	const t = clamp01(value);
	return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
var cardVertex = `#version 300 es
in vec3 position;
in vec2 uv;
uniform vec4 uRect;
uniform vec2 uResolution;
out vec2 vUv;
out vec2 vLocal;
void main() {
  vUv = uv;
  vLocal = vec2(position.x, -position.y) * uRect.zw;
  vec2 px = uRect.xy + vLocal;
  gl_Position = vec4(px.x / uResolution.x * 2.0 - 1.0, 1.0 - px.y / uResolution.y * 2.0, 0.0, 1.0);
}
`;
var cardFragment = `#version 300 es
precision highp float;
uniform sampler2D tMap;
uniform vec2 uSize;
uniform vec2 uImage;
uniform float uRadius;
uniform float uAlpha;
uniform float uReady;
uniform float uShift;
uniform float uDpr;
uniform vec3 uPlaceholder;
in vec2 vUv;
in vec2 vLocal;
out vec4 fragColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  float sd = roundedBox(vLocal, uSize * 0.5, min(uRadius, min(uSize.x, uSize.y) * 0.5));
  float mask = clamp(0.5 - sd * uDpr, 0.0, 1.0);
  vec2 local = vLocal / uSize + 0.5;
  float cardAspect = uSize.x / uSize.y;
  float imageAspect = uImage.x / max(uImage.y, 1.0);
  vec2 scale = imageAspect > cardAspect ? vec2(cardAspect / imageAspect, 1.0) : vec2(1.0, imageAspect / cardAspect);
  scale /= 1.08;
  vec2 uv = vec2(local.x, 1.0 - local.y);
  uv = (uv - 0.5) * scale + 0.5;
  uv.x += uShift * (1.0 - scale.x) * 0.5;
  vec3 image = texture(tMap, uv).rgb;
  vec3 color = mix(uPlaceholder, image, uReady);
  float alpha = mask * uAlpha;
  fragColor = vec4(color * alpha, alpha);
}
`;
var lensVertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
var lensFragment = `#version 300 es
precision highp float;
uniform sampler2D tScene;
uniform vec2 uResolution;
uniform float uDpr;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uAngle;
uniform float uExponent;
uniform float uInner;
uniform float uOuter;
uniform float uFlow;
uniform float uCurl;
uniform float uDispersion;
uniform float uStrength;
uniform float uSceneAlpha;
out vec4 fragColor;

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  vec2 uv = frag / uResolution;
  vec2 rel = frag - vec2(uCenter.x, uResolution.y - uCenter.y);
  float ca = cos(uAngle);
  float sa = sin(uAngle);
  vec2 local = vec2(ca * rel.x + sa * rel.y, -sa * rel.x + ca * rel.y);
  vec2 k = max(abs(local) / uHalf, vec2(1e-5));
  float nd = pow(pow(k.x, uExponent) + pow(k.y, uExponent), 1.0 / uExponent);
  vec2 grad = pow(k, vec2(uExponent - 1.0)) * sign(local) / uHalf * pow(nd, 1.0 - uExponent);
  float glen = max(length(grad), 1e-6);
  float edge = (nd - 1.0) / glen;
  vec2 outward = grad / glen;
  vec2 normal = vec2(ca * outward.x - sa * outward.y, sa * outward.x + ca * outward.y);
  vec2 along = vec2(-normal.y, normal.x);

  float t = clamp((edge + uInner) / (uInner + uOuter), 0.0, 1.0);
  float ramp = t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  float slope = 16.0 * t * t * (1.0 - t) * (1.0 - t);
  float reachX = rel.x / (uResolution.x * 0.5);
  float side = smoothstep(0.02, 0.3, abs(reachX)) * (uCurl == 0.0 ? sign(reachX) : uCurl);
  float lift = ramp * side * uFlow * uStrength;
  vec2 swirl = along * along.y * side * slope * uFlow * uStrength * 0.35;
  vec2 drift = vec2(0.0, -lift) - swirl;
  vec2 shifted = uv + drift / uResolution;

  vec2 texels = uResolution * uDpr;
  vec2 gx = dFdx(shifted);
  vec2 gy = dFdy(shifted);
  gx *= min(1.0, 3.0 / max(length(gx * texels), 1e-4));
  gy *= min(1.0, 3.0 / max(length(gy * texels), 1e-4));

  vec4 color = textureGrad(tScene, shifted, gx, gy);
  vec2 spread = vec2(0.0, side * slope * uFlow * uStrength) / uResolution * uDispersion;
  float spreadPx = length(spread * texels);
  if (color.a > 0.002 && spreadPx > 0.25) {
    vec3 base = color.rgb / color.a;
    vec3 sumColor = vec3(0.0);
    vec3 sumWeight = vec3(0.0);
    for (int i = 0; i < ${TAPS}; i++) {
      float s = (float(i) + 0.5) / float(${TAPS});
      vec4 c = textureGrad(tScene, shifted + spread * (s - 0.5), gx, gy);
      vec3 w = max(1.0 - abs(vec3(s) - vec3(0.15, 0.5, 0.85)) * 2.6, 0.0) * c.a;
      sumColor += c.rgb * (w / max(c.a, 0.002));
      sumWeight += w;
    }
    vec3 split = mix(base, sumColor / max(sumWeight, vec3(1e-4)), clamp(sumWeight * 2.0, 0.0, 1.0));
    color.rgb = mix(color.rgb, clamp(split, 0.0, 1.0) * color.a, smoothstep(0.25, 1.5, spreadPx));
  }

  fragColor = color * uSceneAlpha;
}
`;
var Digits = ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "flex-carousel__digits",
	children: String(value).padStart(2, "0").split("").map((digit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex-carousel__digit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex-carousel__reel",
			style: { transform: `translateY(${-Number(digit) * 10}%)` },
			children: "0123456789".split("").map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }, n))
		})
	}, index))
});
var FlexCarousel = ({ items = DEFAULT_ITEMS, scrollProgress, engineApiRef, preset = "liquid", intro = "rise", cardHeight = .5, gap = 12, radius = 0, fit = "natural", lensWidth, lensHeight, tilt, roundness, bend, reach, curl, dispersion, liquid, followCursor, squeeze = .2, focusOnClick = true, autoplay = false, interval = 4, captions = true, captureWheel = true, onChange, onSelect, className = "", style }) => {
	const containerRef = (0, import_react.useRef)(null);
	const settingsRef = (0, import_react.useRef)(null);
	const itemsRef = (0, import_react.useRef)(items);
	const engineRef = (0, import_react.useRef)(null);
	const callbacksRef = (0, import_react.useRef)({
		onChange,
		onSelect
	});
	const [active, setActive] = (0, import_react.useState)(0);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [focusOpen, setFocusOpen] = (0, import_react.useState)(false);
	const base = BEND_PRESETS[preset] || BEND_PRESETS.liquid;
	const pick = (value, key) => value === void 0 || value === null ? base[key] : value;
	const list = items && items.length ? items : DEFAULT_ITEMS;
	const itemsKey = list.map((item) => item.src).join("|");
	(0, import_react.useEffect)(() => {
		itemsRef.current = list;
		callbacksRef.current = {
			onChange,
			onSelect
		};
		settingsRef.current = {
			intro,
			cardHeight,
			gap,
			radius,
			fit,
			lensWidth: pick(lensWidth, "lensWidth"),
			lensHeight: pick(lensHeight, "lensHeight"),
			tilt: pick(tilt, "tilt"),
			roundness: pick(roundness, "roundness"),
			bend: pick(bend, "bend"),
			reach: pick(reach, "reach"),
			curl: pick(curl, "curl"),
			dispersion: pick(dispersion, "dispersion"),
			liquid: pick(liquid, "liquid"),
			followCursor: pick(followCursor, "followCursor"),
			squeeze,
			focusOnClick,
			autoplay,
			interval,
			captureWheel
		};
		engineRef.current?.wake();
	});
	(0, import_react.useEffect)(() => {
		engineRef.current?.setItems(itemsRef.current);
	}, [itemsKey]);
	(0, import_react.useEffect)(() => {
		if (scrollProgress !== void 0 && scrollProgress !== null) engineRef.current?.setProgress(scrollProgress);
	}, [scrollProgress]);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return void 0;
		const renderer = new Renderer({
			dpr: Math.min(window.devicePixelRatio || 1, 2),
			alpha: true,
			premultipliedAlpha: true,
			antialias: false,
			depth: false
		});
		const gl = renderer.gl;
		if (!renderer.isWebgl2) {
			gl.getExtension("WEBGL_lose_context")?.loseContext();
			return;
		}
		gl.clearColor(0, 0, 0, 0);
		const canvas = gl.canvas;
		canvas.style.display = "block";
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.setAttribute("aria-hidden", "true");
		container.prepend(canvas);
		const cardProgram = new Program(gl, {
			vertex: cardVertex,
			fragment: cardFragment,
			transparent: true,
			depthTest: false,
			depthWrite: false,
			uniforms: {
				tMap: { value: new Texture(gl) },
				uRect: { value: [
					0,
					0,
					1,
					1
				] },
				uResolution: { value: [1, 1] },
				uSize: { value: [1, 1] },
				uImage: { value: [1, 1] },
				uRadius: { value: 16 },
				uAlpha: { value: 1 },
				uReady: { value: 0 },
				uShift: { value: 0 },
				uDpr: { value: 1 },
				uPlaceholder: { value: [
					.5,
					.5,
					.5
				] }
			}
		});
		cardProgram.setBlendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
		const cardMesh = new Mesh(gl, {
			geometry: new Plane(gl),
			program: cardProgram
		});
		const target = new RenderTarget(gl, {
			width: 2,
			height: 2,
			depth: false,
			minFilter: gl.LINEAR_MIPMAP_LINEAR,
			magFilter: gl.LINEAR
		});
		const lensUniforms = {
			tScene: { value: target.texture },
			uResolution: { value: [1, 1] },
			uDpr: { value: 1 },
			uCenter: { value: [0, 0] },
			uHalf: { value: [1, 1] },
			uAngle: { value: 0 },
			uExponent: { value: 2 },
			uInner: { value: 60 },
			uOuter: { value: 80 },
			uFlow: { value: 0 },
			uCurl: { value: 0 },
			uDispersion: { value: 0 },
			uStrength: { value: 0 },
			uSceneAlpha: { value: 0 }
		};
		const lensMesh = new Mesh(gl, {
			geometry: new Triangle(gl),
			program: new Program(gl, {
				vertex: lensVertex,
				fragment: lensFragment,
				uniforms: lensUniforms,
				depthTest: false,
				depthWrite: false
			})
		});
		const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
		const anisotropy = renderer.getExtension("EXT_texture_filter_anisotropic") ? 8 : 0;
		let slots = [];
		let width = 1;
		let height = 1;
		let pos = 0;
		let vel = 0;
		let goal = 0;
		let mode = "spring";
		let wheelAt = 0;
		let raf = 0;
		let last = performance_default.now();
		let visible = true;
		let alive = true;
		let dirty = true;
		let activeIndex = -1;
		let interactedAt = -Infinity;
		let autoplayAt = performance_default.now();
		let hasFocus = false;
		let deform = 0;
		let deformVel = 0;
		let layout = null;
		let resnap = false;
		let hover = "";
		let lift = 1;
		let energy = 0;
		let lastPos = 0;
		const lens = {
			x: 0,
			y: 0,
			vx: 0,
			vy: 0,
			ready: false
		};
		const pointer = {
			x: 0,
			y: 0,
			over: false,
			down: false,
			id: -1,
			startX: 0,
			startY: 0,
			startPos: 0,
			dragging: false,
			touch: false,
			samples: []
		};
		const introState = {
			kind: "none",
			t: 0,
			running: false,
			done: false,
			readyAt: 0
		};
		const focus = {
			index: -1,
			pending: -1,
			t: 0,
			v: 0,
			target: 0
		};
		let instances = [];
		const loadSlot = (item, index) => {
			const texture = new Texture(gl, {
				generateMipmaps: true,
				minFilter: gl.LINEAR_MIPMAP_LINEAR,
				magFilter: gl.LINEAR,
				anisotropy
			});
			const slot = {
				item,
				index,
				texture,
				aspect: .8,
				loaded: false,
				failed: false,
				ready: 0,
				color: [
					.5,
					.5,
					.5
				],
				image: [1, 1],
				dispose: () => {}
			};
			const image = new Image();
			image.crossOrigin = "anonymous";
			image.decoding = "async";
			image.onload = () => {
				if (!alive || !slots.includes(slot)) return;
				texture.image = image;
				texture.update();
				slot.image = [image.naturalWidth || 1, image.naturalHeight || 1];
				slot.aspect = slot.image[0] / slot.image[1];
				try {
					const probe = document.createElement("canvas");
					probe.width = 8;
					probe.height = 8;
					const ctx = probe.getContext("2d", { willReadFrequently: true });
					if (ctx) {
						ctx.drawImage(image, 0, 0, 8, 8);
						const data = ctx.getImageData(0, 0, 8, 8).data;
						const avg = [
							0,
							0,
							0
						];
						for (let i = 0; i < data.length; i += 4) {
							avg[0] += data[i];
							avg[1] += data[i + 1];
							avg[2] += data[i + 2];
						}
						slot.color = avg.map((v) => v / 64 / 255);
					}
				} catch {
					slot.color = [
						.5,
						.5,
						.5
					];
				}
				slot.loaded = true;
				dirty = true;
				start();
			};
			image.onerror = () => {
				if (!alive) return;
				slot.failed = true;
				dirty = true;
				start();
			};
			image.src = item.src;
			slot.dispose = () => {
				image.onload = null;
				image.onerror = null;
				gl.deleteTexture(texture.texture);
			};
			return slot;
		};
		const setItems = (next) => {
			slots.forEach((slot) => slot.dispose());
			slots = next.map(loadSlot);
			activeIndex = -1;
			layout = null;
			resnap = true;
			focus.target = 0;
			focus.t = 0;
			focus.v = 0;
			focus.pending = -1;
			setFocusOpen(false);
			introState.readyAt = performance_default.now();
			dirty = true;
			start();
		};
		const metrics = (s) => {
			const cardH = Math.max(24, s.cardHeight * height);
			const fixed = FIT_ASPECT[s.fit];
			const widths = slots.map((slot) => (fixed || slot.aspect) * cardH);
			const centers = [];
			let cursor = 0;
			for (let i = 0; i < widths.length; i++) {
				centers.push(cursor + widths[i] / 2);
				cursor += widths[i] + s.gap;
			}
			return {
				cardH,
				widths,
				centers,
				gap: s.gap,
				loop: Math.max(cursor, 1)
			};
		};
		const nearest = (m, at) => {
			let best = 0;
			let bestDist = Infinity;
			for (let i = 0; i < m.centers.length; i++) {
				const dist = Math.abs(wrap(m.centers[i] - at, m.loop));
				if (dist < bestDist) {
					bestDist = dist;
					best = i;
				}
			}
			return best;
		};
		const snapPoint = (m, at) => {
			const i = nearest(m, at);
			return at + wrap(m.centers[i] - at, m.loop);
		};
		const remap = (from, to, at) => {
			const i = nearest(from, at);
			const offset = wrap(at - from.centers[i], from.loop);
			return Math.round((at - offset - from.centers[i]) / from.loop) * to.loop + to.centers[i] + offset * (to.widths[i] / from.widths[i]);
		};
		const step = (m, delta) => {
			let at = snapPoint(m, goal);
			let index = nearest(m, at);
			const n = m.centers.length;
			for (let k = 0; k < Math.abs(delta); k++) {
				const next = (index + (delta > 0 ? 1 : n - 1)) % n;
				const distance = delta > 0 ? m.widths[index] / 2 + m.gap + m.widths[next] / 2 : -(m.widths[next] / 2 + m.gap + m.widths[index] / 2);
				at += distance;
				index = next;
			}
			goal = at;
			mode = "spring";
			dirty = true;
			start();
		};
		const goTo = (m, index) => {
			const i = (index % m.centers.length + m.centers.length) % m.centers.length;
			goal = goal + wrap(m.centers[i] - goal, m.loop);
			mode = "spring";
			dirty = true;
			start();
		};
		const openFocus = (index) => {
			focus.index = index;
			focus.pending = -1;
			focus.target = 1;
			setFocusOpen(true);
			dirty = true;
			start();
		};
		const closeFocus = () => {
			focus.pending = -1;
			if (focus.target === 0) return false;
			focus.target = 0;
			setFocusOpen(false);
			dirty = true;
			start();
			return true;
		};
		const skipIntro = () => {
			if (introState.running) introState.t = 1;
		};
		const introEffects = () => {
			const t = introState.running ? introState.t : introState.done ? 1 : 0;
			const e = {
				sceneAlpha: 1,
				strength: 1,
				card: null
			};
			if (!introState.done && !introState.running) {
				e.sceneAlpha = 0;
				e.strength = 0;
				return e;
			}
			if (t >= 1) return e;
			const kind = introState.kind;
			if (kind === "rise") {
				e.strength = easeInOut((t - .3) / .65);
				e.card = (rel) => {
					const delay = Math.min(Math.abs(rel) / (width * .6), 1) * .34;
					const local = clamp01((t - delay) / .6);
					return {
						alpha: clamp01(local * 4),
						x: 0,
						y: (1 - easeOutQuint(local)) * height * .62,
						scale: .5 + .5 * easeInOut((local - .18) / .82)
					};
				};
			} else if (kind === "bloom") {
				e.strength = easeInOut((t - .2) / .8);
				e.card = (rel) => {
					const delay = Math.min(Math.abs(rel) / (width * .6), 1) * .25;
					const local = easeOut((t - delay) / .55);
					return {
						alpha: local,
						x: 0,
						y: 0,
						scale: .92 + .08 * local
					};
				};
			} else if (kind === "spin") {
				e.sceneAlpha = easeOut(t / .25);
				e.strength = easeOut((t - .55) / .45);
			} else if (kind === "deal") {
				e.strength = easeOut((t - .45) / .5);
				e.card = (rel) => {
					const spread = Math.min(Math.abs(rel) / (width * .6), 1) * .3;
					const local = easeOut((t - .12 - spread) / .5);
					return {
						alpha: easeOut((t - spread) / .12),
						x: -rel * (1 - local),
						y: 0,
						scale: 1
					};
				};
			} else {
				e.sceneAlpha = easeOut(t);
				e.strength = easeOut(t);
			}
			return e;
		};
		const beginIntro = (s, m) => {
			const kind = reducedMotion && s.intro !== "none" ? "fade" : s.intro;
			introState.kind = INTRO_DURATION[kind] ? kind : "none";
			introState.running = introState.kind !== "none";
			introState.done = !introState.running;
			introState.t = 0;
			if (introState.done) setRevealed(true);
			if (introState.kind === "spin") {
				const distance = m.loop * 1.6 + width;
				pos = goal + distance;
				vel = -distance * 3;
				mode = "spring";
			}
		};
		const resize = () => {
			width = Math.max(1, container.clientWidth);
			height = Math.max(1, container.clientHeight);
			renderer.dpr = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(PIXEL_BUDGET / (width * height)));
			renderer.setSize(width, height);
			target.setSize(Math.max(2, Math.round(width * renderer.dpr)), Math.max(2, Math.round(height * renderer.dpr)));
			lensUniforms.tScene.value = target.texture;
			dirty = true;
			start();
		};
		const frame = (now) => {
			raf = 0;
			if (!alive) return;
			const s = settingsRef.current;
			const dt = Math.min(.05, Math.max(.001, (now - last) / 1e3));
			last = now;
			if (!s || !slots.length) {
				if (visible) raf = requestAnimationFrame(frame);
				return;
			}
			const m = metrics(s);
			const n = slots.length;
			let animating = false;
			if (resnap) {
				goal = snapPoint(m, goal);
				pos = goal;
				vel = 0;
				resnap = false;
			} else if (layout && layout.loop !== m.loop) {
				pos = remap(layout, m, pos);
				goal = remap(layout, m, goal);
				pointer.startPos = pos + (pointer.x - pointer.startX);
				animating = true;
			}
			layout = m;
			if (!introState.running && !introState.done) {
				if (slots.every((slot) => slot.loaded || slot.failed) || now - introState.readyAt > 3500) {
					goal = snapPoint(m, goal);
					pos = goal;
					beginIntro(s, m);
				}
			}
			if (introState.running) {
				introState.t = Math.min(1, introState.t + dt / (INTRO_DURATION[introState.kind] || 1));
				if (introState.t >= 1) {
					introState.running = false;
					introState.done = true;
					setRevealed(true);
				}
				animating = true;
			}
			if (mode === "wheel" && now - wheelAt > 150) {
				goal = snapPoint(m, goal);
				mode = "spring";
			}
			if (!pointer.dragging) {
				const stiffness = introState.running && introState.kind === "spin" ? 9 : mode === "wheel" ? 80 : 55;
				const damping = 2 * Math.sqrt(stiffness);
				const steps = Math.ceil(dt / (1 / 240));
				const h = dt / steps;
				for (let i = 0; i < steps; i++) {
					const acc = stiffness * (goal - pos) - damping * vel;
					vel += acc * h;
					pos += vel * h;
				}
				if (Math.abs(goal - pos) < .05 && Math.abs(vel) < .5) {
					pos = goal;
					vel = 0;
				} else animating = true;
			} else animating = true;
			if (Math.abs(pos) > m.loop * 8) {
				const shift = Math.round(pos / m.loop) * m.loop;
				pos -= shift;
				goal -= shift;
				pointer.startPos -= shift;
			}
			const current = nearest(m, pos);
			if (current !== activeIndex) {
				activeIndex = current;
				setActive(current);
				callbacksRef.current.onChange?.(current, itemsRef.current[current]);
			}
			if (focus.pending >= 0 && mode === "spring" && Math.abs(goal - pos) < 1.5 && Math.abs(vel) < 30) if (current === focus.pending) openFocus(current);
			else focus.pending = -1;
			if (s.autoplay && !reducedMotion && introState.done && focus.target === 0 && focus.t < .01 && !pointer.over && !pointer.down && !hasFocus && mode === "spring" && Math.abs(goal - pos) < 1 && now - interactedAt > 3e3 && now - autoplayAt > s.interval * 1e3) {
				autoplayAt = now;
				step(m, 1);
			}
			if (s.autoplay && !reducedMotion) animating = true;
			const travel = Math.abs(pos - lastPos) / dt;
			lastPos = pos;
			const energyTarget = reducedMotion ? 0 : Math.min(travel / 2600, 1);
			energy += (energyTarget - energy) * (1 - Math.exp(-dt / (energyTarget > energy ? .07 : .35)));
			if (energy > .001) animating = true;
			const liquidAmount = reducedMotion ? 0 : s.liquid;
			const push = Math.max(-1, Math.min(1, vel / 2200));
			const deformStiffness = 120;
			const deformDamping = 2 * Math.sqrt(deformStiffness) * .32;
			deformVel += (deformStiffness * (push - deform) - deformDamping * deformVel) * dt;
			deform += deformVel * dt;
			if (Math.abs(deform) > 5e-4 || Math.abs(deformVel) > .005) animating = true;
			const focusStiffness = 64;
			focus.v += (focusStiffness * (focus.target - focus.t) - 2 * Math.sqrt(focusStiffness) * focus.v) * dt;
			focus.t += focus.v * dt;
			if (Math.abs(focus.target - focus.t) < 5e-4 && Math.abs(focus.v) < .001) {
				focus.t = focus.target;
				focus.v = 0;
			} else animating = true;
			const focusAmount = clamp01(focus.t);
			const focusEase = easeInOut(focusAmount);
			const focusW = focus.index >= 0 && focus.index < n ? m.widths[focus.index] : m.cardH;
			const focusScale = Math.max(1, Math.min(1.3, height * .84 / m.cardH, width * .92 / focusW));
			const nextLift = 1 + (focusScale - 1) * focusEase;
			if (Math.abs(nextLift - lift) > 5e-4) {
				lift = nextLift;
				container.style.setProperty("--flex-carousel-lift", lift.toFixed(4));
			}
			const effects = introEffects();
			const homeX = width / 2;
			const homeY = height / 2;
			const follow = s.followCursor && pointer.over && !pointer.dragging && !pointer.touch && focus.target === 0;
			const aimX = follow ? pointer.x : homeX;
			const aimY = follow ? pointer.y : homeY;
			if (!lens.ready) {
				lens.x = homeX;
				lens.y = homeY;
				lens.ready = true;
			}
			const lensK = 110;
			const lensC = 2 * Math.sqrt(lensK) * .8;
			lens.vx += (lensK * (aimX - lens.x) - lensC * lens.vx) * dt;
			lens.vy += (lensK * (aimY - lens.y) - lensC * lens.vy) * dt;
			lens.x += lens.vx * dt;
			lens.y += lens.vy * dt;
			if (Math.abs(aimX - lens.x) + Math.abs(aimY - lens.y) > .2 || Math.abs(lens.vx) + Math.abs(lens.vy) > .5) animating = true;
			const cardH = m.cardH;
			let halfW = s.lensWidth * width / 2;
			let halfH = s.lensHeight * width / 2;
			const squash = Math.abs(deform) * liquidAmount;
			halfW *= 1 + squash * .16;
			halfH *= 1 - squash * .08;
			const lensX = lens.x - deform * 14 * liquidAmount;
			for (let i = 0; i < n; i++) {
				const slot = slots[i];
				if (slot.loaded && slot.ready < 1) {
					slot.ready = Math.min(1, slot.ready + dt / .45);
					animating = true;
				}
			}
			const waiting = !introState.done;
			if (dirty || animating || pointer.dragging) {
				dirty = false;
				instances = [];
				const dpr = renderer.dpr;
				cardProgram.uniforms.uResolution.value = [width, height];
				cardProgram.uniforms.uDpr.value = dpr;
				cardProgram.uniforms.uRadius.value = s.radius;
				const shrink = 1 - clamp01(s.squeeze) * energy;
				const draws = [];
				for (let i = 0; i < n; i++) {
					const w = m.widths[i];
					const baseRel = wrap(m.centers[i] - pos, m.loop);
					for (let k = -3; k <= 3; k++) {
						const rel = baseRel + k * m.loop;
						if (Math.abs(rel) - w / 2 > width + 40) continue;
						const fx = effects.card ? effects.card(rel) : null;
						let x = homeX + rel + (fx ? fx.x : 0);
						let scale = shrink * (fx ? fx.scale : 1);
						let alpha = fx ? fx.alpha : 1;
						if (focusAmount > 0) if (i === focus.index && Math.abs(rel) < w) scale *= 1 + (focusScale - 1) * focusEase;
						else {
							const order = Math.min(Math.abs(rel) / width, 1) * .25;
							const part = easeInOut(focusAmount * 1.25 - order);
							x += Math.sign(rel) * part * width * .7;
							alpha *= 1 - part;
						}
						const cw = w * scale;
						if (alpha <= .001 || x + cw / 2 < -40 || x - cw / 2 > width + 40) continue;
						draws.push({
							i,
							rel,
							x,
							y: homeY + (fx ? fx.y : 0),
							cw,
							ch: cardH * scale,
							alpha
						});
					}
				}
				draws.sort((a, b) => Math.abs(b.rel) - Math.abs(a.rel));
				let first = true;
				for (const draw of draws) {
					const slot = slots[draw.i];
					cardProgram.uniforms.tMap.value = slot.texture;
					cardProgram.uniforms.uRect.value = [
						draw.x,
						draw.y,
						draw.cw + 2,
						draw.ch + 2
					];
					cardProgram.uniforms.uSize.value = [draw.cw, draw.ch];
					cardProgram.uniforms.uImage.value = slot.image;
					cardProgram.uniforms.uAlpha.value = draw.alpha;
					cardProgram.uniforms.uReady.value = slot.ready;
					cardProgram.uniforms.uShift.value = reducedMotion ? 0 : Math.max(-1, Math.min(1, draw.rel / (width * .75)));
					cardProgram.uniforms.uPlaceholder.value = slot.color;
					renderer.render({
						scene: cardMesh,
						target,
						clear: first
					});
					first = false;
					instances.push({
						index: draw.i,
						x0: draw.x - draw.cw / 2,
						x1: draw.x + draw.cw / 2,
						y0: draw.y - draw.ch / 2,
						y1: draw.y + draw.ch / 2
					});
				}
				if (first) {
					renderer.bindFramebuffer(target);
					gl.viewport(0, 0, target.width, target.height);
					gl.clear(gl.COLOR_BUFFER_BIT);
				}
				renderer.bindFramebuffer();
				target.texture.bind();
				gl.generateMipmap(gl.TEXTURE_2D);
				lensUniforms.uResolution.value = [width, height];
				lensUniforms.uDpr.value = dpr;
				lensUniforms.uCenter.value = [lensX, lens.y];
				lensUniforms.uHalf.value = [Math.max(halfW, 1), Math.max(halfH, 1)];
				lensUniforms.uAngle.value = s.tilt * Math.PI / 180;
				lensUniforms.uExponent.value = 2 + Math.pow(1 - clamp01(s.roundness), 1.5) * 10;
				const spanW = Math.max(halfW, 1);
				const spanH = Math.max(halfH, 1);
				const inner = Math.max(4, s.reach * (spanW + spanH) * .5);
				lensUniforms.uInner.value = inner;
				lensUniforms.uOuter.value = inner * 1.6;
				lensUniforms.uFlow.value = s.bend * (spanW + spanH) * .45;
				lensUniforms.uCurl.value = s.curl === "rise" ? 1 : s.curl === "fall" ? -1 : 0;
				lensUniforms.uDispersion.value = s.dispersion * .12 * (1 + Math.abs(deform) * liquidAmount * 1.2);
				lensUniforms.uStrength.value = effects.strength * (1 - focusEase);
				lensUniforms.uSceneAlpha.value = effects.sceneAlpha;
				renderer.render({ scene: lensMesh });
			}
			let nextHover = "";
			if (pointer.over && !pointer.dragging && introState.done && s.focusOnClick) {
				const hit = instances.find((inst) => pointer.x >= inst.x0 && pointer.x <= inst.x1 && pointer.y >= inst.y0 && pointer.y <= inst.y1);
				if (focus.target > 0) nextHover = "close";
				else if (hit) nextHover = "open";
			}
			if (nextHover !== hover) {
				hover = nextHover;
				if (hover) container.setAttribute("data-hover", hover);
				else container.removeAttribute("data-hover");
			}
			if (visible && (animating || waiting || dirty || pointer.down)) raf = requestAnimationFrame(frame);
		};
		const start = () => {
			if (raf || !visible || !alive) return;
			last = performance_default.now();
			raf = requestAnimationFrame(frame);
		};
		const localPoint = (e) => {
			const rect = container.getBoundingClientRect();
			return [e.clientX - rect.left, e.clientY - rect.top];
		};
		const onPointerDown = (e) => {
			if (e.button !== void 0 && e.button > 0) return;
			skipIntro();
			const [x, y] = localPoint(e);
			pointer.down = true;
			pointer.id = e.pointerId;
			pointer.touch = e.pointerType === "touch";
			pointer.startX = x;
			pointer.startY = y;
			pointer.x = x;
			pointer.y = y;
			pointer.startPos = pos;
			pointer.dragging = false;
			pointer.samples = [{
				x,
				t: performance_default.now()
			}];
			interactedAt = performance_default.now();
			if (Math.abs(vel) > 40) {
				goal = pos;
				vel = 0;
			}
			dirty = true;
			start();
		};
		const onPointerMove = (e) => {
			const [x, y] = localPoint(e);
			pointer.x = x;
			pointer.y = y;
			pointer.over = true;
			if (pointer.down && e.pointerId === pointer.id) {
				const dx = x - pointer.startX;
				const dy = y - pointer.startY;
				const slop = pointer.touch ? 10 : 5;
				if (!pointer.dragging) {
					if (pointer.touch && Math.abs(dy) > slop && Math.abs(dy) > Math.abs(dx)) {
						pointer.down = false;
						return;
					}
					if (Math.abs(dx) > slop) {
						pointer.dragging = true;
						pointer.startX = x;
						pointer.startPos = pos;
						closeFocus();
						try {
							container.setPointerCapture(e.pointerId);
						} catch {
							pointer.dragging = true;
						}
						container.setAttribute("data-dragging", "");
					}
				}
				if (pointer.dragging) {
					pos = pointer.startPos - (x - pointer.startX);
					goal = pos;
					vel = 0;
					const now = performance_default.now();
					pointer.samples.push({
						x,
						t: now
					});
					while (pointer.samples.length > 2 && now - pointer.samples[0].t > 100) pointer.samples.shift();
				}
			}
			dirty = true;
			start();
		};
		const onPointerUp = (e) => {
			if (!pointer.down || e.pointerId !== pointer.id) return;
			pointer.down = false;
			container.removeAttribute("data-dragging");
			const s = settingsRef.current;
			if (!s) return;
			const m = metrics(s);
			interactedAt = performance_default.now();
			if (pointer.dragging) {
				pointer.dragging = false;
				const now = performance_default.now();
				const first = pointer.samples[0];
				const lastSample = pointer.samples[pointer.samples.length - 1];
				let velocity = 0;
				if (first && lastSample && lastSample.t > first.t && now - lastSample.t < 70) velocity = -((lastSample.x - first.x) / (lastSample.t - first.t)) * 1e3;
				vel = velocity;
				const landing = snapPoint(m, pos + velocity * .32);
				goal = landing;
				if (Math.abs(velocity) > 400 && Math.abs(landing - pos) < 1) step(m, velocity > 0 ? 1 : -1);
				mode = "spring";
				start();
				return;
			}
			if (closeFocus()) return;
			const [x, y] = localPoint(e);
			const hit = instances.find((inst) => x >= inst.x0 && x <= inst.x1 && y >= inst.y0 && y <= inst.y1);
			if (!hit) return;
			if (hit.index === activeIndex && Math.abs(goal - pos) < 2) {
				callbacksRef.current.onSelect?.(hit.index, itemsRef.current[hit.index]);
				if (s.focusOnClick) openFocus(hit.index);
			} else {
				const rel = (hit.x0 + hit.x1) / 2 - width / 2;
				goal = snapPoint(m, pos + rel);
				mode = "spring";
				if (s.focusOnClick) focus.pending = hit.index;
				start();
			}
		};
		const onPointerLeave = () => {
			pointer.over = false;
			dirty = true;
			start();
		};
		const onPointerCancel = () => {
			pointer.down = false;
			pointer.dragging = false;
			container.removeAttribute("data-dragging");
			const s = settingsRef.current;
			if (!s) return;
			goal = snapPoint(metrics(s), pos);
			mode = "spring";
			start();
		};
		const onWheel = (e) => {
			const s = settingsRef.current;
			if (!s || e.ctrlKey) return;
			let dx = e.deltaX;
			let dy = e.deltaY;
			if (e.shiftKey && Math.abs(dx) < Math.abs(dy)) {
				dx = dy;
				dy = 0;
			}
			const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? height : 1;
			const horizontal = Math.abs(dx) > Math.abs(dy);
			if (!horizontal && !s.captureWheel) return;
			e.preventDefault();
			skipIntro();
			interactedAt = performance_default.now();
			if (closeFocus()) return;
			const delta = Math.max(-120, Math.min(120, (horizontal ? dx : dy) * unit));
			goal += delta * 1.25;
			mode = "wheel";
			wheelAt = performance_default.now();
			start();
		};
		const onKeyDown = (e) => {
			const s = settingsRef.current;
			if (!s) return;
			const m = metrics(s);
			if (e.key === "ArrowRight" || e.key === "ArrowDown") {
				e.preventDefault();
				skipIntro();
				closeFocus();
				interactedAt = performance_default.now();
				step(m, 1);
			} else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
				e.preventDefault();
				skipIntro();
				closeFocus();
				interactedAt = performance_default.now();
				step(m, -1);
			} else if (e.key === "Home") {
				e.preventDefault();
				closeFocus();
				goTo(m, 0);
			} else if (e.key === "End") {
				e.preventDefault();
				closeFocus();
				goTo(m, slots.length - 1);
			} else if (e.key === "Escape") {
				if (closeFocus()) e.preventDefault();
			} else if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				if (closeFocus() || activeIndex < 0) return;
				callbacksRef.current.onSelect?.(activeIndex, itemsRef.current[activeIndex]);
				if (s.focusOnClick) openFocus(activeIndex);
			}
		};
		const onFocus = () => {
			hasFocus = true;
		};
		const onBlur = () => {
			hasFocus = false;
		};
		const onVisibility = () => {
			if (!document.hidden) start();
		};
		container.addEventListener("pointerdown", onPointerDown);
		container.addEventListener("pointermove", onPointerMove);
		container.addEventListener("pointerup", onPointerUp);
		container.addEventListener("pointerleave", onPointerLeave);
		container.addEventListener("pointercancel", onPointerCancel);
		container.addEventListener("wheel", onWheel, { passive: false });
		container.addEventListener("keydown", onKeyDown);
		container.addEventListener("focus", onFocus);
		container.addEventListener("blur", onBlur);
		document.addEventListener("visibilitychange", onVisibility);
		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(container);
		const intersectionObserver = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			start();
		});
		intersectionObserver.observe(container);
		const api = {
			wake: () => {
				dirty = true;
				start();
			},
			setItems,
			setProgress: (p) => {
				const s = settingsRef.current;
				if (!s || !slots.length) return;
				const m = metrics(s);
				const n = m.centers.length;
				if (n <= 1) return;
				skipIntro();
				const firstCenter = m.centers[0];
				const totalDistance = m.centers[n - 1] - firstCenter;
				goal = firstCenter + clamp01(p) * totalDistance;
				mode = "spring";
				dirty = true;
				start();
			},
			goTo: (index) => {
				const s = settingsRef.current;
				if (!s || !slots.length) return;
				goTo(metrics(s), index);
			}
		};
		engineRef.current = api;
		if (engineApiRef) engineApiRef.current = api;
		resize();
		setItems(itemsRef.current);
		return () => {
			alive = false;
			visible = false;
			engineRef.current = null;
			cancelAnimationFrame(raf);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			container.removeEventListener("pointerdown", onPointerDown);
			container.removeEventListener("pointermove", onPointerMove);
			container.removeEventListener("pointerup", onPointerUp);
			container.removeEventListener("pointerleave", onPointerLeave);
			container.removeEventListener("pointercancel", onPointerCancel);
			container.removeEventListener("wheel", onWheel);
			container.removeEventListener("keydown", onKeyDown);
			container.removeEventListener("focus", onFocus);
			container.removeEventListener("blur", onBlur);
			document.removeEventListener("visibilitychange", onVisibility);
			slots.forEach((slot) => slot.dispose());
			slots = [];
			gl.getExtension("WEBGL_lose_context")?.loseContext();
			if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
		};
	}, []);
	const current = list[active] || list[0];
	const label = current ? current.title || current.alt || `Image ${active + 1}` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: `flex-carousel ${className}`.trim(),
		style: {
			...style,
			"--flex-carousel-half": `${Math.min(Math.max(cardHeight, .05), 1) * 50}%`
		},
		role: "region",
		"aria-roledescription": "carousel",
		"aria-label": "Image carousel",
		tabIndex: 0,
		children: [captions && current && revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-carousel__caption",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex-carousel__title",
					children: [current.title || current.alt, current.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-carousel__subtitle",
						children: current.subtitle
					})]
				}, active),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex-carousel__count",
					"data-hidden": focusOpen ? "" : void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Digits, { value: active + 1 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-carousel__slash",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(list.length).padStart(2, "0") })
					]
				}),
				current.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/clubs/${current.id}`,
					className: "flex-carousel__action",
					style: {
						pointerEvents: "auto",
						display: "inline-flex",
						alignItems: "center",
						gap: "6px",
						padding: "6px 16px",
						borderRadius: "9999px",
						fontSize: "12px",
						fontWeight: 600,
						letterSpacing: "0.04em",
						background: "rgba(131, 56, 236, 0.28)",
						border: "1px solid rgba(131, 56, 236, 0.6)",
						color: "#ffffff",
						textDecoration: "none",
						marginTop: "6px",
						transition: "all 0.25s ease",
						cursor: "pointer"
					},
					onMouseEnter: (e) => {
						const el = e.currentTarget;
						el.style.background = "#fb5607";
						el.style.borderColor = "#fb5607";
						el.style.transform = "translateY(-1px)";
					},
					onMouseLeave: (e) => {
						const el = e.currentTarget;
						el.style.background = "rgba(131, 56, 236, 0.28)";
						el.style.borderColor = "rgba(131, 56, 236, 0.6)";
						el.style.transform = "translateY(0)";
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Explore ", current.title || "Club"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "12",
						height: "12",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "7",
							y1: "17",
							x2: "17",
							y2: "7"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "7 7 17 7 17 17" })]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-carousel__live",
			"aria-live": "polite",
			"aria-atomic": "true",
			children: `${label}, ${active + 1} of ${list.length}`
		})]
	});
};
var GalleryTunnel = (0, import_react.lazy)(async () => {
	return { default: (await import("./GalleryTunnel-BoNXB3Ta.mjs")).GalleryTunnel };
});
var EVENT_IMAGES = [
	"/events/welcome-gate.jpg",
	"/events/B2B.png",
	"/events/equinox.jpeg",
	"/events/gi.png",
	"/events/hustle mania.png",
	"/events/metaloop.png",
	"/events/wc 2.0.png",
	"/events/wc.png"
];
var CLUB_LOGOS = {
	cie: "/club-logos/cie.jpeg",
	came: "/club-logos/came.jpeg",
	scope: "/club-logos/scope.jpeg",
	literati: "/club-logos/lit.jpeg",
	apex: "/club-logos/apex.jpeg",
	ewb: "/club-logos/EWB.jpeg",
	csi: "/club-logos/csi.png",
	nss: "/club-logos/nss.jpeg",
	code: "/club-logos/code.jpeg",
	aim: "/club-logos/aim.png",
	squad: "/club-logos/squad.png",
	aero: "/club-logos/areo.jpeg",
	robotics: "/club-logos/robotics.png",
	mun: "/club-logos/mun.jpeg"
};
function ClubsPage() {
	const navigate = useNavigate();
	const [category, setCategory] = (0, import_react.useState)("main");
	const trackRef = (0, import_react.useRef)(null);
	const carouselApiRef = (0, import_react.useRef)(null);
	const mainClubs = (0, import_react.useMemo)(() => clubs.filter((c) => c.category === "main"), []);
	const deptClubs = (0, import_react.useMemo)(() => clubs.filter((c) => c.category === "dept"), []);
	const activeClubsList = (0, import_react.useMemo)(() => {
		if (category === "main") return mainClubs;
		if (category === "dept") return deptClubs;
		return clubs;
	}, [
		category,
		mainClubs,
		deptClubs
	]);
	const carouselItems = (0, import_react.useMemo)(() => {
		return activeClubsList.map((club) => ({
			id: club.id,
			title: club.name,
			subtitle: club.focus,
			alt: `${club.name} - ${club.focus}`,
			src: CLUB_LOGOS[club.id] || "/club-logos/cie.jpeg"
		}));
	}, [activeClubsList]);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (!trackRef.current) return;
			const rect = trackRef.current.getBoundingClientRect();
			const scrollableDistance = rect.height - window.innerHeight;
			if (scrollableDistance <= 0) return;
			const current = -rect.top;
			const progress = Math.max(0, Math.min(1, current / scrollableDistance));
			carouselApiRef.current?.setProgress(progress);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "relative",
			height: "60vh",
			minHeight: "500px",
			overflow: "hidden",
			display: "block",
			width: "100%",
			background: "#212529"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryTunnel, {
					images: EVENT_IMAGES,
					colors: [
						"#212529",
						"#1a1d21",
						"#2d3748",
						"#E9ECEF"
					],
					background: "#212529",
					lineColor: "#ffffff",
					lineOpacity: 25,
					grid: 3,
					speed: 40,
					fade: 70
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				inset: 0,
				background: "linear-gradient(to top, rgba(33,37,41,0.9) 30%, transparent 100%)",
				zIndex: 1
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-gutter",
				style: {
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 2,
					paddingBottom: "3rem"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta mb-4",
							style: { color: "var(--clr-orange)" },
							children: "Campus communities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-lg uppercase",
							style: { color: "var(--clr-white)" },
							children: [
								"Find your",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"circle."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-xl text-lg",
							style: { color: "rgba(233,236,239,0.7)" },
							children: [clubs.length, " active clubs across main campus and department chapters."]
						})
					]
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		style: { background: "linear-gradient(180deg, #0e0a1a 0%, #15101f 45%, #0e0a1a 100%)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: trackRef,
			style: {
				position: "relative",
				height: "360vh"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "sticky",
					top: 0,
					height: "100vh",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					overflow: "hidden",
					paddingTop: "76px",
					paddingBottom: "16px"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-gutter w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1400px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "size-4",
									style: { color: "var(--clr-orange)" }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "meta",
									style: { color: "var(--clr-orange)" },
									children: "Interactive Club Showcase"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl md:text-5xl font-semibold tracking-tight",
								style: { color: "var(--clr-white)" },
								children: category === "main" ? "Campus-Wide Clubs" : category === "dept" ? "Department Chapters" : "All Communities"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono",
									style: {
										background: "rgba(255,255,255,0.05)",
										color: "rgba(255,255,255,0.5)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePointer2, { className: "size-3 text-orange-400 animate-bounce" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll to traverse clubs" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center p-1 rounded-full",
									style: {
										background: "rgba(255, 255, 255, 0.05)",
										border: "1px solid rgba(255, 255, 255, 0.1)"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setCategory("main");
											},
											className: "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300",
											style: {
												background: category === "main" ? "var(--clr-purple)" : "transparent",
												color: category === "main" ? "#ffffff" : "rgba(255,255,255,0.6)",
												boxShadow: category === "main" ? "0 4px 14px rgba(131,56,236,0.3)" : "none"
											},
											children: [
												"Campus-wide (",
												mainClubs.length,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setCategory("dept");
											},
											className: "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300",
											style: {
												background: category === "dept" ? "var(--clr-purple)" : "transparent",
												color: category === "dept" ? "#ffffff" : "rgba(255,255,255,0.6)",
												boxShadow: category === "dept" ? "0 4px 14px rgba(131,56,236,0.3)" : "none"
											},
											children: [
												"Department (",
												deptClubs.length,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setCategory("all");
											},
											className: "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300",
											style: {
												background: category === "all" ? "var(--clr-purple)" : "transparent",
												color: category === "all" ? "#ffffff" : "rgba(255,255,255,0.6)",
												boxShadow: category === "all" ? "0 4px 14px rgba(131,56,236,0.3)" : "none"
											},
											children: [
												"All (",
												clubs.length,
												")"
											]
										})
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full rounded-2xl overflow-hidden shadow-2xl",
							style: {
								width: "100%",
								height: "540px",
								background: "radial-gradient(ellipse at center, rgba(131,56,236,0.09) 0%, rgba(14,10,26,0.9) 70%, rgba(10,8,18,0.98) 100%)",
								border: "1px solid rgba(255, 255, 255, 0.08)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlexCarousel, {
								items: carouselItems,
								engineApiRef: carouselApiRef,
								preset: "liquid",
								intro: "rise",
								cardHeight: .48,
								gap: 12,
								squeeze: .2,
								focusOnClick: true,
								captions: true,
								fit: "natural",
								radius: 0,
								lensWidth: .74,
								lensHeight: 1.18,
								tilt: 62,
								roundness: 1,
								bend: .34,
								reach: .38,
								curl: "twist",
								dispersion: .45,
								liquid: 0,
								followCursor: false,
								autoplay: false,
								interval: 4,
								captureWheel: false,
								onSelect: (_index, item) => {
									if (item?.id) navigate({
										to: "/clubs/$clubId",
										params: { clubId: item.id }
									});
								}
							}, category)
						})]
					})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})]
	})] });
}
//#endregion
export { ClubsPage as component };
