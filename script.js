const STORAGE_KEY = "jorge-portfolio-theme";

function applyTheme(theme) {
  if (!["light", "dark"].includes(theme)) return;
  document.body.setAttribute("data-theme", theme);
}

function getPreferredTheme() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme") || getPreferredTheme();
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  window.localStorage.setItem(STORAGE_KEY, next);

  const icon = document.getElementById("themeToggle")?.querySelector(".theme-toggle__icon");
  if (icon) icon.textContent = next === "dark" ? "🌙" : "☀️";
}

window.addEventListener("DOMContentLoaded", () => {
  const initial = getPreferredTheme();
  applyTheme(initial);

  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);

    const icon = toggleBtn.querySelector(".theme-toggle__icon");
    if (icon) icon.textContent = initial === "dark" ? "🌙" : "☀️";
  }
});

