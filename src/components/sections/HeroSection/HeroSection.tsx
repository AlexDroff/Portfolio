import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  profile: {
    name: string;
    headline: string;
    summary: string;
    cvPath: string;
    desktopPhoto: string;
  };
};

export function HeroSection({ profile }: HeroSectionProps) {
  const summaryParagraphs = profile.summary.split("\n\n");

  return (
    <section className={styles.section} id="o-mnie">
      <Container className={styles.introShell}>
        <div className={styles.intro}>
          <div className={styles.content}>
            <h1>{profile.name}</h1>
            <p className={styles.summary}>
              <strong>{profile.headline}</strong>
              {summaryParagraphs.map((paragraph) => (
                <span className={styles.summaryText} key={paragraph}>
                  {paragraph}
                </span>
              ))}
            </p>
            <div className={styles.actions}>
              <Button href="#prace">Zobacz moje projekty</Button>
            </div>
          </div>
          <div className={styles.photo}>
            <Image
              src={profile.desktopPhoto}
              alt={`Zdjęcie profilowe: ${profile.name}`}
              width={520}
              height={620}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
