import Image from "next/image";
import Link from "next/link";
import styles from "./WorkCategoryCard.module.css";

type WorkCategoryCardProps = {
  category: {
    slug: string;
    title: string;
    shortDescription: string;
    coverImage: string;
    coverAlt: string;
    tags?: string[];
  };
  href?: string;
};

export function WorkCategoryCard({ category, href }: WorkCategoryCardProps) {
  const cardHref = href ?? `/prace/${category.slug}`;
  const hasCover = category.coverImage.trim().length > 0;

  return (
    <article className={styles.card}>
      <Link className={styles.link} href={cardHref}>
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
        </span>
      </Link>
    </article>
  );
}
