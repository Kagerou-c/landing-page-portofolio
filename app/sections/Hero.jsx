"use client";
import Button from "../components/Button";
import { motion } from "framer-motion";
import "./Hero.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
   
  },
};

const itemVariants = (delay, opacity)=>{
  return {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: opacity,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
}}


export default function Hero() {
  return (
    <section id="home" className="hero">
       <motion.div 
      className="hero-bg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={itemVariants(0.5, 1).transition}
      >
        <motion.div variants={itemVariants(0.2, 0.5)} className="hero-glow hero-glow-1"></motion.div>
        <motion.div variants={itemVariants(0.2, 0.5)} className="hero-glow hero-glow-2"></motion.div>
        <motion.div variants={itemVariants(0.2, 0.5)} className="hero-grid"></motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-container"
      >
        <div className="hero-content">
          
          <motion.h1 
          className="hero-title"
          variants={itemVariants(0.5, 1)}
          >Hi, I'm <span className="gradient-text">John Doe</span>
          </motion.h1>
          <motion.p 
          className="hero-subtitle"
          variants={itemVariants(0.6, 1)}
          >Web Developer & Designer</motion.p>
          <motion.p 
          className="hero-description"
          variants={itemVariants(0.7, 1)}
          >
            Seorang pelajar yang passionate di bidang web development. Membangun
            pengalaman digital yang menarik dan fungsional.
          </motion.p>
          <motion.div 
          className="hero-actions"
          variants={itemVariants(0.8, 1)}
          >
            <Button variant="primary" href="#projects">
              Lihat Karya
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="outline" href="#contact">
              Hubungi Saya
            </Button>
          </motion.div>
        </div>

        
      </motion.div>


    </section>
  );
}
