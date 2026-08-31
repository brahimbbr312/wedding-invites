"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

function TimeCard({ value, label }) {
  return (
    <div className={styles.timeCard}>
      <strong className={styles.number}>
        {String(value).padStart(2, "0")}
      </strong>

      <span className={styles.label}>
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const weddingDate = new Date(
    "2026-11-23T20:00:00"
  ).getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = weddingDate - Date.now();

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTime({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section className={styles.countdownSection}>

      <h2 className={styles.title}>
        LE GRAND JOUR APPROCHE
      </h2>

      <div className={styles.countdownGrid}>

        <TimeCard
          value={time.days}
          label="JOURS"
        />

        <TimeCard
          value={time.hours}
          label="HEURES"
        />

        <TimeCard
          value={time.minutes}
          label="MINUTES"
        />

        <TimeCard
          value={time.seconds}
          label="SECONDES"
        />

      </div>

    </section>
  );
}