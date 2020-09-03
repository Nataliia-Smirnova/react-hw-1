import React from "react";

import styles from "./Profile.module.css";

function Stats({ stats }) {
  return (
    <ul className={styles.stats}>
      {Object.entries(stats).map((el) => (
        <li key={el[0]} className={styles.item}>
          <span className={styles.label}>{el[0]}</span>
          <span className={styles.quantity}>{el[1]}</span>
        </li>
      ))}
    </ul>
  );
}

export default Stats;
