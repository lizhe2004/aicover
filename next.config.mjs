/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      "ai-cover-images.s3.us-east-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
