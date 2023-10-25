import { useRouter } from "next/router";
import CardLink from "../components/CardLink";
import DownloadButton from "../components/DownloadButton";
import Header from "../components/Header";
import HomeContent from "../content/index";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { locale } = useRouter();
  const {
    headerTitle,
    headerDescription,
    title,
    cardIndicatorsTitle,
    cardIndicatorsDescription,
    cardInstallationTitle,
    cardInstallationDescription,
    cardSetsTitle,
    cardSetsDescription,
    cardAuthorTitle,
    cardAuthorDescription,
    cardFeaturesTitle,
    cardFeaturesDescription,
  } = HomeContent[locale];

  return (
    <>
      <Header title={headerTitle} description={headerDescription} />
      <main className={styles.main}>
        <DownloadButton />

        <div className={styles.center}>{title}</div>

        <div className={styles.grid}>
          <CardLink title={cardIndicatorsTitle} href={`${locale}/indicators`}>
            {cardIndicatorsDescription}
          </CardLink>

          <CardLink
            title={cardInstallationTitle}
            href={`${locale}/installation`}
          >
            {cardInstallationDescription}
          </CardLink>
          <CardLink title={cardSetsTitle} href={`${locale}/sets`}>
            {cardSetsDescription}
          </CardLink>
          <CardLink
            title={cardAuthorTitle}
            href="https://www.linkedin.com/in/thidiamond/"
          >
            {cardAuthorDescription}
          </CardLink>
          <CardLink title={cardFeaturesTitle} href={`${locale}/features`}>
            {cardFeaturesDescription}
          </CardLink>
        </div>
      </main>
    </>
  );
}
