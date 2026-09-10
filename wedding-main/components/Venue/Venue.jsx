import Link from "next/link";
import styles from "./Venue.module.css";
import Image from "next/image";

export default function Location() {
  return (
    <section className={styles.section}>

      <div className={styles.card}>

        <h2>
          LIEU DE LA RÉCEPTION
        </h2>
                <div className={styles.ornament}>
          <Image
            src="/svg/Message/bottomLine.svg"
            alt="ornament"
            width={100}
            height={35}
          />
        </div>

        <div className={styles.location}>

          <div className={styles.pin}>
            <span />
          </div>

          <div>
            <h3>
              LE LIEU DE VOTRE MARIAGE
            </h3>

            <p>
              Salle Des Fêtes Andalous
              <br />
              Misserghin, Oran
            </p>
          </div>

        </div>

        <Link href="https://maps.app.goo.gl/j3Bko1hoSuDg4pf28" className={styles.mapImg} passHref>
        <div className={styles.mapImg}>

          <Image
            src="/images/location/location.webp"
            alt="map"
            fill
          />
        </div>
        </Link>

        <Link href="https://maps.app.goo.gl/j3Bko1hoSuDg4pf28" passHref className={styles.mapButton}>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21C12 21 19 14.5 19 8.5C19 4.91 15.87 2 12 2C8.13 2 5 4.91 5 8.5C5 14.5 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle
      cx="12"
      cy="8.5"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>

  <span>Voir l’itinéraire</span>
</Link>

      </div>

    </section>
  );
}