import React from "react";
import Description from "./Description";
import Stats from "./Stats";
import styles from "./Profile.module.css";

export default function Profile({ user }) {
  return (
    <div className={styles.profile}>
      <Description user={user} />
      <Stats stats={user.stats} />
    </div>
  );
}
