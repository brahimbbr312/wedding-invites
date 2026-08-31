import styles from "./InvitationMessage.module.css";

export default function Invitation() {
  return (
    <section className={styles.section}>

      <div className={styles.card}>

        <h2>
          Nous avons le plaisir
          <br />
          de vous inviter
        </h2>

        <div className={styles.ornament}>
          ✦ ───── ✦
        </div>

        <p>
          Avec nos familles, nous avons la joie
          de vous convier à célébrer notre mariage
          et à partager avec nous un jour rempli
          d'amour, de bonheur et d'émotions.
        </p>

        <div className={styles.ornament}>
          ──────────
        </div>

      </div>

    </section>
  );
}