import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '../data';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section dark faq" aria-labelledby="faq-title">
      <div>
        <p className="eyebrow">Know more</p>
        <h2 id="faq-title">
          Questions, <em>answered.</em>
        </h2>
      </div>
      <div>
        {faqs.map(({ question, answer }, index) => {
          const isOpen = open === index;
          return (
            <article key={question}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                {question}
                {isOpen ? <Minus /> : <Plus />}
              </button>
              {isOpen && <p id={`faq-answer-${index}`}>{answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
