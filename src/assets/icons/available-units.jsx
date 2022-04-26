import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        fill={isHover ? "#4040F2" : "#A8B0B9"}
        d="M10 4V0H0v18h20V4H10zM4 16H2v-2h2v2zm0-4H2v-2h2v2zm0-4H2V6h2v2zm0-4H2V2h2v2zm4 12H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V6h2v2zm0-4H6V2h2v2zm10 12h-8v-2h2v-2h-2v-2h2V8h-2V6h8v10zm-2-8h-2v2h2V8zm0 4h-2v2h2v-2z"
      ></path>
    </svg>
  );
}

Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};

export default Icon;
