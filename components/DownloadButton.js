import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function DownloadButton() {
  return (
    <div className={styles.description}>
      <a
        href="/ThiDiamondDev/ExpertMultiSignal/releases/download/v1.0.0/ExpertMultiSignal.ex5"
        download={"ExpertMultiSignal.ex5"}
        className={styles.download}
      >
        <Image
          src={"/DownloadIcon.png"}
          style={{ marginRight: "5px" }}
          width={20}
          height={20}
        />
        Download for Metatrader5
        <br />
      </a>
    </div>
  );
}
