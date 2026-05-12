"use client";
import "@/app/globals.css";
import "./About.css";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Tahun Belajar" },
  { value: "10+", label: "Project Selesai" },
];

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.8
          }}
          transition={variants.transition}
          className="section-title">
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.p
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.8
          }}
          transition={variants.transition}
          className="section-subtitle">
          Mengenal lebih dekat siapa saya dan apa yang saya lakukan
        </motion.p>

        <div className="about-grid">
          <div className="hero-visual">
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#215af8ff" />
                  <stop offset="100%" stopColor="#b69af7ff" />
                </linearGradient>
              </defs>

              <motion.rect
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                x="100" y="100" width="300" height="300"
                rx="20"
                fill="none" stroke="#e39ffaff" strokeWidth="5" strokeDasharray="30 15"
              />

              <motion.circle
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                cx="400" cy="150" r="40" fill="url(#hero-gradient)"
              />

              <motion.circle
                animate={{ x: [0, -40, 40, 20, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                cx="100" cy="50" r="40"
                fill="url(#hero-gradient)" />
            </svg>
          </div>

          <div className="about-info">
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={variants.transition}
              className="about-text">
              Halo! Saya adalah seorang pelajar yang memiliki passion di bidang
              teknologi dan web development. Saya senang mempelajari hal-hal baru
              dan membangun project yang bermanfaat bagi orang lain.
            </motion.p>
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={variants.transition}
              className="about-text">
              Saat ini saya fokus belajar frontend development dengan teknologi
              modern seperti React, typescript, javascript, dan Next.js. Saya percaya bahwa desain yang
              cantik dan user friendly serta kode yang bersih adalah kunci untuk membuat produk
              digital yang bermanfaat bagi orang lain.
            </motion.p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{ ...variants.transition, delay: index * 0.2 }}
                  key={stat.label} className="about-stat">
                  <span className="about-stat-value gradient-text">
                    {stat.value}
                  </span>
                  <span className="about-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
