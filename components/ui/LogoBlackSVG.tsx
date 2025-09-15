import * as React from "react";

export default function LogoBlackSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href="/logo-black.svg" width="64" height="64" />
    </svg>
  );
}
