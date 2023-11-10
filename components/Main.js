"use client";
import { useState, useEffect } from "react";

import styles from "../src/app/page.module.css";
import ImageComp from "./ImageComp.js";
import Imprint from "./Imprint.js";

import PortableText from "react-portable-text";

const Main = ({ imagesLeft, imagesRight, info, imprint }) => {
  const [indexLeft, setIndexLeft] = useState(0);
  const [indexRight, setIndexRight] = useState(0);
  const [showImprint, setShowImprint] = useState(false);
  const time = 2500;

  useEffect(() => {
    let leftTurn = true;

    const interval = setInterval(() => {
      if (leftTurn) {
        // Update indexLeft
        setIndexLeft((prev) => (prev < imagesLeft.length - 1 ? prev + 1 : 0));
      } else {
        // Update indexRight
        setIndexRight((prev) => (prev < imagesRight.length - 1 ? prev + 1 : 0));
      }

      leftTurn = !leftTurn; // Toggle the turn between left and right
    }, time);

    return () => clearInterval(interval);
  }, [imagesLeft.length, imagesRight.length]);

  return (
    <>
      <Imprint
        imprint={imprint}
        showImprint={showImprint}
        setShowImprint={setShowImprint}
      />
      <div className={styles.imgWrapper}>
        <div className={styles.overlay}>
          <PortableText content={info.text} />
        </div>
        <ImageComp image={imagesLeft[indexLeft]} />
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.overlay}>
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
        <ImageComp image={imagesRight[indexRight]} />
      </div>
    </>
  );
};

export default Main;
