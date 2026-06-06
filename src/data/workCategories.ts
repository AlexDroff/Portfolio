import type { WorkCategory, WorkItem } from "@/types/portfolio";

const formatNumber = (value: number) => value.toString().padStart(2, "0");

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const createItems = (
  ids: number[],
  buildSrc: (index: number) => string,
  buildText: (index: number) => { alt: string; caption: string },
  tags: string[],
  idPrefix: string,
  featuredIndex?: number,
): WorkItem[] =>
  ids.map((index) => {
    const text = buildText(index);

    return {
      id: `${idPrefix}-${formatNumber(index)}`,
      src: buildSrc(index),
      alt: text.alt,
      caption: text.caption,
      tags,
      featured: featuredIndex === index ? true : undefined,
    };
  });

const bookletFiles = [
  "booklets_01-1.webp",
  "booklets_01-2.webp",
  "booklets_02-1.webp",
  "booklets_02-2.webp",
  "booklets_03-1.webp",
  "booklets_03-2.webp",
  "booklets_04-1.webp",
  "booklets_04-2.webp",
  "booklets_05-1.webp",
  "booklets_05-2.webp",
  "booklets_06.webp",
  "booklets_07-1.webp",
  "booklets_07-2.webp",
  "booklets_08-1.webp",
  "booklets_08-2.webp",
  "booklets-09_1.webp",
  "booklets-09_2.webp",
  "booklets-09_3.webp",
  "booklets-09_4.webp",
  "booklets-09_5.webp",
  "booklets-09_6.webp",
  "booklets-10_1.webp",
  "booklets-10_2.webp",
  "booklets-11_1.webp",
  "booklets-11_2.webp",
];

const standardPosterItems = createItems(
  range(1, 10),
  (index) => `/work/posters/standard/posters-standard_${formatNumber(index)}.webp`,
  (index) => ({
    alt: `Plakat standardowy - projekt ${index}`,
    caption: `Plakat do druku, wariant ${index}`,
  }),
  ["plakat", "druk", "kompozycja"],
  "poster-standard",
  1,
);

const aiPosterItems = [
  ...createItems(
    range(1, 12),
    (index) => `/work/posters/ai-generated/ai-landscape/poster-land_${formatNumber(index)}.webp`,
    (index) => ({
      alt: `AI artwork - poster poziomy ${index}`,
      caption: `AI / digital artwork, format poziomy ${index}`,
    }),
    ["AI artwork", "digital artwork", "poster"],
    "ai-poster-landscape",
    1,
  ),
  ...createItems(
    range(1, 41),
    (index) => `/work/posters/ai-generated/ai-portrait/poster-port_${formatNumber(index)}.webp`,
    (index) => ({
      alt: `AI artwork - poster pionowy ${index}`,
      caption: `AI / digital artwork, format pionowy ${index}`,
    }),
    ["AI artwork", "digital artwork", "poster"],
    "ai-poster-portrait",
  ),
  ...createItems(
    range(1, 10),
    (index) => `/work/posters/ai-generated/ai-squared/poster-square_${formatNumber(index)}.webp`,
    (index) => ({
      alt: `AI artwork - poster kwadratowy ${index}`,
      caption: `AI / digital artwork, format kwadratowy ${index}`,
    }),
    ["AI artwork", "digital artwork", "poster"],
    "ai-poster-square",
  ),
];

export const workCategories: WorkCategory[] = [
  {
    slug: "wizytowki-i-materialy-firmowe",
    title: "Wizytówki i materiały firmowe",
    shortDescription: "Projekty małych formatów firmowych przygotowane do druku.",
    longDescription:
      "Wizytówki i materiały identyfikacyjne z naciskiem na czytelność, kompozycję i przygotowanie produkcyjne.",
    coverImage: "/work/category-covers/dt-cover-business-cards.webp",
    coverAlt: "Techniczna ilustracja wizytówek",
    status: "published",
    tags: ["wizytówki", "materiały firmowe", "druk"],
    items: createItems(
      range(1, 14),
      (index) => `/work/business-cards/business-cards_${formatNumber(index)}.webp`,
      (index) => ({
        alt: `Wizytówka firmowa - projekt ${index}`,
        caption: `Wizytówka firmowa, wariant ${index}`,
      }),
      ["wizytówka", "materiał firmowy", "druk"],
      "business-card",
      1,
    ),
  },
  {
    slug: "ulotki-foldery-broszury",
    title: "Ulotki, foldery i broszury",
    shortDescription: "Foldery reklamowe i broszury w układach do druku.",
    longDescription:
      "Materiały reklamowe wielostronicowe i składane, przygotowane jako czytelne nośniki informacji.",
    coverImage: "/work/category-covers/dt-cover-booklets.webp",
    coverAlt: "Techniczna ilustracja ulotek i broszur",
    status: "published",
    tags: ["foldery", "broszury", "reklama"],
    items: bookletFiles.map((fileName, index) => ({
      id: `booklet-${index + 1}`,
      src: `/work/booklets/${fileName}`,
      alt: `Folder lub broszura reklamowa - projekt ${index + 1}`,
      caption: `Folder lub broszura, układ ${index + 1}`,
      tags: ["folder", "broszura", "druk"],
      featured: index === 0 ? true : undefined,
    })),
  },
  {
    slug: "katalogi",
    title: "Katalogi",
    shortDescription: "Katalogi produktowe podzielone według projektu.",
    longDescription:
      "Wybierz katalog, aby zobaczyć osobną galerię składu i układu publikacji.",
    coverImage: "/work/category-covers/dt-cover-catalogs.webp",
    coverAlt: "Techniczna ilustracja katalogu",
    status: "published",
    tags: ["katalogi", "publikacje", "DTP"],
    items: [],
    subcategories: [
      {
        slug: "arles",
        title: "Arles",
        shortDescription: "Skład katalogu produktowego z układem stron przygotowanym do druku.",
        coverImage: "/work/catalogs/arles/arles_01.webp",
        coverAlt: "Katalog Arles - okładka",
        tags: ["katalog", "skład", "DTP"],
        items: createItems(
          range(1, 40),
          (index) => `/work/catalogs/arles/arles_${formatNumber(index)}.webp`,
          (index) => ({
            alt: `Katalog Arles - strona ${index}`,
            caption: `Katalog Arles, strona ${index}`,
          }),
          ["katalog", "skład", "DTP"],
          "arles",
          1,
        ),
      },
      {
        slug: "euro-stand",
        title: "Euro-Stand",
        shortDescription: "Galeria katalogu produktowego pokazująca układ stron i prezentację oferty.",
        coverImage: "/work/catalogs/euro-stand/euro-stand_01.webp",
        coverAlt: "Katalog Euro-Stand - okładka",
        tags: ["katalog", "publikacja", "DTP"],
        items: createItems(
          range(1, 16),
          (index) => `/work/catalogs/euro-stand/euro-stand_${formatNumber(index)}.webp`,
          (index) => ({
            alt: `Katalog Euro-Stand - strona ${index}`,
            caption: `Katalog Euro-Stand, strona ${index}`,
          }),
          ["katalog", "publikacja", "DTP"],
          "euro-stand",
          1,
        ),
      },
      {
        slug: "herbapol",
        title: "Herbapol",
        shortDescription: "Projekt katalogu produktowego z czytelnym układem materiałów ofertowych.",
        coverImage: "/work/catalogs/herbapol/herbapol_01.webp",
        coverAlt: "Katalog Herbapol - okładka",
        tags: ["katalog", "materiały produktowe", "DTP"],
        items: createItems(
          range(1, 6),
          (index) => `/work/catalogs/herbapol/herbapol_${formatNumber(index)}.webp`,
          (index) => ({
            alt: `Katalog Herbapol - strona ${index}`,
            caption: `Katalog Herbapol, strona ${index}`,
          }),
          ["katalog", "materiały produktowe", "DTP"],
          "herbapol",
          1,
        ),
      },
      {
        slug: "zoloty-vek",
        title: "Złoty Wiek",
        shortDescription: "Skład katalogu z naciskiem na przejrzystą prezentację stron i produktów.",
        coverImage: "/work/catalogs/zoloty-vek/zoloty-vek_01.webp",
        coverAlt: "Katalog Złoty Wiek - okładka",
        tags: ["katalog", "publikacja", "DTP"],
        items: createItems(
          range(1, 20),
          (index) => `/work/catalogs/zoloty-vek/zoloty-vek_${formatNumber(index)}.webp`,
          (index) => ({
            alt: `Katalog Złoty Wiek - strona ${index}`,
            caption: `Katalog Złoty Wiek, strona ${index}`,
          }),
          ["katalog", "publikacja", "DTP"],
          "zoloty-vek",
          1,
        ),
      },
    ],
  },
  {
    slug: "okladki-ksiazek",
    title: "Okładki książek",
    shortDescription: "Projekty okładek książek przygotowane do publikacji i druku.",
    longDescription:
      "Osobna galeria projektów okładek z naciskiem na kompozycję, typografię i przygotowanie produkcyjne.",
    coverImage: "/work/category-covers/dt-cover-book-covers.webp",
    coverAlt: "Techniczna ilustracja okładek książek",
    status: "published",
    tags: ["okładki", "książki", "druk"],
    items: createItems(
      range(1, 22),
      (index) => `/work/book-covers/book-covers_${formatNumber(index)}.webp`,
      (index) => ({
        alt: `Projekt okładki książki - ${index}`,
        caption: `Okładka książki, wariant ${index}`,
      }),
      ["okładka", "książka", "druk"],
      "book-cover",
      1,
    ),
  },
  {
    slug: "plakaty-i-postery",
    title: "Plakaty i postery",
    shortDescription: "Plakaty drukowane oraz osobno oznaczone prace AI / digital artwork.",
    longDescription:
      "Wybierz typ posterów, aby zobaczyć standardowe prace drukowane albo osobną galerię AI / digital artwork.",
    coverImage: "/work/category-covers/dt-cover-posters.webp",
    coverAlt: "Techniczna ilustracja plakatów",
    status: "published",
    tags: ["plakaty", "postery", "AI artwork"],
    items: [],
    subcategories: [
      {
        slug: "standard",
        title: "Postery standardowe",
        shortDescription: "Plakaty i postery przygotowane jako projekty do druku.",
        coverImage: "/work/posters/standard/posters-standard_01.webp",
        coverAlt: "Poster standardowy - projekt do druku",
        tags: ["plakat", "druk", "kompozycja"],
        items: standardPosterItems,
      },
      {
        slug: "ai-generated",
        title: "Postery AI",
        shortDescription: "Prace AI / digital artwork pokazane jako osobna galeria.",
        coverImage: "/work/posters/ai-generated/ai-landscape/poster-land_01.webp",
        coverAlt: "AI artwork - poster poziomy",
        tags: ["AI artwork", "digital artwork", "poster"],
        items: aiPosterItems,
      },
    ],
  },
  {
    slug: "banery-rollupy-druk-wielkoformatowy",
    title: "Banery, roll-upy i druk wielkoformatowy",
    shortDescription: "Banery i roll-upy przygotowane do druku wielkoformatowego.",
    longDescription:
      "Materiały wielkoformatowe z naciskiem na czytelność, skalę i przygotowanie produkcyjne.",
    coverImage: "/work/category-covers/dt-cover-banners-rollups.webp",
    coverAlt: "Techniczna ilustracja banerów i roll-upów",
    status: "published",
    tags: ["banery", "roll-up", "druk wielkoformatowy"],
    items: [
      ...createItems(
        range(1, 4),
        (index) => `/work/banners-rollups/banner_${formatNumber(index)}.webp`,
        (index) => ({
          alt: `Baner reklamowy - projekt ${index}`,
          caption: `Baner reklamowy, wariant ${index}`,
        }),
        ["baner", "druk wielkoformatowy", "reklama"],
        "banner",
        1,
      ),
      ...createItems(
        range(1, 2),
        (index) => `/work/banners-rollups/rollup_${formatNumber(index)}.webp`,
        (index) => ({
          alt: `Roll-up reklamowy - projekt ${index}`,
          caption: `Roll-up reklamowy, wariant ${index}`,
        }),
        ["roll-up", "druk wielkoformatowy", "reklama"],
        "rollup",
      ),
    ],
  },
];
