import type { CompetenceCard } from "@/types/portfolio";

export const competences: CompetenceCard[] = [
  {
    id: "tools",
    title: "Narzędzia i technika",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "CorelDRAW",
      "Grafika wektorowa",
      "Skład materiałów",
    ],
  },
  {
    id: "dtp-prepress",
    title: "DTP i prepress",
    items: [
      "Spady",
      "Marginesy",
      "Formaty netto/brutto",
      "Eksport PDF",
      "Kontrola plików",
      "Wymagania drukarni",
    ],
  },
  {
    id: "scope",
    title: "Zakres prac",
    items: ["Wizytówki", "Ulotki", "Katalogi", "Plakaty", "Banery", "Publikacje"],
  },
  {
    id: "production",
    title: "Produkcja i współpraca",
    items: [
      "Druk cyfrowy",
      "Druk wielkoformatowy",
      "Przygotowanie produkcyjne",
      "Kontrola jakości",
      "Obsługa zleceń",
      "Współpraca z produkcją",
    ],
  },
];
