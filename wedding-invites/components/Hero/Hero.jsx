'use client';

import Image from 'next/image';
import Header from '../Header/Header';
import styles from "./Hero.module.css";
import BotanicalTree from './BotanicalTree';
import styl from './BotanicalTree.module.css';
import RightTopTree from './rightTopTree/RightTopTree';
import RightTree from './rightTree/RightTree';


export default function Hero({ onOpenMenu }) {
  return (
    <section className={styles.heroSection}>

      {/* ==========================================
          HERO ARTWORK

          Add your PNG/SVG here.
      ========================================== */}

      <div className={styles.heroArtwork}>

        {/* =========================================
      ARCH
      ========================================= */}

        <div className={styles.archWrapper}>
          <Image
            src="/svg/hero/arch.svg"
            alt=""
            fill
            priority
            className={styles.heroArch}
          />
        </div>
        




<div className={styles.leftTree}>
        <BotanicalTree side="left" />
          <Image
    src="/images/Hero/flower-left2.webp"
    alt=""
    width={70}
    height={70}
    className={styles.leftFlower2}
  />
          <Image
    src="/images/Hero/flower-left.webp"
    alt=""
    width={80}
    height={80}
    className={styles.leftFlower}
  />
      </div>
<div className={styles.rightTopTree}>
        <RightTopTree side="right" />
      </div>
<div className={styles.rightTree}>
        <RightTree side="right" />
          <Image
    src="/images/Hero/flower-right.webp"
    alt=""
    width={80}
    height={80}
    className={styles.rightFlower}
  />
      </div>


        {/* =========================================
      RIGHT FLOWERS

      Add your flower image/SVG here.
  ========================================= */}


        {/* =====================================================
    FLOATING PINK PETALS
===================================================== */}



        <div className={styles.ornaments}>

  {/* =====================================================
      BACKGROUND STAR ORNAMENTS

      Different:
      - positions
      - sizes
      - rotations
      - opacity
      - brightness

      Add/remove stars from this array whenever you want.
  ===================================================== */}

  {[
    // Small subtle stars
    {
      src: '/svg/hero/ornaments/ornament-1.svg',
      top: '7%',
      left: '13%',
      size: 13,
      rotate: 15,
      opacity: 0.45,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-2.svg',
      top: '11%',
      left: '31%',
      size: 9,
      rotate: -20,
      opacity: 0.35,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-1.svg',
      top: '6%',
      right: '27%',
      size: 12,
      rotate: 30,
      opacity: 0.4,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-3.svg',
      top: '15%',
      right: '13%',
      size: 16,
      rotate: -15,
      opacity: 0.5,
      shiny: false,
    },


    // Medium stars
    {
      src: '/svg/hero/ornaments/ornament-2.svg',
      top: '22%',
      left: '8%',
      size: 22,
      rotate: 20,
      opacity: 0.65,
      shiny: true,
    },

    {
      src: '/svg/hero/ornaments/ornament-4.svg',
      top: '28%',
      left: '20%',
      size: 14,
      rotate: -10,
      opacity: 0.5,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-1.svg',
      top: '25%',
      right: '8%',
      size: 19,
      rotate: 35,
      opacity: 0.55,
      shiny: true,
    },

    {
      src: '/svg/hero/ornaments/ornament-3.svg',
      top: '34%',
      right: '19%',
      size: 11,
      rotate: -25,
      opacity: 0.4,
      shiny: false,
    },


    // Larger shiny stars
    {
      src: '/svg/hero/ornaments/ornament-4.svg',
      top: '17%',
      left: '5%',
      size: 30,
      rotate: 0,
      opacity: 0.85,
      shiny: true,
    },

    {
      src: '/svg/hero/ornaments/ornament-2.svg',
      top: '38%',
      left: '10%',
      size: 25,
      rotate: 25,
      opacity: 0.75,
      shiny: true,
    },

    {
      src: '/svg/hero/ornaments/ornament-3.svg',
      top: '42%',
      right: '7%',
      size: 28,
      rotate: -15,
      opacity: 0.8,
      shiny: true,
    },


    // Lower area
    {
      top: '52%',
      left: '14%',
      size: 12,
      rotate: 20,
      opacity: 0.35,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-1.svg',
      top: '57%',
      right: '14%',
      size: 18,
      rotate: -30,
      opacity: 0.5,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-2.svg',
      top: '63%',
      left: '7%',
      size: 23,
      rotate: 15,
      opacity: 0.7,
      shiny: true,
    },

    {
      src: '/svg/hero/ornaments/ornament-4.svg',
      top: '68%',
      right: '8%',
      size: 14,
      rotate: 40,
      opacity: 0.45,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-3.svg',
      top: '76%',
      left: '18%',
      size: 10,
      rotate: -20,
      opacity: 0.35,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-1.svg',
      top: '79%',
      right: '20%',
      size: 21,
      rotate: 25,
      opacity: 0.6,
      shiny: true,
    },

    // Bottom corners
    {
      src: '/svg/hero/ornaments/ornament-2.svg',
      top: '87%',
      left: '8%',
      size: 16,
      rotate: -15,
      opacity: 0.5,
      shiny: false,
    },

    {
      src: '/svg/hero/ornaments/ornament-4.svg',
      top: '90%',
      right: '9%',
      size: 27,
      rotate: 15,
      opacity: 0.75,
      shiny: true,
    },

  ].map((star, index) => (
    <Image
      key={index}
      src={star.src}
      alt=""
      width={star.size}
      height={star.size}
      className={`${styles.ornament} ${
        star.shiny ? styles.shiny : ''
      }`}
      style={{
        top: star.top,
        left: star.left,
        right: star.right,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: star.opacity,
        transform: `rotate(${star.rotate}deg)`,
      }}
    />
  ))}

</div>

      </div>


      {/* ==========================================
          BUTTONS
      ========================================== */}

      <Header />


      {/* ==========================================
          HERO CONTENT
      ========================================== */}

      <div className={styles.heroContent}>

        <div className={styles.topHeart}>
          ♥
        </div>


        <div className={styles.bismillah}>
          Bismillah
        </div>


        <p className={styles.introduction}>
          Nous avons le plaisir de vous inviter
          <br />
          à célébrer notre mariage
        </p>


        <div className={styles.names}>

          <div className={styles.name}>
            Amine
          </div>

          <div className={styles.and}>
            &amp;
          </div>

          <div className={styles.name}>
            Abir
          </div>

        </div>


        <div className={styles.divider}>

          <span className={styles.dividerLine} />

          <span className={styles.dividerHeart}>
            ♥
          </span>

          <span className={styles.dividerLine} />

        </div>


        <div className={styles.date}>
          23&nbsp; . &nbsp;11&nbsp; . &nbsp;2026
        </div>


        <div className={styles.time}>

          <span className={styles.timeDecoration}>
            ❮
          </span>

          <span>
            À 20H
          </span>

          <span className={styles.timeDecoration}>
            ❯
          </span>

        </div>

      </div>




    </section>
  );
}