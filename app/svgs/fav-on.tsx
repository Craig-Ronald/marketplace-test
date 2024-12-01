import * as React from "react";
const FavOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <symbol id="icn-fav-on" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0091 5.46622L13.0287 4.34006C15.1944 2.40397 18.4197 2.57148 20.4269 4.83096C22.5107 7.17656 22.5204 10.853 20.4794 13.4196C19.4411 14.7255 15.49 18.8885 14.3209 19.9224C12.6888 21.368 11.3085 21.358 9.66915 19.8996C8.39383 18.7674 4.47361 14.6367 3.5314 13.4088C1.47407 10.73 1.48501 7.20314 3.59206 4.83127C5.60125 2.56853 8.8215 2.4006 10.9906 4.33951L12.0091 5.46622Z"
      />
    </symbol>
    <use href="#icn-fav-on" />
  </svg>
);
export default FavOn;
