import type { NextConfig } from "next";

const prismaClientArtifacts = "./app/generated/prisma/**/*";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/": [prismaClientArtifacts],
    "/api/transactions/[id]": [prismaClientArtifacts],
  },
};

export default nextConfig;
