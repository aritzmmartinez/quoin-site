import { readFileSync, writeFileSync } from "node:fs";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { es } from "../src/i18n/es.ts";
import { en } from "../src/i18n/en.ts";

const font = (weight: 400 | 600) =>
  readFileSync(
    `node_modules/@fontsource/geist/files/geist-latin-${weight}-normal.woff`,
  );
const fonts = [
  { name: "Geist", data: font(400), weight: 400 as const },
  { name: "Geist", data: font(600), weight: 600 as const },
];

const BG = "#0a0a0b";
const TEXT = "#ffffff";
const MUTED = "#8b8b93";
const ACCENT = "#f2f2f4";

const h = (type: string, style: object, children?: unknown) => ({
  type,
  props: { style, children },
});

for (const [locale, t] of [
  ["es", es],
  ["en", en],
] as const) {
  const logo = {
    type: "svg",
    props: {
      width: 56,
      height: 56,
      viewBox: "0 0 32 32",
      children: [
        { type: "rect", props: { width: 32, height: 32, rx: 9, fill: ACCENT } },
        {
          type: "rect",
          props: {
            x: 9.25,
            y: 9.25,
            width: 13.5,
            height: 13.5,
            rx: 2.75,
            fill: "none",
            stroke: BG,
            "stroke-width": 2.5,
          },
        },
        {
          type: "rect",
          props: { x: 17, y: 17, width: 10, height: 10, fill: ACCENT },
        },
      ],
    },
  };

  const tree = h(
    "div",
    {
      width: 1200,
      height: 630,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "72px 80px",
      background: BG,
      fontFamily: "Geist",
    },
    [
      h("div", { display: "flex", alignItems: "center", gap: 20 }, [
        logo,
        h("span", { fontSize: 40, fontWeight: 600, color: TEXT }, "Quoin"),
      ]),
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          fontSize: 72,
          maxWidth: 1040,
          marginTop: 270,
          fontWeight: 600,
          lineHeight: "1.05",
          letterSpacing: "-0.045em",
        },
        [
          h("div", { display: "flex", color: TEXT }, t.hero.titleA),
          h("div", { display: "flex", color: MUTED }, t.hero.titleB),
        ],
      ),
    ],
  );

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg).render().asPng();
  writeFileSync(`public/og/${locale}.png`, png);
  console.log(`public/og/${locale}.png`);
}
