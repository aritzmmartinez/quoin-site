export const es = {
  langName: "Español",
  numberLocale: "es-ES",
  meta: {
    title: "Quoin · Entiende tu cartera sin entregar tus datos",
    description:
      "Quoin importa los movimientos de tu broker y calcula en tu móvil o tu ordenador lo que tienes, lo que ganas y lo que pagarás a Hacienda. Sin cuenta y sin nube.",
    ogAlt: "Quoin: entiende tu cartera sin entregar tus datos.",
  },
  a11y: {
    skip: "Saltar al contenido",
    mainNav: "Principal",
    footerNav: "Enlaces",
    github: "Quoin en GitHub",
    home: "Quoin, inicio",
  },
  nav: {
    how: "Cómo funciona",
    privacy: "Privacidad",
    download: "Descarga",
    faq: "Preguntas",
    cta: "Descargar",
  },
  theme: {
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
  },
  language: {
    label: "Idioma",
  },
  desktopOnly: "En el ordenador · llegará al móvil",
  hero: {
    titleA: "Entiende tu cartera.",
    titleB: "Sin entregar tus datos.",
    lead: "Quoin importa los movimientos de tu broker y calcula en tu móvil lo que tienes, lo que has ganado y lo que pagarás a Hacienda. Sin cuenta. Sin subir nada a ningún sitio.",
    primary: "Úsalo hoy en tu ordenador",
    android: "App de Android: beta cerrada, próximamente.",
    androidOpen: ["App de Android: ", { link: "únete a la beta cerrada" }, "."],
    strip: [
      "Lee los ficheros de ",
      { em: "Trade Republic" },
      " y ",
      { em: "Kraken" },
      ". Calcula el IRPF del ",
      { em: "régimen común" },
      ", ",
      { em: "Canarias" },
      " incluida, y de ",
      { em: "Bizkaia" },
      ". Código abierto, AGPL‑3.0. Las cifras de esta página son de una cartera inventada.",
    ],
    missing: ["¿Falta tu broker? ", { link: "Pídelo en GitHub" }, "."],
  },
  phone: {
    label:
      "Pantalla de inicio de la app de Quoin con una cartera inventada: patrimonio de 17.304,82 €, distribución por tipo de activo y mayores posiciones.",
    title: "Inicio",
    synced: "Sincronizado hace 2 min",
    netWorth: "Patrimonio",
    sinceStart: "desde el inicio",
    alert: "Oro físico supera tu límite del",
    realized: "Realizado 2026",
    taxEstimate: "Impuesto estimado 2026",
    allocation: "Distribución",
    classes: ["Renta variable", "Bonos", "Materias primas", "Cripto"],
    topHoldings: "Mayores posiciones",
    seeAll: "Ver cartera",
    weight: "de la cartera",
    holdings: ["Fondo mundial", "Fondo EE. UU.", "Oro físico"],
    tabs: ["Inicio", "Cartera", "Análisis", "Ajustes"],
  },
  importing: {
    title: "Así se ve importar un fichero de Trade Republic:",
    result: [
      { n: 248 },
      " operaciones nuevas, ",
      { n: 0 },
      " repetidas de la vez anterior.",
    ],
    body: [
      "Descargas el CSV desde la app de tu broker y lo abres en Quoin. Nunca te pide la contraseña del broker, y la app te enseña dónde está el botón de exportar.",
      "Puedes importar el mismo fichero cada mes: lo que ya estaba no se duplica. Las permutas entre criptos y las recompensas de Kraken entran con su valor de mercado, y lo que operes en dólares en Kraken pasa a euros con el tipo del BCE de su día, no con el de hoy.",
    ],
  },
  tax: {
    title: "Llegas a la renta con las cuentas hechas.",
    body: "Ganancias y pérdidas por lotes FIFO, la pérdida que se aplaza cuando recompras en dos meses, las permutas entre criptos y lo que arrastras de otros años. Toca una cifra y ves de qué operaciones sale.",
    income:
      "En la base del ahorro, junto a las ganancias, entran también los rendimientos: intereses, dividendos (con la exención de 1.500 € en Bizkaia) y el saveback de Trade Republic.",
    regimes:
      "Régimen común (Canarias incluida) y foral de Bizkaia. Gipuzkoa, Álava y Navarra, todavía no. Es una estimación para preparar la declaración, no asesoramiento fiscal.",
    year: "Ejercicio 2026",
    regime: "Régimen común",
    sale: "Venta",
    swap: "Permuta",
    deferred: "aplazada, recompraste en dos meses",
    rows: ["Fondo EE. UU.", "Fondo mundial", "ETH → BTC", "Atlas Software"],
    base: "Base del ahorro",
    due: "Cuota estimada",
  },
  privacy: {
    title: "Tu cartera no vive en el servidor de nadie.",
    body: "Si usas Quoin también en el ordenador, el móvil se sincroniza con él por el Wi‑Fi de casa: escaneas un QR una vez y los datos viajan cifrados, sin pasar por internet.",
    openSource:
      "Y no tienes que creerlo: el código es abierto, bajo licencia AGPL‑3.0.",
    policy: "Política de privacidad",
    items: [
      "No te pide cuenta, correo ni contraseña.",
      "No sube tu cartera a ningún servidor. No hay servidor.",
      "No se conecta a tu broker.",
      "No lleva anuncios, analítica ni informes de errores.",
      "No te dice qué comprar.",
    ],
  },
  desktop: {
    title: "En el ordenador, un poco más.",
    body: "La versión de escritorio añade la rentabilidad descontando la inflación con el IPC del INE y lo que hay dentro de tus fondos: si una empresa pesa más de lo que crees, te avisa.",
    chart: {
      group: "Base de cálculo",
      nominal: "Nominal",
      real: "Descontando el IPC",
      captionNominal: "Por encima de lo aportado",
      captionReal: "Por encima de lo aportado, en euros de hoy",
      chartNominal: "Valor de una cartera inventada frente a lo aportado",
      chartReal:
        "Valor de una cartera inventada en euros de hoy frente a lo aportado",
      legend:
        "Línea continua: valor de la cartera. Discontinua: lo que has aportado.",
    },
  },
  download: {
    title: "Descarga",
    changelog: "Novedades",
    android: {
      title: "Android",
      status: "beta cerrada, próximamente",
      body: "Funciona sola, sin ordenador. Cuando abra la beta cerrada en Google Play, aquí tendrás el enlace para unirte.",
      statusOpen: "beta cerrada abierta",
      bodyOpen: [
        "Funciona sola, sin ordenador. ",
        { link: "Únete a la beta cerrada" },
        " en Google Play: necesitas una cuenta de Google y un móvil Android.",
      ],
    },
    desktop: {
      title: "Ordenador",
      status: "gratis",
      body: [
        "Con Docker, en tu equipo. Luego abres ",
        { code: "localhost:3000" },
        " en el navegador.",
      ],
      guide: "Guía de instalación",
      hub: "Docker Hub",
    },
  },
  faq: {
    title: "Preguntas",
    items: [
      {
        q: "¿De dónde salen los precios?",
        a: [
          { strong: "En el móvil, sin ordenador:" },
          " cada valor se muestra al precio de tu última operación. ",
          { strong: "En el móvil, con ordenador:" },
          " los precios que descarga el ordenador llegan al móvil al sincronizar. ",
          { strong: "En el ordenador:" },
          " Kraken para las criptomonedas y fuentes públicas para las acciones y los ETF.",
        ],
      },
      {
        q: "¿Qué brokers admite?",
        a: [
          "Trade Republic y Kraken. Si falta el tuyo, ",
          { link: "pídelo en GitHub" },
          ".",
        ],
      },
      {
        q: "¿Sirve si no vivo en Bizkaia?",
        a: [
          "Sí, si tributas en régimen común, también en Canarias. Gipuzkoa, Álava y Navarra, todavía no.",
        ],
      },
      {
        q: "¿Cuándo sale la app?",
        a: [
          "Antes de publicarla, Google pide que al menos 12 personas la prueben durante 14 días en una beta cerrada. Cuando abra, el enlace para unirte estará en esta página.",
        ],
        aOpen: [
          "Antes de publicarla, Google pide que al menos 12 personas la prueben durante 14 días en una beta cerrada, y ya está abierta: ",
          { link: "únete al grupo de testers" },
          ".",
        ],
      },
      {
        q: "¿Cuánto cuesta?",
        a: [
          "La versión de ordenador es gratuita. La app no tendrá anuncios, y su precio lo diremos antes del lanzamiento.",
        ],
      },
    ],
  },
  beta: {
    title: "Necesito doce personas que la prueben.",
    body: "La beta cerrada de Android está abierta en Google Play. Necesitas una cuenta de Google y un móvil Android.",
    join: "Unirme a la beta",
  },
  footer: {
    madeBy: "Hecho en Bilbao por Aritz Martínez. Código abierto bajo AGPL‑3.0.",
    repo: "GitHub",
    changelog: "Novedades",
    privacy: "Privacidad",
    contact: "Contacto",
    notAdvice:
      "Quoin ofrece información, no asesoramiento financiero. Tipos de cambio: estadísticas del BCE.",
    notAffiliated:
      "Quoin es un proyecto independiente. Trade Republic, Kraken y los demás brokers se nombran solo para indicar con qué ficheros es compatible. Quoin no está afiliado a ninguno ni cuenta con su respaldo.",
    trademarks: "Android y Google Play son marcas de Google LLC.",
    short: "Quoin · Código abierto bajo AGPL‑3.0",
    home: "Inicio",
  },
  notFound: {
    title: "Esta página no existe.",
    body: "Puede que el enlace esté mal o que la página se haya movido.",
    cta: "Ir a Quoin",
  },
  privacyPage: {
    title: "Política de privacidad · Quoin",
    description:
      "Qué datos salen del móvil con Quoin, a dónde y por qué: el BCE y tu propio ordenador. Sin cuenta, sin analítica y sin nube.",
    heading: "Privacidad",
    updated: "Actualizada el",
    toc: "Secciones",
    back: "Volver a Quoin",
  },
};
