import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Heart,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import desktopView from "../../imports/asob-desktop.png";
import mobileView from "../../imports/asob-mobile.png";
import mobileMenu from "../../imports/asob-mobile-menu.png";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary/70">
      {children}
    </p>
  );
}

const goals = [
  {
    title: "Enhance user experience",
    detail: "Make key community actions intuitive and accessible across devices.",
  },
  {
    title: "Express Assamese culture",
    detail: "Build a distinct visual language rooted in the society's heritage.",
  },
  {
    title: "Increase engagement",
    detail: "Create clearer paths to events, membership, and community updates.",
  },
];

const contributions = [
  {
    role: "UX/UI Designer",
    detail: "Owned the experience and interface design in collaboration with the R&D team.",
  },
  {
    role: "UX Researcher",
    detail: "Interviewed members, volunteers, organizers, and project stakeholders.",
  },
  {
    role: "Information Architect",
    detail: "Reorganized navigation and simplified high-priority community journeys.",
  },
  {
    role: "Design Partner",
    detail: "Reviewed implementation and guided iterations across desktop and mobile.",
  },
];

export function AssamSocietyCaseStudy() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--orb-amber) 0%, transparent 60%)",
        }}
      />

      <motion.article
        initial="initial"
        animate="animate"
        variants={stagger}
        className="mx-auto max-w-4xl space-y-20 px-6 py-12"
      >
        <motion.div variants={fadeUp}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} /> Back to work
          </Link>
        </motion.div>

        <motion.header variants={stagger} className="space-y-8">
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {["Cross-Platform", "Cultural UX", "Responsive Design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <h1
              className="text-balance font-display font-bold leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
            >
              Celebrating Culture Through Design
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Crafting a responsive website for Assam Society of Bangalore that
              made community participation easier while bringing Assamese
              identity to the forefront.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-6 border-y border-border/70 py-7 md:grid-cols-4"
          >
            {[
              { label: "Role", value: "UX/UI Designer" },
              { label: "Timeline", value: "2023" },
              { label: "Project Type", value: "Cross-Platform" },
              { label: "Status", value: "Live" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="mb-1 text-xs font-medium text-muted-foreground">
                  {label}
                </p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex gap-3 rounded-2xl border border-border/60 bg-muted/50 p-5"
          >
            <Users
              size={16}
              className="mt-0.5 shrink-0 text-muted-foreground"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Collaboration —{" "}
              </span>
              Partnered with ASB members, volunteers, its core committee, and an
              R&D development team from research through implementation.
            </p>
          </motion.div>
        </motion.header>

        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-border/50 bg-muted/20 shadow-2xl shadow-black/15"
        >
          <ImageWithFallback
            src={desktopView}
            alt="Assam Society of Bangalore Durga Puja website on desktop"
            className="w-full object-cover"
          />
        </motion.div>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-8 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="sticky top-28 font-display text-2xl font-bold text-foreground">
              A vibrant community with an outdated digital home
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="space-y-5 md:col-span-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Assam Society of Bangalore is a non-profit cultural organization
              connecting the Assamese diaspora in Bengaluru. Its existing
              website was difficult to navigate and lacked the warmth and
              cultural resonance of the community it represented.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Event registrations remained mostly offline and inconsistent,
              while prospective members often did not know how to join or
              engage online.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  The brief —{" "}
                </span>
                “We need a website that’s simple, modern, and rooted in
                Assamese culture — something that feels like home.”
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="space-y-5 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10"
        >
          <SectionLabel>Project Goals</SectionLabel>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {goals.map(({ title, detail }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card/70 p-5"
              >
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-8 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <SectionLabel>My Role</SectionLabel>
            <h2 className="sticky top-28 font-display text-2xl font-bold text-foreground">
              Contributions
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-8">
            <div className="space-y-3">
              {contributions.map(({ role, detail }) => (
                <div
                  key={role}
                  className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5"
                >
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {role}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-14"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Design Process</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-foreground">
              From community insight to cultural expression
            </h2>
          </motion.div>

          {[
            {
              number: "01",
              title: "Stakeholder Interviews & Cultural Research",
              text: "I interviewed members, volunteers, and organizers to understand their goals, pain points, and the visual cues that made an experience feel authentically Assamese.",
              note:
                "The old website felt generic and did not express the regional pride members wanted to share with newcomers and younger audiences.",
            },
            {
              number: "02",
              title: "Defining the Information Architecture",
              text: "I simplified menu categories, introduced clear calls to action, and made navigation patterns consistent so events and membership were easier to discover.",
              note:
                "Priority actions were reduced to short, predictable journeys instead of being buried within dense pages.",
            },
            {
              number: "03",
              title: "Cultural Simplicity in Visual Design",
              text: "Traditional Jaapi and Bihu-inspired motifs were paired with rich reds, deep maroons, gold accents, Assamese script, and deliberate white space.",
              note:
                "The system balanced a modern responsive interface with recognizable cultural references rather than treating decoration as an afterthought.",
            },
            {
              number: "04",
              title: "Collaboration & Iteration",
              text: "Committee feedback and device testing shaped each iteration. I worked with the development team to preserve visual fidelity and simplify event RSVP and membership access.",
              note:
                "Replacing a rotating carousel with a focused static hero improved clarity and gave the cultural message more impact.",
            },
          ].map(({ number, title, text, note }) => (
            <motion.div key={number} variants={fadeUp} className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-6 text-xs font-semibold tabular-nums text-primary/50">
                  {number}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {title}
                </h3>
              </div>
              <div className="space-y-4 pl-9">
                <p className="leading-relaxed text-muted-foreground">{text}</p>
                <div className="rounded-2xl border border-border bg-muted p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Design insight —{" "}
                    </span>
                    {note}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-8"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Project Views</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-foreground">
              A responsive cultural experience
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl leading-relaxed text-muted-foreground"
          >
            The interface adapts the same visual language and information
            hierarchy from a full desktop experience to compact mobile
            navigation and event content.
          </motion.p>

          <motion.figure variants={fadeUp} className="space-y-2">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
              <ImageWithFallback
                src={desktopView}
                alt="Desktop view of the Assam Society of Bangalore website"
                className="w-full object-contain"
              />
            </div>
            <figcaption className="px-1 text-xs text-muted-foreground">
              Desktop home page — cultural hero, event details, and persistent
              community links
            </figcaption>
          </motion.figure>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {[
              {
                src: mobileView,
                title: "Mobile event experience",
                detail:
                  "A stacked layout keeps the countdown, event story, and social actions easy to scan.",
              },
              {
                src: mobileMenu,
                title: "Mobile navigation",
                detail:
                  "A focused menu gives every primary destination equal clarity without crowding the header.",
              },
            ].map(({ src, title, detail }) => (
              <figure
                key={title}
                className="space-y-3 rounded-2xl border border-border/50 bg-muted/20 p-4"
              >
                <div className="flex justify-center overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={src}
                    alt={title}
                    className="w-full max-w-[400px] object-contain"
                  />
                </div>
                <figcaption>
                  <p className="text-sm font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {detail}
                  </p>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="space-y-5 rounded-3xl border border-border/60 bg-card p-8 md:p-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <Heart size={14} className="text-primary" />
            </div>
            <SectionLabel>Outcome & Impact</SectionLabel>
          </div>
          <blockquote className="font-display text-2xl font-semibold leading-relaxed text-foreground">
            “It finally feels like our story is online.”
          </blockquote>
          <p className="leading-relaxed text-muted-foreground">
            The community response was overwhelmingly positive. The live site
            now works as a digital hub for cultural expression, event updates,
            and new-member onboarding.
          </p>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-5"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Reflections</SectionLabel>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="border-l-2 border-primary/30 pl-6"
          >
            <p className="text-xl font-light leading-relaxed text-foreground">
              This project reaffirmed the power of{" "}
              <span className="font-semibold text-primary">
                culturally rooted design
              </span>
              . By listening deeply and simplifying the experience, we created
              a platform that bridged tradition and technology without losing
              the community’s voice.
            </p>
          </motion.div>
        </motion.section>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-4 border-t border-border/60 pb-4 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} /> All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Globe size={14} />
              Brigosha Technologies · 2023
            </span>
            <a
              href="https://assamsocietyofbangalore.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              View live website <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}
