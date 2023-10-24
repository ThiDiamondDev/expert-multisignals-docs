import Head from "next/head";
import styles from "../styles/Home.module.css";
import DownloadButton from "../components/DownloadButton";
import BackButton from "../components/BackButton";

export default function Features() {
  return (
    <>
      <Head>
        <title>EA Features</title>
        <meta name="description" content="Features" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BackButton />
        <DownloadButton />
        <div className={styles.center}>
          <h1>Supported Features</h1>
        </div>
        <div className={styles.container}>
          <h3>
            The EA is made with <a>MQL5</a> and runs inside Metatrader5
            platform. The project is still under development, but the main
            feature is the generation of market buy/sell/reversion signals based
            on any indicator comparisions inside expressions. There are still
            work in progress and some features/parameters can change along time.
            Also trading on REAL accounts is currently blocked, so it will only
            work on DEMO accounts for security reasons. Feel free to download,
            test and share your feedback.
            <br />
            <br />
            The current features of the robot are:
            <br />
            <br />
            <ul className={styles.list}>
              <li>Work mode on every tick or on bar.</li>
              <li>Work symbol setting to trade custom charts like Renko</li>
              <li>Allow/deny buy or sell trades, as well as reversions.</li>
              <li>Partial entries/exits on profit and on loss.</li>
              <li>
                Limiting positions, orders and volumes opened, interval in
                seconds between trades and max trade per day.
              </li>
              <li>
                Definition of lots for open trades and option to use market
                price or pending orders.
              </li>
              <li>
                Definition of signals for open, close and reverse positions.
              </li>
              <li>
                Definition of fixed stop loss and take profit in points or
                custom expression calculation.
              </li>
              <li>
                Option to use a trailing stop based on fixed points or
                expression calculation.
              </li>
              <li>
                Settings for start and end hour/minute of trade session, with
                option to close positions after end.
              </li>
              <li>
                Monetary limits for profit and loss, with option to close
                positions after reach the limit.
              </li>
            </ul>
            With signals generation the Expert can open, close and manage
            positions with fixed stop loss and take profit.
            <br />
            <br />
            Another cool feature is the possibility to test the settings in
            market history, live on demo accounts and even optimize the used
            parameters inside the MT5 strategy tester.
          </h3>
        </div>
      </main>
    </>
  );
}
