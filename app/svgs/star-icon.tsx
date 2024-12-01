import * as React from "react";
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <symbol id="icn-star" viewBox="0 0 32 32">
      <path d="M16 22.667l-7.837 4.12 1.497-8.727-6.34-6.18 8.762-1.273 3.919-7.94 3.919 7.94 8.762 1.273-6.34 6.18 1.497 8.727z" />
    </symbol>
    <use href="#icn-star" />
  </svg>
);
export default StarIcon;
