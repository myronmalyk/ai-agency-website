/**
 * Single source of truth for contact details, geography and pricing.
 * Anything that appears in more than one place lives here so copy can't drift.
 */
export const CONTACT_EMAIL = "myron@tyvelo.com";

/** Founder's direct line — for calls and texts from prospects. */
export const CONTACT_PHONE = "(778) 809-4442";
export const CONTACT_PHONE_TEL = "+17788094442";

export const WHATSAPP_NUMBER = "+17788094442";
export const WHATSAPP_URL = "https://wa.me/17788094442";

export const LINKEDIN_URL = "https://www.linkedin.com/in/myron-malykhin-791038279";

/** GA4 measurement ID. Public by design — it ships in the client bundle. */
export const GA_MEASUREMENT_ID = "G-REJS0ZKLZ2";
export const CALENDLY_URL = "https://calendly.com/myronmalyk/30min";

/** Founding cohort rate. Flat, per location. */
export const FOUNDING_PRICE = "$197/mo";
export const FOUNDING_PRICE_NUMERIC = 197;

/** Service area. */
export const REGION = "Fraser Valley + Lower Mainland";
export const CITIES = ["Abbotsford", "Surrey", "Langley", "Chilliwack"] as const;
export const HOME_CITY = "Abbotsford";

/**
 * The published lead-response research we cite. Both are checkable primary
 * sources — do not swap these for un-attributed "industry stat" numbers.
 */
export const RESPONSE_STUDY = {
  label: "Harvard Business Review, 2011",
  cite: "James Oldroyd, Kristina McElheran & David Elkington, “The Short Life of Online Sales Leads,” Harvard Business Review, March 2011 — 1.25M leads across 42 companies.",
  url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  multiple: "7×",
  claim: "more likely to qualify a lead when contacted within an hour",
} as const;
