import { useEffect, useState, type ReactNode } from "react";

export default function FloatingNav({ children }: { children?: ReactNode }) {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const update = () => setFloating(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      data-floating={floating}
      className="data-[floating=true]:border-nav-border data-[floating=true]:bg-nav-bg mx-auto max-w-300 rounded-full border border-transparent transition-[max-width,background-color,border-color] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] data-[floating=true]:max-w-260 data-[floating=true]:backdrop-blur-[14px]"
    >
      {children}
    </div>
  );
}
