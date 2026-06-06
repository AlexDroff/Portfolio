"use client";

import { useEffect } from "react";
import type { WorkItem } from "@/types/portfolio";
import styles from "./WorkLightbox.module.css";

type WorkLightboxProps = {
  items: WorkItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function WorkLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: WorkLightboxProps) {
  const currentItem = items[currentIndex];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !currentItem) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        aria-label="Podgląd pracy"
        aria-modal="true"
        className={styles.dialog}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className={styles.viewer}>
          <button
            aria-label="Zamknij podgląd"
            className={[styles.viewerButton, styles.closeButton].join(" ")}
            onClick={onClose}
            type="button"
          >
            <svg className={styles.buttonIcon} aria-hidden="true" focusable="false">
              <use href="/icon.svg#icon-close" />
            </svg>
          </button>
          <button
            aria-label="Poprzednia praca"
            className={[styles.viewerButton, styles.navButton, styles.previous].join(" ")}
            onClick={onPrevious}
            type="button"
          >
            <svg className={styles.buttonIcon} aria-hidden="true" focusable="false">
              <use href="/icon.svg#icon-arrow-left" />
            </svg>
          </button>
          <div className={styles.imageFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={currentItem.src} alt={currentItem.alt} />
          </div>
          <button
            aria-label="Następna praca"
            className={[styles.viewerButton, styles.navButton, styles.next].join(" ")}
            onClick={onNext}
            type="button"
          >
            <svg className={styles.buttonIcon} aria-hidden="true" focusable="false">
              <use href="/icon.svg#icon-arrow-right" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
