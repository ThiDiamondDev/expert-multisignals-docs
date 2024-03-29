import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
export default function CardLink({ children, title, href, download }) {
  const fileName = download ? href.replace(/^.*[\/]/, "") : "";
  const transform = download ? "rotate(90deg)" : "0";
  const width = download ? "min-content" : "auto";
  const alignSelf = download ? "end" : "auto";
  const marginLeft = download ? "10px" : "0";
  return (
    <div className={styles.card}>
      <Link
        href={href}
        download={download ? fileName : false}
        style={{ width }}
      >
        <h2 className={inter.className}>
          {title}
          <div style={{ transform, alignSelf, marginLeft }}>
            <span>-&gt;</span>
          </div>
        </h2>
        <p className={inter.className}>{children}</p>
      </Link>
    </div>
  );
}
