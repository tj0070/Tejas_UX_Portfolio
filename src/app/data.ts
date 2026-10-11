import railwaysCover from "../imports/Screenshot_2026-07-05_at_7.33.29_PM.png";
import aulasCover from "../imports/aulas_page-4.png";
import asobCover from "../imports/asob-desktop.png";
import industrialPlatformCover from "../imports/industrial-configuration-dashboard.png";

export const portfolioData = {
  personalInfo: {
    name: "Tejas Anikhindi",
    role: "Product Designer",
    tagline: "Four years ago, I set out to design experiences that don't just look good — they make a real impact. Every design tells a story, and I'm passionate about creating ones that users remember.",
    about: "I'm Tejas, a UI/UX designer from Belagavi, now based in Bengaluru, blending creativity and strategy to craft experiences that truly connect.",
    email: "tjanikhindi@gmail.com",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tjanikhindi-0bb168177/" },
      { name: "Behance", url: "https://www.behance.net/tjanikhindi" }
    ]
  },
  caseStudies: [
    {
      id: "indian-railways-simulator",
      title: "Enhancing Locomotive Simulation for Indian Railways",
      shortDescription: "Designing internal modules for real-time simulator systems at a major railway station.",
      tags: ["UX Research", "Hardware Integration", "Web Development"],
      image: railwaysCover,
      year: "Ongoing",
      role: "UX Design & Research Lead",
      content: {
        problem: "The existing internal modules were fragmented, non-intuitive, and didn't reflect real-world locomotive operations — disrupting training flow and causing delays in simulator sessions.",
        context: "Indian Railways sought to modernize its locomotive training systems through high-fidelity simulators at a prominent railway station, helping engineers train more effectively.",
        process: "Visited the railway training center, conducted contextual inquiries with simulation instructors, and collaborated with the hardware integration team to align digital and physical controls.",
        decisions: "Proposed a unified interaction model that accounted for muscle memory from real locomotives. Designed low-to-mid fidelity wireframes for the Driver Display Unit, KAVACH system, IRDMI, and Speedometer modules.",
        outcome: "System now aligned with both digital and physical controls, reducing training friction. Improved session throughput by enabling faster, smoother module transitions.",
      }
    },
    {
      id: "aulas-digital-presence",
      title: "Reimagining Aulas' Digital Presence",
      shortDescription: "Redesigning an ed-tech product website to drive engagement and conversions.",
      tags: ["Web Development", "Brand Design", "UX Strategy"],
      image: aulasCover,
      year: "2023",
      role: "UX/UI Designer",
      content: {
        problem: "Users dropped off before discovering Aulas' key value propositions. Messaging was vague, the visual identity felt dated, and there was no guided interaction for new visitors.",
        context: "Aulas, an education technology platform for school management and digital learning, needed its marketing website to reflect the product's ambition and convert visitors into leads.",
        process: "Led collaborative workshops with sales and marketing stakeholders to surface user objections, restructured the site's narrative arc, and designed a chatbot section for lead generation.",
        decisions: "Adopted a value-first layout with a persistent CTA, embraced Aulas' bold purple palette, and integrated a role-selector chatbot to personalise the onboarding experience.",
        outcome: "30% increase in engagement, 20% boost in conversion rates, and improved lead quality reported by the sales team.",
      }
    },
    {
      id: "assam-society-bangalore",
      title: "Celebrating Culture Through Design",
      shortDescription: "Creating a responsive cultural hub for the Assam Society of Bangalore community.",
      tags: ["Cross-Platform", "Cultural UX", "Responsive Design"],
      image: asobCover,
      year: "2023",
      role: "UX/UI Designer",
      content: {
        problem: "ASB's outdated website was difficult to navigate, event registrations remained largely offline, and the experience did not reflect the identity of its Assamese community.",
        context: "The Assam Society of Bangalore needed a modern digital home for cultural expression, event updates, membership, and community participation.",
        process: "Interviewed members and organizers, simplified the information architecture, developed a culturally rooted visual system, and iterated with the committee and development team across devices.",
        decisions: "Balanced a clean responsive layout with Jaapi and Bihu-inspired motifs, simplified priority journeys, and replaced a carousel with a focused static cultural hero.",
        outcome: "The live website received overwhelmingly positive community feedback and now serves as a central hub for events, cultural expression, and new-member onboarding.",
      }
    },
    {
      id: "industrial-configuration-smart-pricing",
      title: "From Industrial Configuration to Smart Pricing",
      shortDescription: "Connecting product configuration, material recommendations, and self-service quotes in one industrial workflow.",
      tags: ["Enterprise UX", "Industrial Tools", "Decision Support"],
      image: industrialPlatformCover,
      year: "2023",
      role: "UX Designer",
      content: {
        problem: "Product configuration relied on fragmented manuals and calculations, while pricing depended on slow spreadsheet-and-email workflows managed by sales teams.",
        context: "Two related enterprise applications were designed to support the journey from accurate pulley-lagging configuration to transparent, self-service quote generation.",
        process: "Researched mechanical engineers, site operators, sales staff, and repeat customers; mapped connected workflows; and led four iterations from foundational architecture through responsive refinement.",
        decisions: "Structured configuration around Projects, Conveyors, and Pulleys, while the pricing portal guided users through product selection, dynamic pricing, and quote management.",
        outcome: "Reduced configuration-related manufacturing errors by 30%, increased production throughput by 25%, and made quote turnaround 60% faster than manual methods.",
      }
    }
  ],
  experience: [
    {
      company: "Strides Pharma Science, Bengaluru",
      role: "UX Designer L2",
      period: "Nov 2025 - Present",
      description: "Designed core UX for a high-priority 'Lighthouse' digitisation project, building dashboards to scale complex pharmaceutical manufacturing processes across the organisation. Conducted user research sessions with operations teams to map pain points and iterate from low-fidelity wireframes to production-ready prototypes. Established a reusable component library to ensure design consistency across modules within the digitisation programme."
    },
    {
      company: "Brigosha Technologies, Bengaluru",
      role: "UX & UI Designer",
      period: "Apr 2022 - Sep 2025",
      description: "Collaborated with R&D, hardware, and cross-functional teams on a locomotive simulation project for Indian Railways and an internal onboarding module — reducing fresher onboarding time by 50% and improving process comprehension by 80%. Crafted a document analyser and conversational AI web app that reduced information processing time by 50% and increased user satisfaction by 35%, streamlining workflows for a global technology services leader. Designed a Smart Pricing web app for a global pulley lagging specialist, reducing manufacturing errors by 30% and increasing production throughput by 25% through automated configuration flows. Spearheaded a real-time vehicle monitoring application for a leading tyre manufacturer, cutting vehicle downtime by 15% and boosting overall operational efficiency by 20%. Revamped the B2B product website and designed a membership platform for Assam Society of Bangalore — driving 30% higher engagement, 20% more conversions, and 25% growth in online registrations."
    }
  ],
  skills: [
    "User Research", "Usability & A/B Testing", "Wireframing & Prototyping",
    "Design Systems", "Information Architecture", "Visual Design",
    "Accessibility", "Figma", "FigJam", "Adobe XD", "Miro", "Framer", "Lovable"
  ],
  education: {
    degree: "B.Tech — Computer Science Engineering",
    university: "Angadi Institute of Technology and Management, Belgaum",
    year: "Graduated 2021",
    description: "Foundational knowledge in computer science engineering, applying logic and systems thinking to design."
  },
  certifications: [
    "Google UX Design Professional Certificate (Coursera)"
  ]
};
