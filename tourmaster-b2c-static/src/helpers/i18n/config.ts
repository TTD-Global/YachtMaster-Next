export type Locale = (typeof locales)[number];
export const locales = ["en", "th", "zh"] as const;
export const defaultLocale: Locale = "en";
