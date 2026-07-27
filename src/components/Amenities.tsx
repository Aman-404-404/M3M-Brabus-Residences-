import { motion } from 'framer-motion';
import { reveal } from '../lib/motion';
import { amenities } from '../data';

export default function Amenities() {
  return (
    <section id="amenities" className="section two" aria-labelledby="amenities-title">
      <motion.div className="amenities__intro" {...reveal}>
        <p className="eyebrow">Beyond the residence</p>
        <h2 id="amenities-title">
          A world curated <em>around you.</em>
        </h2>
        <p>Spaces that invite you to pause, recharge and connect — considered down to their last detail.</p>
      </motion.div>
      <div className="amenities__grid">
        {amenities.map(({ Icon, name, copy }, index) => (
          <motion.article
            className="amenity-card"
            key={name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <div className="amenity-card__icon">
              <Icon size={20} />
            </div>
            <div>
              <h3>{name}</h3>
              <p>{copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
