// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";
import dayjs from "dayjs";

// 4. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      banner: image(),
      date: z.string().refine((date) => !isNaN(dayjs(date).valueOf()), {
        message: "Invalid date format",
      }),
      tags: z.array(z.string()),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };
