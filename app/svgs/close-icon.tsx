import * as React from "react";
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <symbol id="icn-close" viewBox="0 0 32 32">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.3334 8.53317L23.4667 6.6665L16 14.1332L8.53335 6.6665L6.66669 8.53317L14.1334 15.9998L6.66669 23.4665L8.53335 25.3332L16 17.8665L23.4667 25.3332L25.3334 23.4665L17.8667 15.9998L25.3334 8.53317Z"
      />
    </symbol>
    <use href="#icn-close" />
  </svg>
);
export default CloseIcon;
