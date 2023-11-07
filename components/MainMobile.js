"use client";

import { useState, useEffect } from "react";

import PortableText from "react-portable-text";

import styles from "../src/app/page.module.css";
import ImageComp from "./ImageComp.js";
import Imprint from "./Imprint.js";

const Main = ({ imagesMobile, info, imprint }) => {
  const [indexLeft, setIndexLeft] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [showImprint, setShowImprint] = useState(false);

  const resetOverlay = () => {
    setOverlay(false);
  };

  const time = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      // Update indexLeft
      setIndexLeft((prev) => (prev < imagesMobile.length - 1 ? prev + 1 : 0));
    }, time);

    return () => clearInterval(interval);
  }, [imagesMobile.length]);

  useEffect(() => {
    overlay && setTimeout(resetOverlay, 5000);
  }, [overlay]);

  return (
    <>
      <Imprint
        imprint={imprint}
        showImprint={showImprint}
        setShowImprint={setShowImprint}
      />
      <div className={styles.imgWrapper} onClick={() => setOverlay(!overlay)}>
        <div
          className={styles.overlay}
          style={{ opacity: overlay ? "1" : "0" }}
        >
          <PortableText content={info.text} />
          <p>
            <br />
          </p>
          <PortableText content={info.textLeft} />
          <p>
            <br /> {info.phone}
            <br />
            <a href={`mailto:${info.email}`}>{info.email}</a>
            <br />
            <br />
            <a
              href="https://www.instagram.com/moritz_schorpp/?hl=de"
              target="blank"
              rel="_noreferrer"
              style={{ textDecoration: "underline" }}
            >
              Instagram
            </a> 
            <br />
            <a
              onClick={() => setShowImprint(true)}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Imprint / privacy
            </a>
            <br />
            <br />
          </p>
        </div>
        <ImageComp image={imagesMobile[indexLeft]} />
      </div>
    </>
  );
};

export default Main;
