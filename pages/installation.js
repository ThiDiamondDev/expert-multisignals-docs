import { useRouter } from "next/router";
import BackButton from "../components/BackButton";
import DownloadButton from "../components/DownloadButton";
import Header from "../components/Header";
import InstallationContent from "../content/installation";
import styles from "../styles/Home.module.css";

export default function Installation() {
  const { locale } = useRouter();
  const { headerTitle, headerDescription, title, pageContent, pageLinks } =
    InstallationContent[locale];

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
        {pageLinks(styles)}
      </main>
    </>
  );
}
