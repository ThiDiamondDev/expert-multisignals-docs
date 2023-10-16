import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function CardLink({ children, title, href }) {
  return (
    <Link href={href} className={styles.card}>
      <h2 className={inter.className}>
        {title}{" "}
        <div>
          <span>-&gt;</span>
        </div>
      </h2>
      <p className={inter.className}>{children}</p>
    </Link>
  );
}
