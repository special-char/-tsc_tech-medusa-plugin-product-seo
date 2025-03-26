import { defineMiddlewares, MiddlewareRoute } from "@medusajs/framework";
import upload from "./middlewares/fileUploadMiddleware";

const seoMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/product-seo/**",
    method: "POST",
    middlewares: [upload.array("files")],
  },
  {
    matcher: "/admin/product-seo/**",
    method: "PUT",
    middlewares: [upload.array("files")],
  },
  {
    matcher: "/admin/category-seo/**",
    method: ["PUT", "POST"],
    middlewares: [upload.array("files")],
  },
];

export default defineMiddlewares(seoMiddlewares);
