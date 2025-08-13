import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";
import type { Post } from "@/types/post";
import { isPublished } from "./date";

const reviewsDir = path.join(process.cwd(), "content", "reviews");

const Front = z.object({
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  publishDate: z.string(), // ISO
  affiliateUrl: z.string().optional(),
  score: z.number().optional(),
  heroImage: z.string().optional(),
  summary: z.string().optional(),
  keywords: z.array(z.string()).optional()
});

function readMDXFile(fp: string): Post {
  const raw = fs.readFileSync(fp, "utf8");
  const { content, data } = matter(raw);
  
  // Ensure publishDate is a string
  const processedData = {
    ...data,
    publishDate: data.publishDate ? String(data.publishDate) : new Date().toISOString()
  };
  
  const fm = Front.parse(processedData);
  const stats = readingTime(content);
  return {
    ...fm,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    content
  };
}

export function listReviews(all = false): Post[] {
  if (!fs.existsSync(reviewsDir)) return [];
  const files = fs.readdirSync(reviewsDir).filter(f => f.endsWith(".mdx"));
  const posts = files.map(f => readMDXFile(path.join(reviewsDir, f)));
  const now = new Date();
  const filtered = all ? posts : posts.filter(p => isPublished(p.publishDate, now));
  return filtered.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
}

export function getReviewBySlug(slug: string): Post | null {
  const fp = path.join(reviewsDir, `${slug}.mdx`);
  if (!fs.existsSync(fp)) return null;
  const post = readMDXFile(fp);
  if (!isPublished(post.publishDate)) return null;
  return post;
}
