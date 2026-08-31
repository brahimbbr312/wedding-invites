import styles from "./Events.module.css";

const events = [
  {
    icon: "◇",
    title: "CÉRÉMONIE",
    time: "16:00",
    description: "La cérémonie de mariage",
  },
  {
    icon: "⌂",
    title: "CÉLÉBRATION",
    time: "18:00",
    description: "Avec nos familles",
  },
  {
    icon: "✦",
    title: "RÉCEPTION",
    time: "20:00",
    description: "La soirée de mariage",
  },
];

export default function Events() {
  return (
    <section className={styles.section}>

      <h2>
        · LES ÉVÉNEMENTS ·
      </h2>

      <div className={styles.events}>

        {events.map((event) => (

          <article
            className={styles.event}
            key={event.title}
          >

            <div className={styles.icon}>
              {event.icon}
            </div>

            <h3>
              {event.title}
            </h3>

            <strong>
              {event.time}
            </strong>

            <p>
              {event.description}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}