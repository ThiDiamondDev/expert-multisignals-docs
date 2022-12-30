import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ExpertMultiSignals Docs</title>
        <meta name="description" content="Documentation of Expert Advisor" />
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
          <h1>
            MultiSignals
            <br /> Expert Advisor
          </h1>
        </div>

        <div className={styles.grid}>
          <a
            href="/indicators"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Indicators <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about supported indicators and how to automate trade
              strategies.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Metatrader5 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about the trading platform used to develop and run the
              Expert Advisor.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Author <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Meet the developer, check another cool projects or contact for
              more info.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Another Features <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn in depths all the features and automate your own trade
              system.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
