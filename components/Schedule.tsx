import { schedule } from '@/data/schedule';

// Production hides the whole section while approved is false. Previews show it
// with a visible Draft tag.
const IS_PROD = process.env.VERCEL_ENV === 'production';

export function Schedule() {
  if (!schedule.approved && IS_PROD) return null;
  const items = schedule.items.filter((i) => i.status === 'live');
  return (
    <section className="m-section" id="schedule">
      <div className="m-wrap">
        <span className="m-eyebrow">Schedule</span>
        <h2 className="m-display m-h2" >
          The day {!schedule.approved && <span className="m-tag">Draft</span>}
        </h2>
        <p className="m-small" style={{ marginBottom: 18 }}>A working schedule. Times may shift.</p>
        <div className="m-time">
          {items.map((i) => (
            <div className="m-trow" key={i.time + i.title}>
              <span className="t">{i.time}</span>
              <div>
                <h3>{i.title}</h3>
                {i.body && <p>{i.body}</p>}
                {i.tracks && (
                  <ul>
                    {i.tracks.map((t) => (<li key={t.name}><strong>{t.name}.</strong> {t.line}</li>))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="m-small" style={{ marginTop: 20, marginBottom: 6 }}>All day</p>
        <div className="m-list">
          {schedule.allDay.map((a) => (<div className="m-row" key={a} style={{ gridTemplateColumns: '1fr' }}><span>{a}</span></div>))}
        </div>
      </div>
    </section>
  );
}
