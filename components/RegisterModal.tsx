'use client';

import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RegisterForm } from './RegisterForm';
import { EVENT_DATE_SHORT } from '@/config';
import styles from './RegisterModal.module.css';

const STORAGE_KEY = 'meridian_reserve_v1';

export function RegisterModal() {
  const [open, setOpen] = useState(false);

  // First-visit auto-open (once per visitor).
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      dismissed = true; // storage blocked — don't nag
    }
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 1100);
      return () => clearTimeout(t);
    }
  }, []);

  const remember = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    remember();
  }, [remember]);

  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
        >
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reserve-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={close} aria-label="Close">
              &times;
            </button>
            <span className={styles.eyebrow}>Reserve your spot</span>
            <p id="reserve-title" className={styles.line}>
              Reserve your spot for Meridian on {EVENT_DATE_SHORT} — it&apos;s free.
            </p>
            <RegisterForm source="popup" onSuccess={remember} />
            <p className={styles.fine}>One email &middot; no spam &middot; dismiss anytime</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
