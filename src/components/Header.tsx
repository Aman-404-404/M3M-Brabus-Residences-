import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { nav } from '../data';

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <a className="brand" href="#home" aria-label="M3M BRABUS home">
        <span>M3M</span> BRABUS
      </a>
      <nav aria-label="Primary navigation">
        {nav.map((item, index) => (
          <a href={'#' + item.toLowerCase().replace(' ', '-')} key={item} aria-current={index === 0 ? 'page' : undefined}>
            {item}
          </a>
        ))}
      </nav>
      <a className="enquire" href="#contact">
        Enquire Now <ArrowUpRight size={15} />
      </a>
      <button className="menu" type="button" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>
        {menu ? <X /> : <Menu />}
      </button>
      {menu && (
        <div className="mobile">
          {nav.map((item) => (
            <a onClick={() => setMenu(false)} href={'#' + item.toLowerCase().replace(' ', '-')} key={item}>
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
