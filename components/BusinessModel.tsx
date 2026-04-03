'use client';

import { AnimateIn } from './AnimateIn';
import styles from './BusinessModel.module.css';

export function BusinessModel() {
  return (
    <section className={styles.block}>
      <div className="container">
        <AnimateIn>
          <p className={styles.text}>
            Meridian Conference is free for every student who attends. It is funded
            entirely by sponsors and partners who want to be in the room where young
            people from Ventura County are making their first real connections.
            No tickets. No cost. Just access.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
