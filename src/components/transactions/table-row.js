import React from "react";
import PropTypes from "prop-types";
import styles from "./Transactions.module.css";

function TableRow({ type, amount, currency }) {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.firstColumn}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableRow;
