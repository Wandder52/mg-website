# Mega Glass Landing Page

A modern, responsive landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (v3.8.5)
- **Icons:** Lucide React (v0.577.0)
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## 🏗️ Project Structure

```
mega-glass/
├── app/
│   ├── components/
│   │   ├── layout/          # Header, Navigation
│   │   ├── hero/            # Hero section components
│   │   └── ui/              # Reusable UI components
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/
│   ├── constants.ts         # Centralized configuration
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 📚 Documentation

See [COMPONENTS.md](./COMPONENTS.md) for detailed component architecture documentation.

## ✨ Features

### Implemented
- ✅ Responsive hero section with background image
- ✅ Header with logo and navigation
- ✅ Review badges (Google, Facebook)
- ✅ Glassmorphism effects
- ✅ Custom brand colors
- ✅ Mobile-responsive design
- ✅ TypeScript type safety
- ✅ Optimized images with Next.js Image
- ✅ Accessible components (ARIA, semantic HTML)

### Architecture Highlights
- **SOLID Principles:** Single responsibility, open/closed, dependency inversion
- **DRY:** Reusable components, centralized constants
- **Composition:** Complex components built from simple ones
- **Type Safety:** Full TypeScript coverage
- **Performance:** Optimized images, minimal JavaScript

## 🎨 Customization

### Brand Colors

Edit `app/globals.css`:

```css
--color-mega-yellow: #fdb913;
--color-mega-teal: #4a9b9b;
--color-mega-dark-teal: #2c7a7b;
```

### Content

Edit `lib/constants.ts`:

```typescript
export const HERO_CONTENT = {
  title: 'YOUR TITLE HERE',
  subtitle: 'Your subtitle here',
};
```

### Images

Update the hero background in `app/components/hero/HeroSection.tsx`:

```typescript
<HeroBackground
  imageSrc="YOUR_IMAGE_URL"
  imageAlt="Your alt text"
/>
```

## 🧩 Component Architecture

### Key Principles

1. **Single Responsibility:** Each component has one clear purpose
2. **Reusability:** Components are designed to be reused
3. **Composition:** Complex UIs built from simple components
4. **Type Safety:** TypeScript interfaces for all props
5. **Accessibility:** Semantic HTML and ARIA labels

### Component Hierarchy

```
Page
└── Header
    └── Navigation
└── HeroSection
    ├── HeroBackground
    ├── HeroContent
    └── ReviewBadges
        └── ReviewBadge (x2)
```

## 📱 Responsive Design

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components are mobile-first and fully responsive.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Alt text for images
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

## 🔧 Configuration

### Next.js Image Optimization

Remote images are configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
  qualities: [75, 90],
}
```

## 📝 Adding New Sections

1. Create component in `app/components/[section-name]/`
2. Import and add to `app/page.tsx`
3. Update constants if needed
4. Document in COMPONENTS.md

Example:

```tsx
// app/components/features/FeaturesSection.tsx
export function FeaturesSection() {
  return (
    <section className="py-24">
      <Container>
        {/* Your content */}
      </Container>
    </section>
  );
}
```

## 🧪 Code Quality

- **TypeScript:** Strict mode enabled
- **ESLint:** Next.js recommended config
- **Prettier:** Code formatting (if configured)
- **Type Safety:** Full TypeScript coverage

## 📄 License

Private project for Mega Glass.

## 🤝 Contributing

1. Follow the established architecture patterns
2. Use TypeScript with explicit types
3. Maintain component documentation
4. Ensure accessibility compliance
5. Test responsive behavior

## 📞 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
