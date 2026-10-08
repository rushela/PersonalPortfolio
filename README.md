# Gavindu Rushela Ekanayaka — Portfolio

> High-performance, full-stack personal portfolio and engineering showcase built for **Gavindu Rushela Ekanayaka**, Software Engineer based in Colombo, Sri Lanka.

Designed with a modern editorial Nordic aesthetic, featuring custom interactive SVG physics, type-safe full-stack routing, and an edge-first architecture.

---

## 🚀 Technologies Used

### **Core & Framework**
- **[TanStack Start](https://tanstack.com/start) (v1.168)** — Modern full-stack React framework with server-side rendering (SSR), streaming, and edge compilation.
- **[React 19](https://react.dev)** — Latest React release with concurrent features, improved server components, and modern hydration.
- **[TypeScript 5](https://www.typescriptlang.org)** — Strict type safety across client routes, server handlers, and component APIs.

### **Routing & State Management**
- **[TanStack Router](https://tanstack.com/router) (v1.170)** — 100% type-safe file-based routing with static route tree analysis, loader caching, and client navigation.
- **[TanStack React Query](https://tanstack.com/query) (v5.101)** — Powerful asynchronous state management, server cache coordination, and background synchronization.

### **Styling & Design System**
- **[Tailwind CSS v4](https://tailwindcss.com)** — Next-generation engine with `@tailwindcss/vite` for streamlined utility classes and zero-config compilation.
- **Vanilla CSS & OKLCH Color Space** — Comprehensive design token system utilizing modern `oklch()` color space for perceptually balanced Light and Dark palettes.
- **Interactive Hanging Lamp Physics** — Custom SVG pendant lamp with drag-to-pull cord elasticity, pointer capture, spring snap-back, and realistic pendulum sway keyframe animations (`lampSway`).
- **Typography** — Google Fonts typography featuring **Manrope** for editorial headlines/body and **DM Mono** for technical data and labels.

### **UI Primitives & Components**
- **[Radix UI](https://www.radix-ui.com)** — Unstyled, fully accessible headless UI components:
  - `@radix-ui/react-dialog` & `@radix-ui/react-sheet` (Mobile navigation drawer)
  - `@radix-ui/react-accordion` & `@radix-ui/react-collapsible`
  - `@radix-ui/react-dropdown-menu`, `@radix-ui/react-popover`, `@radix-ui/react-tooltip`
  - `@radix-ui/react-tabs`, `@radix-ui/react-toggle`, `@radix-ui/react-slot`
- **[Lucide React](https://lucide.dev)** — Consistent, lightweight SVG icon system.
- **[Embla Carousel](https://www.embla-carousel.com)** — Touch-friendly, fluid carousel interactions.
- **[Sonner](https://sonner.emilkowal.ski)** — Accessible, modern toast notifications.

### **Forms & Validation**
- **[React Hook Form](https://react-hook-form.com)** — Performant, subscription-based form state management.
- **[Zod](https://zod.dev)** — TypeScript-first schema declaration and validation.
- **`@hookform/resolvers`** — Validation bridge between Zod schemas and React Hook Form.

### **Build, Server & Deployment**
- **[Vite 8](https://vite.dev)** — Lightning-fast next-generation build tool with instant HMR.
- **[Nitro v3](https://nitro.build)** — Universal server engine powering SSR with presets for edge runtimes.
- **Cloudflare Module Preset** — Preconfigured for deployment to Cloudflare Pages & Cloudflare Workers with ultra-low latency edge delivery.

### **Tooling, Linting & Testing**
- **[ESLint 9](https://eslint.org)** — Flat configuration with `typescript-eslint`, React Hooks, and React Refresh rules.
- **[Prettier 3](https://prettier.io)** — Consistent code formatting.
- **[Vitest](https://vitest.dev)** & **[Testing Library](https://testing-library.com)** — Fast unit and integration testing suite.

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, CV PDF, media)
│   ├── favicon/            # Multi-format favicon package
│   └── education/          # Resume / CV download assets
├── src/
│   ├── assets/             # Bundled images & portrait media (gv.png)
│   ├── components/         # Core application components
│   │   ├── darkmode.tsx    # Interactive hanging lamp theme toggle with pull cord
│   │   ├── Education.tsx   # Education history & academic milestones
│   │   ├── Technical.tsx   # Categorized interactive technical toolkit
│   │   ├── portfolio.tsx   # Main single-page editorial portfolio layout
│   │   └── ui/             # Reusable Radix-based UI design system components
│   ├── routes/             # TanStack Router file-based route definitions
│   │   ├── __root.tsx      # Root route layout, theme script, and document shell
│   │   └── index.tsx       # Primary portfolio entry view
│   ├── styles.css          # Design system, OKLCH tokens, keyframes & responsive rules
│   └── router.tsx          # Router instantiation & configuration
├── vite.config.ts          # Vite build config with TanStack Start, Tailwind & Nitro
└── package.json            # Project dependencies & scripts
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: v20 or later
- **npm** (or **bun**)

### 1. Installation

```bash
npm install
```

### 2. Local Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:8080` (or `http://localhost:5173`) in your browser.

### 3. Build for Production

Generate optimized client assets, SSR bundles, and Nitro server outputs:

```bash
npm run build
```

The production output will be generated in `.output/`:
- `.output/public/` — Static client assets and pre-rendered HTML
- `.output/server/` — Universal SSR server bundle targeting Cloudflare Workers

### 4. Preview Production Build

Preview the generated build locally:

```bash
npm run preview
```

### 5. Code Quality & Testing

```bash
# Run linter
npm run lint

# Run code formatter
npm run format

# Run test suite
npm run test
```

---

## ✨ Key Features

- **Interactive Hanging Lamp Pull Cord**: A tactile dark/light mode toggle designed as a pendant lamp hanging beneath the header with dynamic pull tension and pendulum swinging animation.
- **Zero-Flicker Theme System**: Inline script initialization in document `<head>` ensuring seamless theme persistence across page loads without flash of unstyled content.
- **Editorial Single-Page Architecture**: Continuous storytelling with anchor-based navigation, active scroll states, and smooth responsive transitions.
- **Direct Resume Download**: Integrated resume download linking directly to Gavindu's latest CV.
- **Responsive Across All Devices**: Scaled geometries and mobile drawer menu optimized for desktop, tablet, and mobile screens.

---

## 👤 Author

**Gavindu Rushela Ekanayaka**  
- Website: [rushela.com](#)
- GitHub: [@rushela](https://github.com/rushela)
- LinkedIn: [Rushela Ekanayaka](https://www.linkedin.com/in/rushela-ekanayaka-357072345)
- Email: [gavindurushel@gmail.com](mailto:gavindurushel@gmail.com)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 2nd UI Update

![alt text](screencapture-localhost-5173-2026-10-08-11_54_49.png)

## 3rd UI Update
 
![alt text](image-2.png)