import type { ExperienceItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import styles from "./ExperienceSection.module.css";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section className={styles.section} id="doswiadczenie">
      <Container className={styles.inner}>
        <SectionHeader
          title="Profil zawodowy"
          description="Startowy opis doświadczenia bez nazw firm i bez pozycjonowania web developerskiego."
        />
        <div className={styles.list}>
          {items.map((item) => (
            <article className={styles.item} key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
