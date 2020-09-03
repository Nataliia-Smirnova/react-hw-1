import React from "react";
import styles from "./Transactions.module.css";

function TableHead() {
  return (
    <thead className={styles.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
}

export default TableHead;
