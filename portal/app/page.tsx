import Image from "next/image";
import styles from "./page.module.css";
import PlatformIntroduction from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <div className={styles.page}>
    <PlatformIntroduction />
    </div>
  );
}
