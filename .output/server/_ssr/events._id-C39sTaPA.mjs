import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as events } from "./ems-data-DREOOOk7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._id-C39sTaPA.js
var $$splitComponentImporter = () => import("./events._id-XiRbB29q.mjs");
var Route = createFileRoute("/events/$id")({
	head: ({ params }) => {
		const e = events.find((x) => x.id === params.id);
		const title = e ? `${e.title} — EMS.MLRIT` : "Event — EMS.MLRIT";
		const description = e?.description ?? "Event information from EMS.MLRIT.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
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
