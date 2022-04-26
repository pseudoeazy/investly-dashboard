import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="22"
      fill="none"
      viewBox="0 0 18 22"
    >
      <path
        fill={isHover ? "#4040F2" : "#A8B0B9"}
        d="M12 6v12.97l-4.21-1.81-.79-.34-.79.34L2 18.97V6h10zm4-6H5.99C4.89 0 4 .9 4 2h10c1.1 0 2 .9 2 2v13l2 1V2c0-1.1-.9-2-2-2zm-4 4H2C.9 4 0 4.9 0 6v16l7-3 7 3V6c0-1.1-.9-2-2-2z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
