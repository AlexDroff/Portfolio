import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

type FooterProps = {
  name: string;
};

export function Footer({ name }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>&copy; 2026 {name}. Wszelkie prawa zastrzeżone.</p>
        <div className={styles.credit}>
          <span>Projekt i realizacja</span>
          <a
            href="https://www.loadingstudio.pl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Loading Studio"
            className={styles.logoLink}
          >
            <Image
              src="/loading.svg"
              alt="Loading Studio"
              width={112}
              height={24}
              className={styles.logo}
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
