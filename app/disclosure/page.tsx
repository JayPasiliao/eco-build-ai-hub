export default function DisclosurePage(){
  return (
    <main className="max-w-site mx-auto px-container py-section">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-foreground mb-6 font-heading">Affiliate Disclosure</h1>
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-muted-foreground text-xl leading-relaxed">
            Some links on this site are affiliate links. If you buy through them, we may earn a commission at no extra cost to you. 
            We only recommend tools we would use ourselves and believe will genuinely help our readers.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Our reviews and recommendations are always honest and based on thorough testing and research. 
            Affiliate commissions help us keep this site running and continue providing valuable content.
          </p>
        </div>
      </div>
    </main>
  );
}
