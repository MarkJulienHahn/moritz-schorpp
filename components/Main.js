"use client";
import { useState, useEffect } from "react";

import styles from "../src/app/page.module.css";
import ImageComp from "./ImageComp.js";

// import PortableText from "react-portable-text";

const Main = ({ imagesLeft, imagesRight, info }) => {
  const [indexLeft, setIndexLeft] = useState(0);
  const [indexRight, setIndexRight] = useState(0);
  const time = 2000;

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
      <div className={styles.imgWrapper}>
        <div className={styles.overlay}>
          <p>
            <b>Moritz Schorpp</b> (b. 1994) is a portrait and documentary
            photographer, currently studying Visual Journalism and Documentary
            Photography at Hochschule Hanover, Germany.
          </p>
          {/* <PortableText content={info.text} /> */}
        </div>
        <ImageComp image={imagesLeft[indexLeft]} />
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.overlay}>
          <p>
            For any enquiries, collaborations, portfolio requests, prints and
            ideas please feel free to get in touch. <br />
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
        <ImageComp image={imagesRight[indexRight]} />
      </div>
    </>
  );
};

export default Main;
