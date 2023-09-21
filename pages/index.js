import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import DownloadButton from "../components/DownloadButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
function CardLink({ children, title, href }) {
  return (
    <Link href={href} className={styles.card}>
      <h2 className={inter.className}>
        {title} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>{children}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>ExpertMultiSignals Docs</title>
        <meta name="description" content="Documentation of Expert Advisor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

          <CardLink title="Metatrader5" href="https://www.metatrader5.com/">
            Learn about the trading platform used to develop and run the Expert
            Advisor.
          </CardLink>

          <CardLink title="Author" href="https://github.com/ThiDiamondDev/">
            Meet the developer, check another cool projects or contact for more
            info.
          </CardLink>
          <CardLink title="Another Features" href="/features">
            Learn in depths all the features and automate your own trade system.
          </CardLink>
        </div>
      </main>
    </>
  );
}
