"use client";

import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./productDescription.css";
import { addToCart } from "@/components/Cart/model/slice/cartSlice";
import { Product } from "@/components/Products/ui/ProductsList/ProductsList";
import { useParams } from "next/navigation";
import QuestionIcon from "@/app/assets/question.svg";
// import Image from "next/image";
import productsServices from "@/services/prodcuts.services";
import Gallery from "@/components/Gallery/Gallery";
import Loader from "@/shared/ui/Loader/Loader";

const images = ["/assets/parket_example_3.jpg", "/assets/parket_example_1.jpg", "/assets/parket_example_2.jpg"];

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
        <Loader />
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
  const productPriceWithDiscount = product.discount ? Number(product.price) * ((100 - product.discount) / 100) : Number(product.discount);

  return (
    <section className="product-wrapper">
      <section className="product-container">
        <div className="product__left">
          <div className="gallery-container">
            <Gallery images={images} />
          </div>
        </div>

        <div className="product__info_wrapper">
          <div className="product__header">
            <h1 className="product__name">{product.name}</h1>
            <div className="product__price">
              {product.discount ? (
                <div className="price__container">
                  <span className="price__discounted">
                    <span className="prefix">₪</span>
                    {productPriceWithDiscount.toFixed()}
                  </span>
                  <span className="price__original">
                    <span className="prefix">₪</span>
                    {product.price}
                  </span>
                </div>
              ) : (
                <span>
                  <span className="prefix">₪</span>
                  {product.price}
                </span>
              )}
            </div>
            <p className="product__notice">Рекомендуется добавить дополнительно 10% к сумме, необходимой для амортизации при установке.</p>
          </div>

          <button className="product__add_cart" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <div className="product__info_delivery">
            <h2 className="delivery__title">Delivery Information</h2>
            <div className="delivery__item">
              <span className="delivery__indicator"></span>
              <p>Possible take away from our branch</p>
            </div>
            <div className="delivery__item">
              <span className="delivery__indicator"></span>
              <p>Ready for 2-3 days</p>
            </div>
            <p className="check__store">
              Check the store details
              <QuestionIcon />
            </p>
          </div>

          <div className="product__section">
            <h2 className="section__title">Specifications</h2>
            <div className="specifications__grid">
              <p className="specification__item">Сделано компанией {"XXXX"}</p>
              <p className="specification__item">
                Длина:
                {"XXX"}
              </p>
              <p className="specification__item">
                Ширина:
                {"XXX"}
              </p>
              <p className="specification__item">Цвет: {product.color || "XXX"}</p>
            </div>
          </div>

          <div className="product__section">
            <h2 className="section__title">Product Description</h2>
            <p className="product__description">
              Идеальное сочетание дизайна и долговечности, этот тип напольного покрытия способен противостоять любым опасностям истирания,
              будь то в коммерческих центрах или в домашнем использовании. Ламинированные изделия Berry Alloc — это сочетание эстетики и
              передовых технологий...
            </p>
          </div>

          <div className="product__section">
            <h2 className="section__title">About Brand</h2>
            {/* Brand content */}
          </div>

          <div className="product__section">
            <h2 className="section__title">Delivery Policy</h2>
            {/* Delivery policy content */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductPage;
