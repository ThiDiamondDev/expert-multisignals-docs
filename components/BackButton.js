import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BackButton() {
  const { locale } = useRouter();
  return (
    <div className={styles.description}>
      <Link
        href={`/${locale}/`}
        className={styles.download}
        style={{ borderRadius: 360, margin: "10px", marginLeft: 0 }}
      >
        <Image
          alt="Download Icon"
          className={styles.backIcon}
          src={"/DownloadIcon.png"}
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
