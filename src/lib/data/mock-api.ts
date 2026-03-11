import type { AnalyticsMetric } from "@/types";
import { features, testimonials } from "@/lib/data/content";

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const randomDelay = (min = 100, max = 400) =>
  delay(min + Math.random() * (max - min));

/**
 * Simulates fetching real-time analytics metrics from an API.
 * Returns realistic email delivery statistics with a 2% error rate.
 */
export async function fetchAnalyticsMetrics(): Promise<AnalyticsMetric> {
  await randomDelay(100, 300);
  if (Math.random() < 0.02) {
    throw new Error("Unable to fetch metrics. Please try again.");
  }
  return {
    delivered: 2847291,
    opened: 1923847,
    clicked: 487312,
  };
}

/**
 * Simulates fetching the features list from a CMS or API.
 */
export async function fetchFeatures() {
  await randomDelay(150, 350);
  return features;
}

/**
 * Simulates fetching testimonials from a CMS or API.
 */
export async function fetchTestimonials() {
  await randomDelay(200, 400);
  return testimonials;
}
