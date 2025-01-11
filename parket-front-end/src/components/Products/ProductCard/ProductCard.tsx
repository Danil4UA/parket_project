import { classNames } from "@/shared/lib/classNames/classNames";
import "./ProductCard.css";

interface ProductCardProps {
    productName: string;
    productPrice: string;
    productDescription: string;
}

const ProductCard = ({ productName, productPrice, productDescription }: ProductCardProps) => {
    return (
        <div className={classNames("ProductCard", {}, [])}>
            <a href="#" className="card__media">
                <div className="card__image">
                    <img 
                        src="https://olimp-parketa.ru/upload/iblock/6c9/5xu8b79mmt216yl3mw105ymqxaqukmv7.jpg" 
                        alt={productName} 
                    />
                </div>
                <div className="card__information">
                    <h2>{productName}</h2>
                    <p>Price: {productPrice}</p>
                    <p>{productDescription}</p>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;
