/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera HTML/CSS/JS estático en /out
  output: "export",

  // Para que Netlify sirva carpetas como index.html
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
