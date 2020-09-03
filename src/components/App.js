import React from "react";

import Profile from "./profile/Profile";
import Statistics from "./statistics/Stats";
import FriendList from "./friends/Friend-list";
import TransactionHistory from "./transactions/Transactions";

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
