import * as React from "react";

export const Favicon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 256 256"
    fill="none"
    {...props}
  >
    <circle cx={44} cy={44} r={44} fill="#FAFAFA" />
    <path fill="#FAFAFA" d="m88 0 168 30v58H88V0Z" />
    <path fill="#D4D4D8" d="M111.5 88H164v168h-64l11.5-168Z" />
  </svg>
);
