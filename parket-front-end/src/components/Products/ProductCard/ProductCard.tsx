import { classNames } from "@/shared/lib/classNames/classNames";
import Link from "next/link"; // Импортируем Link из next/link
import "./ProductCard.css";

interface ProductCardProps {
    productId: string;
    productName: string;
    productPrice: string;
    productDescription: string;
}

const ProductCard = ({ productId, productName, productPrice, productDescription }: ProductCardProps) => {
    return (
        <div className={classNames("ProductCard", {}, [])}>
            <Link href={`/products/${productId}`} className="card__media">
                <div className="card__image">
{                    // eslint-disable-next-line @next/next/no-img-element
}                    <img 
                        src="https://olimp-parketa.ru/upload/iblock/6c9/5xu8b79mmt216yl3mw105ymqxaqukmv7.jpg" 
                        alt={productName} 
                    />
                </div>
                <div className="card__information">
                    <h2>{productName}</h2>
                    <p>Price: {productPrice}</p>
                    <p>{productDescription}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
