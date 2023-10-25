import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function DownloadButton() {
  const { locale } = useRouter();
  const buttonText = {
    "en-US": "Download for Metatrader5",
    "pt-BR": "Baixar para o Metatrader5",
  };
  return (
    <div className={styles.description}>
      <a
        href="https://github.com/ThiDiamondDev/expert-multisignals-docs/releases/download/demo-version/expert.ex5"
        download={"expert.ex5"}
        className={styles.download}
      >
        <Image
          src={"/DownloadIcon.png"}
          alt="Download Icon"
          style={{ marginRight: "5px" }}
          width={20}
          height={20}
        />
        {buttonText[locale]}
        <br />
      </a>
    </div>
  );
}
