import type { ContactLink } from "@/types/portfolio";
import styles from "./IconLink.module.css";

type IconLinkProps = Partial<ContactLink> & {
  className?: string;
  compact?: boolean;
  link?: ContactLink;
};

const iconIds: Record<ContactLink["type"], string> = {
  email: "icon-email",
  phone: "icon-phone",
  linkedin: "icon-linkedin",
  cv: "icon-download",
};

export function IconLink({
  className,
  compact = false,
  link,
  ...props
}: IconLinkProps) {
  const resolvedLink = link ?? props;

  if (!resolvedLink.href || !resolvedLink.label || !resolvedLink.type) {
    return null;
  }

  const isExternal = resolvedLink.type === "linkedin" || resolvedLink.type === "cv";
  const iconId = iconIds[resolvedLink.type];

  return (
    <a
      aria-label={resolvedLink.label}
      className={[styles.link, compact ? styles.compact : "", className]
        .filter(Boolean)
        .join(" ")}
      href={resolvedLink.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <svg className={styles.icon} focusable="false">
          <use href={`/icon.svg#${iconId}`} />
        </svg>
      </span>
      <span className={compact ? styles.compactLabel : undefined}>
        {resolvedLink.label}
      </span>
    </a>
  );
}
