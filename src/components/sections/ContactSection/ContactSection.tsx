import type { ContactLink } from "@/types/portfolio";
import { Container } from "@/components/ui/Container/Container";
import { IconLink } from "@/components/ui/IconLink/IconLink";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import styles from "./ContactSection.module.css";

type ContactSectionProps = {
  contacts: ContactLink[];
};

export function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <section className={styles.section} id="kontakt">
      <Container className={styles.inner}>
        <SectionHeader
          title="Kontakt zawodowy"
          description="Kontakt w sprawie pracy graficznej, DTP, przygotowania do druku i produkcji materiałów."
        />
        <div className={styles.links}>
          {contacts.map((link) => (
            <IconLink link={link} key={link.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
