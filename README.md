# 🌐 Slipyme — Official Company Website

Modern, multilingual and fully responsive company website for **Slipyme Company**.
Built with **Next.js 16**, **React 19**, **TypeScript**, and **TailwindCSS v4** using a modular feature-based architecture and the custom **glass-ice** design system.

🔗 **Live Site:** [https://slipyme.com](https://slipyme.com)  
🧠 **Public API:** [https://api.slipyme.com](https://api.slipyme.com)  
💾 **API Repository:** [https://github.com/slipbey/slipyme-api](https://github.com/slipbey/slipyme-api)

---

# 🚀 Features

- ⚡ Next.js 16 App Router architecture
- 🧠 TypeScript strict mode
- 🎨 TailwindCSS v4 + SCSS styling
- 🌓 Dark / Light theme support
- 💫 Framer Motion powered animations
- 🌍 Multilingual structure (TR / EN)
- 📱 Fully responsive layout system
- 🧊 Custom “glass-ice” UI design
- 🎥 Dynamic social & media integrations
- 📊 SEO optimized routing and metadata
- 📨 Contact & newsletter infrastructure
- 🔐 API key based secure API requests
- 📈 Analytics integration
- 🧩 Modular feature-based project structure

---

# 🎨 UI / Design System

The project uses a custom visual system called **glass-ice**.

Core design principles:

- Soft glass surfaces
- Blur overlays
- Gradient lighting
- Smooth transitions
- Motion-based interactions
- Sky / cyan glow effects
- Minimal dark backgrounds
- Responsive spacing system

---

# 💫 Animation System

Animations are powered by **Framer Motion**.

Used systems include:

- AnimatedSection
- Stagger animations
- Scroll reveal effects
- Hover transitions
- Floating hero effects
- Segmented tab animations
- Skeleton loading states

---

# 🌍 Internationalization

Dictionary-based i18n system:

```ts
parser.get("home.hero.title");
```

Supported languages:

- Turkish
- English

Translation files:

```bash
src/locales/tr.ts
src/locales/en.ts
```

---

# 📱 Social & Media Integrations

Dynamic API powered sections:

- YouTube
- Instagram
- Discord
- GitHub
- LinkedIn

Includes:

- Dynamic counters
- Feed systems
- Skeleton loading
- Responsive cards
- Animated transitions

---

# 🛠️ Tech Stack

| Layer         | Technology            |
| ------------- | --------------------- |
| Framework     | Next.js 16            |
| Language      | TypeScript            |
| Styling       | TailwindCSS v4 + SCSS |
| Animation     | Framer Motion         |
| Icons         | React Icons           |
| Theme         | next-themes           |
| HTTP          | Axios                 |
| Notifications | React Toastify        |
| Hosting       | Vercel                |

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/slipbey/slipyme.git
cd slipyme
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
SLIPYME_API_TOKEN=your_api_key_here
SLIPYME_API_BASE_URL=https://api.slipyme.com
```

Run development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🧩 Project Structure

```bash
src/
 ├── app/
 │   ├── layout.tsx
 │   ├── page.tsx
 │   ├── sitemap.ts
 │   ├── robots.ts
 │   └── not-found.tsx
 │
 ├── components/
 │   ├── Navbar.tsx
 │   ├── Footer.tsx
 │   ├── AnimatedSection.tsx
 │   ├── SectionTitle.tsx
 │   └── shared UI components
 │
 ├── features/
 │   ├── about/
 │   ├── projects/
 │   ├── social/
 │   ├── media/
 │   ├── csr/
 │   ├── contact/
 │   └── music/
 │
 ├── locales/
 │   ├── tr.ts
 │   └── en.ts
 │
 ├── lib/
 │   ├── i18n/
 │   ├── seo/
 │   ├── animations/
 │   └── api/
 │
 ├── shared/
 │   └── providers/
 │
 └── styles/
```

---

# 🧠 Architecture Notes

- Feature-based frontend structure
- Reusable animated section system
- Shared theme provider architecture
- Dynamic metadata & SEO helpers
- Responsive-first UI approach
- Modular API integration system
- Reusable glass component structure

---

## 📸 Preview

<p align="center">
  <img src="/public/screenshot.png" width="800" alt="Slipyme Website Screenshot">
</p>

---

## 📄 License

All rights reserved © 2026 — Slipyme Company  
Unauthorized copying, modification, or distribution is prohibited.

---

## 👨‍💻 Author

**Slipyme Company**  
Developed and maintained by **SlipBey**  
🌐 [Website](https://slip.slipyme.com) • 💼 [LinkedIn](https://slip.slipyme.com/linkedin) • 💬 [Discord](https://slip.slipyme.com/discord)
