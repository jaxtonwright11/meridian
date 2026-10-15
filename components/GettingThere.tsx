import { INSTAGRAM_URL } from '@/config';

/** Brief v2 section 6.2: UCLA in Westwood only. Never a building, room or address. */
export function GettingThere() {
  return (
    <section className="m-section" id="getting-there">
      <div className="m-wrap">
        <span className="m-eyebrow">Getting there</span>
        <h2 className="m-display m-h2">The day is at UCLA in Westwood.</h2>
        <p className="m-lead">
          Parking and arrival details go to everyone registered, and to{' '}
          {INSTAGRAM_URL ? (
            <a className="m-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@meridianconference</a>
          ) : '@meridianconference'}{' '}
          on Instagram before the day.
        </p>
      </div>
    </section>
  );
}
