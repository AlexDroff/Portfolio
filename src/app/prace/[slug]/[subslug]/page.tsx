import Link from "next/link";
import { notFound } from "next/navigation";
import { contacts } from "@/data/contacts";
import { profile } from "@/data/profile";
import { workCategories } from "@/data/workCategories";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { WorkGallery } from "@/components/portfolio/WorkGallery/WorkGallery";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
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

  return (
    <>
      <Header profile={profile} contacts={contacts} />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Link className={styles.backLink} href={`/prace/${category.slug}`}>
              Wróć do kategorii
            </Link>
            <div className={styles.heading}>
              <h1>{subcategory.title}</h1>
              <p className={styles.description}>{subcategory.shortDescription}</p>
              {subcategory.longDescription ? (
                <p className={styles.longDescription}>{subcategory.longDescription}</p>
              ) : null}
              {subcategory.tags.length > 0 ? (
                <div className={styles.tags} aria-label="Tagi kategorii">
                  {subcategory.tags.map((tag) => (
                    <span className={styles.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
        <section className={styles.gallerySection} aria-label="Prace w podkategorii">
          <div className={styles.container}>
            <WorkGallery items={subcategory.items} />
          </div>
        </section>
        <ContactSection contacts={contacts} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
