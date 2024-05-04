import React from "react";
import styles from "./styles/App.module.css";

function CssModules() {
  return (
    <div className={styles.container}>
      <button className={styles.primary}>Click me</button>;
    </div>
  );
}

export default CssModules;
