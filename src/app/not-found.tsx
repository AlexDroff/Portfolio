import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <Container>
        <div className={styles.content}>
          <h1>Nie znaleziono strony</h1>
          <p>Ten widok zostanie dopracowany w kolejnym kroku projektu.</p>
          <Link href="/">Wróć do strony głównej</Link>
        </div>
      </Container>
    </main>
  );
}
