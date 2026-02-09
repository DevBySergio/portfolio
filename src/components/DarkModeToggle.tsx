import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Detect initial theme
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;

    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="
        text-sm
        px-3 py-2
        rounded
        border
        border-(--color-text-muted)
        hover:border-(--color-brand)
        transition
      "
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
