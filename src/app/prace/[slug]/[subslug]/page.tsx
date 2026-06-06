import Link from "next/link";
import { notFound } from "next/navigation";
import { workCategories } from "@/data/workCategories";
import { WorkGallery } from "@/components/portfolio/WorkGallery/WorkGallery";
import styles from "../page.module.css";

type WorkSubcategoryPageProps = {
  params: Promise<{
    slug: string;
    subslug: string;
  }>;
};

export function generateStaticParams() {
  return workCategories
    .filter((category) => category.status === "published" && category.subcategories?.length)
    .flatMap((category) =>
      category.subcategories?.map((subcategory) => ({
        slug: category.slug,
        subslug: subcategory.slug,
      })) ?? [],
    );
}

export default async function WorkSubcategoryPage({ params }: WorkSubcategoryPageProps) {
  const { slug, subslug } = await params;
  const category = workCategories.find((item) => item.slug === slug);

  if (!category || category.status !== "published") {
    notFound();
  }

  const subcategory = category.subcategories?.find((item) => item.slug === subslug);

  if (!subcategory) {
    notFound();
  }

  const backHref = `/prace/${category.slug}`;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link className={styles.backLink} href={backHref}>
            Wróć do prac
          </Link>
          <div className={styles.heading}>
            <h1>{subcategory.title}</h1>
            <p className={styles.description}>{subcategory.shortDescription}</p>
          </div>
        </div>
      </section>
      <section className={styles.gallerySection} aria-label="Prace w podkategorii">
        <div className={styles.container}>
          <WorkGallery items={subcategory.items} />
          <Link className={`${styles.backLink} ${styles.bottomBackLink}`} href={backHref}>
            Wróć do prac
          </Link>
        </div>
      </section>
    </main>
  );
}
