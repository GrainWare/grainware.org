import rss from "@astrojs/rss";
import dayjs from "dayjs";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    // `<title>` field in output xml
    title: "grainware.org",
    // `<description>` field in output xml
    description: "the latest news in the field of accuracy",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    //site: context.site,
    site: "https://grainware.org",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: dayjs(post.data.date).format("ddd, DD MMM YYYY HH:mm:ss ZZ"),
      description: post.data.description,
      link: `/posts/${post.id}`,
    })),
  });
}
