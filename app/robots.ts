import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return process.env.PUBLIC_LAUNCH==="true"
    ? {rules:{userAgent:"*",allow:"/",disallow:["/login","/register"]},sitemap:"https://prevaylos.com/sitemap.xml"}
    : {rules:{userAgent:"*",disallow:"/"}};
}
