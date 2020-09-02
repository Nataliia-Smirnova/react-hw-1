import React from "react";

function Stats({ stats }) {
  return (
    <ul className="stats">
      {Object.entries(stats).map((el) => (
        <li key={el[0]}>
          <span className="label">{el[0]}</span>
          <span className="quantity">{el[1]}</span>
        </li>
      ))}
    </ul>
  );
}

export default Stats;
