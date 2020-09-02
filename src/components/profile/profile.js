import React from "react";
import Description from "./description";
import Stats from "./stats";

export default function Profile({ user }) {
  return (
    <div className="profile">
      <Description user={user} />
      <Stats stats={user.stats} />
    </div>
  );
}
