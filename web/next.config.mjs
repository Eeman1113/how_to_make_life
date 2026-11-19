/** @type {import('next').NextConfig} */

// GitHub Pages serves a project site from /<repo>, so asset paths need that
// prefix in CI. Locally basePath stays empty and `next dev` just works.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
