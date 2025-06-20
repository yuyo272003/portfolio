/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
      process.env.NODE_ENV === "production" ? "/portfolio/" : "",
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}
export default nextConfig
