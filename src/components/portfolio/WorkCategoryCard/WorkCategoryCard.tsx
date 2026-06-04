import Image from "next/image";
import Link from "next/link";
import type { WorkCategory } from "@/types/portfolio";
import styles from "./WorkCategoryCard.module.css";

type WorkCategoryCardProps = {
  category: WorkCategory;
};

export function WorkCategoryCard({ category }: WorkCategoryCardProps) {
  const href = `/prace/${category.slug}`;
  const hasCover = category.coverImage.trim().length > 0;

  return (
    <article className={styles.card}>
      <Link className={styles.link} href={href}>
        <span className={styles.imageWrap}>
          {hasCover ? (
            <Image
              src={category.coverImage}
              alt={category.coverAlt}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 700px) 50vw, 100vw"
            />
          ) : (
            <span className={styles.placeholder} aria-hidden="true" />
          )}
        </span>
        <span className={styles.content}>
          <span className={styles.title}>{category.title}</span>
          <span className={styles.description}>{category.shortDescription}</span>
          {category.tags.length > 0 ? (
            <span className={styles.tags} aria-label="Tagi kategorii">
              {category.tags.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </span>
          ) : null}
        </span>
      </Link>
    </article>
  );
}
