import { workCategories } from "@/data/workCategories";
import { WorkCategoryCard } from "@/components/portfolio/WorkCategoryCard/WorkCategoryCard";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import styles from "./WorkCategoriesSection.module.css";

export function WorkCategoriesSection() {
  const publishedCategories = workCategories.filter(
    (category) => category.status === "published",
  );

  return (
    <section className={styles.section} id="prace">
      <Container className={styles.inner}>
        <SectionHeader title="Portfolio graficzne" />
        {publishedCategories.length > 0 ? (
          <div className={styles.grid}>
            {publishedCategories.map((category) => (
              <WorkCategoryCard category={category} key={category.slug} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            Kategorie prac są w przygotowaniu i zostaną dodane po selekcji
            portfolio.
          </p>
        )}
      </Container>
    </section>
  );
}
