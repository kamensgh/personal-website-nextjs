

"use client"

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import { motion, useScroll } from "motion/react";
import TsParticlesBackground from '../components/TsParticlesBackground';

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main style={{ position: 'relative' }}>
      <TsParticlesBackground />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#ffc107",
          zIndex: 9999,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <Content />
        <Footer />
      </div>
    </main>
  );
}
