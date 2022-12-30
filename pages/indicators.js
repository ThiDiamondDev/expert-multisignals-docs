import Head from "next/head";
import styles from "../styles/Home.module.css";
import { indicators } from "./indicatorsList";

export default function Indicators() {
  return (
    <>
      <Head>
        <title>Indicators</title>
        <meta name="description" content="Indicators" />
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
          <h1>Supported Indicators List</h1>
        </div>
        <div className={styles.container}>
          <h3>
            The EA supports the same indicators of MT5, even custom or external
            indicators by just mapping the buffers exposed.
            <br />
            <br />
            The following terms can be used to get market data and make
            comparations:
          </h3>

          {indicators.map(({ category, indicatorsList }, categoryIndex) => {
            return (
              <div key={categoryIndex + category}>
                <h3 className={styles.category}>{category}</h3>
                {indicatorsList.map((name, indicatorIndex) => (
                  <div className={styles.indicator} key={name + indicatorIndex}>
                    {name + "[n]"}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
