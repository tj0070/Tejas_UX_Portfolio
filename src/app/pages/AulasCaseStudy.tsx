import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Globe, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import fullScrollMockup from "../../imports/aulas_page-4.png";
import chatbotMockup from "../../imports/aulas-chatbot.png";
import phoneMockup from "../../imports/aulas-mobile-showcase.png";

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
    <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">
      {children}
    </p>
  );
}

const designScreens = [
  { name: "Hero / Landing Section", detail: "Bold purple palette, \"Maximise your Revenue Potential\" headline, app download CTAs" },
  { name: "Features Section", detail: "Circular graphic motifs, user management, classroom insights, operational efficiency blocks" },
  { name: "Brand Transformation Section", detail: "\"With aulas, Transform Into A Unique Online Brand!\" — value-first messaging" },
  { name: "Platform Showcase", detail: "Laptop + mobile mockup demonstrating the product in real context" },
  { name: "Join the Aulas Movement", detail: "Social proof strip with community metrics" },
  { name: "About Us", detail: "Light purple background with circular illustration, brand story narrative" },
  { name: "Testimonials", detail: "\"What Our Users Say About Us\" — review cards with verified badges" },
  { name: "Our Blogs", detail: "Card-based editorial layout for thought leadership content" },
  { name: "From The CEO's Desk", detail: "Founder quote section with signature and brand voice" },
  { name: "Chatbot Widget", detail: "Contextual onboarding bot — role selector flow: School / Coaching Centre / Content Creator / Principal / Tuitions" },
];

export function AulasCaseStudy() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, var(--orb-primary) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, var(--orb-amber) 0%, transparent 60%)" }}
      />

      <motion.article
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-4xl mx-auto px-6 py-12 space-y-20"
      >
        {/* Back */}
        <motion.div variants={fadeUp}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} /> Back to work
          </Link>
        </motion.div>

        {/* ── HEADER ───────────────────────────────────────────────────── */}
        <motion.header variants={stagger} className="space-y-8">
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {["Web Development", "Brand Design", "UX Strategy"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-muted border border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="font-display font-bold tracking-tight leading-[1.06] text-balance"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
            >
              Reimagining Aulas' Digital Presence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Redesigning the Aulas product website to increase engagement and conversions by clearly showcasing product value — while staying true to the brand's bold identity.
            </p>
          </motion.div>

          {/* Meta */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-7 border-y border-border/70"
          >
            {[
              { label: "Role", value: "UX/UI Designer" },
              { label: "Timeline", value: "6 weeks" },
              { label: "Project Type", value: "Web Development" },
              { label: "Status", value: "Completed" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-muted-foreground font-medium mb-1">{label}</p>
                <p className="font-semibold text-foreground text-sm">{value}</p>
              </div>
            ))}
          </motion.div>

          {/* Team callout */}
          <motion.div
            variants={fadeUp}
            className="flex gap-3 p-5 rounded-2xl bg-muted/50 border border-border/60"
          >
            <Globe size={16} className="shrink-0 mt-0.5 text-muted-foreground" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Team — </span>
              Collaborated cross-functionally with Sales, Marketing, and Development teams to align goals, surface user objections, and deliver a cohesive redesign.
            </p>
          </motion.div>
        </motion.header>

        {/* ── BACKGROUND & PROBLEM ─────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <SectionLabel>Background & Problem</SectionLabel>
            <h2 className="font-display font-bold text-2xl text-foreground sticky top-28">
              A robust product, an underperforming website
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Aulas is an education technology platform offering a suite of tools for school management and digital learning. Despite having a robust product, their{" "}
              <span className="text-foreground font-medium">existing marketing website was underperforming</span>.
            </p>
            <ul className="space-y-3">
              {[
                "Users dropped off before discovering the product's key value propositions",
                "Messaging was vague and feature-heavy",
                "Visual identity didn't reflect the platform's modern, tech-forward brand",
                "Lack of guided interaction for users unfamiliar with the ed-tech space",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 p-5 rounded-2xl bg-muted border border-border">
              <span className="shrink-0">📉</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Business Impact — </span>
                Low engagement metrics and missed conversion opportunities for demo requests and app downloads.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── OBJECTIVE ────────────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="p-8 md:p-10 rounded-3xl border border-primary/20 bg-primary/5 space-y-5"
        >
          <SectionLabel>The Objective</SectionLabel>
          <p className="text-foreground leading-relaxed text-lg">
            To{" "}
            <span className="text-primary font-semibold">redesign the Aulas product website</span>{" "}
            into a modern, intuitive experience that reflects the brand's bold identity and clearly demonstrates product capabilities, resulting in increased{" "}
            <span className="text-primary font-semibold">engagement and conversions</span>.
          </p>
          <ul className="space-y-2.5 pt-1">
            {[
              "Tell a compelling product story",
              "Highlight benefits over features",
              "Guide users toward meaningful actions (signup, demo, app download)",
              "Stay true to Aulas' brand tone and visual language",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ── MY ROLE ──────────────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <SectionLabel>My Role</SectionLabel>
            <h2 className="font-display font-bold text-2xl text-foreground sticky top-28">
              Contributions
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-8">
            <ul className="space-y-3">
              {[
                { role: "UX/UI Designer & Strategic Collaborator", desc: "Owned the end-to-end design of the website redesign" },
                { role: "Workshop Facilitator", desc: "Led collaborative workshops with sales and marketing teams to align goals and surface user objections" },
                { role: "Chatbot Designer", desc: "Designed the chatbot section for user guidance and lead generation" },
                { role: "Visual Designer", desc: "Delivered fully responsive, brand-consistent visual mockups across all breakpoints" },
                { role: "Implementation Partner", desc: "Oversaw testing and the feedback loop with the development team" },
              ].map(({ role, desc }, i) => (
                <li key={i} className="flex gap-4 p-5 rounded-2xl border border-border/60 bg-card">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{role}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* ── DESIGN PROCESS ───────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-14"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Design Process</SectionLabel>
            <h2 className="font-display font-bold text-3xl text-foreground">How I approached it</h2>
          </motion.div>

          {/* Step 1 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tabular-nums text-primary/50 w-6">01</span>
              <h3 className="font-display font-semibold text-xl text-foreground">
                Team Alignment & Research
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-9 text-base">
              I partnered with{" "}
              <span className="text-foreground font-medium">sales and marketing stakeholders</span>{" "}
              to surface key user objections, goals, and engagement drop-off points.
            </p>
            <div className="ml-9 space-y-2.5">
              {[
                "A lack of clarity around what Aulas actually does",
                "Visitors dropping off before reaching the CTA",
                "A need for human connection through guidance or interaction",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-muted-foreground text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="ml-9 flex gap-3 p-5 rounded-2xl bg-muted border border-border">
              <span className="shrink-0">🧠</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Insight — </span>
                "Users aren't sure what the product does until they scroll halfway down — we're missing the moment of first impression."
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tabular-nums text-primary/50 w-6">02</span>
              <h3 className="font-display font-semibold text-xl text-foreground">
                Information Architecture & Narrative Flow
              </h3>
            </div>
            <div className="pl-9 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                We restructured the site to follow a{" "}
                <span className="text-foreground font-medium">clear narrative arc</span>{" "}
                designed to guide visitors from awareness to action.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {["Who we are", "What we solve", "How it works", "Real results", "Let's talk"].map((step, i, arr) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-full border border-border bg-card font-medium text-foreground text-xs">{step}</span>
                    {i < arr.length - 1 && <span className="text-muted-foreground/40">→</span>}
                  </span>
                ))}
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "Persistent CTA", desc: "Signposting for demos, downloads, and chatbot across all scroll depths" },
                  { label: "Value-first messaging", desc: "Simplified copy — benefits front and centre, features secondary" },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                    <span><span className="font-semibold text-foreground">{label} — </span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tabular-nums text-primary/50 w-6">03</span>
              <h3 className="font-display font-semibold text-xl text-foreground">
                Visual Design & Brand Integration
              </h3>
            </div>
            <div className="pl-9 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                We embraced Aulas'{" "}
                <span className="text-foreground font-medium">bold purple palette</span>,{" "}
                circular graphic motifs, and sharp typography to create a visual identity that felt both innovative and trustworthy.
              </p>
              <div className="space-y-2.5">
                {[
                  { label: "Product-first layout", desc: "Clean sections that showed the platform in action" },
                  { label: "Vector illustrations & iconography", desc: "Matched the ed-tech theme throughout" },
                  { label: "Clear content blocks", desc: "User management, classroom insights, and operational efficiency" },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                    <span><span className="font-semibold text-foreground">{label} — </span>{desc}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 p-5 rounded-2xl bg-muted border border-border">
                <span className="shrink-0">✏️</span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Personal Insight — </span>
                  I worked closely with the design lead to maintain consistency with Aulas' existing product UI, ensuring users felt the connection from website to app.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tabular-nums text-primary/50 w-6">04</span>
              <h3 className="font-display font-semibold text-xl text-foreground">
                Feature Addition: Chatbot Section
              </h3>
            </div>
            <div className="pl-9 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                A contextual chatbot used a short role-selection flow to answer relevant
                questions and guide visitors toward the right next step.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 mt-2">
                <ImageWithFallback
                  src={chatbotMockup}
                  alt="Aulas desktop landing page with the role-based chatbot open"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ── DESIGN SCREENS ───────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-8"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Wireframes</SectionLabel>
            <h2 className="font-display font-bold text-3xl text-foreground">
              What was designed
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
            The redesigned website comprised ten distinct sections, each serving a specific role in the narrative arc from first impression to conversion.
          </motion.p>

          {/* Full scroll mockup */}
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
              <ImageWithFallback
                src={fullScrollMockup}
                alt="Aulas website full scroll mockup"
                className="w-full object-contain"
              />
            </div>
            <p className="text-xs text-muted-foreground px-1">Full website scroll mockup — all sections in sequence</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {designScreens.map(({ name, detail }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-3 p-5 rounded-2xl border border-border/60 bg-card hover:border-border transition-colors"
              >
                <span className="text-xs font-semibold tabular-nums text-primary/40 w-5 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm">{name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Design priorities */}
          <motion.div variants={fadeUp} className="space-y-3 pt-2">
            <p className="text-sm font-semibold text-muted-foreground">Each screen prioritized:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Clarity", desc: "value over feature-dump" },
                { label: "Consistency", desc: "website to app handoff" },
                { label: "Conversion", desc: "every scroll depth" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm">
                  <span className="font-semibold text-foreground">{label}</span>
                  <span className="text-muted-foreground">{desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ── OUTCOME & IMPACT ─────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="p-8 md:p-10 rounded-3xl border border-border/60 bg-card space-y-5"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
              <TrendingUp size={14} className="text-green-500" />
            </div>
            <SectionLabel>Outcome & Impact</SectionLabel>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { stat: "30%", text: "increase in engagement" },
              { stat: "20%", text: "boost in conversions" },
            ].map(({ stat, text }) => (
              <div key={text} className="rounded-2xl border border-border/60 bg-muted/30 p-5">
                <p className="font-display text-2xl font-bold text-foreground">{stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 mt-2">
            <ImageWithFallback
              src={phoneMockup}
              alt="Aulas responsive website shown across two mobile devices"
              className="w-full object-contain"
            />
          </div>
        </motion.section>

        {/* ── REFLECTIONS ──────────────────────────────────────────────── */}
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
          <motion.div variants={fadeUp} className="pl-6 border-l-2 border-primary/30 space-y-5">
            <p className="text-foreground text-xl leading-relaxed font-light">
              This project reminded me that{" "}
              <span className="font-semibold text-primary">great web design isn't just about aesthetics — it's about clarity, confidence, and connection</span>.
              By aligning cross-functional teams early and keeping user perspective central, we were able to design a website that not only looked great, but performed meaningfully.
            </p>
            <p className="text-muted-foreground text-base italic border-l-2 border-primary/20 pl-4">
              "Design that reflects the product's promise builds trust — fast."
            </p>
          </motion.div>
        </motion.section>

        {/* ── FOOTER NAV ───────────────────────────────────────────────── */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="pt-8 pb-4 border-t border-border/60 flex items-center justify-between"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} /> All Projects
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe size={14} />
            <span>Brigosha Technologies · 2022–2025</span>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}
