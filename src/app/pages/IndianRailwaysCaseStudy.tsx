import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Lock, Globe, Activity } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import coverImg from "../../imports/Screenshot_2026-07-05_at_7.33.29_PM.png";
import wireframe1 from "../../imports/Screenshot_2026-07-05_at_7.34.20_PM.png";
import wireframe2 from "../../imports/Screenshot_2026-07-05_at_7.34.35_PM.png";
import wireframe3 from "../../imports/Screenshot_2026-07-05_at_7.34.48_PM.png";
import wireframe4 from "../../imports/Screenshot_2026-07-05_at_7.35.02_PM.png";
import wireframe5 from "../../imports/Screenshot_2026-07-05_at_7.35.20_PM.png";
import wireframe6 from "../../imports/Screenshot_2026-07-05_at_7.35.34_PM.png";
import wireframe7 from "../../imports/Screenshot_2026-07-05_at_7.35.52_PM.png";

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

const wireframes = [
  {
    src: wireframe1,
    label: "Driver Interface Unit",
    detail: "ARC, Bombardier, Medha, ARC-DPWCS variants",
    span: "full",
  },
  {
    src: wireframe2,
    label: "Simulator Home Screen",
    detail: "Speed, battery, traction, and status overview",
    span: "full",
  },
  {
    src: wireframe3,
    label: "Node Control Panel",
    detail: "Node 710 — operational button matrix",
    span: "half",
  },
  {
    src: wireframe4,
    label: "KAVACH System",
    detail: "OPNCS / DDO mode selection interface",
    span: "half",
  },
  {
    src: wireframe5,
    label: "IRDMI",
    detail: "Indian Railways Driver Machine Interface",
    span: "half",
  },
  {
    src: wireframe6,
    label: "Speed & Energy Recorder",
    detail: "0–180 KMPH main speedometer panel",
    span: "half",
  },
  {
    src: wireframe7,
    label: "Exercise Panel Login",
    detail: "Track Builder Tool & Exercise Development Software",
    span: "full",
  },
];

export function IndianRailwaysCaseStudy() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, var(--orb-primary) 0%, transparent 60%)" }}
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
              {["UX Research", "Hardware Integration", "Web Development"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-muted border border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="font-display font-bold tracking-tight leading-[1.06] text-balance"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
            >
              Enhancing Locomotive Simulation for Indian Railways
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Designing internal modules for real-time simulator systems at a major railway station — bridging physical controls and digital interfaces for mission-critical training.
            </p>
          </motion.div>

          {/* Meta */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-7 border-y border-border/70"
          >
            {[
              { label: "Role", value: "UX Design & Research Lead" },
              { label: "Timeline", value: "Ongoing" },
              { label: "Project Type", value: "Web Development" },
              { label: "Status", value: "Active" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-muted-foreground font-medium mb-1">{label}</p>
                <p className="font-semibold text-foreground text-sm">{value}</p>
              </div>
            ))}
          </motion.div>

          {/* NDA */}
          <motion.div
            variants={fadeUp}
            className="flex gap-3 p-5 rounded-2xl border border-amber-500/20"
            style={{ background: "rgba(245,158,11,0.05)" }}
          >
            <Lock size={16} className="shrink-0 mt-0.5 text-amber-500" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Confidentiality Note — </span>
              This was a client project conducted under a strict Non-Disclosure Agreement. Only limited glimpses of the design work are shown. Detailed visuals, interactions, and internal processes have been omitted or redacted.
            </p>
          </motion.div>
        </motion.header>

        {/* ── COVER IMAGE ──────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-black/15"
        >
          <ImageWithFallback
            src={coverImg}
            alt="Indian Railways locomotive"
            className="w-full object-cover"
          />
        </motion.div>

        {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="font-display font-bold text-2xl text-foreground sticky top-28">
              Designing for a Major Railway Station
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-8 space-y-5">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Indian Railways, one of the largest railway networks in the world, sought to modernize its{" "}
              <span className="text-foreground font-medium">locomotive training systems</span>{" "}
              through high-fidelity simulators used at a prominent railway station. These simulators help engineers train more effectively.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              However, the existing{" "}
              <span className="text-foreground font-medium">internal modules</span>{" "}
              were fragmented, non-intuitive, and didn't reflect real-world locomotive operations closely enough. This not only disrupted training flow but also caused delays in simulator sessions, leading to inefficiencies in personnel readiness.
            </p>
          </motion.div>
        </motion.section>

        {/* ── OBJECTIVE ────────────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="p-8 md:p-10 rounded-3xl border border-primary/20 bg-primary/5 space-y-4"
        >
          <SectionLabel>The Objective</SectionLabel>
          <p className="text-foreground leading-relaxed text-lg">
            To{" "}
            <span className="text-primary font-semibold">design and optimize key internal modules</span>{" "}
            of the simulation system in collaboration with a hardware vendor, making them intuitive, reliable, and reflective of real-life locomotive workflows. The goal was to ensure Indian Railways' staff could operate the simulator{" "}
            <span className="text-primary font-semibold">confidently and efficiently</span>.
          </p>
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
                { role: "UX Design & Research Lead", desc: "Led the internal module redesign end to end" },
                { role: "Hardware Liaison", desc: "Aligned physical controls and digital interfaces with the hardware integration team" },
                { role: "Field Researcher", desc: "Conducted usability studies with on-site engineers at the railway training center" },
                { role: "Interaction Designer", desc: "Designed wireframes and interaction flows optimized for operational use" },
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
                Field Immersion & Context Understanding
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-9 text-base">
              To grasp the operational context and user needs, I{" "}
              <span className="text-foreground font-medium">visited the railway training center</span>{" "}
              and conducted contextual inquiries with simulation instructors and trainee engineers.
            </p>
            <div className="ml-9 flex gap-3 p-5 rounded-2xl bg-muted border border-border">
              <span className="shrink-0">💡</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Insight: </span>
                Many trainees struggled to match simulator controls with their real-world counterparts due to inconsistent labeling and non-intuitive sequences.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tabular-nums text-primary/50 w-6">02</span>
              <h3 className="font-display font-semibold text-xl text-foreground">
                Collaboration with Hardware Partner
              </h3>
            </div>
            <div className="pl-9 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                Collaborated closely with the{" "}
                <span className="text-foreground font-medium">hardware vendor</span>{" "}
                replicating physical locomotive controls, ensuring the digital UI matched the{" "}
                <span className="text-foreground font-medium">ergonomic and operational flow</span>{" "}
                of those hardware elements.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Proposed a unified interaction model that accounted for muscle memory from real locomotives",
                  "Regular syncs ensured iterative feedback and alignment across teams",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Step 3 – Wireframes */}
          <motion.div variants={stagger} className="space-y-8">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="text-xs font-semibold tabular-nums text-primary/50 w-6">03</span>
              <h3 className="font-display font-semibold text-xl text-foreground">Wireframes</h3>
            </motion.div>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed pl-9 text-base">
              Using research insights, I designed{" "}
              <span className="text-foreground font-medium">low-to-mid fidelity wireframes</span>{" "}
              for all key operator interfaces across the simulation system.
            </motion.p>

            {/* Gallery */}
            <div className="space-y-4">
              {/* Full-width: Driver Interface Unit */}
              <motion.div variants={fadeUp} className="space-y-2">
                <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                  <ImageWithFallback
                    src={wireframe1}
                    alt="Driver Interface Unit"
                    className="w-full object-contain"
                  />
                </div>
                <div className="px-1">
                  <p className="text-sm font-semibold text-foreground">Driver Interface Unit</p>
                  <p className="text-xs text-muted-foreground">ARC, Bombardier, Medha, ARC-DPWCS variants</p>
                </div>
              </motion.div>

              {/* Full-width: Simulator Home Screen */}
              <motion.div variants={fadeUp} className="space-y-2">
                <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                  <ImageWithFallback
                    src={wireframe2}
                    alt="Simulator Home Screen"
                    className="w-full object-contain"
                  />
                </div>
                <div className="px-1">
                  <p className="text-sm font-semibold text-foreground">Simulator Home Screen</p>
                  <p className="text-xs text-muted-foreground">Speed, battery, traction, and status overview</p>
                </div>
              </motion.div>

              {/* Half: Node Panel + KAVACH */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { src: wireframe3, label: "Node Control Panel", detail: "Node 710 — operational button matrix" },
                  { src: wireframe4, label: "KAVACH System", detail: "OPNCS / DDO mode selection interface" },
                ].map(({ src, label, detail }) => (
                  <div key={label} className="space-y-2">
                    <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                      <ImageWithFallback src={src} alt={label} className="w-full object-contain" />
                    </div>
                    <div className="px-1">
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{detail}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Half: IRDMI + Speedometer */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { src: wireframe5, label: "IRDMI", detail: "Indian Railways Driver Machine Interface" },
                  { src: wireframe6, label: "Speed & Energy Recorder", detail: "0–180 KMPH main speedometer panel" },
                ].map(({ src, label, detail }) => (
                  <div key={label} className="space-y-2">
                    <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                      <ImageWithFallback src={src} alt={label} className="w-full object-contain" />
                    </div>
                    <div className="px-1">
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{detail}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Full-width: Exercise Panel */}
              <motion.div variants={fadeUp} className="space-y-2">
                <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                  <ImageWithFallback
                    src={wireframe7}
                    alt="Exercise Panel Login"
                    className="w-full object-contain"
                  />
                </div>
                <div className="px-1">
                  <p className="text-sm font-semibold text-foreground">Exercise Panel Login</p>
                  <p className="text-xs text-muted-foreground">Track Builder Tool & Exercise Development Software</p>
                </div>
              </motion.div>
            </div>

            {/* Design priorities */}
            <motion.div variants={fadeUp} className="space-y-3 pt-2">
              <p className="text-sm font-semibold text-muted-foreground">Each design prioritized:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Clarity", desc: "for high-stakes situations" },
                  { label: "Consistency", desc: "with real-world controls" },
                  { label: "Scalability", desc: "for future updates" },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm">
                    <span className="font-semibold text-foreground">{label}</span>
                    <span className="text-muted-foreground">{desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ── OUTCOME ──────────────────────────────────────────────────── */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="p-8 md:p-10 rounded-3xl border border-border/60 bg-card space-y-5"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Activity size={14} className="text-green-500" />
            </div>
            <SectionLabel>Outcome & Impact</SectionLabel>
          </div>
          <ul className="space-y-4">
            {[
              {
                highlight: "Reduced training friction",
                text: "System now aligned with both digital and physical controls, so operators no longer need to mentally translate between the two.",
              },
              {
                highlight: "Faster, smoother module transitions",
                text: "Improved session throughput by enabling faster, smoother transitions between training modules.",
              },
            ].map(({ highlight, text }, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">{highlight} — </span>
                  {text}
                </p>
              </li>
            ))}
          </ul>
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
          <motion.div variants={fadeUp} className="pl-6 border-l-2 border-primary/30">
            <p className="text-foreground text-xl leading-relaxed font-light">
              This project challenged me to bridge the{" "}
              <span className="font-semibold text-primary">gap between physical systems and digital interfaces</span>,
              especially in a{" "}
              <span className="font-semibold text-primary">mission-critical domain</span>{" "}
              like rail transport. The collaboration with hardware engineers taught me the importance of{" "}
              <span className="font-semibold text-primary">designing beyond the screen</span>{" "}
              and respecting the constraints of real-world environments.
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
