/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode:false,
    images: {
        // formats: ['image/webp']
        domains: [
          "https://dev-tourmaster-bucket.s3.ap-southeast-1.amazonaws.com",
          "s3-alpha-sig.figma.com",
          "unsplash.com",
          "freepik.com",
        ],
        disableStaticImages: false,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            //   pathname: '**',
          },
        ],
      },
};

export default nextConfig;
