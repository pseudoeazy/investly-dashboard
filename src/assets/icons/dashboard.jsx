import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      fill="none"
      viewBox="0 0 22 18"
    >
      <path
        fill={isHover ? "#4040F2" : "#A8B0B9"}
        d="M20 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H2V2h10v4h8v10z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};

export default Icon;
