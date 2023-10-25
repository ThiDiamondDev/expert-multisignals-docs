import { useRouter } from "next/router";
import BackButton from "../components/BackButton";
import CardLink from "../components/CardLink";
import DownloadButton from "../components/DownloadButton";
import Header from "../components/Header";
import SetsContent from "../content/sets";
import styles from "../styles/Home.module.css";

export default function Sets() {
  const { locale } = useRouter();
  const { headerTitle, headerDescription, title, pageContent, setLinkTitles } =
    SetsContent[locale];
  return (
    <>
      <Header title={headerTitle} description={headerDescription} />
      <main className={styles.main}>
        <BackButton />
        <DownloadButton />
        <div className={styles.center}>
          <h1>{title}</h1>
        </div>
        <div className={styles.container}>{pageContent}</div>
        <div className={styles.grid_2}>
          <CardLink
            title={setLinkTitles["MACross"]}
            href="/sets/MACross.set"
            download
          ></CardLink>
          <CardLink
            title={setLinkTitles["AOCross"]}
            href="/sets/AOCross.set"
            download
          ></CardLink>
          <CardLink
            title={setLinkTitles["Envelopes"]}
            href="/sets/Envelopes.set"
            download
          ></CardLink>
          <CardLink
            title={setLinkTitles["Engulfing"]}
            href="/sets/Engulfing.set"
            download
          ></CardLink>
        </div>
      </main>
    </>
  );
}
