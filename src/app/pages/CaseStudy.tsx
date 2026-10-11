import { useParams, Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";
import { useEffect } from "react";
import { IndianRailwaysCaseStudy } from "./IndianRailwaysCaseStudy";
import { AulasCaseStudy } from "./AulasCaseStudy";
import { AssamSocietyCaseStudy } from "./AssamSocietyCaseStudy";
import { IndustrialPlatformCaseStudy } from "./IndustrialPlatformCaseStudy";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const study = portfolioData.caseStudies.find(s => s.id === id);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id === "indian-railways-simulator") {
    return <IndianRailwaysCaseStudy />;
  }

  if (id === "aulas-digital-presence") {
    return <AulasCaseStudy />;
  }

  if (id === "assam-society-bangalore") {
    return <AssamSocietyCaseStudy />;
  }

  if (id === "industrial-configuration-smart-pricing") {
    return <IndustrialPlatformCaseStudy />;
  }

  if (!study) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-semibold">Case study not found</h1>
        <Link to="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
          <ArrowLeft size={16} /> Return home
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial="initial"
      animate="animate"
      className="space-y-24 max-w-4xl mx-auto"
    >
      {/* Header */}
      <header className="space-y-8 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={16} />
          Back to work
        </Link>

        <motion.div variants={fadeIn} className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {study.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight">
            {study.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            {study.shortDescription}
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">Role</h4>
            <p className="font-medium">{study.role}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">Timeline</h4>
            <p className="font-medium">{study.year}</p>
          </div>
          <div className="col-span-2">
            <h4 className="text-sm font-medium text-muted-foreground mb-1">Platform</h4>
            <p className="font-medium">Web / Desktop / Mobile</p>
          </div>
        </motion.div>
      </header>

      {/* Hero Image */}
      <motion.div 
        variants={fadeIn}
        className="w-full aspect-[21/9] md:aspect-[16/9] rounded-2xl overflow-hidden bg-muted border border-border relative"
      >
        <motion.img 
          style={{ y, scale: 1.05 }}
          src={study.image} 
          alt={study.title}
          className="w-full h-full object-cover origin-top"
        />
      </motion.div>

      {/* Content Sections */}
      <div className="space-y-20">
        
        {/* The Problem */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold sticky top-28">The Problem</h2>
          </div>
          <div className="md:col-span-8 prose prose-neutral dark:prose-invert max-w-none prose-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {study.content.problem}
            </p>
          </div>
        </section>

        {/* The Context */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold sticky top-28">Context</h2>
          </div>
          <div className="md:col-span-8 prose prose-neutral dark:prose-invert max-w-none prose-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {study.content.context}
            </p>
          </div>
        </section>

        {/* Full width image placeholder */}
        <figure className="w-full aspect-[16/9] rounded-2xl bg-muted border border-border flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZWJvYXJkJTIwd2lyZWZyYW1lJTIwcHJvY2VzcyUyMG1hcHxlbnwxfHx8fDE3NzkxMTYyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Process visual" 
            className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <span className="absolute text-muted-foreground font-medium">Process Map Visualization</span>
        </figure>

        {/* Process & Execution */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold sticky top-28">Process</h2>
          </div>
          <div className="md:col-span-8 prose prose-neutral dark:prose-invert max-w-none prose-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {study.content.process}
            </p>
          </div>
        </section>

        {/* Decisions */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold sticky top-28">Key Decisions</h2>
          </div>
          <div className="md:col-span-8 prose prose-neutral dark:prose-invert max-w-none prose-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {study.content.decisions}
            </p>
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-muted/50 p-8 md:p-12 rounded-3xl border border-border">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold">Outcome & Impact</h2>
          </div>
          <div className="md:col-span-8 prose prose-neutral dark:prose-invert max-w-none prose-lg">
            <p className="text-lg leading-relaxed text-foreground font-medium">
              {study.content.outcome}
            </p>
          </div>
        </section>

      </div>

      {/* Next Project CTA (Simplification for now) */}
      <section className="pt-24 pb-12 border-t border-border mt-24 flex justify-between items-center">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors">
          <ArrowLeft size={16} /> All Projects
        </Link>
        <a href="#" className="inline-flex items-center gap-2 text-foreground hover:text-primary font-medium transition-colors">
          View Live Site <ExternalLink size={16} />
        </a>
      </section>

    </motion.article>
  );
}
