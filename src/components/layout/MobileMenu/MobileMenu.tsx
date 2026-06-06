import type { ContactLink } from "@/types/portfolio";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  contacts: ContactLink[];
  id: string;
  isOpen: boolean;
  navLinks: {
    href: string;
    label: string;
  }[];
  onClose: () => void;
  profileName: string;
};

export function MobileMenu({
  contacts,
  id,
  isOpen,
  navLinks,
  onClose,
  profileName,
}: MobileMenuProps) {
  const cvLink = contacts.find((link) => link.type === "cv");

  return (
    <div
      className={[styles.overlay, isOpen ? styles.open : ""].filter(Boolean).join(" ")}
      hidden={!isOpen}
      onClick={onClose}
    >
      <aside
        aria-label="Menu nawigacyjne"
        aria-modal="true"
        className={styles.panel}
        id={id}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className={styles.top}>
          <p className={styles.brand}>{profileName}</p>
          <button
            aria-label="Zamknij menu"
            className={styles.close}
            onClick={onClose}
            type="button"
          >
            <svg className={styles.closeIcon} aria-hidden="true" focusable="false">
              <use href="/icon.svg#icon-close" />
            </svg>
          </button>
        </div>
        <nav className={styles.nav} aria-label="Nawigacja mobilna">
          {cvLink ? (
            <a href={cvLink.href} onClick={onClose} rel="noopener noreferrer" target="_blank">
              {cvLink.label}
            </a>
          ) : null}
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
