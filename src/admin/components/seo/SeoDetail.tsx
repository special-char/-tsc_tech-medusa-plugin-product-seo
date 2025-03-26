import { Heading, Text } from "@medusajs/ui";
import { SeoDetailsTypes } from "../../../modules/product-seo/models/seo-details";
import CustomImage from "./CustomImage";
import { SectionRow } from "../SectionRow";

const SeoDetails = ({ productSeo }: { productSeo: SeoDetailsTypes }) => {
  return (
    <>
      <SectionRow title="Name" value={productSeo?.metaTitle} />
      <SectionRow
        title="Description"
        value={
          productSeo?.metaDescription && productSeo.metaDescription.length > 10
            ? productSeo.metaDescription.slice(0, 55) + "..."
            : productSeo?.metaDescription
        }
      />
      <SectionRow
        title="Image"
        value={
          productSeo?.metaImage &&
          productSeo?.metaImage !== "null" && (
            <CustomImage src={productSeo?.metaImage} />
          )
        }
      />
      <SectionRow
        title="Keywords"
        value={
          productSeo?.keywords && productSeo.keywords.length > 15
            ? productSeo.keywords.slice(0, 35) + "..."
            : productSeo?.keywords
        }
      />
      <SectionRow
        title="Robots"
        value={
          productSeo?.metaRobots && productSeo.metaRobots.length > 15
            ? productSeo.metaRobots.slice(0, 35) + "..."
            : productSeo?.metaRobots
        }
      />

      <SectionRow
        title="Structured Data"
        value={productSeo?.structuredData?.slice(0, 300) + "..."}
      />

      <SectionRow title="Viewport" value={productSeo?.metaViewport} />
      <SectionRow title="Canonical URL" value={productSeo?.canonicalURL} />

      {productSeo?.metaSocial?.length > 0 && (
        <div className="flex flex-col justify-between px-6 py-4">
          <Heading className="my-4 font-bold text-large">
            Product Seo Social
          </Heading>
          <div className="border rounded-md">
            {productSeo?.metaSocial.map((item) => {
              return (
                <div key={item.id} className="divide-y">
                  <SectionRow title="Network" value={item.socialNetwork} />
                  <SectionRow title="Name" value={item.title} />
                  <SectionRow
                    title="Description"
                    value={item?.description?.slice(0, 55) + "..."}
                  />
                  <SectionRow
                    title="Image"
                    value={item.image && <CustomImage src={item.image} />}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SeoDetails;
