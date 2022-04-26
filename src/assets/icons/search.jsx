import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill={isHover ? "#4040F2" : "#0C1116"}
        d="M8.333 7.333h-.526l-.187-.18a4.314 4.314 0 001.047-2.82 4.333 4.333 0 10-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};

export default Icon;
