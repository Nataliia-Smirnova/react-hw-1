import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./friend-list-item";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((el) => {
        return <FriendListItem key={el.id} {...el} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;
