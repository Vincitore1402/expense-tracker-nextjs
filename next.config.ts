import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/**/*": ["app/generated/prisma/**/*"],
    "/*": ["app/generated/prisma/**/*"],
  },
};

export default nextConfig;
