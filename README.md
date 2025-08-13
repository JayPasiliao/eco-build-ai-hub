# Eco Build AI Hub

A production-ready content system and AI tool review site built with Next.js App Router, TypeScript, and MDX.

## Features

- **Content Management**: MDX-based content system with scheduled publishing
- **Reviews System**: Comprehensive AI tool reviews with scoring and categorization
- **Top Picks**: Editor-curated recommendations for the best AI tools
- **Affiliate Integration**: Centralized affiliate link management
- **Analytics**: Plausible analytics integration
- **Responsive Design**: Beautiful, mobile-first design built with Tailwind CSS
- **SEO Optimized**: Static generation with proper meta tags and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with typography plugin
- **Content**: MDX with gray-matter parsing
- **UI Components**: Radix UI components with shadcn/ui
- **Analytics**: Plausible (script tag integration)

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── (site)/                  # Site layout with header/footer
│   │   ├── layout.tsx          # Site wrapper
│   │   └── page.tsx            # Homepage
│   ├── reviews/                 # Reviews section
│   │   ├── page.tsx            # Reviews index
│   │   └── [slug]/page.tsx     # Individual review
│   ├── comparisons/             # Comparisons page
│   ├── deals/                   # Deals page
│   ├── disclosure/              # Affiliate disclosure
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── PostCard.tsx             # Review preview card
│   ├── MDXRenderer.tsx          # MDX content renderer
│   ├── DisclosureNote.tsx       # Affiliate disclosure
│   └── ...                      # Other components
├── content/                      # MDX content
│   └── reviews/                 # Review posts
├── data/                        # Configuration data
│   ├── affiliates.ts            # Affiliate links
│   └── topPicks.ts             # Editor picks
├── lib/                         # Utility functions
│   ├── content.ts               # Content loading logic
│   └── date.ts                  # Date utilities
├── types/                       # TypeScript types
│   └── post.ts                  # Post type definitions
└── .github/workflows/           # GitHub Actions
    └── daily-rebuild.yml        # Daily rebuild workflow
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd eco-build-ai-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Content Management

### Adding New Reviews

1. Create a new `.mdx` file in `content/reviews/`
2. Use the following front matter structure:

```mdx
---
title: "Your Review Title"
slug: "your-review-slug"
category: "Category"
publishDate: "2025-01-20"
summary: "Brief description of the review"
keywords: ["keyword1", "keyword2"]
score: 9.0
---

# Your Review Content

Your MDX content here...
```

3. The review will automatically appear on the homepage and reviews page once the publish date is reached.

### Scheduling Posts

- Set `publishDate` to a future date to schedule posts
- Only published posts (publishDate <= now) will be visible
- Use ISO date format: `YYYY-MM-DD`

### Affiliate Links

Update `data/affiliates.ts` to manage your affiliate links:

```typescript
export const affiliates: Record<string, string> = {
  toolName: "https://example.com/?ref=yourcode",
  // Add more tools...
};
```

## Customization

### Top Picks

Edit `data/topPicks.ts` to update your editor's recommendations:

```typescript
export const topPicks = [
  {
    name: "Best AI Writer",
    toolKey: "toolName", // Must match affiliates.ts
    brief: "Description",
    score: 9.2
  }
];
```

### Styling

- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for Tailwind customization
- Component-specific styles are in individual component files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project builds to static files, so it can be deployed to any static hosting service:

```bash
npm run build
# Deploy the .next folder to your hosting service
```

## GitHub Actions

The project includes a daily rebuild workflow that runs at 1:00 AM UTC (9:00 AM Philippines time) to ensure content is up-to-date.

## Analytics

Plausible analytics is integrated via script tag. Update the domain in `app/layout.tsx`:

```tsx
<script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue on GitHub or contact the development team.
