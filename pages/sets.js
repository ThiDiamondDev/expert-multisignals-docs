import styles from "../styles/Home.module.css";
import DownloadButton from "../components/DownloadButton";
import CardLink from "../components/CardLink";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

export default function Sets() {
  return (
    <>
      <Header title={"Sets"} description={"Sets"} />
      <main className={styles.main}>
        <BackButton />
        <DownloadButton />
        <div className={styles.center}>
          <h1>Set Files as Start Point</h1>
        </div>
        <div className={styles.container}>
          <h3>
            Sets are pre-built configuration files that can be loaded by
            MetaTrader5 to be used by Expert Advisors.
            <br />
            <br />
            Please note that the files presented here are ONLY to illustrate how
            to configure the robots and are not configuration suggestions for
            use in real accounts. We recommend that you use this files as an
            initial basis for study, analysis and testing, and that you carry
            out the adjustments that you find suitable for your profile.
          </h3>
        </div>
        <div className={styles.grid_2}>
          <CardLink
            title="2 Moving Averages Crossing"
            href="/sets/MACross.set"
            download
          ></CardLink>
          <CardLink
            title="Awesome Oscillator Crossing"
            href="/sets/AOCross.set"
            download
          ></CardLink>
          <CardLink
            title="Envelopes Band Touching"
            href="/sets/Envelopes.set"
            download
          ></CardLink>
          <CardLink
            title="Bullish/Bearish Engulfing"
            href="/sets/Engulfing.set"
            download
          ></CardLink>
        </div>
      </main>
    </>
  );
}
