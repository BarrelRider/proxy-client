import React from "react";

const DropdownIcon: React.FC<any> = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="dropdownMask"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="4"
      y="6"
      width="8"
      height="4"
    >
      <path
        d="M4.66666 6.66663L8 9.99996L11.3333 6.66663H4.66666Z"
        fill="white"
      />
    </mask>
    <g mask="url(#dropdownMask)">
      <rect width="16" height="16" fill="#4A4A4A" />
    </g>
  </svg>
);

export default DropdownIcon;
