import { lazy, Suspense } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const PlatformIntroduction = lazy(() => import("@/components/Introduction/Introduction"));

export default function Home() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<div>Loading...</div>}>
        <PlatformIntroduction />
      </Suspense>
    </div>
  );
}
