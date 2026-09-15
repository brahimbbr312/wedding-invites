"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Loading.module.css";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.loading}>

      {/* =========================================
          PETALS
      ========================================= */}

      <div className={styles.petalLayer}>

        <Image
          src="/svg/hero/petals/petal.svg"
          alt=""
          width={28}
          height={20}
          className={`${styles.petal} ${styles.petal1}`}
        />

        <Image
          src="/svg/hero/petals/petal.svg"
          alt=""
          width={28}
          height={20}
          className={`${styles.petal} ${styles.petal2}`}
        />

        <Image
          src="/svg/hero/petals/petal.svg"
          alt=""
          width={28}
          height={20}
          className={`${styles.petal} ${styles.petal3}`}
        />

        <Image
          src="/svg/hero/petals/petal.svg"
          alt=""
          width={28}
          height={20}
          className={`${styles.petal} ${styles.petal4}`}
        />

        <Image
          src="/svg/hero/petals/petal.svg"
          alt=""
          width={28}
          height={20}
          className={`${styles.petal} ${styles.petal5}`}
        />

        <Image
          src="/svg/hero/petals/petal.svg"
          alt=""
          width={28}
          height={20}
          className={`${styles.petal} ${styles.petal6}`}
        />

      </div>


      {/* =========================================
          GOLD ORNAMENTS
      ========================================= */}

      <div className={styles.ornaments}>

        <Image
          src="/svg/hero/ornaments/ornament-1.svg"
          alt=""
          width={25}
          height={25}
          className={`${styles.ornament} ${styles.star1}`}
        />

        <Image
          src="/svg/hero/ornaments/ornament-2.svg"
          alt=""
          width={20}
          height={20}
          className={`${styles.ornament} ${styles.star2}`}
        />

        <Image
          src="/svg/hero/ornaments/ornament-3.svg"
          alt=""
          width={25}
          height={25}
          className={`${styles.ornament} ${styles.star3}`}
        />

        <Image
          src="/svg/hero/ornaments/ornament-4.svg"
          alt=""
          width={20}
          height={20}
          className={`${styles.ornament} ${styles.star4}`}
        />

      </div>


      {/* =========================================
          CENTER CONTENT
      ========================================= */}

      <div className={styles.content}>

        <div className={styles.smallText}>
          NOTRE MARIAGE
        </div>

        <div className={styles.names}>
          <span>Mohamed</span>

          <div className={styles.and}>
            &
          </div>

          <span>Abir</span>
        </div>

        <div className={styles.date}>
          23 . 11 . 2026
        </div>

        <div className={styles.line}>
          <span>♥</span>
        </div>

        <div className={styles.loadingText}>
          Chargement...
        </div>

      </div>

    </div>
  );
}