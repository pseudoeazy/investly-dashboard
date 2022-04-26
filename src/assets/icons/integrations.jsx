import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={isHover ? "#4040F2" : "#A8B0B9"}
        d="M16 2v2h-4V2h4zM6 2v6H2V2h4zm10 8v6h-4v-6h4zM6 14v2H2v-2h4zM18 0h-8v6h8V0zM8 0H0v10h8V0zm10 8h-8v10h8V8zM8 12H0v6h8v-6z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
