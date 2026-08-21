import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as posts } from "./ui-bits-Bo_UbXkN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-QoiUjUQP.js
var $$splitComponentImporter = () => import("./blog._slug-Cj4Jn1mp.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = posts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Article unavailable | Manpaanai Chettinadu Virundhu" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		const title = `${post.title} | Manpaanai Chettinadu Virundhu`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: post.excerpt
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: post.excerpt
				},
				{
					property: "og:url",
					content: `/blog/${params.slug}`
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: post.excerpt
				}
			],
			links: [{
				rel: "canonical",
				href: `/blog/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: post.title,
					description: post.excerpt,
					articleSection: post.category,
					publisher: {
						"@type": "Restaurant",
						name: "Manpaanai Chettinadu Virundhu"
					}
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
