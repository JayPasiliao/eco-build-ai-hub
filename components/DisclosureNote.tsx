export default function DisclosureNote() {
  return (
    <div className="rounded-xl border border-primary/20 p-4 text-sm text-muted-foreground bg-primary/5">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
        <p>
          <strong className="text-foreground">Affiliate Disclosure:</strong> Some links are affiliate links. 
          If you buy through them, we may earn a commission at no cost to you.
        </p>
      </div>
    </div>
  );
}
