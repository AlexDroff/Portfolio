import { Container } from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

type FooterProps = {
  name: string;
};

export function Footer({ name }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>&copy; 2026 {name}. Wszelkie prawa zastrzeżone.</p>
      </Container>
    </footer>
  );
}
