import { FC } from "react";
import "./productDescription.css";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const { productId } = await params;
  console.log(productId);
  return (
    <section className="product-wrapper">
      <div className="product__left"></div>
      <div className="product__info_wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cum autem quam alias expedita aliquid doloribus, illum esse harum
          vero nulla, dolores soluta, voluptatem explicabo saepe mollitia accusantium beatae! Quos magni laudantium, quas nulla consectetur
          dicta dolore ipsum! Nostrum, quos at. Culpa a aut earum totam asperiores molestias nobis atque impedit enim! Pariatur sit sed
          doloribus cumque excepturi modi error totam. Magni consequuntur inventore commodi accusantium sint fugit! Voluptatibus doloremque
          quam quisquam? Nemo fugit nam, impedit porro sed quaerat? Repellat exercitationem quod dolorum ad qui fugiat odit ullam dicta
          incidunt nisi? Tempore sint rem eligendi? Vel qui ratione facilis labore!
        </p>
      </div>
    </section>
  );
};

export default ProductPage;
