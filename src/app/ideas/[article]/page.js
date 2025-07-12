import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ArticlePage() {
  return (
      <div className={styles.article}>
        <h1>Welcome to Article</h1>
        <p>Enjoy reading!</p>
      </div>
  );
}