import { useState, useEffect } from "react";

import styles from "../src/app/page.module.css";
import { urlFor } from "../hooks/useImageUrlBuilder";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";

const ImageComp = ({ image }) => {
  const [imageWidth, setImageWidth] = useState(null);

  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    windowWidth > 1000
      ? setImageWidth(Math.floor(windowWidth / 2))
      : setImageWidth(800);
  }, [windowWidth]);

  return (
    <div className={styles.imgInner}>
      <Image
        src={urlFor(image.image?.url).width(imageWidth).quality(50).url()}
        alt={image.alt ? image.alt : "A portait photograph by Moritz Schorpp"}
        fill
        style={{ objectFit: "contain", position: "absolute" }}
        placeholder={"blur"}
        blurDataURL={image.image?.metadata.lqip}
      />
    </div>
  );
};

export default ImageComp;
