import Head from "next/head";
import styles from "../styles/Home.module.css";
import IndicatorsList from "./indicatorsList";
import DownloadButton from "../components/DownloadButton";
import { CardLink } from "./CardLink";
import BackButton from "../components/BackButton";

export default function Indicators() {
  return (
    <>
      <Head>
        <title>Installation</title>
        <meta name="description" content="Indicators" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BackButton />
        <DownloadButton />
        <div className={styles.center}>
          <h1>Installation Guide</h1>
        </div>
        <div className={styles.container}>
          <h3>
            To start automating your strategies, download the{" "}
            <a
              href="https://github.com/ThiDiamondDev/expert-multisignals-docs/releases/download/demo-version/expert.ex5"
              download={"expert.ex5"}
              className={styles.download_link}
            >
              expert.ex5
            </a>{" "}
            file and move to "C:/Program Files/MetaTrader 5/MQL5/Experts/".
            <br />
            <br />
            To start an Expert Advisor, attach it to a chart. The easiest way is
            to double-click on an Expert Advisor in the Navigator window or
            drag'n'drop it to a chart. This will bring up the Expert Advisor
            Properties window.
            <br />
            <br /> Inside the "Inputs" tab, the parameters are located, and
            after fill with the desired settings or load a previous saved ".set"
            file, click OK to start the Expert Advisors on the chart. If an
            Expert Advisor has been successfully started, its name and icon Auto
            Trading enabled appear in the upper right corner of the chart.
            <br />
            <br />
            If the icon is Auto Trading disabled, the Expert Advisor is not
            allowed to perform trading operations. Enable automated trading in
            the Expert Advisor settings, as well as in the trading platform
            options. <br />
            <br />
            Note: The current version only works on DEMO accounts.
          </h3>
        </div>
        <div className={styles.grid}>
          <CardLink title="Starter Sets" href="/Sets">
            Get some pre-built sets to start testing.
          </CardLink>
          <CardLink
            title="Detailed Instructions"
            href="/https://www.metatrader5.com/en/terminal/help/algotrading/trade_robots_indicators"
          >
            Detailed instructions about how to install a expert advisor inside
            MetaTrader5.
          </CardLink>
          <CardLink
            title="Strategy Testing and Optimization"
            href="https://www.metatrader5.com/en/terminal/help/algotrading"
          >
            Learn more about MetaTrader5, indicators, strategy testing and
            optimizations.
          </CardLink>
        </div>
      </main>
    </>
  );
}
