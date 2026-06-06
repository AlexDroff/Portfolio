export type ContactLink = {
  id: string;
  label: string;
  href: string;
  type: "email" | "phone" | "linkedin" | "cv";
};

export type CompetenceCard = {
  id: string;
  title: string;
  items: string[];
};

export type ExperienceItem = {
  id: string;
  title: string;
  description: string;
};

export type WorkCategoryStatus = "published" | "draft" | "hidden";

export type WorkItem = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  tags?: string[];
  year?: string;
  featured?: boolean;
  hidden?: boolean;
};

export type WorkCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  coverImage: string;
  coverAlt: string;
  status: WorkCategoryStatus;
  tags: string[];
  items: WorkItem[];
  subcategories?: WorkSubcategory[];
};

export type WorkSubcategory = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  coverImage: string;
  coverAlt: string;
  tags: string[];
  items: WorkItem[];
};
