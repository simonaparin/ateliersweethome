export const siteConfig = {
  name: "Atelier Sweet Home",
  defaultLocale: "ru",
  locales: ["ru", "en", "ka"],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  reconstructionPath: "/reconstruction",
  summerKitchenPath: "/summer-kitchen",
  roofPath: "/roof"
};
