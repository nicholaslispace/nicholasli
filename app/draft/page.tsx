import Link from "next/link";
import type { Metadata } from "next";
import type { SVGProps } from "react";

const APPLYSG_URL =
  "https://www.developer.tech.gov.sg/products/categories/platform/applysg/overview";
const AISAY_URL =
  "https://www.developer.tech.gov.sg/products/categories/productivity-tools/aisay/overview";
const PROFILE_IMAGE_SRC = "/profile.jpg";
const LINKEDIN = "https://www.linkedin.com/in/nicholas-li-62368bb0/";

export const metadata: Metadata = {
  title: "Nicholas Li Draft Homepage",
  description: "Draft homepage exploration for Nicholas Li's personal site.",
  alternates: {
    canonical: "/draft",
  },
};

function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{children}</p>;
}

function MetricPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

export default function DraftHomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-14 sm:px-8 sm:pt-18 md:pt-24">
      <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 px-4 py-3 text-sm text-amber-900">
        Draft homepage exploration. This version sharpens the hero, pulls outcomes forward, and turns
        Product Dojo into something alive instead of &quot;coming soon&quot;.
      </div>

      <header className="mt-8 flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="min-w-0 flex-1 space-y-6">
          <SectionLabel>Draft v2</SectionLabel>
          <div className="space-y-4">
            <h1 className="text-4xl font-medium tracking-tight text-zinc-950 sm:text-5xl">
              Nicholas Li
            </h1>
            <p className="max-w-2xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-3xl sm:leading-tight">
              Product manager building digital products that solve real-world problems.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg sm:leading-relaxed">
              By day, I work on government products used at scale. By night, I build, learn and
              reflect.
            </p>
          </div>
        </div>
        <img
          src={PROFILE_IMAGE_SRC}
          alt="Portrait of Nicholas Li"
          className="h-28 w-28 shrink-0 rounded-full border border-zinc-200 bg-zinc-100 object-cover sm:h-32 sm:w-32"
        />
      </header>

      <section className="mt-12">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Focus</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 sm:text-base">Improve lives. Think AI-first.</p>
        </div>
      </section>

      <section className="mt-16 space-y-8 sm:mt-20">
        <div className="space-y-2">
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl">Products with visible outcomes</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
            A few products I have worked on, with an emphasis on practical value and measurable impact.
          </p>
        </div>

        <div className="space-y-6">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-medium tracking-tight text-zinc-950">ApplySG</h3>
              <a
                href={APPLYSG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 hover:decoration-zinc-400"
              >
                View on Developer Portal
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
              A no-code form and workflow builder that helps government agencies digitalise complex
              schemes, from application forms to multi-step approval processes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <MetricPill>2 months → 2 weeks onboarding</MetricPill>
              <MetricPill>Business Grants Portal 2.0</MetricPill>
              <MetricPill>Research Grants Portal</MetricPill>
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-medium tracking-tight text-zinc-950">AISAY</h3>
              <a
                href={AISAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 hover:decoration-zinc-400"
              >
                View on Developer Portal
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
              An AI-powered document reader that extracts and structures information from messy,
              unstructured documents and feeds it into existing government systems.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <MetricPill>Annual time savings of &gt;30 hours per officer</MetricPill>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-16 space-y-8 sm:mt-20">
        <div className="space-y-2">
          <SectionLabel>Side projects</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl">Building things outside the day job</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-amber-200/90 bg-amber-50/40 p-6">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium tracking-tight text-stone-900">Dabble</h3>
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-stone-600 ring-1 ring-amber-200">
                In progress
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-700 sm:text-base sm:leading-relaxed">
              Tap a button, get one age-appropriate screen-free activity for your kid right now. No
              scroll, no overwhelm, just one useful thing to do.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-medium tracking-tight text-zinc-950">Product Dojo</h3>
              <a
                href="https://product-dojo-3a8y.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 hover:decoration-zinc-400"
              >
                Visit site
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
              PM learnings, frameworks, and resources, distilled into something actually useful.
            </p>
            <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">First note</p>
              <p className="mt-2 text-sm font-medium text-zinc-900">
                Ask: “What did I miss?” Then ask again: “What else did I miss?”
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                A simple product leadership habit for surfacing blind spots, inviting perspective, and
                avoiding the trap of mistaking certainty for empathy.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-16 space-y-8 sm:mt-20">
        <div className="space-y-2">
          <SectionLabel>Speaking</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl">Conference talks and lessons from the trenches</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
            I also share lessons from building and transforming teams in the real world, especially
            where agility, product thinking, and delivery meet.
          </p>
        </div>

        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-medium tracking-tight text-zinc-950">
              Battle for Agility: LeSSons from the Trenches
            </h3>
            <a
              href="https://less.works/conferenza/sessions/2024-less-conference-singapore-battle-for-agility-lessons-from-the-trenches-397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 hover:decoration-zinc-400"
            >
              LeSS Conference Singapore 2024
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
            A 45-minute conference session on how the Business Grants Portal team adopted the LeSS
            framework to address siloed teams, multiple backlogs, and a lack of product-centric
            thinking, creating a structure for the team to learn better and faster.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <MetricPill>45-minute session</MetricPill>
            <MetricPill>LeSS Conference Singapore 2024</MetricPill>
          </div>
        </article>
      </section>

      <footer className="mt-24 border-t border-zinc-200/80 pt-10 sm:mt-28">
        <p className="mb-6 text-sm leading-relaxed text-zinc-600">
          Happy to connect over a cup of coffee ☕
        </p>
        <nav aria-label="Social links" className="flex flex-wrap items-center gap-8">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
            aria-label="Nicholas Li on LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <Link href="/" className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
            <span>Back to current homepage</span>
          </Link>
        </nav>
      </footer>
    </main>
  );
}
