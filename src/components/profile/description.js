import React from "react";
// import PropTypes from "prop-types";

function Description({ user }) {
  return (
    <div className="description">
      <img src={user.avatar} alt="user avatar" className="avatar" />
      <p className="name">{user.name}</p>
      <p className="tag">@{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>
  );
}

// Description.defaultProps = {};

// Description.PropTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
// };

export default Description;
