import styles from "../src/app/page.module.css";

import Image from "next/image";

const ImageComp = ({ image, index }) => {

  return (
    <div
      className={styles.imgInner}
    >
      <Image
        src={image.image.url}
        alt={image.alt}
        fill
        style={{ objectFit: "contain", position: "absolute" }}
      />
    </div>
  );
};

export default ImageComp;
