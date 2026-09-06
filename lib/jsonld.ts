import {
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  FOUNDING_PRICE,
  LINKEDIN_URL,
  HOME_CITY,
} from "./site";

export const SITE_URL = "https://www.tyvelo.com";

export interface QA {
  q: string;
  a: string;
}

/** The FAQs rendered on the homepage accordion + its FAQPage JSON-LD. */
export const homeFaqs: QA[] = [
  {
    q: "What does it cost?",
    a: `Founding rate: ${FOUNDING_PRICE} CAD flat, per location, locked for founding clients. No setup fee, no contract, cancel any time. That covers Speed-to-Lead plus one more stage of your choice — quote chasing, invoice chasing or maintenance recall. Extra stages are added on top later, only if you ask. The demo is free, and you watch it run on your real leads before anything is billed.`,
  },
  {
    q: "What's Quote Chasing?",
    a: "You price a job, send the estimate, and then it goes quiet — most trades never follow up more than once, because you're on site all day. Quote Chasing does it for you: every open estimate gets a short, personal message at 2, 7 and 21 days, then a “still need this done?” revival at 60 days. It reads like something you'd tap out between jobs, not a marketing blast. The number we watch is your quote-to-job rate.",
  },
  {
    q: "What's Maintenance Recall?",
    a: "The customers you already served are the cheapest work you'll ever get, and most of them simply forget you exist. Maintenance Recall texts them when their service is due — the annual furnace check, gutter season, the filter you flagged on the last visit — and books straight into your calendar. It runs off your own job history, on whatever schedule fits your trade. The number we watch is repeat jobs.",
  },
  {
    q: "Is automated texting legal in Canada?",
    a: "Yes, when it's set up properly, and that's how TYVELO is built. Canada's anti-spam law (CASL) is about consent: TYVELO is built to message only people who contacted your business or clearly opted in, to treat that enquiry as consent for a limited follow-up window rather than forever, to put a plain opt-out in every message and honour it immediately, and to keep a record of when and how each person consented so you can show it if you're ever asked. It is not a cold-texting tool and I won't build one. On the data side, personal information is handled under PIPEDA and BC's PIPA: it's collected only to run your follow-up, never sold or used to train models, kept as long as the service needs it, and deletable on request.",
  },
  {
    q: "Who owns the workflows?",
    a: "You do. Everything is built on open, self-hostable tooling — n8n for the automation plumbing, plus standard AI and messaging APIs — and it runs on accounts and phone numbers in your name. There's no proprietary TYVELO box you get locked inside. If you ever want to leave, or hand it to someone in-house, I export the workflows, document them and hand the whole thing over. That's part of the deal, not an exit fee.",
  },
  {
    q: "Won't an automatic reply sound like a robot?",
    a: "It shouldn't, and that's the whole job. The wording is written in your voice and tuned to how you actually talk to customers — a short, plain “thanks for getting in touch, here's what happens next,” not corporate filler. Most people just feel like a business got back to them fast. You see every message template before it goes live and can change the wording any time.",
  },
  {
    q: "Do I need to get on a call to start?",
    a: "No. Tell me about your business by message and I'll build a free working demo first, so you see it work before we ever talk. Text, email, WhatsApp or LinkedIn — whatever's easiest between jobs.",
  },
  {
    q: "How fast can I see it working?",
    a: "Usually within a few days. Tell me your trade and where work comes in, and I'll build a working demo on your actual setup — then show you a lead getting answered in under 60 seconds.",
  },
  {
    q: "Will this work with my current tools?",
    a: "Almost always. It sits on top of what you already use — your web forms, business number, Google Business Profile, Instagram and Facebook, and most common CRMs, job-management and booking tools. You don't switch software or learn a new system.",
  },
];

/** The full FAQ list shown on /faq + its standalone FAQPage JSON-LD. */
export const allFaqs: QA[] = [
  ...homeFaqs,
  {
    q: "How is this different from a chatbot?",
    a: "A chatbot sits on your website waiting for someone to start typing. TYVELO works the other way round: the moment a lead comes in from anywhere — form, phone call, Instagram or Facebook DM — it replies and follows up, in your voice, like you texted them back yourself. And it keeps going after that first reply, through the quote, the invoice and the next service due.",
  },
  {
    q: "Can the AI really answer my phone calls?",
    a: "Yes — that's the AI Voice Agent, an add-on to Speed-to-Lead. It picks up in a natural-sounding voice, handles common questions, and collects the caller's name, number, the job and how urgent it is, then books the appointment or texts you a tidy summary. It's for the calls you'd otherwise send to voicemail while you're up a ladder, not a replacement for you.",
  },
  {
    q: "What kinds of businesses is this for?",
    a: "Owner-operated trades around the Fraser Valley and Lower Mainland — HVAC, plumbing, electrical, roofing, landscaping, and the same shape of business next door to them: appliance repair, paving, fencing, restoration. If customers find you online or by phone, you quote before you work, and you invoice after, the loop TYVELO plugs is the loop you're already running.",
  },
  {
    q: "Which leads does it cover — calls, forms, or DMs?",
    a: "All of them. Web form submissions get an instant reply and follow-up. Missed or after-hours calls get an automatic text back. Instagram and Facebook DMs get answered too. However someone reaches you, the aim is a response in seconds rather than hours.",
  },
  {
    q: "What do you need from me to build the demo?",
    a: "Very little to start — your business name, where work comes in (website, phone, social), and a sense of how you'd normally reply. I build the demo around that and show you it working. No software access is needed until you decide to go ahead.",
  },
  {
    q: "What happens if I want to stop?",
    a: "You tell me and it stops — there's no contract and no notice period. Your phone number, forms and customer data stay yours throughout, and if you want the workflows themselves I export and hand them over. Nothing about how this is built holds you hostage.",
  },
];

function faqPage(faqs: QA[], id?: string) {
  return {
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const SERVICES = [
  {
    name: "Speed-to-Lead",
    description:
      "Instant reply and automatic follow-up to every inbound lead — web form, phone call, or DM — within 60 seconds, including missed-call text-back, so trades stop losing jobs to whoever answered first.",
  },
  {
    name: "Quote Chasing",
    description:
      "Automatic personal follow-up on every open estimate at 2, 7 and 21 days, plus a revival message at 60 days, to lift quote-to-job rate for trades who send estimates and never hear back.",
  },
  {
    name: "Invoice Chasing",
    description:
      "Polite automated payment reminders on the due date and at 7 and 14 days past due, escalating to the owner if still unpaid, to shorten days-to-paid.",
  },
  {
    name: "Maintenance Recall",
    description:
      "Service-due texts to past customers — annual servicing, seasonal work, flagged repairs — that book straight into the calendar and turn an existing customer list into repeat jobs.",
  },
  {
    name: "AI Voice Agent",
    description:
      "A natural-sounding AI answers the phone when the crew can't — greeting callers, answering common questions, capturing the job and urgency, then booking the appointment or texting through a summary.",
  },
  {
    name: "Review Automation",
    description:
      "Request Google reviews from happy customers at the right moment and route unhappy ones to private feedback first.",
  },
];

const AREA_SERVED = [
  "Abbotsford",
  "Surrey",
  "Langley",
  "Chilliwack",
  "Mission",
  "Maple Ridge",
  "Aldergrove",
];

/** Shared Organization/ProfessionalService node. */
function organization() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: "Tyvelo",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo/logo_white.png`,
    },
    description:
      "Tyvelo builds automated follow-through for trades in the Fraser Valley and Lower Mainland — HVAC, plumbing, electrical, roofing and landscaping. Every inbound lead is answered within 60 seconds, every open quote is chased, every overdue invoice is nudged, and past customers are recalled when service is due.",
    foundingDate: "2026",
    founder: { "@type": "Person", name: "Myron Malyk" },
    address: {
      "@type": "PostalAddress",
      addressLocality: HOME_CITY,
      addressRegion: "BC",
      addressCountry: "CA",
    },
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_TEL,
    sameAs: [LINKEDIN_URL],
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    knowsAbout: [
      "Speed-to-Lead Automation",
      "Instant Lead Response",
      "Quote Follow-up Automation",
      "Invoice Reminder Automation",
      "Maintenance Recall",
      "Missed-Call Text-Back",
      "AI Voice Agent",
      "Automation for Trades and Home Services",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Follow-up automation for trades",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 197,
          priceCurrency: "CAD",
          unitText: "MONTH",
        },
      })),
    },
  };
}

/** Homepage @graph: Organization/ProfessionalService + FAQPage. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organization(), faqPage(homeFaqs, `${SITE_URL}/#faq`)],
  };
}

/** Standalone FAQPage for /faq. */
export function faqGraph() {
  return { "@context": "https://schema.org", ...faqPage(allFaqs) };
}

/** Service node for a city landing page. */
export function cityGraph(city: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Lead, quote and invoice follow-up for ${city} trades`,
    serviceType: "Follow-up automation for trades",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: city, containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } },
    url: `${SITE_URL}${path}`,
    offers: {
      "@type": "Offer",
      price: 197,
      priceCurrency: "CAD",
      description: `${FOUNDING_PRICE} CAD flat per location for founding clients. No setup fee, no contract.`,
    },
  };
}

/** BreadcrumbList JSON-LD for a subpage (e.g. Home > FAQ). */
export function breadcrumbGraph(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
