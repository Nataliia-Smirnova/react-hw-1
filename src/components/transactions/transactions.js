import React from "react";
import TableHead from "./Table-head";
import TableRow from "./Table-row";
import styles from "./Transactions.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <TableHead />
      <tbody className={styles.tableBody}>
        {items.map((el) => {
          return <TableRow key={el.id} {...el} />;
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
