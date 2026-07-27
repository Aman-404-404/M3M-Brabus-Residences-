import { motion } from 'framer-motion';
import { reveal } from '../lib/motion';
import { gallery } from '../data';

export default function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <motion.div className="gallery__head" {...reveal}>
        <div>
          <p className="eyebrow">Visual story</p>
          <h2 id="gallery-title">
            Enter a new <em>dimension.</em>
          </h2>
        </div>
        <p className="gallery__hint">A considered life in motion</p>
      </motion.div>
      <div className="gallery">
        {gallery.map(({ image, label }, index) => (
          <motion.figure
            key={image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <img
              src={'https://images.unsplash.com/' + image + '?auto=format&fit=crop&w=1400&q=85'}
              alt={label}
              loading="lazy"
              width={1400}
              height={933}
            />
            <figcaption>{label}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
