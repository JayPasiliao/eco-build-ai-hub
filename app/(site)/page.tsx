import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Features from "@/components/Features";
import ValueStrip from "@/components/ValueStrip";
import LeadMagnet from "@/components/LeadMagnet";
import { PostCard } from "@/components/PostCard";
import { listReviews } from "@/lib/content";
import { topPicks } from "@/data/topPicks";
import { affiliates } from "@/data/affiliates";

export default function HomePage() {
  const latestReviews = listReviews().slice(0, 3);

  return (
    <>
      <Hero />
      <ProjectsSection />
      <Features />
      <ValueStrip />
      
      {/* Top Picks Section */}
      <section className="py-section bg-gradient-to-br from-secondary/30 to-accent/10">
        <div className="max-w-site mx-auto px-container">
          <h2 className="text-4xl font-bold text-foreground text-center mb-4 font-heading">Editor's Top Picks</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">Hand-picked tools we trust and recommend</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPicks.map((pick) => (
              <div key={pick.toolKey} className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 group">
                <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">{pick.name}</div>
                <p className="text-card-foreground mb-4 leading-relaxed">{pick.brief}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{pick.score}/10</span>
                  <a 
                    href={affiliates[pick.toolKey]} 
                    className="text-sm text-accent hover:text-accent/80 font-medium group-hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews Section */}
      {latestReviews.length > 0 && (
        <section className="py-section bg-background">
          <div className="max-w-site mx-auto px-container">
            <h2 className="text-4xl font-bold text-foreground text-center mb-4 font-heading">Latest Reviews</h2>
            <p className="text-muted-foreground text-center mb-12 text-lg">Fresh insights and honest assessments</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestReviews.map((review) => (
                <PostCard
                  key={review.slug}
                  slug={review.slug}
                  title={review.title}
                  summary={review.summary}
                  publishDate={review.publishDate}
                  category={review.category}
                  score={review.score}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="/reviews" 
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary-dark transition-all duration-300 font-semibold shadow-soft hover:shadow-card"
              >
                View All Reviews →
              </a>
            </div>
          </div>
        </section>
      )}

      <LeadMagnet />
    </>
  );
}
