import { RegisterForm } from 'meridian-landing';

// The inline RSVP capture used across the site (Hero, popups). It owns its
// own submit/validation state; these stories sweep the label/placeholder API.
// Wrapped in a tan panel so the form reads against the warm surface it ships on.
const Panel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: 'var(--box)',
      border: '1px solid var(--box-line)',
      borderRadius: 6,
      padding: '28px 32px',
      maxWidth: 460,
      boxShadow: '0 20px 46px rgba(40, 28, 16, 0.10)',
    }}
  >
    {children}
  </div>
);

export const Default = () => (
  <Panel>
    <RegisterForm source="preview" />
  </Panel>
);

export const CustomLabel = () => (
  <Panel>
    <RegisterForm source="preview" buttonLabel="RSVP" placeholder="you@school.edu" />
  </Panel>
);
