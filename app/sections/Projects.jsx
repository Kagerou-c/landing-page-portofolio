"use client"
import Card from "../components/Card";
import "./Projects.css";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Dashboard Monitoring Network (on Progres)",
    description:
      "Website memonitoring jaringan seperti bandwith, kecepatan internet, latency, dan lain lain.",
    image: null,
    tags: ["Next.js", "Tailwind", "NeonDB", "Chart.js", "Python"],
    link: "",
  },
  {
    title: "Dashboard Bank Mini Digital",
    description:
      "Dashboard bank mini digital untuk memonitoring transaksi, saldo nasabah, kas, dan traffic.",
    image: null,
    tags: ["Next.js", "Tailwind", "Supabase", "Framer Motion", "Chart.js"],
    link: "https://dashboard-bank-mini-budi-bhakti.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan desain modern dan animasi yang smooth.",
    image: null,
    tags: ["Next.js", "CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "Speed Test Jaringan (on Progres)",
    description:
      "Speed test jaringan untuk mengukur kecepatan internet.",
    image: null,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    link: "",
  },
];

const projectVariantsItem = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const projectVariantsContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 }
  },
};

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.div
        variants={projectVariantsContainer}
        initial="initial"
        whileInView="animate"
        transition={projectVariantsContainer.transition}
        viewport={{ once: true, amount: 0.2 }}
        className="container">
        <motion.h2
          variants={projectVariantsItem}
          transition={projectVariantsItem.transition}
          viewport={{ once: true }}
          className="section-title">
          My <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          variants={projectVariantsItem}
          transition={projectVariantsItem.transition}
          viewport={{ once: true }}
          className="section-subtitle">
          Beberapa project yang sudah saya kerjakan
        </motion.p>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="project-card"
              variants={projectVariantsItem}
              header={
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <span>🖼️</span>
                  </div>
                  <div className="project-overlay">
                    <MotionLink
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project →
                    </MotionLink>
                  </div>
                </div>
              }
              content={
                <>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </>
              }
              footer={
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
