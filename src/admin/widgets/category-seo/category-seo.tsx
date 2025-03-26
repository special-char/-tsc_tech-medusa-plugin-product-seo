import { Button, Container, FocusModal, Heading } from "@medusajs/ui";

import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { useEffect, useState } from "react";
import { SeoDetailsTypes } from "../../../modules/product-seo/models/seo-details";
import SeoForm from "../../components/seo/SeoForm";
import SeoDetails from "../../components/seo/SeoDetail";

const fetchProductWithSeo = async (
  id: string
): Promise<{ data: SeoDetailsTypes }> => {
  const response = await fetch(`/admin/category-seo/${id}`, {
    credentials: "include",
  });
  return await response.json();
};

const ProductSeoWidget = ({ data }: { data: any }) => {
  const [productSeo, setProductSeo] = useState<SeoDetailsTypes>();

  useEffect(() => {
    fetchProductWithSeo(data.id).then((res) => {
      setProductSeo(res.data);
    });
    return () => {};
  }, []);

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading className="text-xlarge font-bold">
          Category SEO - {data.handle}
        </Heading>
        <div className="flex items-center gap-4">
          <FocusModal modal>
            <FocusModal.Trigger asChild>
              <Button variant="transparent" className="border">
                {!productSeo ? "Add" : "Edit"}
              </Button>
            </FocusModal.Trigger>
            <FocusModal.Content>
              <FocusModal.Header>SEO - {data.handle}</FocusModal.Header>
              <FocusModal.Body className="flex flex-col items-center py-16 overflow-y-scroll">
                <SeoForm
                  product={data}
                  productSeo={productSeo!}
                  type="category"
                />
              </FocusModal.Body>
            </FocusModal.Content>
          </FocusModal>
        </div>
      </div>
      {productSeo ? (
        <SeoDetails productSeo={productSeo} />
      ) : (
        <div className="text-center py-4">No SEO available</div>
      )}
    </Container>
  );
};

export const config = defineWidgetConfig({
  zone: "product_category.details.after",
});

export default ProductSeoWidget;
