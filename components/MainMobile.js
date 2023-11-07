"use client";

import { useState, useEffect } from "react";

// import PortableText from "react-portable-text"

import styles from "../src/app/page.module.css";
import ImageComp from "./ImageComp.js";

const Main = ({ imagesMobile }) => {
  const [indexLeft, setIndexLeft] = useState(0);
  const [overlay, setOverlay] = useState(false);

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
      <div className={styles.imgWrapper} onClick={() => setOverlay(!overlay)}>
        <div
          className={styles.overlay}
          style={{ opacity: overlay ? "1" : "0" }}
        >


          <p>
            <b>Moritz Schorpp</b> (b. 1994) is a portrait and documentary
            photographer, currently studying Visual Journalism and Documentary
            Photography at Hochschule Hanover, Germany.
            <br />
            <br />
            For any enquiries, collaborations, portfolio requests, prints and ideas please feel free to get in touch.<br />
            <br /> (+49) 174 69 48 311
            <br />
            <a href="mailto:mail@moritzschorpp.de">
              mail@moritzschorpp.de
            </a>{" "}
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
              href="https://www.instagram.com/moritz_schorpp/?hl=de"
              target="blank"
              rel="_noreferrer"
              style={{ textDecoration: "underline" }}
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
