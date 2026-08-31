import styles from "./Venue.module.css";

export default function Location() {
  return (
    <section className={styles.section}>

      <div className={styles.card}>

        <h2>
          LIEU DE LA RÉCEPTION
        </h2>

        <div className={styles.location}>

          <div className={styles.pin}>
            <span />
          </div>

          <div>
            <h3>
              LE LIEU DE VOTRE MARIAGE
            </h3>

            <p>
              Adresse de la réception
              <br />
              Ville, Pays
            </p>
          </div>

        </div>

        <p className={styles.note}>
          Nous avons hâte de vous accueillir
          et de partager cette belle journée
          avec vous.
        </p>

      </div>

    </section>
  );
}