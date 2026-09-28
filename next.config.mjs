// Normalize NEXTAUTH_URL to prevent ERR_INVALID_URL during build/prerender
const getNextAuthUrl = () => {
  if (process.env.NEXTAUTH_URL && process.env.NEXTAUTH_URL.trim() !== '') {
    return process.env.NEXTAUTH_URL.trim();
  }
  if (process.env.VERCEL_URL && process.env.VERCEL_URL.trim() !== '') {
    return `https://${process.env.VERCEL_URL.trim()}`;
  }
  return 'http://localhost:3000';
};

const validNextAuthUrl = getNextAuthUrl();
process.env.NEXTAUTH_URL = validNextAuthUrl;
if (!process.env.NEXTAUTH_SECRET || process.env.NEXTAUTH_SECRET.trim() === '') {
  process.env.NEXTAUTH_SECRET = 'temporary-production-secret-replace-in-env-vars';
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: validNextAuthUrl,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;
