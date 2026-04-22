import type { SVGProps } from "react";

const APPLYSG_URL =
  "https://www.developer.tech.gov.sg/products/categories/platform/applysg/overview";
const AISAY_URL =
  "https://www.developer.tech.gov.sg/products/categories/productivity-tools/aisay/overview";
const PROFILE_IMAGE_SRC = "/profile.jpg";

const LINKEDIN = "https://www.linkedin.com/in/nicholas-li-62368bb0/";

/** Replace when ready */
const PLACEHOLDER_GITHUB = "#";
const PLACEHOLDER_EMAIL = "mailto:you@example.com";

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pb-24 pt-16 sm:px-8 sm:pt-20 md:pt-24">
      <header className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="min-w-0 flex-1 space-y-6">
          <h1 className="text-4xl font-medium tracking-tight text-zinc-950 sm:text-5xl">
            Nicholas Li
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl sm:leading-relaxed">
            PM by day, builder by night. I work on government digital products and side projects to
            solve real-world problems.
          </p>
        </div>
        <img
          src={PROFILE_IMAGE_SRC}
          alt="Portrait of Nicholas Li"
          className="h-28 w-28 shrink-0 rounded-full border border-zinc-200 bg-zinc-100 object-cover sm:h-32 sm:w-32"
        />
      </header>

      <section className="mt-14 space-y-10 sm:mt-16 sm:space-y-12">
        <h2 className="text-xl font-medium tracking-tight text-zinc-900 sm:text-2xl">Products</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Government
            </h3>
            <ul className="mt-8 space-y-14">
              <li className="border-l border-zinc-300 pl-6">
                <p className="text-sm font-medium text-zinc-950 sm:text-base">
                  ApplySG ·{" "}
                  <a
                    href={APPLYSG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 hover:decoration-zinc-400"
                  >
                    View on Developer Portal →
                  </a>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
                  A no-code form and workflow builder that lets government agencies digitalise complex
                  schemes — from application forms to multi-step approval processes. Powers the Business
                  Grants Portal 2.0 and Research Grants Portal. Cut onboarding time for complex grant
                  schemes from 2 months to 2 weeks.
                </p>
              </li>
              <li className="border-l border-zinc-300 pl-6">
                <p className="text-sm font-medium text-zinc-950 sm:text-base">
                  AISAY ·{" "}
                  <a
                    href={AISAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 hover:decoration-zinc-400"
                  >
                    View on Developer Portal →
                  </a>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
                  An AI-powered document reader that extracts and structures information from unstructured
                  documents — invoices, bank statements, identity cards, handwritten notes — and feeds it
                  into existing government systems. Handles multilingual text, processes up to 50
                  documents simultaneously, and flags potentially suspicious document elements.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Side Projects
            </h3>
            <ul className="mt-8 space-y-12">
              <li className="border-l border-amber-200/90 pl-6">
                <p className="text-sm font-medium text-stone-900 sm:text-base">
                  Dabble ·{" "}
                  <span className="font-normal text-stone-500">[coming soon]</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base sm:leading-relaxed">
                  Tap a button, get one age-appropriate screen-free activity for your kid right now. No
                  scroll, no overwhelm — just one thing to do.
                </p>
              </li>
              <li className="border-l border-amber-200/90 pl-6">
                <p className="text-sm font-medium text-stone-900 sm:text-base">
                  Product Dojo ·{" "}
                  <span className="font-normal text-stone-500">[coming soon]</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base sm:leading-relaxed">
                  PM learnings, frameworks, and resources — distilled into something actually useful.
                </p>
              </li>
            </ul>
          </div>
        </div>
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
          <a
            href={PLACEHOLDER_GITHUB}
            className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
            aria-label="GitHub (placeholder link)"
          >
            <GitHubIcon className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href={PLACEHOLDER_EMAIL}
            className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
            aria-label="Email (placeholder)"
          >
            <EmailIcon className="h-5 w-5" />
            <span>Email</span>
          </a>
        </nav>
      </footer>
    </main>
  );
}
