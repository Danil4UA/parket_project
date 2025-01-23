"use client"
import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "@/i18n/routing";
import "./ProductCard.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  productId: string;
  productName: string;
  productPrice: string;
  productDescription?: string;
  discount?: number
}

const ProductCard = ({ productId, productName, productPrice, discount = 0 }: ProductCardProps) => {
  const t = useTranslations("Product")
  const productPriceWithDiscount = discount ? (Number(productPrice) * ((100 - discount) / 100)) : Number(productPrice);

  return (
    <div className={classNames("ProductCard", {}, [])}>
      <Link href={`/products/${productId}`} className="card__media">
        <div className="card__image">
          <Image
            src="/assets/parket_image.jpg" 
            width={300}
            height={300}
            alt={productName} 
            />
        </div>
        {discount > 0 &&
          <div className="card__sale_badge">-{discount}%</div>
        }

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
                {productPrice}</span>
            )}

          </div>
          <div className="card__information_button">
            {t("GetMoreDetails")}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
