/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SCRIPT_URL:process.env.SCRIPT_URL,
    SCRIPT_EMAIL:process.env.SCRIPT_EMAIL,
    SCRIPT_SHEET:process.env.SCRIPT_SHEET,
  },
};

export default nextConfig;
