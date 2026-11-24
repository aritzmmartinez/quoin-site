export type Theme = "light" | "dark";

export const THEME_KEY = "quoin-theme";

export function savePreference(theme: Theme): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage can be blocked; the choice then lasts until the page closes.
  }
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export const THEME_SCRIPT = `(function(){var k="${THEME_KEY}",m=matchMedia("(prefers-color-scheme: light)");function a(){var p;try{p=localStorage.getItem(k)}catch(e){}var l=p==="light"||(p!=="dark"&&m.matches),c=document.documentElement.classList;c.toggle("light",l);c.toggle("dark",!l)}document.documentElement.classList.add("js");a();m.addEventListener("change",a)})()`;
