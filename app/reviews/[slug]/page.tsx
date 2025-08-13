import { getReviewBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import DisclosureNote from "@/components/DisclosureNote";

export const dynamic = "force-static";

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const post = getReviewBySlug(params.slug);
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 prose prose-slate">
      <p className="text-sm text-slate-500">{new Date(post.publishDate).toDateString()}</p>
      <h1 className="mb-2">{post.title}</h1>
      {post.score ? <p className="text-slate-700">Score: {post.score}/10</p> : null}
      <MDXRemote source={post.content} />
      <hr className="my-8" />
      <DisclosureNote />
    </article>
  );
}
