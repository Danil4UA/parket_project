"use client"
import { FC } from "react";
import "./productDescription.css";
import { data } from "@/components/Products/model/data"
import { useDispatch } from "react-redux";
import { addToCart } from "@/components/Cart/model/slice/cartSlice";
import { Product } from "@/components/Products/ui/ProductsList/ProductsList";
import { useParams } from "next/navigation";
import Image from "next/image";
interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: FC<ProductPageProps> = () => {
  const { productId } = useParams<{ productId: string }>()  
  const dispatch = useDispatch();
  const product: Product | undefined = data.find((item) => item._id === productId);
  if (!product) {
    return (
      <section className="product-wrapper">
        <div className="product__info_wrapper">
          <p>Product not found. Please check the ID and try again.</p>
        </div>
      </section>
    );
  }
  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: 1 };
    dispatch(addToCart(newProduct));
  };

  return (
    <section className="product-wrapper">
      <div className="product__left">
        {/* Display product image */}
        <Image
          src="/assets/parket_image.jpg"
          alt={product.name}
          className="product__image"
          width={500}  // You can specify the desired width
          height={500} // You can specify the desired height
          quality={75} // Optional: Adjust image quality
        />      </div>
      <div className="product__info_wrapper">
        {/* Display product details */}
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductPage;
