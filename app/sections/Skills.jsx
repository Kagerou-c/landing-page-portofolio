"use client"
import Card from "../components/Card";
import "./Skills.css";
import { motion } from "framer-motion";
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiFramer } from "@icons-pack/react-simple-icons";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", level: 90 },
  { name: "CSS", icon: SiCss, color: "#1572B6", level: 85 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 88 },
  { name: "React", icon: SiReact, color: "#61DAFB", level: 83 },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 85 },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF", level: 75 },
];

const skillVariantsItem = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const skillVariantsContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    when: "beforeChildren"
  },
};


export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="container"
        variants={skillVariantsContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}>
        <motion.h2
          variants={skillVariantsItem}
          transition={skillVariantsItem.transition}
          className="section-title">
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.p
          variants={skillVariantsItem}
          transition={skillVariantsItem.transition}
          className="section-subtitle">
          Teknologi dan tools yang saya gunakan untuk membangun project
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="skill-card"
              variants={skillVariantsItem}
              header={
                <div className="skill-icon">
                  <skill.icon size={32} color={skill.color} />
                </div>
              }
              content={
                <>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    ></motion.div>
                  </div>
                </>
              }
              footer={
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="skill-level"
                >
                  {skill.level}%
                </motion.span>
              }
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
