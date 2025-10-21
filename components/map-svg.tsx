import * as React from "react";

export const MapSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <image href="/map.svg" width="100%" height="100%" />
  </svg>
);
