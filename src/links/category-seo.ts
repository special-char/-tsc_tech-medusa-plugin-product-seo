import { defineLink, DefineLinkExport } from "@medusajs/framework/utils";
import SeoModule from "../modules/product-seo";
import ProductModule from "@medusajs/medusa/product";

let link: DefineLinkExport | null = null;

link = defineLink(ProductModule.linkable.productCategory, {
  linkable: SeoModule.linkable.seoDetails,
  deleteCascade: true,
});

export default link;
