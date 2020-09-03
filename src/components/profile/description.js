import React from "react";
// import PropTypes from "prop-types";

import styles from "./Profile.module.css";

function Description({ user }) {
  return (
    <div className={styles.description}>
      <img src={user.avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>@{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </div>
  );
}

// Description.PropTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
// };

export default Description;
