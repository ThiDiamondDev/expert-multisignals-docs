import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function BackButton() {
  return (
    <div className={styles.description}>
      <Link
        href="/"
        className={styles.download}
        style={{ borderRadius: 360, margin: "10px", marginLeft: 0 }}
      >
        <Image
          className={styles.backIcon}
          src={"/DownloadIcon.png"}
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
