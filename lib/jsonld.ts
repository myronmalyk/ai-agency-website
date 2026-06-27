export const SITE_URL = "https://www.tyvelo.com";

export interface QA {
  q: string;
  a: string;
}

/** The 6 FAQs rendered on the homepage accordion + its FAQPage JSON-LD. */
export const homeFaqs: QA[] = [
  {
    q: "How is this different from a chatbot?",
    a: "A chatbot waits on your website for someone to start typing. Speed-to-lead works the other way: the moment a lead comes in from anywhere — your form, a phone call, an Instagram or Facebook DM — it replies and follows up instantly, in your voice, like you texted them back yourself within 60 seconds.",
  },
  {
    q: "Can the AI really answer my phone calls?",
    a: "Yes — that's the AI Voice Agent. It picks up in a natural-sounding voice, handles common questions, and collects the caller's name, number, the job and how urgent it is. Then it books the appointment or texts you a tidy summary, so even the calls you can't take turn into booked work instead of voicemail.",
  },
  {
    q: "Do I need to get on a call to start?",
    a: "No. I build a free working demo for your actual business first, and you see it work before we ever talk. Prefer to message back and forth by email, WhatsApp or LinkedIn? That's completely fine — no call required at any point.",
  },
  {
    q: "What does it cost?",
    a: "The demo is free. If it helps and you want to keep it running, it's a simple flat monthly plan — no big upfront build fee, no long contract. You watch it working on your real leads before you pay anything.",
  },
  {
    q: "How fast can I see it working?",
    a: "Usually within a few days. Tell me about your business and where your leads come in, and I'll build a working demo on your actual setup — then show you a lead getting answered in under 60 seconds.",
  },
  {
    q: "Will this work with my current tools?",
    a: "Almost always. It sits on top of what you already use — web forms, phone number, Google Business Profile, Instagram, Facebook, and most common CRMs and booking tools. You don't switch software or learn a new system.",
  },
];

/** The full FAQ list shown on /faq + its standalone FAQPage JSON-LD. */
export const allFaqs: QA[] = [
  homeFaqs[0],
  homeFaqs[1],
  {
    q: "Do I need to get on a call to start?",
    a: "No. I build a free working demo for your actual business first, and you see it work before we ever talk. If you'd rather just message back and forth by email, WhatsApp, or LinkedIn, that's completely fine — no call required at any point.",
  },
  {
    q: "What does it cost?",
    a: "The demo is free. If it helps and you want to keep it running, it's a simple flat monthly plan — no big upfront build fee, no long contract. You see it working on your real leads before you pay anything, so the cost is grounded in something you've already watched deliver.",
  },
  {
    q: "How fast can I see it working?",
    a: "Usually within a few days. Tell me about your business and where your leads come in, and I'll build a working demo on your actual setup — then show you a lead getting answered in under 60 seconds.",
  },
  {
    q: "Will this work with my current tools?",
    a: "Almost always. It sits on top of what you already use — your web forms, phone number, Google Business Profile, Instagram and Facebook, and most common CRMs and booking tools. You don't switch software or learn a new system; the automation plugs into the way you already run.",
  },
  {
    q: "What kinds of businesses is this for?",
    a: "Owner-operated local service businesses around Greater Vancouver and the Lower Mainland — contractors and trades, home services, clinics, salons and spas, auto shops, real estate, and similar. If customers find you online or by phone and you sometimes can't respond fast enough, you're the fit.",
  },
  {
    q: "Won't an instant auto-reply sound like a robot?",
    a: "It shouldn't, and that's the point. The reply is written in your voice and tuned to how you actually talk to customers — a quick, natural “thanks for reaching out, here's what happens next.” Most people just feel like a real business got back to them fast. You can review and adjust the wording any time.",
  },
  {
    q: "Which leads does it cover — calls, forms, or DMs?",
    a: "All of them. Web form submissions get an instant reply and follow-up. Missed or after-hours calls get an automatic text back. Instagram and Facebook DMs get answered too. However a lead reaches you, the goal is a response in seconds — not hours.",
  },
  {
    q: "Do you also do missed-call text-back and reviews?",
    a: "Yes. Speed-to-lead is the flagship and where most owners start, but missed-call text-back and review automation are available too — and once the core is working, we can layer on appointment reminders, no-show reduction, and lead qualification.",
  },
  {
    q: "What do you need from me to build the demo?",
    a: "Very little to start — your business name, where your leads come in (website, phone, social), and a sense of how you'd normally respond. I build the demo around that and show you it working. No software access is required until you decide to move forward.",
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
      "Instant auto-reply and follow-up to every inbound lead — web form, phone call, or DM — within 60 seconds, so you stop losing jobs to whoever responded first.",
  },
  {
    name: "AI Voice Agent",
    description:
      "A natural-sounding AI answers your phone 24/7 when you can't — greeting callers, answering common questions, capturing the job and urgency, then booking the appointment or texting you a clean summary.",
  },
  {
    name: "Missed-Call Text-Back",
    description:
      "Automatic text-back when a call is missed or comes in after hours — turning missed calls into booked jobs instead of lost ones.",
  },
  {
    name: "Review Automation",
    description:
      "Automatically request Google reviews from happy customers and route unhappy ones to private feedback first.",
  },
];

/** Homepage @graph: Organization/ProfessionalService + FAQPage. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: "Tyvelo",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo/logo_white.png`,
        },
        description:
          "Tyvelo builds AI speed-to-lead automation for local service businesses in Greater Vancouver and the Lower Mainland. Every inbound lead — form, call, or DM — gets an instant reply and follow-up within 60 seconds, so you stop losing jobs to whoever answered first.",
        foundingDate: "2026",
        founder: { "@type": "Person", name: "Myron Malyk" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greater Vancouver",
          addressRegion: "BC",
          addressCountry: "CA",
        },
        email: "myronmalyk@gmail.com",
        telephone: "+17788094442",
        sameAs: ["https://www.linkedin.com/in/myron-malykhin-791038279"],
        areaServed: [
          "Vancouver",
          "Surrey",
          "Burnaby",
          "Langley",
          "Coquitlam",
          "Richmond",
        ].map((name) => ({ "@type": "City", name })),
        priceRange: "$$$",
        knowsAbout: [
          "Speed-to-Lead Automation",
          "Instant Lead Response",
          "AI Voice Agent",
          "Missed-Call Text-Back",
          "Review Automation",
          "Lead Follow-up Automation",
          "AI for Local Service Businesses",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Automation Services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, description: s.description },
          })),
        },
      },
      faqPage(homeFaqs, `${SITE_URL}/#faq`),
    ],
  };
}

/** Standalone FAQPage for /faq. */
export function faqGraph() {
  return { "@context": "https://schema.org", ...faqPage(allFaqs) };
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
