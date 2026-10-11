import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { portfolioData } from "../data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import resumePdf from "../../imports/Tejas_Anikhindi_Resume_2026.pdf";
import img3111 from "../../imports/IMG_3111.jpeg";
import myStory from "../../imports/My_story.jpeg";
import img1 from "../../imports/Image_1.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.09 } },
};

const marqueeItems = [
  "PRODUCT DESIGN", "ENTERPRISE UX", "DASHBOARD SYSTEMS",
  "B2B SAAS", "AI TOOLS", "INTERACTION DESIGN", "DESIGN SYSTEMS", "FIGMA",
];

const articles = [
  { title: "How Do You Approach Designing for Accessibility?", platform: "UXDesigner.io", link: "https://uxdesigners.io/qa/how-do-you-approach-designing-for-accessibility/" },
  { title: "What Are Approaches to Enhance User Engagement On Websites?", platform: "DevX", link: "https://www.devx.com/web-development/what-are-approaches-to-enhance-user-engagement-on-websites/" },
  { title: "How Do You Decide Which Features to Prioritise as a UX Designer?", platform: "UXDesigner.io", link: "https://uxdesigners.io/qa/how-do-you-decide-which-features-to-prioritize-as-a-u3-designer/" },
  { title: "What Design Elements Have You Experimented With Recently?", platform: "Freelancedesigner.io", link: "#" },
  { title: "9 B2B SaaS Products With Outstanding UI / UX Design", platform: "Saas Perspective", link: "https://saasperspective.com/qa/9-b2b-saas-products-with-outstanding-uiu9-design/" },
  { title: "12 B2B SaaS Products With Outstanding UI / UX Design", platform: "Small Biz Digest", link: "https://smallbizdigest.com/qa/12-b2b-saas-products-with-outstanding-uiu12-design/" },
];

export function Home() {
  const { caseStudies, experience } = portfolioData;
  const allMarqueeItems = [...marqueeItems, ...marqueeItems];

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center">
        {/* Ambient orbs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle, var(--orb-primary) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle, var(--orb-amber) 0%, transparent 65%)" }}
        />

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center py-20"
        >
          {/* Text column */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-muted/60 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-primary" />
                </span>
                Transitioning to Product Design
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold tracking-tight leading-[1.06] text-balance"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              I design enterprise experiences that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/50">
                feel human.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed max-w-lg"
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
            >
              4 years crafting UX for complex B2B dashboards, enterprise SaaS, and AI-driven tools. Based in Bengaluru, making systems people actually want to use.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-medium text-sm hover:opacity-85 transition-opacity shadow-lg shadow-foreground/10"
              >
                View Work <ArrowRight size={16} />
              </a>
              <a
                href={resumePdf}
                download="Tejas_Anikhindi_Resume.pdf"
                className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 pt-2 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">4+</span> years exp.
              </div>
              <div className="w-px h-3 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">10+</span> projects
              </div>
              <div className="w-px h-3 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">2</span> companies
              </div>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            variants={{ initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7, ease } }}
            className="order-1 lg:order-2 relative animate-float"
          >
            {/* Glow behind photo */}
            <div
              className="absolute inset-0 rounded-[2rem] -z-10 scale-105"
              style={{ background: "radial-gradient(circle at 50% 60%, var(--orb-primary) 0%, transparent 70%)" }}
            />
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-border/40 shadow-2xl shadow-black/30">
              <ImageWithFallback
                src={img3111}
                alt="Tejas Anikhindi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-xs text-muted-foreground">Currently at</p>
              <p className="font-display font-semibold text-sm text-foreground">Strides Pharma Science</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────── */}
      <div className="border-y border-border/60 overflow-hidden py-5 bg-muted/30">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {allMarqueeItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 px-8 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/60"
            >
              {item}
              <span className="text-primary/40 text-base">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SELECTED WORK ────────────────────────────────────────────── */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="space-y-14"
        >
          <motion.div variants={fadeUp} className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">Selected Work</p>
              <h2 className="font-display font-bold tracking-tight text-balance" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Projects & Case Studies
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs text-right hidden md:block">
              Deep dives into how I approach complex UX problems.
            </p>
          </motion.div>

          {/* Compact project grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-500 hover:border-border hover:shadow-xl hover:shadow-black/10"
              >
                <Link to={`/case-study/${study.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {study.title}</span>
                </Link>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                    {study.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.shortDescription}
                  </p>
                  <div className="inline-flex items-center gap-2 pt-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    View case study
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border/60">
        {/* Section ambient orbs */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle, var(--orb-amber) 0%, transparent 65%)" }}
        />
        <div
          className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle, var(--orb-primary) 0%, transparent 65%)" }}
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div variants={fadeUp} className="relative">
            <div className="grid grid-cols-2 gap-3 h-[480px]">
              <div className="relative rounded-2xl overflow-hidden border border-border/40 col-span-1 row-span-2">
                <ImageWithFallback
                  src={myStory}
                  alt="Tejas's story"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border/40">
                <ImageWithFallback
                  src={img1}
                  alt="Tejas at work"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-muted flex items-center justify-center p-6">
                <div className="text-center space-y-1">
                  <p className="font-display font-bold text-3xl text-foreground">4+</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Years of craft</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">A Bit About Me</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-balance mb-5" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                Crafting experiences that connect, not just convert.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm Tejas — a Product Designer from Belagavi, now based in Bengaluru. I design enterprise systems, dashboards, and AI-driven products that make complex work feel effortless.
              </p>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Rooted in my love for art, technology, and storytelling, I believe great design isn't just functional — it tells a story, leaves a mark, and brings people closer to the future we imagine.
              </p>
              <p>
                Beyond the screen, you'll find me exploring anime, music, tennis, poker, and board games. These experiences keep my designs alive and human.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors"
            >
              Full story <ArrowRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── WRITING ──────────────────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-28"
        >
          <motion.div variants={fadeUp} className="flex items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">Writing</p>
              <h2 className="font-display font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Published Thoughts
              </h2>
            </div>
          </motion.div>

          <div className="divide-y divide-border/60">
            {articles.map((article, i) => (
              <motion.a
                key={i}
                href={article.link}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                className="group flex items-center justify-between gap-6 py-6 hover:px-2 transition-all duration-300"
              >
                <div className="flex items-start gap-6 min-w-0">
                  <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground/40 pt-0.5 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 space-y-1">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium tracking-wide">
                      {article.platform}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-28"
        >
          <motion.div variants={fadeUp} className="flex items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">Experience</p>
              <h2 className="font-display font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Where I've Worked
              </h2>
            </div>
            <Link
              to="/resume"
              className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Full resume <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="space-y-3">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5 md:gap-12 p-7 rounded-2xl border border-border/50 bg-card hover:border-border hover:shadow-lg hover:shadow-black/5 transition-all duration-400"
              >
                <div className="space-y-1.5">
                  <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary bg-primary/8 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <p className="text-sm text-muted-foreground">{exp.company.split(",")[0]}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {exp.description.substring(0, 160)}…
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative border-t border-border/60 overflow-hidden">
        {/* Ambient orbs */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle 700px at 50% 50%, var(--orb-primary) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-[20%] w-[400px] h-[300px] pointer-events-none -z-10"
          style={{ background: "radial-gradient(circle, var(--orb-amber) 0%, transparent 65%)" }}
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-36 flex flex-col items-center text-center"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-6">
            Let's Connect
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold tracking-tight text-balance mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/50">
              great.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-md mb-12">
            I'm always open to discussing product design work or partnership opportunities.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-4 rounded-full font-medium text-base hover:opacity-85 transition-opacity shadow-2xl shadow-foreground/15"
            >
              Say Hello <ArrowRight size={18} />
            </Link>
            <a
              href={resumePdf}
              download="Tejas_Anikhindi_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 border border-border px-10 py-4 rounded-full font-medium text-base text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
