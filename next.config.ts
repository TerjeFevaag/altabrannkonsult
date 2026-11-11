import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/branntilsyn',
        destination: '/branninspeksjon',
        permanent: true,
      },
      {
        // Unngå duplikatinnhold: send Vercel-aliaset til produksjonsdomenet.
        // Preview-deploys (hash-URL-er) er allerede beskyttet av Vercel Authentication.
        source: '/:path*',
        has: [{ type: 'host', value: 'altabrannkonsult.vercel.app' }],
        destination: 'https://altabrannkonsult.no/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
