"use client";

import React from "react";
import { Typography } from "@/components/typography";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Experience = {
  company: string;
  companyLogo: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "PayPal",
    companyLogo: "/experiences/paypal/paypal.png",
    role: "Software Engineer Intern",
    period: "Jul 2025 – Present",
    summary:
      "Contributing to the development of PayPal's global products. (Japan, Mexico, etc)",
    highlights: [
      "Onboarding and ramping up on fintech knowledge... (I now know whats a payment ecosystem teehee)",
      "Enhanced our Checkout UI for users to pay with their most recently added payment methods.",
      "Built an MCP server to create test accounts and Checkout sessions for our integration tests.",
    ],
  },
  {
    company: "GIC",
    companyLogo: "/experiences/gic/gic.png",
    role: "Cloud Engineer Intern",
    period: "Jan 2025 – Jun 2025",
    summary:
      "Contributed to GIC's new internal infrastructure which supports 40+ of GIC's internal teams.",
    highlights: [
      "Led the development of an automated CI workflow that dynamically tests changed modules, reducing bugs that made their way to production.",
      "Engineered an automated secret rotation system for Redis AUTH tokens using AWS; developed mock MVPs to rigorously test real-world usage and edge cases.",
      "I also got the AWS Solutions Architect Associate certification! (I'm a certified AWS Solutions Architect now!)",
    ],
  },
  {
    company: "Vucar",
    companyLogo: "/experiences/vucar/vucar.png",
    role: "Fullstack Software Engineer Intern",
    period: "May 2024 – Aug 2024",
    summary:
      "Contributed to Vucar's platform product, implementing new features and improving the overall user experience.",
    highlights: [
      "Consolidated the source code of two internal platforms into a unified codebase by aligning their architecture and migrating to a shared technology stack, improving development consistency.",
      "Researched and implemented performance optimizations based on Google’s updated Core Web Vitals, improving Lighthouse and PageSpeed performance scores by 20%.",
      "Redesigned CI workflows during monorepo migration by enforcing branch naming conventions (e.g., `web/feature/*`), enabling targeted auto-deployment based on modified folders.",
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <div className="space-y-8 py-8 text-[#46688d] mobile-container">
      <header className="space-y-2">
        <Typography
          variant="display-md"
          weight="semibold"
          className="text-[#46688d] mobile-heading mobile:text-2xl"
        >
          my experiences
        </Typography>
        <Typography variant="body-lg" className="opacity-70 text-[#46688d]">
          a wandering path through projects, teams, and little details that made
          me smile
        </Typography>
      </header>

      <div className="relative mx-auto max-w-3xl">
        {/* timeline spine */}
        <div className="pointer-events-none absolute left-[14px] top-0 h-full w-[2px] bg-[#2f4f7f]/30" />

        <ul className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <li key={`${exp.company}-${idx}`} className="group">
              <TimelineItem index={idx}>
                <ExperienceCard experience={exp} index={idx} />
              </TimelineItem>
            </li>
          ))}
        </ul>
      </div>

      <StyleInjector />
    </div>
  );
}

function TimelineItem({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  // simple stagger via CSS variables, no JS observers needed
  return (
    <div
      style={{
        // create a slight alternating drift and staggered delay
        animationDelay: `${index * 80}ms`,
      }}
      className="relative flex translate-y-4 items-start opacity-0 [animation:fade-in-up_600ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
    >
      {/* dot */}
      <div className="relative z-10 mr-4 mt-2 h-3 w-3 ml-[9px] shrink-0 rounded-full bg-[#2f4f7f] ring-4 ring-[#2f4f7f]/15" />
      <div className="w-full">{children}</div>
    </div>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <Card className="overflow-hidden bg-[#fffadf]/95 backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md">
      <Ribbon index={index} label={experience.period} />
      <CardContent className="space-y-3 pt-8">
        <div className="flex flex-col items-start justify-center">
          <Image
            src={experience.companyLogo}
            alt={experience.company}
            width={200}
            height={200}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <Typography
            variant="title-lg"
            weight="semibold"
            className="text-[#46688d]"
          >
            {experience.role}
          </Typography>
          <Typography
            variant="label-md"
            className="rounded-md bg-[#2f4f7f]/10 px-2 py-1 text-[#2f4f7f]"
          >
            {experience.company}
          </Typography>
        </div>
        <Typography variant="body-sm" className="text-[#46688d]/80">
          {experience.summary}
        </Typography>
        <ul className="grid gap-2 pl-5 text-[#46688d] marker:text-[#2f4f7f] list-disc">
          {experience.highlights.map((h, i) => (
            <li key={i} className="transition-colors">
              {h}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Ribbon({ label, index }: { label: string; index: number }) {
  // a small decorative ribbon that slides in
  return (
    <div
      style={{ animationDelay: `${index * 80 + 100}ms` }}
      className="pointer-events-none absolute -left-1 top-0 translate-y-2 opacity-0 [animation:slide-fade-in_500ms_ease-out_forwards]"
    >
      <div className="rounded-br-md bg-[#2f4f7f] px-3 py-1 text-xs font-semibold text-[#fffadf] shadow-sm">
        {label}
      </div>
    </div>
  );
}

// Tailwind arbitrary keyframes via CSS - appended using a style tag within the page
// Since globals.css already includes tailwindcss-animate, we can add extra keyframes locally
function StyleInjector() {
  return (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `@keyframes fade-in-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-fade-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`,
      }}
    />
  );
}
