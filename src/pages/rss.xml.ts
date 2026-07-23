import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context: { site: URL }) {
	const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: 'No Vibe Coding',
		description:
			'Field notes, experiments, and practical patterns for building software with coding agents—without outsourcing judgment.',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishedAt,
			link: `/posts/${post.id}/`,
			categories: post.data.tags,
		})),
	});
}
