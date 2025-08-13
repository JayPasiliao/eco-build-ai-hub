import Link from "next/link";
import { formatShort } from "@/lib/date";

export function PostCard({ slug, title, summary, publishDate, category, score }:{
  slug:string; title:string; summary?:string; publishDate:string; category:string; score?:number;
}) {
  return (
    <Link href={`/reviews/${slug}`} className="block rounded-2xl border border-border bg-card p-6 hover:shadow-card hover:border-primary/20 transition-all duration-300 group">
      <div className="text-xs uppercase tracking-wide text-primary font-semibold mb-3">{category}</div>
      <h3 className="mt-1 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">{title}</h3>
      {summary ? <p className="mt-2 text-muted-foreground leading-relaxed">{summary}</p> : null}
      <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          {formatShort(publishDate)}
        </span>
        {typeof score === "number" && (
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            Score <span className="font-semibold text-primary">{score.toFixed(1)}/10</span>
          </span>
        )}
      </div>
    </Link>
  );
}
