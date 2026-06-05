"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ContactLink } from "@/types/portfolio";
import { Container } from "@/components/ui/Container/Container";
import { MobileMenu } from "@/components/layout/MobileMenu/MobileMenu";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Header.module.css";

type HeaderProps = {
  profile: {
    name: string;
  };
  contacts: ContactLink[];
};

const navLinks = [
  { href: "#prace", label: "Prace" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header({ profile, contacts }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const cvLink = contacts.find((link) => link.type === "cv");

  useEffect(() => {
    burgerButtonRef.current?.setAttribute("aria-expanded", isMenuOpen ? "true" : "false");
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Oleksandr Aleksandrov">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.logo} src="/logo.svg" alt="Oleksandr Aleksandrov" />
        </Link>
        <div className={styles.actions}>
          {cvLink ? (
            <Button
              className={styles.cvButton}
              href={cvLink.href}
              rel="noopener noreferrer"
              target="_blank"
              variant="secondary"
            >
              <svg className={styles.cvIcon} aria-hidden="true" focusable="false">
                <use href="/icon.svg#icon-download" />
              </svg>
              <span>Pobierz CV</span>
            </Button>
          ) : null}
        </div>
        <nav className={styles.nav} aria-label="Główna nawigacja">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Otwórz menu"
          className={styles.burger}
          onClick={() => setIsMenuOpen(true)}
          ref={burgerButtonRef}
          type="button"
        >
          <svg className={styles.burgerIcon} aria-hidden="true" focusable="false">
            <use href="/icon.svg#icon-burger" />
          </svg>
        </button>
      </Container>
      <MobileMenu
        contacts={contacts}
        id="mobile-menu"
        isOpen={isMenuOpen}
        navLinks={navLinks}
        onClose={() => setIsMenuOpen(false)}
        profileName={profile.name}
      />
    </header>
  );
}
