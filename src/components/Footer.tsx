import { Globe2, MessageCircle, Send } from 'lucide-react';
import { nav } from '../data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__top">
        <div>
          <a className="brand" href="#home" aria-label="M3M BRABUS home">
            <span>M3M</span> BRABUS
          </a>
          <p className="footer__statement">
            A rare expression of performance, precision and elevated living in the heart of Gurugram.
          </p>
        </div>
        <div>
          <p className="footer__title">Explore</p>
          <nav className="footer__links" aria-label="Footer navigation">
            {nav.map((item) => (
              <a key={item} href={'#' + item.toLowerCase().replace(' ', '-')}>
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="footer__title">Connect</p>
          <div className="footer__social">
            <a href="#contact" aria-label="Website">
              <Globe2 size={16} />
            </a>
            <a href="#contact" aria-label="Message us">
              <MessageCircle size={16} />
            </a>
            <a href="#contact" aria-label="Email us">
              <Send size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 M3M India. All rights reserved.</span>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
