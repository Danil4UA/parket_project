"use client";

import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./productDescription.css";
import { addToCart } from "@/components/Cart/model/slice/cartSlice";
import { Product } from "@/components/Products/ui/ProductsList/ProductsList";
import { useParams } from "next/navigation";
// import Image from "next/image";
import productsServices from "@/services/prodcuts.services";
import Gallery from "@/components/Gallery/Gallery";


const images = ["/assets/parket_example_3.jpg", "/assets/parket_example_1.jpg", "/assets/parket_example_2.jpg"]


const ProductPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await productsServices.getAllProductsById(productId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError("Failed to fetch product.");
        }
      } catch (error) {
        setError("An error occurred while fetching the product.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    const newProduct = { ...product, quantity: 1 };
    dispatch(addToCart(newProduct));
  };

  if (isLoading) {
    return (
      <section className="product-wrapper">
        <div className="product__info_wrapper">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="product-wrapper">
        <div className="product__info_wrapper">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="product-wrapper">
        <div className="product__info_wrapper">
          <p>Product not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="product-wrapper">
      <div className="product__left">
        {/* <Image
          src="/assets/parket_image.jpg"
          alt={product.name}
          className="product__image"
          width={500}
          height={500}
          quality={75}
        /> */}
        <Gallery images={images} />
      </div>
      <div className="product__info_wrapper">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ipsum quis sapiente reiciendis pariatur architecto ratione omnis aut accusantium dignissimos saepe et magnam eos amet, aspernatur facere placeat suscipit nam.</p>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button 
          className="product__add_cart"
          onClick={handleAddToCart}>Add
           to Cart</button>
        <div>
          Possible take away from out branch
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus ipsam laudantium omnis. Excepturi nisi recusandae doloremque, assumenda blanditiis minima nobis impedit dolorum maxime pariatur quae hic laudantium, alias voluptatibus accusantium exercitationem ad quasi quaerat eius a dignissimos. Repudiandae maxime nam accusamus officiis quisquam necessitatibus nemo nulla laudantium iste debitis alias ipsa reiciendis optio beatae inventore ex consequuntur voluptatibus aliquid, molestias modi vero quas dolorem ducimus. Dignissimos libero aliquam tempora atque! Voluptas tempora necessitatibus repellat ab repudiandae laborum delectus quisquam quaerat. Laboriosam eveniet laborum inventore molestiae molestias aperiam ullam itaque provident! Obcaecati expedita laborum blanditiis enim eos iusto reprehenderit assumenda?
        </div>
        <div>Get help to calculate</div>
        <div>About brand</div>
        <div>Delivery Policy</div>
      </div>
    </section>
  );
};

export default ProductPage;
