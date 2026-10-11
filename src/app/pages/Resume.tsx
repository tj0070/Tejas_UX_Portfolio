import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";

import resumePdf from "../../imports/Tejas_Anikhindi_UX_Resume.pdf";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Resume() {
  const { experience, skills, education, certifications } = portfolioData;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-24 max-w-4xl mx-auto"
    >
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
        <motion.div variants={fadeIn} className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            Experience & Details
          </h1>
          <p className="text-xl text-muted-foreground">
            A track record of driving product strategy and delivering scalable UX solutions.
          </p>
        </motion.div>
        
        <motion.div variants={fadeIn} className="flex gap-4">
          <a
            href={resumePdf}
            download="Tejas_Anikhindi_UX_Resume.pdf"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </a>
          <a
            href="https://www.linkedin.com/in/tjanikhindi-0bb168177/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-muted text-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:bg-muted/80 transition-colors border border-border"
          >
            <ExternalLink size={16} />
            LinkedIn
          </a>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <motion.h2 variants={fadeIn} className="text-xl font-medium text-muted-foreground sticky top-28">
            Experience
          </motion.h2>
        </div>
        <div className="md:col-span-9 space-y-12">
          {experience.map((exp, i) => (
            <motion.div key={i} variants={fadeIn} className="relative pl-6 md:pl-0">
              <div className="hidden md:block absolute -left-[5.5rem] top-1 text-sm font-medium text-muted-foreground w-16 text-right">
                {exp.period.split(" - ")[0]}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-lg text-primary mt-1">{exp.company}</p>
                  <p className="md:hidden text-sm text-muted-foreground mt-2">{exp.period}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills & Capabilities */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-16">
        <div className="md:col-span-3">
          <motion.h2 variants={fadeIn} className="text-xl font-medium text-muted-foreground sticky top-28">
            Capabilities
          </motion.h2>
        </div>
        <div className="md:col-span-9">
          <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full border border-border bg-muted/50 text-foreground font-medium">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Education */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-16">
        <div className="md:col-span-3">
          <motion.h2 variants={fadeIn} className="text-xl font-medium text-muted-foreground sticky top-28">
            Education
          </motion.h2>
        </div>
        <div className="md:col-span-9">
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">{education.degree}</h3>
            <p className="text-lg text-primary">{education.university}</p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {education.year}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-16">
        <div className="md:col-span-3">
          <motion.h2 variants={fadeIn} className="text-xl font-medium text-muted-foreground sticky top-28">
            Certifications
          </motion.h2>
        </div>
        <div className="md:col-span-9">
          <motion.div variants={fadeIn} className="space-y-4">
            {certifications.map(cert => (
              <h3 key={cert} className="text-2xl font-semibold text-foreground">{cert}</h3>
            ))}
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed text-lg space-y-2 mt-4">
              <li>Foundations of UX Design</li>
              <li>Empathize, Define & Ideate</li>
              <li>Wireframes & Low-Fidelity Prototypes</li>
              <li>Conduct UX Research & Test Early Concepts</li>
              <li>High-Fidelity Designs & Prototypes in Figma</li>
            </ul>
          </motion.div>
        </div>
      </section>
      
    </motion.div>
  );
}
