import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import InvitationMessage from "@/components/InvitationMessage/InvitationMessage";
import Events from "@/components/Events/Events";
import Venue from "@/components/Venue/Venue";
import Rsvp from "@/components/Rsvp/Rsvp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Countdown />
        <InvitationMessage />
        <Events />
        <Venue />
        <Rsvp />
      </main>
    </div>
  );
}
