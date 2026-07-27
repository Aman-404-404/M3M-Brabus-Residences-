import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { reveal } from '../lib/motion';
import { floorPlans } from '../data';

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="section dark" aria-labelledby="plans-title">
      <motion.div className="floorplans__head" {...reveal}>
        <div>
          <p className="eyebrow">Personal space, perfected</p>
          <h2 id="plans-title">
            Plans that <em>perform.</em>
          </h2>
        </div>
        <p>Thoughtfully proportioned residences designed around extraordinary everyday living.</p>
      </motion.div>
      <div className="plans">
        {floorPlans.map(({ number, name, area, meta }, index) => (
          <motion.article
            className="plan-card"
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <span className="plan-card__number">{number}</span>
            <h3>{name}</h3>
            <p className="plan-card__area">{area}</p>
            <p className="plan-card__meta">{meta}</p>
            <a href="#contact">
              Request floor plan <ArrowUpRight size={15} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
