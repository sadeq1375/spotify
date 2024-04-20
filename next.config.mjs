// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["ysgccobgoglbbxbfitac.supabase.co"],
//   },
// };

// export default nextConfig;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ysgccobgoglbbxbfitac.supabase.co",
        pathname: "**",
      },
    ],
  },
};
export default nextConfig;
