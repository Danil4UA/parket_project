"use client"
import { FC } from "react";
import "./productDescription.css";
import { data } from "@/components/Products/ProductsList/data";
import { useDispatch } from "react-redux";
import { addToCart } from "@/components/Cart/model/slice/cartSlice";
import { Product } from "@/components/Products/ProductsList/ProductsList";
import { use } from "react";
interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: FC<ProductPageProps> = ({params}) => {
  const { productId } = use(params);
    const dispatch = useDispatch();

  // Find the product by ID
  const product: Product | undefined = data.find((item) => item.productId === productId);
  // Handle the case where the product is not found
  if (!product) {
    return (
      <section className="product-wrapper">
        <div className="product__info_wrapper">
          <p>Product not found. Please check the ID and try again.</p>
        </div>
      </section>
    );
  }

  // Add to cart handler
  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: 1 }; // Add a default quantity
    dispatch(addToCart(newProduct));
  };

  return (
    <section className="product-wrapper">
      <div className="product__left">
        {/* Display product image */}
        <img src={product.images[0]} alt={product.name} className="product__image" />
      </div>
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
