import { useEffect, useId, useRef, useState } from "react";

interface Props {
  label: string;
  current: string;
  options: { code: string; name: string; href: string }[];
}

export default function LanguageMenu({ label, current, options }: Props) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const currentName = options.find((o) => o.code === current)?.name ?? current;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={root} className="relative self-start">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="border-border text-body inline-flex min-h-9 items-center gap-2 rounded-full border px-3 text-sm"
      >
        <span className="sr-only">{label}: </span>
        <span>{currentName}</span>
        <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M4 10l4-4 4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul
        id={listId}
        hidden={!open}
        className="border-border bg-surface absolute bottom-[calc(100%+8px)] left-0 m-0 flex min-w-50 list-none flex-col gap-0.5 rounded-2xl border p-1.5 shadow-[0_12px_32px_var(--color-shadow)]"
      >
        {options.map((o) => (
          <li key={o.code}>
            <a
              href={o.href}
              hrefLang={o.code}
              lang={o.code}
              aria-current={o.code === current ? "page" : undefined}
              className="text-body hover:bg-surface-2 hover:text-text flex min-h-10 items-center justify-between gap-3 rounded-full px-3 text-sm no-underline"
            >
              {o.name}
              {o.code === current && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5l3 3 7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
