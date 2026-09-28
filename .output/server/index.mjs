globalThis.__nitro_main__ = import.meta.url;
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx+unenv.mjs";
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/ems_mlrit_archivar.svg": {
		"type": "image/svg+xml",
		"etag": "\"8a1-GRwFe44TIVjqmTf+54+4XaPpeY4\"",
		"mtime": "2026-09-22T04:57:16.326Z",
		"size": 2209,
		"path": "../public/ems_mlrit_archivar.svg"
	},
	"/hero-bg.jpg": {
		"type": "image/jpeg",
		"etag": "\"f670-wZ1z68jyRA4lXd9dECu4luW1Jcg\"",
		"mtime": "2026-09-22T08:44:22.505Z",
		"size": 63088,
		"path": "../public/hero-bg.jpg"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-22T04:57:16.336Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"150-Z6E0/WjjyFUV5/s3uk775lwJl2o\"",
		"mtime": "2026-09-22T04:57:16.396Z",
		"size": 336,
		"path": "../public/logo.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-22T04:57:16.401Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/Scene.mp4": {
		"type": "video/mp4",
		"etag": "\"9adc-ZaGsEdE1P3t7XDairni1awWu5W4\"",
		"mtime": "2026-09-22T04:57:16.174Z",
		"size": 39644,
		"path": "../public/Scene.mp4"
	},
	"/assets/admin-Te4z_Nvi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"261-zIBWLFOwQSnS2DJUrf+PWauLnII\"",
		"mtime": "2026-09-28T18:00:03.838Z",
		"size": 609,
		"path": "../public/assets/admin-Te4z_Nvi.js"
	},
	"/assets/club-BbQaiRgs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-QXX7SQOx/3aRtF1j+HksJwB2lsI\"",
		"mtime": "2026-09-28T18:00:03.840Z",
		"size": 141,
		"path": "../public/assets/club-BbQaiRgs.js"
	},
	"/assets/arrow-left-Bg-YBY17.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-DIyun8bLyAHgk6H5226ZBtC4Cqo\"",
		"mtime": "2026-09-28T18:00:03.839Z",
		"size": 165,
		"path": "../public/assets/arrow-left-Bg-YBY17.js"
	},
	"/assets/club.event.create-By916jvi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a2-C9JFTwrnGR7gig+4RpqgBM/D7Uw\"",
		"mtime": "2026-09-28T18:00:03.841Z",
		"size": 1442,
		"path": "../public/assets/club.event.create-By916jvi.js"
	},
	"/assets/arrow-up-right-DCttIZow.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-10gspDb+jKrJ8kZaxCt6fIF/AUE\"",
		"mtime": "2026-09-28T18:00:03.839Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-DCttIZow.js"
	},
	"/assets/club.event._id-Qz_P9FIK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"276-RNcH5c1eUa50kQCiQDVOjnxmN7g\"",
		"mtime": "2026-09-28T18:00:03.840Z",
		"size": 630,
		"path": "../public/assets/club.event._id-Qz_P9FIK.js"
	},
	"/assets/club.profile-qdEEl1Ln.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"261-WPMceCy4LeMKRIVK2N4Es4guv5A\"",
		"mtime": "2026-09-28T18:00:03.843Z",
		"size": 609,
		"path": "../public/assets/club.profile-qdEEl1Ln.js"
	},
	"/assets/clubs-BbQaiRgs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-QXX7SQOx/3aRtF1j+HksJwB2lsI\"",
		"mtime": "2026-09-28T18:00:03.844Z",
		"size": 141,
		"path": "../public/assets/clubs-BbQaiRgs.js"
	},
	"/assets/clubs-CjL2ZFLF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"828-nlsBFnfDoUOjVhyisLJS68noh+4\"",
		"mtime": "2026-09-28T18:00:03.859Z",
		"size": 2088,
		"path": "../public/assets/clubs-CjL2ZFLF.css"
	},
	"/assets/createLucideIcon-CB9c0rW0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ee-N16jsKS0o8Ju/p37Wlb9WCPKHuA\"",
		"mtime": "2026-09-28T18:00:03.848Z",
		"size": 1774,
		"path": "../public/assets/createLucideIcon-CB9c0rW0.js"
	},
	"/assets/events-BbQaiRgs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-QXX7SQOx/3aRtF1j+HksJwB2lsI\"",
		"mtime": "2026-09-28T18:00:03.848Z",
		"size": 141,
		"path": "../public/assets/events-BbQaiRgs.js"
	},
	"/assets/clubs._clubId-Tamgh2Kh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e64-Wd2S7eJa/zbjRqmWxU4EaYUVyps\"",
		"mtime": "2026-09-28T18:00:03.846Z",
		"size": 11876,
		"path": "../public/assets/clubs._clubId-Tamgh2Kh.js"
	},
	"/assets/events.index-BxfOy_El.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1047-4T173/DWhoesPt8nH2bd3PLFNz0\"",
		"mtime": "2026-09-28T18:00:03.850Z",
		"size": 4167,
		"path": "../public/assets/events.index-BxfOy_El.js"
	},
	"/assets/events._id-BJNliUqj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b86-UDGzdgyKb9b4bM7nFiRmnDndfxE\"",
		"mtime": "2026-09-28T18:00:03.849Z",
		"size": 11142,
		"path": "../public/assets/events._id-BJNliUqj.js"
	},
	"/assets/faculty-BM6l63ns.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25a-+4YJev5bt9+T466n+nS0MnEnpPU\"",
		"mtime": "2026-09-28T18:00:03.851Z",
		"size": 602,
		"path": "../public/assets/faculty-BM6l63ns.js"
	},
	"/assets/clubs.index-BST_8DB1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14988-NI/FxfZ+mDr/gDo0BXGvGCiuad8\"",
		"mtime": "2026-09-28T18:00:03.847Z",
		"size": 84360,
		"path": "../public/assets/clubs.index-BST_8DB1.js"
	},
	"/assets/GalleryTunnel-DDKgL1jW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7721b-5zCFmcUZeIBrTqpKk6WjeWaqH9U\"",
		"mtime": "2026-09-28T18:00:03.834Z",
		"size": 487963,
		"path": "../public/assets/GalleryTunnel-DDKgL1jW.js"
	},
	"/assets/index-CHTcwgeN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"974b5-lBtm1AV9+mZV81wkevKH5D2AE1M\"",
		"mtime": "2026-09-28T18:00:03.833Z",
		"size": 619701,
		"path": "../public/assets/index-CHTcwgeN.js"
	},
	"/assets/jsx-runtime-Cx0BB4qO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"440-7GwVHNgO4EUMk3cR4Bh6KGJPPX4\"",
		"mtime": "2026-09-28T18:00:03.851Z",
		"size": 1088,
		"path": "../public/assets/jsx-runtime-Cx0BB4qO.js"
	},
	"/assets/link-BE4aBPIB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eab-fTAIrIQlutWmilMux34tbd06C/w\"",
		"mtime": "2026-09-28T18:00:03.852Z",
		"size": 7851,
		"path": "../public/assets/link-BE4aBPIB.js"
	},
	"/assets/matchContext-7hQn42Rt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-h0ZaVSpOjzAu4ZEXCa+xc2Yc7cw\"",
		"mtime": "2026-09-28T18:00:03.854Z",
		"size": 170,
		"path": "../public/assets/matchContext-7hQn42Rt.js"
	},
	"/assets/LivingHeroBg-BksHdZJB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9d-GuslUF/DHw++A88SmRzDeYOMf5o\"",
		"mtime": "2026-09-28T18:00:03.837Z",
		"size": 3485,
		"path": "../public/assets/LivingHeroBg-BksHdZJB.js"
	},
	"/assets/Match-zKh1G6xe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be1d-pFpktUNQud+vQVdqMGjgRblymZ8\"",
		"mtime": "2026-09-28T18:00:03.838Z",
		"size": 48669,
		"path": "../public/assets/Match-zKh1G6xe.js"
	},
	"/assets/register-DF9C3ArM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b0a-Gj3HUGbNUrMu/Ddj82+rKeQNk0Q\"",
		"mtime": "2026-09-28T18:00:03.858Z",
		"size": 6922,
		"path": "../public/assets/register-DF9C3ArM.js"
	},
	"/assets/redirect-1Dss4sOM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"216-AhfiXwQqYdLrM+uQAOtPHfIddmI\"",
		"mtime": "2026-09-28T18:00:03.857Z",
		"size": 534,
		"path": "../public/assets/redirect-1Dss4sOM.js"
	},
	"/assets/routes-CSFD0n2m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24ac-6LB5e63WkgeAV40P+b0u8dSlI+w\"",
		"mtime": "2026-09-28T18:00:03.859Z",
		"size": 9388,
		"path": "../public/assets/routes-CSFD0n2m.js"
	},
	"/assets/styles-pdfEZWJo.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18b29-vUU6hFGXvGHQJ3J+5O4GL/nq7Ko\"",
		"mtime": "2026-09-28T18:00:03.862Z",
		"size": 101161,
		"path": "../public/assets/styles-pdfEZWJo.css"
	},
	"/assets/react-3BKWdGy3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-7y5khacUeAI0naE7zvk9aPM2omk\"",
		"mtime": "2026-09-28T18:00:03.857Z",
		"size": 7527,
		"path": "../public/assets/react-3BKWdGy3.js"
	},
	"/assets/user.profile-D2K9ubo6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"318-pGZ5g0SMcHa/XROqAvZOqf4iDs4\"",
		"mtime": "2026-09-28T18:00:03.859Z",
		"size": 792,
		"path": "../public/assets/user.profile-D2K9ubo6.js"
	},
	"/assets/useStore-BO6fe4Dm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b11-KFKRJxFPxUan+0gZnoj/HuO11ys\"",
		"mtime": "2026-09-28T18:00:03.859Z",
		"size": 19217,
		"path": "../public/assets/useStore-BO6fe4Dm.js"
	},
	"/club-logos/apex.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a55f-fR6azhO9tQSLootDGgdeFplZ82w\"",
		"mtime": "2026-09-28T14:33:54.541Z",
		"size": 42335,
		"path": "../public/club-logos/apex.jpeg"
	},
	"/club-logos/aim.png": {
		"type": "image/png",
		"etag": "\"c134-xoxWwzJwo+yZg2aH3JtrO68mCu0\"",
		"mtime": "2026-09-28T14:48:29.898Z",
		"size": 49460,
		"path": "../public/club-logos/aim.png"
	},
	"/club-logos/cie.jpeg": {
		"type": "image/jpeg",
		"etag": "\"fff2-2ZBJRyzj5ljSL/x2OXypHwP1i8E\"",
		"mtime": "2026-09-28T14:33:54.545Z",
		"size": 65522,
		"path": "../public/club-logos/cie.jpeg"
	},
	"/club-logos/came.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7ccf-qsT+Yda1PAqO+PG1yXz7CzvKQMw\"",
		"mtime": "2026-09-28T14:33:54.544Z",
		"size": 31951,
		"path": "../public/club-logos/came.jpeg"
	},
	"/club-logos/areo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7c34-8HHSGp2Fqag9HLQjc2fR7jRj9FM\"",
		"mtime": "2026-09-28T14:33:54.541Z",
		"size": 31796,
		"path": "../public/club-logos/areo.jpeg"
	},
	"/club-logos/code.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e1a1-HrINBrTFH1aW+W1JIVkddj8aXkg\"",
		"mtime": "2026-09-28T14:33:54.547Z",
		"size": 57761,
		"path": "../public/club-logos/code.jpeg"
	},
	"/club-logos/EWB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5c95-mDEq9YByUiJH0yp8zD3eUR/uXS4\"",
		"mtime": "2026-09-28T14:33:54.540Z",
		"size": 23701,
		"path": "../public/club-logos/EWB.jpeg"
	},
	"/club-logos/lit.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a801-yLa3aGEQie97Zrxf/CqrkG+GglI\"",
		"mtime": "2026-09-28T14:33:54.547Z",
		"size": 43009,
		"path": "../public/club-logos/lit.jpeg"
	},
	"/club-logos/nss.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6bef-5x5fw4/q6cAHWIdYgtum9pDgAYA\"",
		"mtime": "2026-09-28T14:33:54.547Z",
		"size": 27631,
		"path": "../public/club-logos/nss.jpeg"
	},
	"/club-logos/mun.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16082-kQ3Lq8E+3sTGTzlj93uFD1v0GbM\"",
		"mtime": "2026-09-28T14:33:54.547Z",
		"size": 90242,
		"path": "../public/club-logos/mun.jpeg"
	},
	"/club-logos/csi.png": {
		"type": "image/png",
		"etag": "\"1120e-11UlwsUThoh8VtQbLbK7N7SwBIs\"",
		"mtime": "2026-09-28T14:48:29.875Z",
		"size": 70158,
		"path": "../public/club-logos/csi.png"
	},
	"/club-logos/robotics.png": {
		"type": "image/png",
		"etag": "\"11edc-dKSrHNUs5Z5iliLDVmUAbWDqrjQ\"",
		"mtime": "2026-09-28T14:48:29.939Z",
		"size": 73436,
		"path": "../public/club-logos/robotics.png"
	},
	"/club-logos/scope.jpeg": {
		"type": "image/jpeg",
		"etag": "\"ca96-piGkShjS09/7dP54TeE4pmr7zqA\"",
		"mtime": "2026-09-28T14:33:54.551Z",
		"size": 51862,
		"path": "../public/club-logos/scope.jpeg"
	},
	"/club-logos/squad.png": {
		"type": "image/png",
		"etag": "\"16ae4-Ko+i0H2NQaUlmyojqoLyg3cit2o\"",
		"mtime": "2026-09-28T14:48:29.913Z",
		"size": 92900,
		"path": "../public/club-logos/squad.png"
	},
	"/events/equinox.jpeg": {
		"type": "image/jpeg",
		"etag": "\"37cf2-CCMEnrkbed8yKk5opiH7QQWaIv4\"",
		"mtime": "2026-09-28T16:24:48.152Z",
		"size": 228594,
		"path": "../public/events/equinox.jpeg"
	},
	"/events/welcome-gate.jpg": {
		"type": "image/jpeg",
		"etag": "\"26635-x5ZsC/GV223D5V4jq6jsJ4z9Dt0\"",
		"mtime": "2026-09-22T04:57:16.657Z",
		"size": 157237,
		"path": "../public/events/welcome-gate.jpg"
	},
	"/events/hustle mania.png": {
		"type": "image/png",
		"etag": "\"d6301-M7XMsiMLmTnQ3iM3iLe+uaD6w+Y\"",
		"mtime": "2026-09-22T04:57:16.513Z",
		"size": 877313,
		"path": "../public/events/hustle mania.png"
	},
	"/events/wc 2.0.png": {
		"type": "image/png",
		"etag": "\"bbd41-cSG2Xc7yvlcmwc3Fe0t7f4HMEd8\"",
		"mtime": "2026-09-22T04:57:16.604Z",
		"size": 769345,
		"path": "../public/events/wc 2.0.png"
	},
	"/events/equniox.png": {
		"type": "image/png",
		"etag": "\"132822-HSma0llFKTyBS6HJi+GeIFe0Qjo\"",
		"mtime": "2026-09-22T04:57:16.468Z",
		"size": 1255458,
		"path": "../public/events/equniox.png"
	},
	"/events/gi.png": {
		"type": "image/png",
		"etag": "\"134c1d-PbklC/uS1TDiMWYiIOAaoP/N6B0\"",
		"mtime": "2026-09-22T04:57:16.492Z",
		"size": 1264669,
		"path": "../public/events/gi.png"
	},
	"/events/B2B.png": {
		"type": "image/png",
		"etag": "\"1a2db9-J6BmrVHYYU43CMAxCIEEDw69fUk\"",
		"mtime": "2026-09-22T04:57:16.443Z",
		"size": 1715641,
		"path": "../public/events/B2B.png"
	},
	"/events/wc.png": {
		"type": "image/png",
		"etag": "\"156543-EplYmaU2tMSINFDD4itQiwwoSiI\"",
		"mtime": "2026-09-22T04:57:16.649Z",
		"size": 1402179,
		"path": "../public/events/wc.png"
	},
	"/events/metaloop.png": {
		"type": "image/png",
		"etag": "\"266c9e-KTbHWclJkEJGZprJ6rvSpboADpo\"",
		"mtime": "2026-09-22T04:57:16.545Z",
		"size": 2518174,
		"path": "../public/events/metaloop.png"
	},
	"/comic_drone.glb": {
		"type": "model/gltf-binary",
		"etag": "\"111b4a8-1olSNPXEpW1YLtmhs+GZGY+AtHg\"",
		"mtime": "2026-09-22T04:57:16.316Z",
		"size": 17937576,
		"path": "../public/comic_drone.glb"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_7ieAHs = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_7ieAHs
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
