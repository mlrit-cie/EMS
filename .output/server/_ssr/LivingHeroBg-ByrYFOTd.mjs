import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LivingHeroBg-ByrYFOTd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LivingHeroBg() {
	const containerRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const mouseRef = (0, import_react.useRef)({
		x: .5,
		y: .5,
		targetX: .5,
		targetY: .5
	});
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		const canvas = canvasRef.current;
		if (!container || !canvas) return;
		const context = canvas.getContext("2d");
		if (!context) return;
		let animationId = 0;
		let width = 0;
		let height = 0;
		let time = 0;
		let lastFrameTime = 0;
		let isIntersecting = false;
		let isPageVisible = document.visibilityState === "visible";
		let isTrackingPointer = false;
		const resize = () => {
			const rect = container.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
			width = rect.width;
			height = rect.height;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			context.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const onMouseMove = (event) => {
			const rect = container.getBoundingClientRect();
			mouseRef.current.targetX = Math.max(0, Math.min(1, (event.clientX - rect.left) / width));
			mouseRef.current.targetY = Math.max(0, Math.min(1, (event.clientY - rect.top) / height));
		};
		resize();
		window.addEventListener("resize", resize);
		const lines = Array.from({ length: 58 }, (_, index) => ({
			offset: index / 57,
			amplitude: 12 + Math.random() * 28,
			frequency: .008 + Math.random() * .009,
			speed: .35 + Math.random() * .45,
			thickness: index % 5 === 0 ? 2.4 : .8 + Math.random() * 1.2,
			opacity: index % 5 === 0 ? .42 : .12 + Math.random() * .16,
			phase: Math.random() * Math.PI * 2
		}));
		const verticalLines = lines.slice(0, 22).map((line) => ({
			...line,
			opacity: line.opacity * .32,
			thickness: .7
		}));
		const drawLine = (line, direction) => {
			const isHorizontal = direction === "horizontal";
			const length = isHorizontal ? width + 120 : height + 120;
			const crossLength = isHorizontal ? height : width;
			const base = line.offset * crossLength - 60;
			const pointer = isHorizontal ? mouseRef.current.x * width : mouseRef.current.y * height;
			context.beginPath();
			for (let distance = -60; distance <= length; distance += 12) {
				const wave = Math.sin(distance * line.frequency + time * line.speed + line.phase) * line.amplitude;
				const secondaryWave = Math.sin(distance * .003 - time * .24 + line.phase) * 16;
				const pointerDistance = distance + 60 - pointer;
				const pointerInfluence = Math.exp(-(pointerDistance * pointerDistance) / 18e3);
				const bend = Math.sin(pointerDistance * .018) * pointerInfluence * 42;
				const cross = base + wave + secondaryWave + bend;
				if (distance === -60) isHorizontal ? context.moveTo(distance, cross) : context.moveTo(cross, distance);
				else isHorizontal ? context.lineTo(distance, cross) : context.lineTo(cross, distance);
			}
			context.lineWidth = line.thickness;
			context.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
			context.stroke();
		};
		const render = (now) => {
			animationId = 0;
			if (!isIntersecting || !isPageVisible) return;
			if (now - lastFrameTime < 1e3 / 30) {
				animationId = requestAnimationFrame(render);
				return;
			}
			lastFrameTime = now;
			time += .012;
			const mouse = mouseRef.current;
			mouse.x += (mouse.targetX - mouse.x) * .06;
			mouse.y += (mouse.targetY - mouse.y) * .06;
			const background = context.createLinearGradient(0, 0, width, height);
			background.addColorStop(0, "#2e1065");
			background.addColorStop(.38, "#4c1d95");
			background.addColorStop(.72, "#6d28d9");
			background.addColorStop(1, "#312e81");
			context.fillStyle = background;
			context.fillRect(0, 0, width, height);
			const glow = context.createRadialGradient(mouse.x * width, mouse.y * height, 0, mouse.x * width, mouse.y * height, Math.min(width, height) * .7);
			glow.addColorStop(0, "rgba(216, 180, 254, 0.24)");
			glow.addColorStop(1, "rgba(49, 46, 129, 0)");
			context.fillStyle = glow;
			context.fillRect(0, 0, width, height);
			context.lineCap = "round";
			context.lineJoin = "round";
			lines.forEach((line) => drawLine(line, "horizontal"));
			verticalLines.forEach((line) => drawLine(line, "vertical"));
			const rippleRadius = 28 + Math.sin(time * 1.8) * 8;
			context.beginPath();
			context.arc(mouse.x * width, mouse.y * height, rippleRadius, 0, Math.PI * 2);
			context.strokeStyle = "rgba(255, 255, 255, 0.55)";
			context.lineWidth = 1.5;
			context.stroke();
			animationId = requestAnimationFrame(render);
		};
		const updateAnimation = () => {
			if (isIntersecting && isPageVisible) {
				if (animationId === 0) animationId = requestAnimationFrame(render);
				if (!isTrackingPointer) {
					window.addEventListener("mousemove", onMouseMove, { passive: true });
					isTrackingPointer = true;
				}
			} else if (animationId !== 0) {
				cancelAnimationFrame(animationId);
				animationId = 0;
			}
			if ((!isIntersecting || !isPageVisible) && isTrackingPointer) {
				window.removeEventListener("mousemove", onMouseMove);
				isTrackingPointer = false;
			}
		};
		const observer = new IntersectionObserver(([entry]) => {
			isIntersecting = entry.isIntersecting;
			updateAnimation();
		}, { rootMargin: "80px" });
		const handleVisibilityChange = () => {
			isPageVisible = document.visibilityState === "visible";
			updateAnimation();
		};
		observer.observe(container);
		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => {
			observer.disconnect();
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", onMouseMove);
			cancelAnimationFrame(animationId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "absolute inset-0 overflow-hidden pointer-events-none select-none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0 h-full w-full"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(1, 85, 125, 0.12), transparent 42%, rgba(1, 61, 111, 0.3))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse 90% 80% at 50% 42%, transparent 35%, rgba(0, 54, 103, 0.34) 100%)" }
			})
		]
	});
}
//#endregion
export { LivingHeroBg as t };
