import Head from "next/head";
import styles from "../styles/Home.module.css";

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
        <div className={styles.description}>
          <p style={{ backgroundColor: "white" }}>
            Metatrader5 Expert Advisor
            <br />
          </p>
        </div>

        <div className={styles.center}>
          <h1>Supported Features</h1>
        </div>
        <div className={styles.container}>
          <h3>
            The EA is made with <a>MQL5</a> and runs inside Metatrader5
            platform. The project is still under development, but the main
            feature is the generation of market Buy/Sell/Reversion signals based
            on any indicator comparisions inside a text.
            <br />
            <br />
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
