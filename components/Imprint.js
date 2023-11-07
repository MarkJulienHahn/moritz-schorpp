import { useState } from "react";
import styles from "../src/app/page.module.css";
import PortableText from "react-portable-text";

const Imprint = ({ imprint, showImprint, setShowImprint }) => {
  const active = {
    opacity: 1,
    pointerEvents: "auto",
  };

  const inactive = {
    opacity: 0,
    pointerEvents: "none",
  };

  return (
    <div
      className={styles.imprintWrapper}
      style={showImprint ? active : inactive}
    >
      <p className={styles.close} onClick={() => setShowImprint(false)}>
        Close
      </p>
      <div className={styles.imprintInner}>
        <PortableText content={imprint.text} />
      </div>
    </div>
  );
};

export default Imprint;
