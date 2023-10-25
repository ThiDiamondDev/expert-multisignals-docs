import { useRouter } from "next/router";
import BackButton from "../components/BackButton";
import DownloadButton from "../components/DownloadButton";
import Header from "../components/Header";
import FeaturesContent from "../content/features";
import styles from "../styles/Home.module.css";

export default function Features() {
  const { locale } = useRouter();
  const { headerTitle, headerDescription, title, pageContent } =
    FeaturesContent[locale];

  return (
    <>
      <Header title={headerTitle} description={headerDescription} />
      <main className={styles.main}>
        <BackButton />
        <DownloadButton />
        <div className={styles.center}>
          <h1>{title}</h1>
        </div>
        <div className={styles.container}>{pageContent(styles)}</div>
      </main>
    </>
  );
}
