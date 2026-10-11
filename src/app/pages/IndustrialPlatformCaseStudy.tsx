import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Activity,
  ArrowLeft,
  Layers3,
  Lock,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import configurationDashboard from "../../imports/industrial-configuration-dashboard.png";
import smartPricing from "../../imports/industrial-smart-pricing.png";

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

const principles = [
  {
    title: "Clarity & error prevention",
    detail:
      "Make complex inputs understandable and surface invalid configurations early.",
  },
  {
    title: "Guided decision-making",
    detail:
      "Mirror real industrial workflows with structured, step-by-step interactions.",
  },
  {
    title: "Pricing transparency",
    detail:
      "Show customers how selections affect pricing and what happens next.",
  },
  {
    title: "Scalable foundations",
    detail:
      "Support additional products, pricing tiers, and field-use contexts over time.",
  },
];

export function IndustrialPlatformCaseStudy() {
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
              {["Enterprise UX", "Industrial Tools", "Decision Support"].map(
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
              From Industrial Configuration to Smart Pricing
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Designing two connected enterprise web applications that helped
              teams configure pulley-lagging solutions accurately and turn
              product selections into faster, more transparent quotes.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-6 border-y border-border/70 py-7 md:grid-cols-4"
          >
            {[
              { label: "Role", value: "UX Designer" },
              { label: "Timeline", value: "2023" },
              { label: "Project Type", value: "Enterprise Web Apps" },
              { label: "Status", value: "Deployed" },
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
            className="flex gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5"
          >
            <Lock
              size={16}
              className="mt-0.5 shrink-0 text-amber-500"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Confidentiality note —{" "}
              </span>
              Both applications were developed under a Non-Disclosure
              Agreement. The screens shown here are limited, sanitized
              representations. Proprietary recommendation logic, pricing rules,
              and detailed workflows have been omitted.
            </p>
          </motion.div>
        </motion.header>

        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-border/50 bg-muted/20 shadow-2xl shadow-black/15"
        >
          <ImageWithFallback
            src={configurationDashboard}
            alt="Sanitized industrial configuration dashboard"
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
            <SectionLabel>Problem Context</SectionLabel>
            <h2 className="sticky top-28 font-display text-2xl font-bold text-foreground">
              Fragmented decisions across production and sales
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="space-y-5 md:col-span-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Configuring specialized pulley-lagging products depended on
              spreadsheets, manuals, calculators, and expert knowledge.
              Mechanical engineers and site operators lacked contextual
              guidance, increasing the risk of unsuitable material choices and
              manufacturing errors.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The same complexity continued into purchasing. Customers waited
              for sales teams to interpret product details and manually prepare
              quotes through spreadsheets and email, creating slow response
              times and avoidable communication errors.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="space-y-6 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10"
        >
          <SectionLabel>The Connected Experience</SectionLabel>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground">
            I approached the work as two parts of one decision journey: help
            operational teams reach the right product configuration, then help
            customers and sales teams turn valid selections into accurate
            quotes.
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              {
                label: "01 · Configuration & Optimization",
                title: "Choose the right solution",
                detail:
                  "A structured Projects → Conveyors → Pulleys workflow captures operating conditions and supports material recommendations.",
              },
              {
                label: "02 · Smart Pricing",
                title: "Move from selection to quote",
                detail:
                  "A guided product flow calculates pricing, validates choices, and lets users save, export, or continue with an order.",
              },
            ].map(({ label, title, detail }) => (
              <div
                key={label}
                className="rounded-2xl border border-border/60 bg-card/70 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">
                  {label}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-foreground">
                  {title}
                </p>
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
              End-to-end product design
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-3 md:col-span-8">
            {[
              {
                title: "Research & workflow definition",
                detail:
                  "Interviewed mechanical engineers, site operators, sales staff, and repeat customers.",
              },
              {
                title: "Cross-functional alignment",
                detail:
                  "Worked with product owners, domain experts, sales teams, and engineers to translate complex rules into usable flows.",
              },
              {
                title: "Interaction & interface design",
                detail:
                  "Created user journeys, wireframes, high-fidelity mockups, and interactive prototypes.",
              },
              {
                title: "Iteration leadership",
                detail:
                  "Led four structured design cycles based on testing, client feedback, and evolving technical requirements.",
              },
            ].map(({ title, detail }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-8"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Discovery</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-foreground">
              What research revealed
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {[
              "Material choices were often made without enough contextual guidance.",
              "Product configuration was fragmented across multiple tools.",
              "Customers wanted quotes without waiting for manual confirmation.",
              "Sales teams repeatedly rebuilt standard quotes and corrected incomplete requests.",
            ].map((finding) => (
              <div
                key={finding}
                className="flex gap-3 rounded-2xl border border-border/60 bg-card p-5"
              >
                <Users
                  size={15}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {finding}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {principles.map(({ title, detail }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-muted p-5"
              >
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            ))}
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
              Four cycles from structure to scale
            </h2>
          </motion.div>

          {[
            {
              number: "01",
              title: "Foundational Architecture",
              text: "Mapped each product around the user's mental model. The optimization tool followed Projects, Conveyors, and Pulleys; the pricing portal followed Product Selection, Pricing, and Quote Management.",
            },
            {
              number: "02",
              title: "Decision Logic Integration",
              text: "Designed components for dynamic material recommendations and real-time pricing updates while keeping complex system logic understandable at the point of action.",
            },
            {
              number: "03",
              title: "Faster Data Interaction",
              text: "Added editable cards, search, filters, quick analysis, quote management, and clear save or export actions to reduce repetitive work.",
            },
            {
              number: "04",
              title: "Refinement & Accessibility",
              text: "Improved hierarchy, contrast, spacing, touch targets, validation feedback, and responsive behavior for office desktops, tablets, and field laptops.",
            },
          ].map(({ number, title, text }) => (
            <motion.div key={number} variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-6 text-xs font-semibold tabular-nums text-primary/50">
                  {number}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {title}
                </h3>
              </div>
              <p className="pl-9 leading-relaxed text-muted-foreground">
                {text}
              </p>
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
            <SectionLabel>Limited Design Views</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Two products, one visual system
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex gap-3 rounded-2xl border border-border bg-muted p-5"
          >
            <Lock
              size={15}
              className="mt-0.5 shrink-0 text-muted-foreground"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Only these sanitized overview screens are shared. Detailed
              configuration states, recommendation outputs, pricing breakdowns,
              and administrative workflows remain confidential.
            </p>
          </motion.div>

          {[
            {
              src: configurationDashboard,
              title: "Configuration & Optimization Dashboard",
              detail:
                "A three-column operational model keeps projects, conveyors, and pulleys visible while supporting search, filters, editing, and quick analysis.",
            },
            {
              src: smartPricing,
              title: "Smart Pricing Product Selection",
              detail:
                "A visual product catalogue creates a clear entry point into guided configuration, pricing, purchase history, and cart workflows.",
            },
          ].map(({ src, title, detail }) => (
            <motion.figure
              key={title}
              variants={fadeUp}
              className="space-y-3"
            >
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
                <ImageWithFallback
                  src={src}
                  alt={title}
                  className="w-full object-contain"
                />
              </div>
              <figcaption className="px-1">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="space-y-6 rounded-3xl border border-border/60 bg-card p-8 md:p-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-500/10">
              <Activity size={14} className="text-green-500" />
            </div>
            <SectionLabel>Outcome & Impact</SectionLabel>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                stat: "30%",
                text: "reduction in configuration-related manufacturing errors",
              },
              {
                stat: "25%",
                text: "increase in production throughput",
              },
              {
                stat: "60%",
                text: "faster quote turnaround than manual methods",
              },
            ].map(({ stat, text }) => (
              <div
                key={stat}
                className="rounded-2xl border border-border/60 bg-muted/30 p-5"
              >
                <p className="font-display text-2xl font-bold text-foreground">
                  {stat}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p className="leading-relaxed text-muted-foreground">
            The configuration tool was deployed globally as part of production
            planning and quality assurance. The pricing portal reduced routine
            sales dependency while improving customer confidence through
            faster, more transparent self-service quotes.
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
            <SectionLabel>Reflection</SectionLabel>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="border-l-2 border-primary/30 pl-6"
          >
            <p className="text-xl font-light leading-relaxed text-foreground">
              These projects strengthened my ability to turn{" "}
              <span className="font-semibold text-primary">
                specialized domain logic into approachable product experiences
              </span>
              . The key was aligning users, business teams, and engineering
              early—then designing enough structure to prevent errors without
              slowing expert users down.
            </p>
          </motion.div>
        </motion.section>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center justify-between border-t border-border/60 pb-4 pt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} /> All Projects
          </Link>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Layers3 size={14} />
            Brigosha Technologies · 2023
          </span>
        </motion.div>
      </motion.article>
    </div>
  );
}
