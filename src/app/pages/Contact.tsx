import { motion } from "motion/react";
import { Mail, Linkedin, ArrowUpRight, Copy, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { personalInfo } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, var(--orb-primary) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-[10%] left-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle, var(--orb-amber) 0%, transparent 60%)" }}
      />

      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-5xl mx-auto px-6 py-20 lg:py-32"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="space-y-6 mb-20">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-muted/60 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to new opportunities
          </span>

          <h1
            className="font-display font-bold tracking-tight leading-[1.06] text-balance"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/50">
              great together.
            </span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            I'm currently looking for new opportunities — full-time, contract, or advisory. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email card */}
          <motion.div
            variants={fadeUp}
            className="group col-span-1 md:col-span-2 flex flex-col justify-between p-8 rounded-3xl border border-border/60 bg-card hover:border-border hover:shadow-xl hover:shadow-black/8 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">Email me</h3>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium text-sm hover:opacity-85 transition-opacity shadow-lg shadow-foreground/10"
              >
                Send Email <ArrowRight size={14} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.a
            variants={fadeUp}
            href={personalInfo.socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between p-8 rounded-3xl border border-border/60 bg-card hover:border-border hover:shadow-xl hover:shadow-black/8 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">Connect & follow my work</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors mt-8">
              Visit profile
              <ArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </motion.a>

          {/* Behance */}
          <motion.a
            variants={fadeUp}
            href={personalInfo.socials[1].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between p-8 rounded-3xl border border-border/60 bg-card hover:border-border hover:shadow-xl hover:shadow-black/8 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-muted-foreground group-hover:text-primary transition-colors font-bold text-sm">Bē</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">Behance</h3>
                <p className="text-muted-foreground text-sm">View my design portfolio</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors mt-8">
              View portfolio
              <ArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </motion.a>

          {/* Tagline card */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-2 p-8 rounded-3xl border border-border/40 bg-muted/30"
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold mb-4">Response time</p>
            <p className="text-foreground leading-relaxed">
              I typically respond within <span className="font-semibold">24–48 hours</span>. For urgent inquiries, LinkedIn DMs tend to be the fastest.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
