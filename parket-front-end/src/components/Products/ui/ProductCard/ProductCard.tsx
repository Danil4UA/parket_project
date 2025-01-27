"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "@/i18n/routing";
import "./ProductCard.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

interface ProductCardProps {
  productId: string;
  productName: string;
  productPrice: string;
  productDescription?: string;
  discount?: number;
  category: string;
}

const ProductCard = ({ productId, productName, productPrice, discount = 0, category }: ProductCardProps) => {
  const t = useTranslations("Product");
  const productPriceWithDiscount = discount ? Number(productPrice) * ((100 - discount) / 100) : Number(productPrice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    "/assets/parket_image.jpg",
    "/assets/parket_example_1.jpg",
    "/assets/parket_example_2.jpg",
    "/assets/parket_example_3.jpg"
  ];

  // Генерируем случайное изображение один раз
  const randomImage = useMemo(() => {
    return images[Math.floor(Math.random() * images.length)];
  }, [images]);

  return (
    <div className={classNames("ProductCard", {}, [])}>
      <Link href={`/products/${category}/${productId}`} className="card__media">
        <div className="card__image">
          <Image src={randomImage} width={300} height={300} alt={productName} />
        </div>
        {discount > 0 && <div className="card__sale_badge">-{discount}%</div>}

        <div className="card__information">
          <div>{productName}</div>
          <div className="card__information_price">
            {discount ? (
              <div className="price__container">
                <span className="price__discounted">
                  <span className="prefix">₪</span>
                  {productPriceWithDiscount.toFixed()}
                </span>
                <span className="price__original">
                  <span className="prefix">₪</span>
                  {productPrice}
                </span>
              </div>
            ) : (
              <span>
                <span className="prefix">₪</span>
                {productPrice}
              </span>
            )}
          </div>
          <div className="card__information_button">{t("GetMoreDetails")}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
