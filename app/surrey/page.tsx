import type { Metadata } from "next";
import CityPage, { type CityContent } from "@/components/CityPage";
import { breadcrumbGraph, cityGraph } from "@/lib/jsonld";
import { FOUNDING_PRICE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Lead & Quote Follow-Up for Surrey Trades | Tyvelo",
  },
  description: `Surrey HVAC, plumbing, electrical, roofing and landscaping: every lead answered in 60 seconds, every quote chased, every invoice nudged. ${FOUNDING_PRICE} flat, demo before you pay.`,
  alternates: { canonical: "/surrey" },
  openGraph: {
    title: "Lead & Quote Follow-Up for Surrey Trades — Tyvelo",
    description:
      "For Surrey trades bidding against everyone else in the city. Every lead answered in 60 seconds, every open quote chased, every overdue invoice nudged.",
    url: "/surrey",
  },
};

const content: CityContent = {
  city: "Surrey",
  intro: [
    "Surrey isn't one service area, it's six. Whalley, Guildford, Fleetwood, Newton, Cloverdale and South Surrey are far enough apart that crossing the city between jobs eats an afternoon — and a homeowner in Newton doesn't care that you were stuck in Guildford when they called.",
    "It's also the most crowded market in the Lower Mainland for anyone holding a ticket. On a typical residential job the homeowner contacts three or four trades on the same afternoon. That means speed is doing more work than price: the outfit that replies while the customer is still thinking about it gets to have the conversation, and everybody else gets compared to a quote that's already in hand. Losing on speed is the most expensive way to lose, because you never even find out you were in the running.",
  ],
  leaks: [
    {
      stage: "STAGE 02 · GET CONTACTED",
      title: "Beaten to the reply by the guy across town",
      body: "Every form, call and DM gets a personal reply inside 60 seconds — including a text back on calls you can't answer. When a homeowner has messaged four trades, you're the one who responded before they'd finished the list.",
    },
    {
      stage: "STAGE 03 · QUOTE / BOOK",
      title: "Three quotes on the counter and yours went cold",
      body: "In a market where every job is competitively bid, the follow-up decides it. Open estimates get chased at 2, 7 and 21 days, then revived at 60 — so you're still in the conversation when they finally sit down to choose.",
    },
    {
      stage: "STAGE 05 · GET PAID & COME BACK",
      title: "Paid late, and never called again",
      body: "Payment reminders at due date, +7 and +14, escalating to you if it's still open. Then service-due texts bring past customers back — the cheapest work in a city where winning a new customer means outbidding five people.",
    },
  ],
  close:
    "I'm based in Abbotsford and work with trades across Surrey and the rest of the Lower Mainland. I build every system myself, and you'll always be talking to me rather than a support queue. Before anything is billed, I'll put a demo on your real leads so you can watch it work.",
  otherCity: { name: "Abbotsford", href: "/abbotsford" },
};

export default function SurreyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityGraph("Surrey", "/surrey")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbGraph("Surrey", "/surrey")),
        }}
      />
      <CityPage content={content} />
    </>
  );
}
