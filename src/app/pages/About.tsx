import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import img1 from "../../imports/Image_1.jpeg";
import img2 from "../../imports/Image_2.jpeg";
import myStory from "../../imports/My_story.jpeg";
import img3111 from "../../imports/IMG_3111.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const interests = [
  "Anime", "Music", "Tennis", "Poker", "Snooker", "Board Games", "Design Critique", "Long Walks",
];

const values = [
  { label: "Systems Thinking", desc: "I design for the whole, not just the part — every component exists within a system." },
  { label: "Human Clarity", desc: "Complexity is a given in enterprise. My job is to make it disappear for the user." },
  { label: "Purposeful Beauty", desc: "Aesthetics aren't a bonus layer — they communicate trust, care, and intention." },
];

export function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, var(--orb-primary) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-[30%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, var(--orb-amber) 0%, transparent 60%)" }}
      />

      {/* ── HERO SPLIT ───────────────────────────────────────────────── */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 min-h-[calc(100vh-72px)] items-center"
      >
        {/* Photo mosaic */}
        <motion.div variants={fadeUp} className="relative h-[560px] lg:h-full lg:min-h-[580px]">
          {/* Main large photo */}
          <div className="absolute inset-0 grid grid-rows-[1fr_0.45fr] grid-cols-[1fr_0.45fr] gap-3 h-full">
            <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl row-span-1 col-span-2">
              <ImageWithFallback
                src={img1}
                alt="Tejas Anikhindi"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Bengaluru, India
                </span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border/40">
              <ImageWithFallback
                src={myStory}
                alt="My story"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border/40">
              <ImageWithFallback
                src={img3111}
                alt="Tejas outside"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div variants={stagger} className="space-y-10 lg:pl-4">
          <motion.div variants={fadeUp} className="space-y-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary/70">About Me</p>
            <h1
              className="font-display font-bold tracking-tight leading-[1.08] text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Designing systems that bridge emotion and innovation.
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm Tejas — a UI/UX designer from Belagavi, now based in Bengaluru, where I craft enterprise experiences for pharma, developer tools, and AI products.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              With 4 years of experience and 10+ impactful projects, I see UX design as a bridge between emotion and innovation. Guided by creativity and thoughtful planning, I aim to create work that not only solves problems but inspires.
            </p>
            <p>
              Beyond the screen, I explore anime, music, tennis, poker, snooker, and board games. These experiences fuel my imagination and keep my designs alive and human.
            </p>
            <p>
              Ruled by Jupiter, I carry a strong sense of purpose: to use the knowledge I've gathered to help others grow, make better choices, and craft a better world through design.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground font-medium"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-4 pt-2">
            <a
              href="mailto:tjanikhindi@gmail.com"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium text-sm hover:opacity-85 transition-opacity shadow-lg shadow-foreground/10"
            >
              Let's connect <ArrowRight size={15} />
            </a>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              View Resume
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── WHAT I BELIEVE ───────────────────────────────────────────── */}
      <section className="border-t border-border/60 relative">
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, var(--orb-violet) 0%, transparent 70%)" }}
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">Design Philosophy</p>
            <h2
              className="font-display font-bold tracking-tight text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              What I believe about great design.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-7 rounded-2xl border border-border/60 bg-card space-y-3 hover:border-border hover:shadow-lg hover:shadow-black/5 transition-all duration-400"
              >
                <span className="text-xs font-semibold tabular-nums text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-semibold text-lg text-foreground">{val.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 mb-3">Outside the Office</p>
            <h2 className="font-display font-bold tracking-tight text-xl">A few slices of life.</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[img2, myStory, img3111, img1].map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden border border-border/40 group"
              >
                <ImageWithFallback
                  src={src}
                  alt={`Tejas photo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mt-1">I'm open to full-time, contract, and advisory roles.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium text-sm hover:opacity-85 transition-opacity shadow-lg shadow-foreground/10"
            >
              Get in touch <ArrowRight size={15} />
            </Link>
            <a
              href="https://www.linkedin.com/in/tjanikhindi-0bb168177/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
