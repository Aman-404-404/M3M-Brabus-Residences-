import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { reveal } from '../lib/motion';
import { locationList } from '../data';

export default function Location() {
  return (
    <section id="location" className="section location" aria-labelledby="location-title">
      <motion.a
        className="location__map"
        href="https://maps.google.com/?q=Sector+65+Gurugram"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Sector 65, Gurugram in Google Maps"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <span className="location__pin">
          <span>
            <MapPin size={20} />
          </span>{' '}
          Sector 65, Gurugram
        </span>
      </motion.a>
      <motion.div className="location__copy" {...reveal}>
        <p className="eyebrow">Exceptionally connected</p>
        <h2 id="location-title">
          At the centre of <em>everything.</em>
        </h2>
        <p>Effortlessly connected to the city&apos;s most important business, social and leisure destinations.</p>
        <ul className="location__list">
          {locationList.map(({ place, time }) => (
            <li key={place}>
              <b>{time}</b>
              {place}
            </li>
          ))}
        </ul>
        <a className="location__link" href="https://maps.google.com/?q=Sector+65+Gurugram" target="_blank" rel="noreferrer">
          View location <ArrowUpRight size={15} />
        </a>
      </motion.div>
    </section>
  );
}
