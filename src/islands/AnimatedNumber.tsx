import { useEffect, useRef, useState } from "react";
import NumberFlow, { type Format } from "@number-flow/react";
import { useInView, useReducedMotion } from "motion/react";

interface Props {
  value: number;
  locale: string;
  format?: Format;
  className?: string;
}

export default function AnimatedNumber({
  value,
  locale,
  format,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion() ?? false;
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  const waiting = ready && !reduce && !inView;
  const shown = waiting ? 0 : value;
  const text = new Intl.NumberFormat(locale, format).format(value);

  return (
    <span
      ref={ref}
      data-countup=""
      data-ready={ready || undefined}
      className={className}
    >
      <span className="sr-only">{text}</span>
      <NumberFlow
        aria-hidden="true"
        value={shown}
        locales={locale}
        {...(format && { format })}
        animated={ready && !reduce && !waiting}
        willChange
      />
    </span>
  );
}
