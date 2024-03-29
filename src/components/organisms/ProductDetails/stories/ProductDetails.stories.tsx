import ProductDetails, { ProductDetailsProps } from "..";
import ProductImage1 from "@/assets/images/products/product-1.png";
import ProductImage2 from "@/assets/images/products/product-2.png";
import ProductImage3 from "@/assets/images/products/product-3.png";
import { StoryFn } from "@storybook/react";

export default {
  title: "Organisms/Product Details",
  component: ProductDetails,
};

const Template = (args: ProductDetailsProps) => <ProductDetails {...args} />;

export const Default: StoryFn<ProductDetailsProps> = Template.bind({});
Default.args = {
  productImages: [ProductImage1, ProductImage3, ProductImage2],
  associated_prices: [
    {
      currency: "GBP",
      exworks: null,
      landed: null,
      retail: null,
    },
    {
      currency: "USD",
      exworks: 420,
      landed: 450,
      retail: 450,
    },
    {
      currency: "EUR",
      exworks: null,
      landed: null,
      retail: null,
    },
  ],
  description:
    "The cimento vases exude the natural look of cement. Their refined shape presents a different perspective on a material known for its stiffness and inflexibility. Available in two sizes, narrow and wide.",
  colors: ["#77502A"],
  tags: [
    {
      title: "Season",
      list: ["SS23"],
    },
    {
      title: "Collections",
      list: ["Spring Summer 23", "Core"],
    },
  ],
  specifications: [
    {
      label: "Made in",
      value: "Italy",
    },
    {
      label: "Style",
      value: "ERO21103",
    },
    {
      label: "Composition",
      value: "Cotton",
    },
    {
      label: "Material",
      value: "80% cotton, 20% polyester",
    },
    {
      label: "Composition",
      value: "100% Acetate",
    },
    {
      label: "Measurements",
      value: "26 - 32 inch",
    },
    {
      label: "Colors",
      value:
        "black, white, Grey, red, orange, yellow, blue, Green, Purple, pink",
    },
    {
      label: "Color Code",
      value: "BLCK, WHTE, GREY, REDD, ORNG, YLLW, BLUE, GREN, PRPL, PINK",
    },
    {
      label: "Color Family",
      value:
        "Black, Blue, Green, Grey, Orange, Pink, Purple, Red, Yellow, White",
    },
    {
      label: "Delivery start",
      value: "03/09/23",
    },
    {
      label: "Delivery end",
      value: "03/12/23",
    },
  ],
};
