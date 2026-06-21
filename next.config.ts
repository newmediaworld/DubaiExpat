import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        // Tell Googlebot it's OK to revalidate hourly, and let CDNs cache
        // for 1 hour while keeping the file fresh in the user's browser.
        // Without explicit cache headers the response was `cache-control:
        // public, max-age=0, must-revalidate` with no Last-Modified or ETag
        // — which left Googlebot with no signal to re-fetch the file and
        // contributed to the 37-day DX sitemap staleness (10 May → 21 Jun).
        source: "/sitemap.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=3600, must-revalidate" },
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" },
        ],
      },
    ];
  },
});

export default nextConfig;
