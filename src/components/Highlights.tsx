import { motion } from 'framer-motion';
import { reveal } from '../lib/motion';
import { highlights } from '../data';

export default function Highlights() {
  return (
    <section id="highlights" className="section dark highlights" aria-labelledby="highlights-title">
      <motion.div className="center" {...reveal}>
        <p className="eyebrow">Defining details</p>
        <h2 id="highlights-title">
          Made for the <em>uncompromising.</em>
        </h2>
      </motion.div>
      <div className="cards">
        {highlights.map(({ title, copy, Icon }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            whileHover={{ y: -6 }}
          >
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
