import type { Faq } from '@/data/faq';

/** Native <details>: works without JavaScript, keyboard accessible. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="m-faq">
      {items.map((f) => (
        <details key={f.question}>
          <summary>{f.question}</summary>
          <p>{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
