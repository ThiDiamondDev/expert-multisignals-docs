import styles from "../styles/Home.module.css";
import DownloadButton from "../components/DownloadButton";
import CardLink from "../components/CardLink";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header
        title={"ExpertMultiSignals Docs"}
        description={"Documentation of Expert Advisor"}
      />
      <main className={styles.main}>
        <DownloadButton />

        <div className={styles.center}>
          <h1>
            MultiSignals
            <br /> Expert Advisor
          </h1>
        </div>

        <div className={styles.grid}>
          <CardLink title="Indicators" href="/indicators">
            Learn more about supported indicators and how to automate trade
            strategies.
          </CardLink>

          <CardLink title="Installation" href="/installation">
            Learn how to install and start testing the expert advisor.
          </CardLink>
          <CardLink title="Starter Sets" href="/sets">
            Get some pre-built configuration files (sets) to start testing.
          </CardLink>
          <CardLink title="Author" href="https://github.com/ThiDiamondDev/">
            Meet the developer, check another cool projects or contact for more
            info.
          </CardLink>
          <CardLink title="Features" href="/features">
            Learn in depths all the features and automate your own trade system.
          </CardLink>
        </div>
      </main>
    </>
  );
}
