import { EVENT_DATE, EVENT_TIME, EVENT_VENUE, INSTAGRAM_URL, VENUE_DETAILS } from '@/config';

export function GettingThere() {
  const rows = [
    ['Building', VENUE_DETAILS.building],
    ['Address', VENUE_DETAILS.address],
    ['Date', `${EVENT_DATE}, ${EVENT_TIME}`],
  ];
  return (
    <section className="m-section" id="getting-there">
      <div className="m-wrap">
        <span className="m-eyebrow">Getting there</span>
        <h2 className="m-display m-h2">{VENUE_DETAILS.building} at {EVENT_VENUE}</h2>
        <div className="m-list" style={{ maxWidth: 720 }}>
          {rows.map(([k, v]) => (
            <div className="m-row" key={k}>
              <span className="r" style={{ fontFamily: 'var(--font-mono), monospace', textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12 }}>{k}</span>
              <span className="n" style={{ fontSize: 18 }}>{v}</span>
            </div>
          ))}
        </div>
        <p className="m-small" style={{ marginTop: 16 }}>
          Put the address into your maps app and it will take you to the door.{' '}
          {INSTAGRAM_URL && (
            <>
              Parking and day-of updates are on{' '}
              <a className="m-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
