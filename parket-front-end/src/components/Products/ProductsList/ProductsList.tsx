"use client"
import ProductCard from "@/components/Products/ProductCard/ProductCard";
import "./ProductsList.css"
import { data } from "./data";

export interface Product {
    productId: string;
    productName: string;
    productPrice: string;
    productDescription: string;
}


const ProductsList = () => {
    return (
        <>
    
        <div className="products__list">
            {data.map((item: Product) => (
                <ProductCard 
                    key={item.productId} 
                    productId={item.productId}
                    productName={item.productName} 
                    productPrice={item.productPrice} 
                    productDescription={item.productDescription} 
                />
            ))}
        </div>
        </>
    );
};

export default ProductsList;
