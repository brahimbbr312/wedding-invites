import styles from "./Events.module.css";
import Image from "next/image";

const stops = [
  {
    image: "/images/route/start.webp",
    title: "AIN EL BEIDA",
    subtitle: "Départ",
  },
  {
    image: "/images/route/middle.webp",
    title: "ROND-POINT DE LA PÉPINIÈRE",
    subtitle: "Passage du cortège",
  },
  {
    image: "/images/route/end.webp",
    title: "SALLE DES FÊTES MESREGHINE",
    subtitle: "Arrivée du cortège",
  },
];

export default function Events() {
  return (
    <section className={styles.section}>

    <div className={styles.card}>
    <h2 className={styles.sectionTitle}>LE PARCOURS DU CORTEGE</h2>

    <Image
      src="/svg/route/routeBg.svg"
      alt="Cortege"
      fill
      className={styles.cortegeImage}
    />
     <div className={styles.routeContainer}>

        {/* Route SVG */}
        <div className={styles.routeLine}>
          <Image
            src="/svg/route/routeLine.svg"
            alt=""
            fill
            priority
          />
        </div>

        {/* Stops */}
        {stops.map((stop, index) => (
          <div className={styles.stop} key={stop.title}>

            <div className={styles.location}>
              <Image
                src={stop.image}
                alt={stop.title}
                fill
                sizes="(max-width: 600px) 20vw, 180px"
              />
            </div>

            <div className={styles.info}>
              <div className={styles.infoCard}>
                <h3>{stop.title}</h3>
                <p>{stop.subtitle}</p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
    
    </section>
  );
}