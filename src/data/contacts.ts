import type { ContactLink } from "@/types/portfolio";
import { profile } from "./profile";

export const contacts: ContactLink[] = [
  {
    id: "email",
    label: "olexandr.alexandroff@gmail.com",
    href: "mailto:olexandr.alexandroff@gmail.com",
    type: "email",
  },
  {
    id: "phone",
    label: "+48 730-39-40-40",
    href: "tel:+48730394040",
    type: "phone",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oleksandr-aleksandrov",
    type: "linkedin",
  },
  {
    id: "cv",
    label: "Pobierz CV",
    href: profile.cvPath,
    type: "cv",
  },
];
