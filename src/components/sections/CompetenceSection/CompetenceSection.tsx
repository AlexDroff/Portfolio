"use client";

import { useEffect, useRef, useState } from "react";
import type { CompetenceCard } from "@/types/portfolio";
import { Container } from "@/components/ui/Container/Container";
import styles from "./CompetenceSection.module.css";

type CompetenceSectionProps = {
  competences: CompetenceCard[];
};

type CompetenceFlipCardProps = {
  card: CompetenceCard;
  isActive: boolean;
  onClose: () => void;
  onToggle: () => void;
};

function CompetenceFlipCard({ card, isActive, onClose, onToggle }: CompetenceFlipCardProps) {
  const buttonClassName = [styles.card, isActive ? styles.flipped : ""].filter(Boolean).join(" ");
  const cardContent = (
    <span className={styles.cardInner}>
      <span className={[styles.cardFace, styles.cardFront].join(" ")}>
        <span className={styles.cardTitle}>{card.title}</span>
        <span className={styles.cardHint}>Kliknij →</span>
      </span>
      <span className={[styles.cardFace, styles.cardBack].join(" ")}>
        <span className={styles.cardTitle}>{card.title}</span>
        <span className={styles.items} role="list">
          {card.items.map((item) => (
            <span className={styles.item} key={item} role="listitem">
              {item}
            </span>
          ))}
        </span>
      </span>
    </span>
  );

  if (isActive) {
    return (
      <button
        aria-expanded="true"
        className={buttonClassName}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            onClose();
          }
        }}
        type="button"
      >
        {cardContent}
      </button>
    );
  }

  return (
    <button aria-expanded="false" className={buttonClassName} onClick={onToggle} type="button">
      {cardContent}
    </button>
  );
}

export function CompetenceSection({ competences }: CompetenceSectionProps) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeCardId) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCardId(null);
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (cardsRef.current?.contains(event.target as Node)) {
        return;
      }

      setActiveCardId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeCardId]);

  return (
    <section className={styles.section} id="kompetencje">
      <Container className={styles.inner}>
        <header className={styles.header}>
          <h2>Umiejętności i sposób pracy</h2>
          <p>
            Narzędzia, techniki i procesy, z których korzystam przy projektowaniu materiałów
            graficznych, składzie DTP, przygotowaniu plików do druku oraz współpracy z produkcją.
          </p>
        </header>
        <div className={styles.grid} ref={cardsRef}>
          {competences.map((card) => (
            <CompetenceFlipCard
              card={card}
              isActive={activeCardId === card.id}
              key={card.id}
              onClose={() => setActiveCardId(null)}
              onToggle={() =>
                setActiveCardId((current) => (current === card.id ? null : card.id))
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
