import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://velorastudio.com";

  return ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
