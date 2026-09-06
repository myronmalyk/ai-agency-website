import type { Metadata } from "next";
import CityPage, { type CityContent } from "@/components/CityPage";
import { breadcrumbGraph, cityGraph } from "@/lib/jsonld";
import { FOUNDING_PRICE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Lead & Quote Follow-Up for Abbotsford Trades | Tyvelo",
  },
  description: `Abbotsford HVAC, plumbing, electrical, roofing and landscaping: every lead answered in 60 seconds, every quote chased, every invoice nudged. ${FOUNDING_PRICE} flat, demo before you pay.`,
  alternates: { canonical: "/abbotsford" },
  openGraph: {
    title: "Lead & Quote Follow-Up for Abbotsford Trades — Tyvelo",
    description:
      "Built in Abbotsford for Fraser Valley trades. Every lead answered in 60 seconds, every open quote chased, every overdue invoice nudged.",
    url: "/abbotsford",
  },
};

const content: CityContent = {
  city: "Abbotsford",
  intro: [
    "Abbotsford is a driving town for anyone in the trades. A call comes in while you're out on Sumas Prairie and the next job is in Eagle Mountain — that's most of an hour on the road before you can even look at your phone. By the time you do, the homeowner has already messaged two other outfits, and one of them replied from the van.",
    "The work here is also split across very different housing. Post-war and eighties stock through Clearbrook and East Abbotsford means service calls, retrofits and the kind of urgent failures that don't wait. Acreage and outbuildings south of Highway 1 mean bigger quotes with longer decision times. New builds up on Auguston and Eagle Mountain mean competing against whoever has the tidiest paperwork. All three leak in different places — and none of them leak because you're bad at the job.",
  ],
  leaks: [
    {
      stage: "STAGE 02 · GET CONTACTED",
      title: "The call you couldn't take on the highway",
      body: "Missed calls, after-hours emergencies and web form enquiries all get an instant text back in your voice — within 60 seconds, whether you're on a roof, in a crawlspace or halfway down the Trans-Canada. It buys you the hour you need to call back properly.",
    },
    {
      stage: "STAGE 03 · QUOTE / BOOK",
      title: "The acreage quote that went quiet",
      body: "Bigger Fraser Valley jobs take longer to decide, which is exactly why one follow-up isn't enough. Every open estimate gets a short personal nudge at 2, 7 and 21 days, then a revival at 60 — so the quote you drove out to price gets an answer either way.",
    },
    {
      stage: "STAGE 05 · GET PAID & COME BACK",
      title: "The invoice sitting since last season",
      body: "Reminders on the due date, at +7 and +14, then escalation to you with everything you need for one phone call. And when a furnace service or a gutter clean comes due next season, that past customer gets a text that books straight into your calendar.",
    },
  ],
  close:
    "I live and work here, and I build every system myself — no agency, no account manager, no offshore team. If you want to see it before you believe it, I'll wire a demo into your real number and forms and let you watch it handle your own leads.",
  otherCity: { name: "Surrey", href: "/surrey" },
};

export default function AbbotsfordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityGraph("Abbotsford", "/abbotsford")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbGraph("Abbotsford", "/abbotsford")),
        }}
      />
      <CityPage content={content} />
    </>
  );
}
