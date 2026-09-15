import styles from "./InvitationMessage.module.css";
import Image from "next/image";

export default function Invitation() {
  return (
    <section className={styles.section}>

      <div className={styles.card}>
        <Image
          src="/svg/Message/msgBg.svg"
          alt="background"
          className={styles.msgBg}
          fill
        />

        <h2>
          Nous avons le plaisir
          <br />
          de vous inviter
        </h2>

        <div className={styles.ornament}>
          <Image
            src="/images/msgFlower.webp"
            alt="ornament"
            width={100}
            height={35}
          />
        </div>

        <p>
          Avec nos familles, nous avons la joie
          de vous convier à célébrer notre mariage
          et à partager avec nous un jour rempli
          d'amour, de bonheur et d'émotions.
        </p>

        <div className={styles.ornament}>
          <Image
            src="/svg/Message/bottomLine.svg"
            alt="ornament"
            width={100}
            height={35}
          />
        </div>

      </div>

    </section>
  );
}