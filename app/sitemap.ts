import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://madindautilities.com",
      priority: 1,
    },
    {
      url: "https://madindautilities.com/platform",
    },
    {
      url: "https://madindautilities.com/solutions",
    },
    {
      url: "https://madindautilities.com/industries",
    },
    {
      url: "https://madindautilities.com/contact",
    },
  ];
}