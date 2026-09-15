"use client";

import { useState } from "react";
import styles from "./Rsvp.module.css";

export default function RSVP() {

  const [response, setResponse] =
    useState(null);

  return (
    <section className={styles.section}>

      <h2>
        SEREZ-VOUS DES NÔTRES ?
      </h2>

      <p className={styles.description}>
        Merci de nous confirmer votre présence
        avant le
        <br />
        01 Novembre 2026
      </p>

      <div className={styles.buttons}>

        <button
          className={styles.yes}
          onClick={() => setResponse("yes")}
        >
          OUI, AVEC PLAISIR    ♥
        </button>

        <button
          className={styles.no}
          onClick={() => setResponse("no")}
        >
          DÉSOLÉ, JE NE POURRAI PAS
        </button>

      </div>

      {response === "yes" && (
        <div className={styles.response}>
          <p>
            Merci pour votre réponse !
            <br />
            Nous avons hâte de vous voir
            lors de notre mariage.
          </p>
        </div>
      )}

      {response === "no" && (
        <div className={styles.response}>
          <p>
            Merci de nous avoir répondu.
            <br />
            Vous serez dans nos pensées
            lors de cette belle journée.
          </p>
        </div>
      )}

    </section>
  );
}