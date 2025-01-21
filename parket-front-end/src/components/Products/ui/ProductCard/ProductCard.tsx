import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "@/i18n/routing";
import "./ProductCard.css";
import Image from "next/image";

interface ProductCardProps {
  productId: string;
  productName: string;
  productPrice: string;
  productDescription?: string;
}

const ProductCard = ({ productId, productName, productPrice }: ProductCardProps) => {
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
        <div className="card__information">
          <div>{productName}</div>
          <div className="card__information_price">
            <span className="prefix">₪</span>
            {productPrice}
            <span className="price__suffix">
              .00
            </span>

          </div>
          <div className="card__information_button">
            Get More details
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
