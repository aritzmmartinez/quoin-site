import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import AnimatedNumber from "./AnimatedNumber";
import { SIGNED_PCT } from "~/lib/format";

interface Props {
  locale: string;
  labels: {
    group: string;
    nominal: string;
    real: string;
    captionNominal: string;
    captionReal: string;
    chartNominal: string;
    chartReal: string;
    legend: string;
  };
}

const NOMINAL =
  "M6 199.4L15.3 199.2L24.6 194.2L33.9 194.3L43.2 190.3L52.4 190.2L61.7 185.3L71 184.4L80.3 180.6L89.6 181.4L98.9 176.1L108.2 175.5L117.5 169.3L126.7 168.1L136 163.4L145.3 163.4L154.6 155.5L163.9 155.5L173.2 151.7L182.5 152.9L191.8 147.9L201.1 147.3L210.3 142.9L219.6 142.6L228.9 137.2L238.2 135.6L247.5 128.6L256.8 127.7L266.1 126.2L275.4 124.4L284.6 122.3L293.9 122.1L303.2 120.1L312.5 119.6L321.8 116.2L331.1 115.1L340.4 102.5L349.7 102L358.9 94.6L368.2 97.4L377.5 93L386.8 90.5L396.1 85.5L405.4 83.7L414.7 78.1L424 80.3L433.3 73.2L442.5 74.9L451.8 63.7L461.1 64.4L470.4 56.7L479.7 55.7L489 46.9L498.3 48.1L507.6 38.8L516.8 38.3L526.1 27.7L535.4 24L544.7 17.8L554 20";
const REAL =
  "M6 199.4L15.3 199.2L24.6 194.3L33.9 194.4L43.2 190.6L52.4 190.5L61.7 185.7L71 184.9L80.3 181.3L89.6 182.1L98.9 177.1L108.2 176.5L117.5 170.6L126.7 169.5L136 165.1L145.3 165.3L154.6 157.8L163.9 157.9L173.2 154.5L182.5 155.7L191.8 151.1L201.1 150.7L210.3 146.7L219.6 146.6L228.9 141.7L238.2 140.3L247.5 134L256.8 133.3L266.1 132.2L275.4 130.6L284.6 128.9L293.9 128.9L303.2 127.3L312.5 127L321.8 124.1L331.1 123.4L340.4 112.1L349.7 111.9L358.9 105.4L368.2 108.2L377.5 104.5L386.8 102.5L396.1 98.3L405.4 96.9L414.7 92.2L424 94.5L433.3 88.5L442.5 90.3L451.8 80.6L461.1 81.7L470.4 75.2L479.7 74.7L489 67.2L498.3 68.7L507.6 60.9L516.8 60.8L526.1 52L535.4 49.2L544.7 44.2L554 46.5";
const CONTRIBUTED =
  "M6 199.4H52.4V188.9H98.9V178.4H145.3V167.9H191.8V157.4H238.2V146.9H284.6V136.4H331.1V125.9H377.5V115.4H424V104.9H470.4V94.4H516.8V83.9H554";

export default function ReturnChart({ locale, labels }: Props) {
  const [real, setReal] = useState(false);
  const svg = useRef<SVGSVGElement>(null);
  const inView = useInView(svg, { once: true, amount: 0.4 });
  const reduce = useReducedMotion() ?? false;
  const options = [
    [false, labels.nominal],
    [true, labels.real],
  ] as const;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-muted text-[13px]">
            {real ? labels.captionReal : labels.captionNominal}
          </span>
          <AnimatedNumber
            value={real ? 0.112 : 0.184}
            locale={locale}
            format={SIGNED_PCT}
            className="text-positive font-mono text-[40px] tracking-[-0.03em] tabular-nums"
          />
        </div>
        <div
          role="group"
          aria-label={labels.group}
          className="border-border inline-flex gap-0.5 rounded-full border p-0.75"
        >
          {options.map(([value, label]) => (
            <button
              key={label}
              type="button"
              aria-pressed={real === value}
              onClick={() => setReal(value)}
              className="text-muted hover:text-text aria-pressed:bg-accent aria-pressed:text-on-accent h-8 rounded-full px-3.5 text-[13px] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <svg
        ref={svg}
        viewBox="0 0 560 220"
        role="img"
        aria-label={real ? labels.chartReal : labels.chartNominal}
        className="block h-auto w-full"
      >
        <path
          d="M6 214H554"
          fill="none"
          strokeWidth="1"
          className="stroke-border"
        />
        <path
          d={CONTRIBUTED}
          fill="none"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          className="stroke-muted"
        />
        <motion.path
          initial={false}
          animate={{
            d: real ? REAL : NOMINAL,
            pathLength: reduce || inView ? 1 : 0,
          }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  d: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] },
                  pathLength: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
                }
          }
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="stroke-accent"
        />
      </svg>
      <p className="text-muted m-0 text-[13px]">{labels.legend}</p>
    </div>
  );
}
