import type { Metadata } from "next";
import type { ReactNode } from "react";
import SubpageShell from "@/components/SubpageShell";
import { breadcrumbGraph } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — Tyvelo" },
  description:
    "Privacy Policy — Tyvelo. How we collect, use, and protect data when delivering AI automation services to local service businesses.",
  alternates: { canonical: "/privacy" },
};

function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="mb-12">
      <span className="mb-2.5 block font-mono text-[11px] tracking-[0.1em] text-accent">{n}</span>
      <h2 className="mb-4 text-[clamp(20px,3vw,26px)] font-semibold tracking-[-0.02em]">{title}</h2>
      <div className="space-y-3.5 text-[15px] leading-[1.75] text-text">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="my-3.5 space-y-0 [list-style:none]">
      {items.map((it) => (
        <li key={it} className="relative py-1.5 pl-5 text-[15px] leading-[1.75] text-text before:absolute before:left-0 before:top-1/2 before:h-px before:w-1.5 before:-translate-y-1/2 before:bg-accent">
          {it}
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 rounded-[10px] border border-[rgba(91,140,255,0.2)] bg-[rgba(91,140,255,0.12)] px-6 py-5 text-[14px] text-text">
      {children}
    </div>
  );
}

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="text-accent no-underline hover:underline">
    {children}
  </a>
);

export default function PrivacyPage() {
  return (
    <SubpageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbGraph("Privacy Policy", "/privacy")),
        }}
      />
      <header className="mb-[60px] border-b border-white/[0.08] pb-10">
        <span className="mb-5 block font-mono text-[12px] uppercase tracking-[0.08em] text-accent">
          {"// Legal"}
        </span>
        <h1 className="mb-5 text-[clamp(36px,6vw,52px)] font-bold leading-[1.1] tracking-[-0.03em]">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-muted">Last updated: June 2026 &nbsp;·&nbsp; Tyvelo — BC, Canada</p>
      </header>

      <div className="mb-12 space-y-3.5 text-[15px] leading-[1.75] text-text">
        <p>
          This Privacy Policy explains how <strong>Tyvelo</strong> (&quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;) collects, uses, and protects data when you use our AI automation
          services. We keep this short and plain — no legal jargon.
        </p>
        <p>
          By using our services, you agree to the practices described here. If you have questions,
          email us at <A href="mailto:myron@tyvelo.com">myron@tyvelo.com</A>.
        </p>
      </div>

      <div className="my-12 h-px bg-white/[0.08]" />

      <Section n="01" title="What Data We Collect">
        <p>To deliver our automation services, we may collect and process the following types of data on behalf of our clients:</p>
        <Bullets
          items={[
            "Lead contact details (name, email, phone) captured through intake workflows",
            "Business information provided during onboarding or discovery",
            "CRM and business-tool data accessed to build and test automations",
            "Communication logs relevant to automation testing and troubleshooting",
            "Basic analytics about workflow performance and completion rates",
          ]}
        />
        <p>We do not collect or store sensitive personal data beyond what is required to test and validate a specific workflow, and we never use it for anything outside delivering the service you&apos;ve engaged us for.</p>
      </Section>

      <Section n="02" title="How We Use It">
        <p>All data we collect is used solely to provide and improve the services we&apos;ve been hired to deliver. Specifically, we use it to:</p>
        <Bullets
          items={[
            "Build and test AI automations and agents scoped to your business",
            "Respond to, qualify, and route incoming leads within your existing workflow",
            "Connect and pass data between your CRM, booking, and communication tools",
            "Monitor and report on automation performance",
          ]}
        />
        <p>We do not use your data to train AI models, sell advertising, or build profiles for any purpose unrelated to your service agreement with us.</p>
      </Section>

      <Section n="03" title="How It's Stored">
        <p>Data is stored on secured servers with access controls and encryption at rest. We take reasonable technical and organizational measures to protect the data we process.</p>
        <Callout>
          <strong className="font-semibold text-accent">We do not sell, rent, or share your data with third parties</strong> for marketing, advertising, or any purpose outside of delivering our services to you.
        </Callout>
        <p>Subprocessors (such as cloud infrastructure providers) may be used to host or process data. These are bound by data processing agreements and are selected for their strong security practices.</p>
      </Section>

      <Section n="04" title="Third-Party Integrations">
        <p>Our services may integrate with the tools you already use — CRMs, web forms, phone and SMS providers, social media inboxes (such as Instagram and Facebook), Google Business Profile, and calendar or booking tools — to build and run your automation workflows.</p>
        <p>We access only the permissions explicitly granted by you during engagement setup. We do not store credentials in plain text and use secure API authentication methods (OAuth2, API keys via encrypted secrets management) for all integrations.</p>
        <p>Data accessed through third-party integrations is used solely to build, test, and run the automation workflows we&apos;ve been engaged to deliver. It is not used for any other purpose.</p>
      </Section>

      <Section n="05" title="Data Retention">
        <p>We retain client data only as long as necessary to provide our services.</p>
        <Callout>
          <strong className="font-semibold text-accent">Default retention period: 90 days.</strong> After this window, data is automatically deleted from our systems unless you have an active service agreement requiring longer retention, or you&apos;ve requested deletion sooner.
        </Callout>
        <p>When a client ends their engagement with us, their data is deleted within 30 days of the service termination date.</p>
      </Section>

      <Section n="06" title="Your Rights">
        <p>Depending on your location, you may have rights regarding your personal data, including:</p>
        <Bullets
          items={[
            "The right to access data we hold about you",
            "The right to correct inaccurate data",
            "The right to request deletion of your data",
            "The right to withdraw consent for data processing",
          ]}
        />
        <p>To exercise any of these rights, email us at <A href="mailto:myron@tyvelo.com">myron@tyvelo.com</A> with &quot;Data Request&quot; in the subject line. We&apos;ll respond within 14 business days.</p>
      </Section>

      <Section n="07" title="Cookies & Tracking">
        <p>Our public website (tyvelo.com) uses minimal, privacy-respecting analytics to understand traffic patterns. We do not use third-party advertising cookies or cross-site tracking.</p>
        <p>The automation tools we build for clients integrate with CRMs, web forms, social media inboxes, calendar or booking tools, and email or SMS providers. These integrations do not place cookies on end users — they operate server-side and are triggered by workflow events, not browser sessions.</p>
      </Section>

      <Section n="08" title="Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page will reflect when changes were made. Continued use of our services after changes are posted constitutes acceptance of the updated policy.</p>
        <p>For material changes, we&apos;ll notify active clients via email.</p>
      </Section>

      <Section n="09" title="Contact Us">
        <p>Questions, requests, or concerns? Reach out directly:</p>
        <div className="mt-5 rounded-xl border border-white/[0.08] bg-card1 px-7 py-6">
          <p className="mb-2 text-[14px] text-muted">Tyvelo — AI Consultant</p>
          <p className="mb-2 text-[14px] text-muted">Greater Vancouver, BC, Canada</p>
          <a href="mailto:myron@tyvelo.com" className="block font-mono text-[15px] text-accent no-underline hover:underline">
            myron@tyvelo.com
          </a>
          <a href="tel:+17788094442" className="mt-1.5 block font-mono text-[15px] text-accent no-underline hover:underline">
            +1 (778) 809-4442
          </a>
        </div>
      </Section>
    </SubpageShell>
  );
}
