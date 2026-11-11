"use client";
import { useSyncExternalStore } from "react";

// The light/dark switch in the header.
//
// How it fits together:
// - The theme lives on <html> as data-theme="light" (no attribute = dark).
//   The colours for both themes are in app/globals.css.
// - The choice is saved in the browser under the key "theme". A small
//   script in app/layout.tsx reads it before the page is painted, so a
//   visitor who chose light never sees a dark flash.
// - A visitor who has not chosen gets the theme their device is set to.
//   That same script decides it when the page loads.

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "themechange";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function showTheme(theme: Theme) {
  const root = document.documentElement;
  // Switch off colour fades for a moment so the page changes in one go.
  root.dataset.themeSwitching = "";
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  window.dispatchEvent(new Event(CHANGE_EVENT));
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      delete root.dataset.themeSwitching;
    })
  );
}

function chooseTheme(theme: Theme) {
  showTheme(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private windows can refuse storage. The theme still changes for
    // this visit; it is just not remembered.
  }
}

function subscribe(onChange: () => void) {
  // Another tab of this site changed the theme: follow it.
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return;
    showTheme(e.newValue === "light" ? "light" : "dark");
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export default function ThemeToggle() {
  // On the server the theme is unknown, so the button is rendered for dark
  // and corrects itself in the browser. The icons do not wait for that:
  // CSS picks the right one from data-theme on <html>.
  const theme = useSyncExternalStore<Theme>(subscribe, readTheme, () => "dark");
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} theme`;

  return (
    <button
      type="button"
      onClick={() => chooseTheme(next)}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
    >
      <svg className="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
      </svg>
    </button>
  );
}
