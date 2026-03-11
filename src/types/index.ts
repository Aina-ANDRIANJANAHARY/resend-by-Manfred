/** Navigation link item */
export interface NavItem {
  label: string;
  href: string;
}

/** Feature card data */
export interface Feature {
  title: string;
  description: string;
}

/** Testimonial card data */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

/** Client logo for social proof grid */
export interface ClientLogo {
  name: string;
}

/** Analytics metrics returned by mock API */
export interface AnalyticsMetric {
  delivered: number;
  opened: number;
  clicked: number;
}

/** Generic mock API response wrapper */
export interface MockApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/** Blog post */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  author: string;
  readTime: string;
}

/** Changelog entry */
export interface ChangelogEntry {
  version: string;
  date: string;
  type: "major" | "minor" | "patch";
  changes: { kind: "new" | "improved" | "fixed"; text: string }[];
}

/** Docs section item */
export interface DocsItem {
  label: string;
  href: string;
}

/** Docs sidebar category */
export interface DocsCategory {
  title: string;
  items: DocsItem[];
}

/** DNS record row */
export interface DnsRecord {
  type: "TXT" | "CNAME" | "MX";
  name: string;
  value: string;
  purpose: string;
}

/** Webhook event definition */
export interface WebhookEvent {
  name: string;
  description: string;
  payload: string;
}

/** SDK language entry */
export interface SdkEntry {
  id: string;
  lang: string;
  pkg: string;
  install: string;
  example: string;
  github: string;
}
