import styles from "./page.module.css";
import Main from "../../components/Main.js";
import MainMobile from "../../components/MainMobile.js";

import {
  getImagesLeft,
  getImagesRight,
  getImagesMobile,
  getInfo,
} from "../../sanity/sanity-utils";

export default async function Home() {
  const imagesLeft = await getImagesLeft();
  const imagesRight = await getImagesRight();
  const imagesMobile = await getImagesMobile();
  const info = await getInfo();

  return (
    <main className={styles.main}>
      <div className={styles.desktop}>
        <Main imagesLeft={imagesLeft} imagesRight={imagesRight} info={info} />
      </div>
      <div className={styles.mobile}>
        <MainMobile imagesMobile={imagesMobile} info={info[0]} />
      </div>
    </main>
  );
}
