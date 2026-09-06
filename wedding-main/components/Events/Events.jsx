import styles from "./Events.module.css";

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className={styles.iconSvg}
      aria-hidden="true"
    >
      <path
        d="M12 29L32 12L52 29"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17 26V51H47V26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M27 51V38H37V51"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M39 20V14H45V25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function RoundaboutIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className={styles.iconSvg}
      aria-hidden="true"
    >
      {/* Cercle central */}
      <circle
        cx="32"
        cy="32"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <circle
        cx="32"
        cy="32"
        r="17"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Routes */}
      <path
        d="M32 4V15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M32 49V60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M4 32H15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M49 32H60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Petits traits décoratifs */}
      <path
        d="M25 8V16"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M39 48V56"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8 25H16"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M48 39H56"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function VenueIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className={styles.iconSvg}
      aria-hidden="true"
    >
      {/* Toit */}
      <path
        d="M8 27L32 12L56 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Bâtiment */}
      <path
        d="M13 27V52H51V27"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* Porte centrale */}
      <path
        d="M27 52V38C27 35 29 33 32 33C35 33 37 35 37 38V52"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* Fenêtres */}
      <rect
        x="18"
        y="34"
        width="7"
        height="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="39"
        y="34"
        width="7"
        height="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Drapeau */}
      <path
        d="M43 13V25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M43 14L51 16L43 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Events() {
  return (
    <section className={styles.section}>

      <p className={styles.subtitle}>
        LE CORTÈGE DES MARIÉS
      </p>

      <h2>NOTRE ITINÉRAIRE</h2>

      <div className={styles.ornament}>
        <span></span>
        <b>✦</b>
        <span></span>
      </div>

      <div className={styles.route}>

        {/* ======================
            ÉTAPE 1
        ====================== */}

        <div className={styles.stop}>

          <div className={styles.circle}>
            <HomeIcon />
          </div>

          <div className={styles.pin}>
            <span></span>
          </div>

          <h3>AIN EL BEIDA</h3>

          <div className={styles.separator}>
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p>Départ</p>

        </div>


        {/* ======================
            POINTS
        ====================== */}

        <div className={styles.connection}>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>


        {/* ======================
            ÉTAPE 2
        ====================== */}

        <div className={styles.stop}>

          <div className={styles.circle}>
            <RoundaboutIcon />
          </div>

          <div className={styles.pin}>
            <span></span>
          </div>

          <h3>
            ROND-POINT
            <br />
            DE LA PÉPINIÈRE
          </h3>

          <div className={styles.separator}>
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p>Passage du cortège</p>

        </div>


        {/* ======================
            POINTS
        ====================== */}

        <div className={styles.connection}>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>


        {/* ======================
            ÉTAPE 3
        ====================== */}

        <div className={styles.stop}>

          <div className={styles.circle}>
            <VenueIcon />
          </div>

          <div className={styles.pin}>
            <span></span>
          </div>

          <h3>
            SALLE DES FÊTES
            <br />
            MESREGHINE
          </h3>

          <div className={styles.separator}>
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p>Arrivée du cortège</p>

        </div>

      </div>

    </section>
  );
}