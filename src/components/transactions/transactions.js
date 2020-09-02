import React from "react";
import TableHead from "./table-head";
import TableRow from "./table-row";

function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <TableHead />
      <tbody>
        {items.map((el) => {
          return <TableRow key={el.id} {...el} />;
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
