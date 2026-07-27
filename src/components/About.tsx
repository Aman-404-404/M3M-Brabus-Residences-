import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { reveal } from '../lib/motion';

export default function About() {
  return (
    <section id="about" className="section two" aria-labelledby="about-title">
      <motion.div {...reveal}>
        <p className="eyebrow">The address</p>
        <h2 id="about-title">
          Driven by <em>distinction.</em>
        </h2>
      </motion.div>
      <motion.div className="about__copy" {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
        <p className="lead">
          M3M BRABUS is a bold expression of elevated living. Designed for those who refuse the ordinary, every residence
          reflects an uncompromising pursuit of craft, performance and precision.
        </p>
        <p>At the heart of Gurugram&apos;s most coveted corridor, it is a statement of a life lived at full throttle.</p>
        <a href="#contact" className="about__link">
          Discover the vision <ArrowUpRight size={16} />
        </a>
      </motion.div>
      <motion.figure className="about__image" {...reveal} transition={{ ...reveal.transition, delay: 0.18 }}>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85"
          alt="Refined M3M BRABUS residence interior"
          loading="lazy"
          width={1500}
          height={1000}
        />
        <figcaption className="about__note">Crafted without compromise</figcaption>
      </motion.figure>
    </section>
  );
}
