"use client";

import { useCallback, useState } from "react";
import type { WorkItem } from "@/types/portfolio";
import { WorkLightbox } from "@/components/portfolio/WorkLightbox/WorkLightbox";
import styles from "./WorkGallery.module.css";

const INITIAL_VISIBLE_ITEMS = 6;
const ITEMS_PER_PAGE = 6;

type WorkGalleryProps = {
  items: WorkItem[];
};

export function WorkGallery({ items }: WorkGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const visibleItems = items.filter((item) => !item.hidden && item.src.trim().length > 0);
  const displayedItems = visibleItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < visibleItems.length;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % displayedItems.length);
  }, [displayedItems.length]);

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + displayedItems.length) % displayedItems.length);
  }, [displayedItems.length]);

  if (visibleItems.length === 0) {
    return (
      <p className={styles.empty}>
        Ta kategoria jest przygotowana jako miejsce na nowe prace. Materiały zostaną dodane po
        selekcji portfolio.
      </p>
    );
  }

  return (
    <>
      <div className={styles.grid}>
        {displayedItems.map((item, index) => (
          <figure className={styles.item} key={item.id}>
            <div className={styles.imageWrap}>
              <button
                aria-label={`Otwórz podgląd: ${item.alt}`}
                className={styles.previewButton}
                onClick={() => openLightbox(index)}
                type="button"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            </div>
            {(item.caption || item.tags?.length) ? (
              <figcaption className={styles.caption}>
                {item.caption ? <span className={styles.captionText}>{item.caption}</span> : null}
                {item.tags?.length ? (
                  <span className={styles.tags} aria-label="Tagi pracy">
                    {item.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
      {hasMoreItems ? (
        <div className={styles.actions}>
          <button
            className={styles.loadMore}
            onClick={() => {
              setVisibleCount((current) =>
                Math.min(current + ITEMS_PER_PAGE, visibleItems.length),
              );
            }}
            type="button"
          >
            Pokaż więcej
          </button>
        </div>
      ) : null}
      <WorkLightbox
        currentIndex={currentIndex}
        isOpen={isLightboxOpen}
        items={displayedItems}
        onClose={closeLightbox}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}
