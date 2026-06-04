import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contacts } from "@/data/contacts";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { workCategories } from "@/data/workCategories";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { WorkGallery } from "@/components/portfolio/WorkGallery/WorkGallery";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

type WorkCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return workCategories
    .filter((category) => category.status === "published" || category.status === "draft")
    .map((category) => ({
      slug: category.slug,
    }));
}

export async function generateMetadata({ params }: WorkCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = workCategories.find((item) => item.slug === slug);

  if (!category || category.status === "hidden") {
    return {
      title: site.title,
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = `${category.title} | ${site.name}`;
  const description = category.shortDescription;
  const url = `${site.siteUrl}/prace/${category.slug}`;
  const images = category.coverImage ? [category.coverImage] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `/prace/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function WorkCategoryPage({ params }: WorkCategoryPageProps) {
  const { slug } = await params;
  const category = workCategories.find((item) => item.slug === slug);

  if (!category || category.status === "hidden") {
    notFound();
  }

  return (
    <>
      <Header profile={profile} contacts={contacts} />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Link className={styles.backLink} href="/#prace">
              Wróć do prac
            </Link>
            <div className={styles.heading}>
              <p className={styles.kicker}>Portfolio</p>
              <h1>{category.title}</h1>
              <p className={styles.description}>{category.shortDescription}</p>
              {category.longDescription ? (
                <p className={styles.longDescription}>{category.longDescription}</p>
              ) : null}
              {category.tags.length > 0 ? (
                <div className={styles.tags} aria-label="Tagi kategorii">
                  {category.tags.map((tag) => (
                    <span className={styles.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
        <section className={styles.gallerySection} aria-label="Prace w kategorii">
          <div className={styles.container}>
            <WorkGallery items={category.items} />
          </div>
        </section>
        <ContactSection contacts={contacts} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
