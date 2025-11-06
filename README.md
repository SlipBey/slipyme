# 🌐 Slipyme — Official Company Website

A modern, multilingual, and fully responsive corporate website for **Slipyme Company**.  
Showcasing software, design, gaming, and social responsibility projects — powered by **Next.js 16**, **TypeScript**, and **TailwindCSS**.

🔗 **Live Site:** [https://slipyme.com](https://slipyme.com)  
🧠 **Public API:** [https://api.slipyme.com](https://api.slipyme.com)  
💾 **API Repository:** [https://github.com/slipbey/slipyme-api](https://github.com/slipbey/slipyme-api)

---

## 🚀 Features

- ⚡ Built with **Next.js 16 (App Router)** and **React 19**
- 🧠 **TypeScript** + **strict ESLint/Prettier setup**
- 🎨 **TailwindCSS v4** + custom SCSS styling
- 🌓 **Dark/Light theme** via `next-themes`
- 💫 Smooth animations using **Framer Motion**
- 🌍 **Multilingual (EN/TR)** i18n system with JSON dictionaries
- 📱 Responsive “glass-ice” design (blur + gradient + ring)
- 🎥 Dynamic **YouTube** & **Instagram** stats via API
- 📨 Contact form + Newsletter integration
- 🔐 Secure API calls using `.env` key (`NEXT_PUBLIC_API_KEY`)
- 📊 Google Analytics (gtag) tracking integration

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | [Next.js 16](https://nextjs.org/docs) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [TailwindCSS](https://tailwindcss.com/) + SCSS |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| HTTP | [Axios](https://axios-http.com/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| Hosting | [Vercel](https://vercel.com/) |

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/slipbey/slipyme.git
cd slipyme
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Create a `.env` file in the project root:

```bash
NEXT_PUBLIC_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

Then open:
```
http://localhost:3000
```

---

## 🧩 Project Structure

```
src/
 ├── app/                         → App Router pages (home, about, projects, social, media, etc.)
 │   ├── layout.tsx               → Global layout
 │   ├── page.tsx                 → Homepage
 │   ├── sitemap.ts / robots.ts   → SEO config
 │   └── not-found.tsx            → 404 page
 ├── components/                  → Global UI & layout components
 │   ├── AnimatedSection.tsx
 │   ├── SectionTitle.tsx
 │   ├── Navbar.tsx / Footer.tsx
 │   └── Button.tsx, Link.tsx, Modal.tsx, etc.
 ├── features/                    → Page-specific modules (about, contact, social, projects, csr, etc.)
 ├── lib/                         → Configs, SEO helpers, i18n, axios instance
 ├── locales/                     → `tr.json`, `en.json` translation files
 ├── shared/providers/            → ThemeProvider, ToastContainer, Analytics
 └── styles/                      → Tailwind & SCSS global styles
```

---

## 📸 Preview

<p align="center">
  <img src="/public/screenshot.png" width="800" alt="Slipyme Website Screenshot">
</p>

---

## 📄 License

All rights reserved © 2025 — Slipyme Company  
Unauthorized copying, modification, or distribution is prohibited.

---

## 👨‍💻 Author

**Slipyme Company**  
Developed and maintained by **SlipBey**  
🌐 [Website](https://slip.slipyme.com) • 💼 [LinkedIn](https://slip.slipyme.com/linkedin) • 💬 [Discord](https://slip.slipyme.com/discord)
