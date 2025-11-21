import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/transactions/[id]": ["./app/generated/prisma/**/*"],
    "(app)/": ["./app/generated/prisma/**/*"],
  },
};

export default nextConfig;
