import React from "react";
import styles from "./subline.module.css";

const Subline = ({ text }: { text: string }) => {
  return <div className={styles.subline}>{text}</div>;
};

export default Subline;
