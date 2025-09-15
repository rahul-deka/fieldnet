import * as React from "react";

export default function LogoSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href="/logo-cyan.svg" width="64" height="64" />
    </svg>
  );
}
