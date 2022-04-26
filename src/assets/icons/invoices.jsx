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
        d="M9 0L0 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V4L9 0zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V5.3l7-3.11 7 3.11V10zm-11.59.59L3 12l4 4 8-8-1.41-1.42L7 13.17l-2.59-2.58z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
