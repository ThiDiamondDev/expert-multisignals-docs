import styles from "../styles/Home.module.css";
import IndicatorsList from "../components/indicatorsList";
import DownloadButton from "../components/DownloadButton";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

export default function Indicators() {
  return (
    <>
      <Header title={"Indicators"} description={"Indicators"} />
      <main className={styles.main}>
        <BackButton />
        <DownloadButton />
        <div className={styles.center}>
          <h1>Supported Indicators List</h1>
        </div>
        <div className={styles.container}>
          <h3>
            The EA supports the same indicators of MT5, even custom or external
            indicators by just mapping the buffers exposed. The n refers to the
            bar number, where 0 is the current opened candle, 1 means the last
            closed candle... The EA also supports arithmetic operations.
            <br />
            <br />
            The following terms can be used to get market data and make
            comparations:
          </h3>
          <IndicatorsList />
        </div>
      </main>
    </>
  );
}
