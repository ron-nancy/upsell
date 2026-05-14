// Types for the Lem product page content structures.

export type PressLogo = { name: string; src: string; alt: string };

export type FeaturePill = {
  icon: string; // emoji or image path
  label: string;
};

export type CustomerQuote = {
  persona: string; // "First-Timers", "Experienced Users", "Couples", "Privacy Seekers"
  quote: string;
  byline: string; // e.g., "Jenni, 22"
};

export type DetailTab = {
  key: string;
  label: string;
  body: React.ReactNode;
};

export type TrustItem = {
  iconSrc: string;
  label: string;
};

export type ExpertCard = {
  imageSrc: string;
  quote: string;
  name: string;
  credentials: string;
};

export type ReviewCard = {
  persona: string;
  quote: string;
  byline: string;
};

export type UGCVideo = {
  poster: string;
  src: string;
  caption: string;
  badge?: string;
};

export type ComparisonRow = {
  label: string;
  cells: Array<string | "win" | "lose" | "neutral">;
};

export type ComparisonTable = {
  columns: string[]; // ["LEM by Nancy", "SATISFYER", ...]
  rows: ComparisonRow[];
};

export type FaqItem = { q: string; a: string };

export type PhotoReview = {
  name: string;
  date: string;
  verified: boolean;
  rating: number;
  text: string;
  imageSrc?: string;
  videoPoster?: string;
};

export type RelatedProduct = {
  name: string;
  description: string;
  sale: number;
  regular: number;
  savings: number;
  imageSrc: string;
  hoverImageSrc?: string;
};
