/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      // Redirect http to https and non-www to www
      {
        source: "/:path*",
        has: [
          { type: "host", value: "fieldnetglobal.com" },
        ],
        destination: "https://www.fieldnetglobal.com/:path*",
        permanent: true,
      },
      // Remove protocol check (not supported by Next.js), rely on host for www/non-www
      // Protocol (http→https) should be enforced at the hosting/platform level (e.g. Vercel, Netlify, nginx)
      // Remove /index.html
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      // Remove duplicate trailing slashes (except root)
      {
        source: "/:path*/",
        has: [
          { type: "host", value: "www.fieldnetglobal.com" },
        ],
        destination: "/:path*",
        permanent: true,
        missing: [
          { type: "query", key: "" },
        ],
      },
    ];
  },
};

export default nextConfig;