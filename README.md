# 🚀 DevBySergio – Portfolio

Welcome to my personal portfolio repository.

> **Status:** 🟢 Work in Progress | **Live Demo:** [devbysergio.com](https://devbysergio.com)

---

## 👨‍💻 About Me

I am a **Full-Stack Software Developer** focused on building scalable web applications and developer tools. My approach centers on deeply understanding the core problem before choosing the tech stack, always prioritizing maintainability and long-term impact.

- 🛠️ Specialized in the **TypeScript** ecosystem.
- 📦 Creator of productivity-focused **VS Code extensions**.
- 🎨 Passionate about designing clean, purposeful, and functional interfaces.

---

## 🛠️ Tech Stack

This project leverages a modern stack optimized for static content delivery and selective reactivity:

### Core Framework & Build Tools

- **[Astro](https://astro.build/):** Used as the primary engine to generate an extremely fast static site, utilizing an "Islands Architecture" to minimize client-side JavaScript.
- **TypeScript:** Strict typing throughout the project to ensure robust code and easy refactoring.

### Styling & UI

- **Tailwind CSS:** A utility-first framework for a responsive and consistent design system.
- **CSS Variables:** Dynamic theme management (Dark/Light Mode) via custom design tokens.
- **Framer Motion / Tailwind Animate:** Powering smooth micro-interactions and element entry transitions.

### Frontend React (Islands)

- **React.js:** Reserved for components with complex state, such as the extensions carousel, theme toggle, and interactive modals.

---

## 🌟 Key Features

### 🌗 Smart Dark Mode

Implementation of a persistent theme system using `localStorage`, featuring an **anti-flicker script** injected into the `head` to prevent "white flashes" during page loads on slower connections.

### ♿ Accessibility (a11y)

- Full keyboard navigation support via `focus-visible` and skip links ("Skip to content").
- Semantic ARIA labels to provide context for screen readers.
- Color contrast ratios validated against WCAG AA standards.

### 📈 Senior-Level SEO

- **JSON-LD:** Integrated structured data to help search engines accurately identify the site as a professional profile.
- **Dynamic Meta Tags:** Open Graph and Twitter Cards configured for a premium social media presence.

---

## 📁 Project Structure

```text
src/
├── components/      # React Components (Islands)
├── layouts/         # BaseLayout templates with integrated SEO
├── pages/           # Routes (Astro scripts)
│   ├── links.astro  # Custom LinkTree-style page
│   └── ...
└── styles/          # Global CSS and Design Tokens configuration
```
