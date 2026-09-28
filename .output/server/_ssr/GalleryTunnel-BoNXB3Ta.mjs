import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as LineCurve3, c as MeshBasicMaterial, d as SRGBColorSpace, f as Scene, g as WebGLRenderer, h as Vector3, i as Group, l as PerspectiveCamera, m as TubeGeometry, n as Euler, o as LinearFilter, p as TextureLoader, r as Fog, s as Mesh, t as Color, u as PlaneGeometry } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GalleryTunnel-BoNXB3Ta.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TUNNEL_WIDTH = 5;
var TUNNEL_HEIGHT = 3.5;
var SEGMENT_DEPTH = 1;
var NUM_SEGMENTS = 15;
var LINE_RADIUS = .003;
var CAMERA_CHASE = .1;
var FADE_IN = 1;
var FOG_FAR = 14.25;
function GalleryTunnel({ images, colors = [
	"#8338EC",
	"#FB5607",
	"#212529",
	"#E9ECEF"
], background = "#8338EC", lineColor = "#ffffff", lineOpacity = 30, grid = 3, speed = 60, boost = 120, fade = 80, style }) {
	const frameRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const urls = (0, import_react.useMemo)(() => images.filter(Boolean), [images]);
	const palette = (0, import_react.useMemo)(() => colors.filter(Boolean), [colors]);
	const cfgRef = (0, import_react.useRef)({
		speed: 1,
		boost: 1
	});
	cfgRef.current = {
		speed: Math.max(0, speed) / 100,
		boost: Math.max(0, boost) / 10
	};
	(0, import_react.useEffect)(() => {
		const frame = frameRef.current;
		const canvas = canvasRef.current;
		if (!frame || !canvas) return;
		const scene = new Scene();
		scene.background = new Color(background);
		const fogNear = Math.min(FOG_FAR * (1 - Math.min(100, Math.max(0, fade)) / 100), 14.24);
		scene.fog = new Fog(new Color(background), fogNear, FOG_FAR);
		const camera = new PerspectiveCamera(90, 1, .1, 1e3);
		camera.position.set(0, 0, .5);
		const renderer = new WebGLRenderer({
			canvas,
			antialias: true,
			alpha: false,
			powerPreference: "high-performance"
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
		const lineMat = new MeshBasicMaterial({
			color: new Color(lineColor),
			transparent: true,
			opacity: Math.min(100, Math.max(0, lineOpacity)) / 100
		});
		const loader = new TextureLoader();
		loader.setCrossOrigin("anonymous");
		const fading = [];
		let imageIndex = 0, populateIndex = 0;
		let scrollPos = 0, raf = 0, last = 0, alive = true;
		let isVisible = false;
		let isPageVisible = document.visibilityState === "visible";
		const hw = TUNNEL_WIDTH / 2, hh = TUNNEL_HEIGHT / 2;
		const cols = Math.max(1, Math.round(grid));
		const rows = Math.max(1, Math.round(grid));
		const colW = TUNNEL_WIDTH / cols;
		const rowH = TUNNEL_HEIGHT / rows;
		const geoFloor = new PlaneGeometry(colW, SEGMENT_DEPTH);
		const geoWall = new PlaneGeometry(SEGMENT_DEPTH, rowH);
		const geoTubeZ = new TubeGeometry(new LineCurve3(new Vector3(0, 0, 0), new Vector3(0, 0, -1)), 1, LINE_RADIUS, 8);
		const geoTubeX = new TubeGeometry(new LineCurve3(new Vector3(0, 0, 0), new Vector3(TUNNEL_WIDTH, 0, 0)), 1, LINE_RADIUS, 8);
		const geoTubeY = new TubeGeometry(new LineCurve3(new Vector3(0, 0, 0), new Vector3(0, TUNNEL_HEIGHT, 0)), 1, LINE_RADIUS, 8);
		const colorMats = palette.map((hex) => new MeshBasicMaterial({
			color: new Color(hex),
			side: 2
		}));
		const imageMats = urls.map((url) => {
			const mat = new MeshBasicMaterial({
				transparent: true,
				opacity: 0,
				side: 2
			});
			loader.load(url, (tex) => {
				if (!alive) {
					tex.dispose();
					return;
				}
				tex.minFilter = LinearFilter;
				tex.generateMipmaps = false;
				tex.colorSpace = SRGBColorSpace;
				mat.map = tex;
				mat.needsUpdate = true;
				fading.push(mat);
			});
			return mat;
		});
		const tube = (geo, x, y, z = 0) => {
			const m = new Mesh(geo, lineMat);
			m.position.set(x, y, z);
			return m;
		};
		const SLOTS = [];
		const z = -1 / 2;
		for (let i = 0; i < cols; i++) {
			const x = -2.5 + i * colW + colW / 2;
			SLOTS.push({
				geo: geoFloor,
				pos: new Vector3(x, -1.75, z),
				rot: new Euler(-Math.PI / 2, 0, 0)
			});
			SLOTS.push({
				geo: geoFloor,
				pos: new Vector3(x, hh, z),
				rot: new Euler(Math.PI / 2, 0, 0)
			});
		}
		for (let i = 0; i < rows; i++) {
			const y = -1.75 + i * rowH + rowH / 2;
			SLOTS.push({
				geo: geoWall,
				pos: new Vector3(-2.5, y, z),
				rot: new Euler(0, Math.PI / 2, 0)
			});
			SLOTS.push({
				geo: geoWall,
				pos: new Vector3(hw, y, z),
				rot: new Euler(0, -Math.PI / 2, 0)
			});
		}
		function populate(group) {
			populateIndex++;
			const slabs = group.userData.slabs;
			for (const slab of slabs) if (Math.random() < .3) {
				slab.visible = true;
				slab.material = colorMats[0];
			} else if (imageMats.length) {
				slab.visible = true;
				slab.material = imageMats[imageIndex % imageMats.length];
				imageIndex++;
			} else slab.visible = false;
		}
		function createSegment(segZ) {
			const group = new Group();
			group.position.z = segZ;
			for (let i = 0; i <= cols; i++) {
				const x = -2.5 + i * colW;
				group.add(tube(geoTubeZ, x, -1.75));
				group.add(tube(geoTubeZ, x, hh));
			}
			for (let i = 1; i < rows; i++) {
				const y = -1.75 + i * rowH;
				group.add(tube(geoTubeZ, -2.5, y));
				group.add(tube(geoTubeZ, hw, y));
			}
			group.add(tube(geoTubeX, -2.5, -1.75));
			group.add(tube(geoTubeX, -2.5, hh));
			group.add(tube(geoTubeY, -2.5, -1.75));
			group.add(tube(geoTubeY, hw, -1.75));
			const slabs = SLOTS.map((slot) => {
				const m = new Mesh(slot.geo, colorMats[0]);
				m.position.copy(slot.pos);
				m.rotation.copy(slot.rot);
				m.visible = false;
				group.add(m);
				return m;
			});
			group.userData.slabs = slabs;
			populate(group);
			return group;
		}
		const segments = [];
		for (let i = 0; i < NUM_SEGMENTS; i++) {
			const g = createSegment(-i * SEGMENT_DEPTH);
			scene.add(g);
			segments.push(g);
		}
		const resize = () => {
			const w = Math.max(1, frame.clientWidth), h = Math.max(1, frame.clientHeight);
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h, false);
		};
		const ro = new ResizeObserver(resize);
		ro.observe(frame);
		resize();
		const animate = (now) => {
			raf = 0;
			if (!alive || !isVisible || !isPageVisible) return;
			const dt = last ? Math.min((now - last) / 1e3, 1 / 30) : 1 / 60;
			last = now;
			const cfg = cfgRef.current;
			scrollPos += cfg.speed;
			camera.position.z += CAMERA_CHASE * (-.05 * scrollPos - camera.position.z);
			const span = 15;
			const cz = camera.position.z;
			for (const seg of segments) if (seg.position.z > cz + SEGMENT_DEPTH) {
				let min = 0;
				for (const s of segments) min = Math.min(min, s.position.z);
				seg.position.z = min - SEGMENT_DEPTH;
				populate(seg);
			} else if (seg.position.z < cz - span - SEGMENT_DEPTH) {
				let max = -999999;
				for (const s of segments) max = Math.max(max, s.position.z);
				seg.position.z = max + SEGMENT_DEPTH;
				populate(seg);
			}
			for (let i = fading.length - 1; i >= 0; i--) {
				const m = fading[i];
				m.opacity = Math.min(1, m.opacity + dt / FADE_IN);
				if (m.opacity >= 1) fading.splice(i, 1);
			}
			renderer.render(scene, camera);
			raf = requestAnimationFrame(animate);
		};
		const updateAnimation = () => {
			if (alive && isVisible && isPageVisible) {
				if (raf === 0) raf = requestAnimationFrame(animate);
			} else if (raf !== 0) {
				cancelAnimationFrame(raf);
				raf = 0;
				last = 0;
			}
		};
		const intersectionObserver = new IntersectionObserver(([entry]) => {
			isVisible = entry.isIntersecting;
			updateAnimation();
		}, { rootMargin: "100px" });
		const handleVisibilityChange = () => {
			isPageVisible = document.visibilityState === "visible";
			updateAnimation();
		};
		intersectionObserver.observe(frame);
		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => {
			alive = false;
			cancelAnimationFrame(raf);
			ro.disconnect();
			intersectionObserver.disconnect();
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			geoFloor.dispose();
			geoWall.dispose();
			geoTubeZ.dispose();
			geoTubeX.dispose();
			geoTubeY.dispose();
			for (const m of colorMats) m.dispose();
			for (const m of imageMats) {
				m.map?.dispose();
				m.dispose();
			}
			lineMat.dispose();
			renderer.dispose();
		};
	}, [
		urls,
		palette,
		background,
		lineColor,
		lineOpacity,
		grid,
		fade
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: frameRef,
		style: {
			position: "absolute",
			inset: 0,
			...style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			style: {
				display: "block",
				width: "100%",
				height: "100%"
			}
		})
	});
}
//#endregion
export { GalleryTunnel };
