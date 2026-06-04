"use client";

import { useState } from "react";
import type { CompetenceCard } from "@/types/portfolio";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import styles from "./CompetenceSection.module.css";

type CompetenceSectionProps = {
  competences: CompetenceCard[];
};

type CompetenceFlipCardProps = {
  card: CompetenceCard;
};

function CompetenceFlipCard({ card }: CompetenceFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      className={[styles.card, isFlipped ? styles.flipped : ""]
        .filter(Boolean)
        .join(" ")}
      onClick={() => setIsFlipped((current) => !current)}
      type="button"
    >
      <span className={styles.cardInner}>
        <span className={styles.cardFace}>
          <span className={styles.cardKicker}>Kompetencje</span>
          <span className={styles.cardTitle}>{card.title}</span>
          <span className={styles.cardHint}>Kliknij, aby zobaczyć szczegóły</span>
        </span>
        <span className={[styles.cardFace, styles.cardBack].join(" ")}>
          <span className={styles.cardTitle}>{card.title}</span>
          <span className={styles.items}>
            {card.items.map((item) => (
              <span className={styles.item} key={item}>
                {item}
              </span>
            ))}
          </span>
        </span>
      </span>
    </button>
  );
}

export function CompetenceSection({ competences }: CompetenceSectionProps) {
  return (
    <section className={styles.section} id="kompetencje">
      <Container className={styles.inner}>
        <SectionHeader
          eyebrow="Kompetencje"
          title="Zakres pracy grafika DTP"
          description="Bazowy podział umiejętności do dalszego dopracowania w projekcie docelowym."
        />
        <div className={styles.grid}>
          {competences.map((card) => (
            <CompetenceFlipCard card={card} key={card.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
