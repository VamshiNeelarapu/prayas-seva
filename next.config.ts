import type { NextConfig } from "next";

// Resolves the GitHub Pages project-site subpath (e.g. /my-repo) automatically in CI; empty for local dev/user-org pages.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPage = repoName?.endsWith(".github.io") ?? false;
const basePath =
  process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgPage
    ? `/${repoName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // GitHub Pages has no image-optimization server, so images are served unoptimized (plain <img>).
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
