import { listReviews } from "@/lib/content";
import { PostCard } from "@/components/PostCard";

export const dynamic = "force-static";

export default function ReviewsPage() {
  const posts = listReviews();
  return (
    <main className="max-w-site mx-auto px-container py-section">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-foreground mb-4 font-heading">Latest Reviews</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Clear pros, cons, pricing, and who it is for. Every tool tested, honestly reviewed.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(p => (
          <PostCard key={p.slug} slug={p.slug} title={p.title} summary={p.summary} publishDate={p.publishDate} category={p.category} score={p.score}/>
        ))}
      </div>
    </main>
  );
}
