export type PostFrontMatter = {
  title: string;
  slug: string;
  category: string;
  publishDate: string; // ISO
  affiliateUrl?: string;
  score?: number;
  heroImage?: string;
  summary?: string;
  keywords?: string[];
};

export type Post = PostFrontMatter & {
  readingMinutes: number;
  content: string;
};
