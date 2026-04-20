import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mesaredonda.globalsc.ao",
      lastModified: new Date(),
    },
    {
      url: "https://www.mesaredonda.globalsc.ao/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.mesaredonda.globalsc.ao/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.mesaredonda.globalsc.ao/magazine",
      lastModified: new Date(),
    },
    {
      url: "https://www.mesaredonda.globalsc.ao/tickets",
      lastModified: new Date(),
    },
    {
      url: "https://www.mesaredonda.globalsc.ao/speakers",
      lastModified: new Date(),
    },
  ];
}
