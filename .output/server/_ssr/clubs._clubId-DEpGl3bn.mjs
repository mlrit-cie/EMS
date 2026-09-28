import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clubs } from "./ems-data-DREOOOk7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clubs._clubId-DEpGl3bn.js
var $$splitComponentImporter = () => import("./clubs._clubId-NHOFTyh2.mjs");
var Route = createFileRoute("/clubs/$clubId")({
	head: ({ params }) => {
		const c = clubs.find((x) => x.id === params.clubId);
		const title = c ? `${c.name} — EMS.MLRIT` : "Club — EMS.MLRIT";
		return { meta: [
			{ title },
			{
				name: "description",
				content: c?.focus ?? "MLRIT student club."
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: c?.focus ?? "MLRIT student club."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
