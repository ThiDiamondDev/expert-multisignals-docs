import { useRouter } from "next/router";
import BackButton from "../components/BackButton";
import DownloadButton from "../components/DownloadButton";
import Header from "../components/Header";
import IndicatorsList from "../components/indicatorsList";
import IndicatorsContent from "../content/indicators";
import styles from "../styles/Home.module.css";

export default function Indicators() {
  const { locale } = useRouter();
  const { headerTitle, headerDescription, title, pageContent } =
    IndicatorsContent[locale];

  return (
    <>
      <Header title={headerTitle} description={headerDescription} />
      <main className={styles.main}>
        <BackButton />
        <DownloadButton />
        <div className={styles.center}>
          <h1>{title}</h1>
        </div>
        <div className={styles.container}>
          {pageContent}
          <IndicatorsList />
        </div>
      </main>
    </>
  );
}
