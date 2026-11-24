import type { es } from "./es";

export const en: typeof es = {
  langName: "English",
  numberLocale: "en-IE",
  meta: {
    title: "Quoin · Understand your portfolio without handing over your data",
    description:
      "Quoin imports your broker's transactions and works out on your phone or computer what you own, what you earn and your Spanish tax bill. No account, no cloud.",
    ogAlt: "Quoin: understand your portfolio without handing over your data.",
  },
  a11y: {
    skip: "Skip to content",
    mainNav: "Main",
    footerNav: "Links",
    github: "Quoin on GitHub",
    home: "Quoin, home",
  },
  nav: {
    how: "How it works",
    privacy: "Privacy",
    download: "Download",
    faq: "FAQ",
    cta: "Download",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  language: {
    label: "Language",
  },
  desktopOnly: "On the computer · coming to the phone",
  hero: {
    titleA: "Understand your portfolio.",
    titleB: "Without handing over your data.",
    lead: "Quoin imports your broker's transactions and works out on your phone what you own, what you've earned and what you'll owe in tax. No account. Nothing uploaded anywhere.",
    primary: "Use it today on your computer",
    android: "Android app: closed beta, coming soon.",
    androidOpen: ["Android app: ", { link: "join the closed beta" }, "."],
    strip: [
      "Reads the files from ",
      { em: "Trade Republic" },
      " and ",
      { em: "Kraken" },
      ". Works out Spanish income tax under the ",
      { em: "common regime" },
      ", ",
      { em: "Canary Islands" },
      " included, and ",
      { em: "Bizkaia" },
      ". Open source, AGPL‑3.0. Every figure on this page comes from a made-up portfolio.",
    ],
    missing: [
      "Is your broker missing? ",
      { link: "Ask for it on GitHub" },
      ".",
    ],
  },
  phone: {
    label:
      "Home screen of the Quoin app with a made-up portfolio: net worth of €17,304.82, allocation by asset class and largest holdings.",
    title: "Home",
    synced: "Synced 2 min ago",
    netWorth: "Wealth",
    sinceStart: "since the start",
    alert: "Physical gold is over your limit of",
    realized: "Realized 2026",
    taxEstimate: "Estimated tax 2026",
    allocation: "Allocation",
    classes: ["Equities", "Bonds", "Commodities", "Crypto"],
    topHoldings: "Largest positions",
    seeAll: "See portfolio",
    weight: "of the portfolio",
    holdings: ["World fund", "US fund", "Physical gold"],
    tabs: ["Home", "Portfolio", "Analysis", "Settings"],
  },
  importing: {
    title: "This is what importing a Trade Republic file looks like:",
    result: [
      { n: 248 },
      " new transactions, ",
      { n: 0 },
      " repeated from last time.",
    ],
    body: [
      "You download the CSV from your broker's app and open it in Quoin. It never asks for your broker password, and the app shows you where the export button is.",
      "You can import the same file every month: what was already there is not duplicated. Crypto swaps and Kraken rewards come in at their market value, and anything you trade in dollars on Kraken is converted to euros at the ECB rate of its own day, not today's.",
    ],
  },
  tax: {
    title: "Reach tax season with the sums done.",
    body: "Gains and losses by FIFO lots, the loss that is deferred when you buy back within two months, crypto-to-crypto swaps and what you carry over from earlier years. Tap a figure to see which transactions it comes from.",
    income:
      "Savings income goes into the savings base alongside the gains: interest, dividends (with Bizkaia's €1,500 exemption) and Trade Republic's Saveback.",
    regimes:
      "Spain's common regime (Canary Islands included) and Bizkaia's own regime. Gipuzkoa, Álava and Navarre, not yet. It's an estimate to prepare your return, not tax advice.",
    year: "Tax year 2026",
    regime: "Common regime",
    sale: "Sale",
    swap: "Swap",
    deferred: "deferred, you bought back within two months",
    rows: ["US fund", "World fund", "ETH → BTC", "Atlas Software"],
    base: "Savings base",
    due: "Estimated tax",
  },
  privacy: {
    title: "Your portfolio doesn't live on anyone's server.",
    body: "If you also use Quoin on your computer, the phone syncs with it over your home Wi‑Fi: you scan a QR code once and the data travels encrypted, without going through the internet.",
    openSource:
      "And you don't have to take our word for it: the code is open, under the AGPL‑3.0 licence.",
    policy: "Privacy policy",
    items: [
      "It doesn't ask for an account, an email or a password.",
      "It doesn't upload your portfolio to any server. There is no server.",
      "It doesn't connect to your broker.",
      "It has no ads, no analytics and no crash reports.",
      "It doesn't tell you what to buy.",
    ],
  },
  desktop: {
    title: "On the computer, a little more.",
    body: "The desktop version adds returns after inflation, using Spain's official CPI (INE), and what is inside your funds: if a company weighs more than you think, it warns you.",
    chart: {
      group: "Basis",
      nominal: "Nominal",
      real: "After inflation",
      captionNominal: "Above what you put in",
      captionReal: "Above what you put in, in today's euros",
      chartNominal: "Value of a made-up portfolio against what was put in",
      chartReal:
        "Value of a made-up portfolio in today's euros against what was put in",
      legend: "Solid line: portfolio value. Dashed: what you put in.",
    },
  },
  download: {
    title: "Download",
    changelog: "What's new",
    android: {
      title: "Android",
      status: "closed beta, coming soon",
      body: "Works on its own, no computer needed. When the closed beta opens on Google Play, the link to join will be here.",
      statusOpen: "closed beta open",
      bodyOpen: [
        "Works on its own, no computer needed. ",
        { link: "Join the closed beta" },
        " on Google Play: you need a Google account and an Android phone.",
      ],
    },
    desktop: {
      title: "Computer",
      status: "free",
      body: [
        "With Docker, on your machine. Then open ",
        { code: "localhost:3000" },
        " in your browser.",
      ],
      guide: "Installation guide",
      hub: "Docker Hub",
    },
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Where do prices come from?",
        a: [
          { strong: "On the phone, without a computer:" },
          " each holding is shown at the price of your last transaction. ",
          { strong: "On the phone, with a computer:" },
          " the prices the computer downloads reach the phone when they sync. ",
          { strong: "On the computer:" },
          " Kraken for crypto and public sources for shares and ETFs.",
        ],
      },
      {
        q: "Which brokers does it support?",
        a: [
          "Trade Republic and Kraken. If yours is missing, ",
          { link: "ask for it on GitHub" },
          ".",
        ],
      },
      {
        q: "Is it any use if I don't live in Bizkaia?",
        a: [
          "Yes, if you pay tax under Spain's common regime, Canary Islands included. Gipuzkoa, Álava and Navarre, not yet.",
        ],
      },
      {
        q: "When is the app coming out?",
        a: [
          "Before it can be published, Google asks for at least 12 people to test it for 14 days in a closed beta. When it opens, the link to join will be on this page.",
        ],
        aOpen: [
          "Before it can be published, Google asks for at least 12 people to test it for 14 days in a closed beta, and it's open now: ",
          { link: "join the testers group" },
          ".",
        ],
      },
      {
        q: "How much does it cost?",
        a: [
          "The computer version is free. The app will have no ads, and we'll announce its price before launch.",
        ],
      },
    ],
  },
  beta: {
    title: "I need twelve people to test it.",
    body: "The Android closed beta is open on Google Play. You need a Google account and an Android phone.",
    join: "Join the beta",
  },
  footer: {
    madeBy: "Made in Bilbao by Aritz Martínez. Open source under AGPL‑3.0.",
    repo: "GitHub",
    changelog: "What's new",
    privacy: "Privacy",
    contact: "Contact",
    notAdvice:
      "Quoin provides information, not financial advice. Exchange rates: ECB statistics.",
    notAffiliated:
      "Quoin is an independent project. Trade Republic, Kraken and other brokers are named only to say which files it can read. Quoin is not affiliated with or endorsed by any of them.",
    trademarks: "Android and Google Play are trademarks of Google LLC.",
    short: "Quoin · Open source under AGPL‑3.0",
    home: "Home",
  },
  notFound: {
    title: "This page doesn’t exist.",
    body: "The link may be wrong, or the page may have moved.",
    cta: "Go to Quoin",
  },
  privacyPage: {
    title: "Privacy policy · Quoin",
    description:
      "What data leaves your phone with Quoin, where it goes and why: the ECB and your own computer. No account, no analytics, no cloud.",
    heading: "Privacy",
    updated: "Updated on",
    toc: "Sections",
    back: "Back to Quoin",
  },
};
