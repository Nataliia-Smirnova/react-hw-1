import React from "react";

import Profile from "./profile/profile";
import Statistics from "./statistics/stats";
import FriendList from "./friends/friend-list";
import TransactionHistory from "./transactions/transactions";

import statistics from "../assets/statistical-data.json";
import friends from "../assets/friends.json";
import transactions from "../assets/transactions.json";
import user from "../assets/user.json";

export default function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
