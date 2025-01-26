"use client";

import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./productDescription.css";
import { addToCart } from "@/components/Cart/model/slice/cartSlice";
import { Product } from "@/components/Products/ui/ProductsList/ProductsList";
import { useParams } from "next/navigation";
import QuestionIcon from "@/app/assets/question.svg"
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
        <Gallery images={images} />
      </div>

      <div className="product__info_wrapper">

        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>Рекомендуется добавить дополнительно 10% к сумме, необходимой для амортизации при установке.</p>

        <button 
          className="product__add_cart"
          onClick={handleAddToCart}>
            Add to Cart
        </button>

        <div className="product__info_delivery">
          <p>Possible take away from out branch</p>
          <p>Ready for 2-3 days</p>
          <p>
            <span
              className="check__store"

            >Check the store details <span><QuestionIcon/></span>
            </span>
          </p>
        </div>
        {   /** Характеристики  */ }
        <div>
          <p>{product.description}</p>
          <p>Сделано компанией хххх</p>
          <p>Длина xxx ширина xxx</p>
          <p>Цвет xxx</p>
        </div>

        { /** Описание товара  */}
        <div> 
          <p>
          Идеальное сочетание дизайна и долговечности, этот тип напольного покрытия способен противостоять любым опасностям истирания, 
          будь то в коммерческих центрах или в домашнем использовании. Ламинированные изделия Berry Alloc — это сочетание эстетики и передовых технологий. 
          Самая прочная линейка ламината на рынке! Berry Alloc производит свою продукцию в Европе в соответствии с самыми строгими стандартами 
          с упором на простую установку, не требующую сложных операций, революционный на рынке метод запирания, снижение уровня шума, 
          защиту от влаги и простоту обслуживания.
          </p>
        </div>

        <div>About brand</div>

        <div>Delivery Policy</div>
      </div>
    </section>
  );
};

export default ProductPage;
