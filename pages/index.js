import styles from "../styles/Home.module.css";
import DownloadButton from "../components/DownloadButton";
import CardLink from "../components/CardLink";
import Header from "../components/Header";
import { useRouter } from "next/router";
import HomeContent from "../content/index";

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
            href="https://github.com/ThiDiamondDev/"
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
