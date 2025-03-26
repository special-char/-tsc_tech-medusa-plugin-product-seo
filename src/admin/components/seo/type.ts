export type ImageProps = {
  id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  url: string;
  metadata: Record<string, any>;
};

export type ProductSeoSocialProps = {
  id: string;
  meta_social_name: string;
  meta_social_network: string;
  meta_social_desc: string;
  meta_social_image_id: string;
  meta_social_image: ImageProps;
  product_seo_id: string;
  created_at: Date;
  updated_at: Date;
};

export type ProductSeoType = {
  id: string;
  meta_name: string;
  meta_desc: string;
  meta_image_id: string;
  meta_image: ImageProps;
  productSeoSocial: ProductSeoSocialProps[];
  created_at: Date;
  updated_at: Date;
};
