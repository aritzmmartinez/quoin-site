import { useEffect, useState } from "react";
import { savePreference } from "~/lib/theme";

interface Props {
  labels: { toLight: string; toDark: string };
}

export default function ThemeToggle({ labels }: Props) {
  const [light, setLight] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setLight(root.classList.contains("light"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const label = light ? labels.toDark : labels.toLight;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => savePreference(light ? "dark" : "light")}
      className="text-muted hover:text-text inline-flex size-10 items-center justify-center rounded-full transition-colors"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {light ? (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        ) : (
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
        )}
      </svg>
    </button>
  );
}
