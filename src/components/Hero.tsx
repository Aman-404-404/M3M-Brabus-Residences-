import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="shade" />
      <div className="hero-text">
        <p className="eyebrow">Sector 65, Gurugram</p>
        <motion.h1 id="hero-title" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
          The Art of
          <br />
          <em>Extraordinary.</em>
        </motion.h1>
        <p>A limited collection of branded residences, where German performance meets contemporary luxury.</p>
        <div className="actions">
          <a href="#contact" className="gold">
            Book a Site Visit <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="outline">
            Download Brochure <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
