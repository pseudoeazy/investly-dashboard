import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="14"
      fill="none"
      viewBox="0 0 12 14"
    >
      <path
        fill={isHover ? "#4040F2" : "#0C1116"}
        d="M6 13.667c.733 0 1.333-.6 1.333-1.334H4.667c0 .734.6 1.334 1.333 1.334zm4-4V6.333c0-2.046-1.087-3.76-3-4.213v-.453c0-.554-.447-1-1-1-.553 0-1 .446-1 1v.453c-1.907.453-3 2.16-3 4.213v3.334L.667 11v.667h10.666V11L10 9.667zm-1.333.666H3.333v-4c0-1.653 1.007-3 2.667-3s2.667 1.347 2.667 3v4z"
      ></path>
    </svg>
  );
}

Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
