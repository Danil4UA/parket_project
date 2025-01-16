"use client"
import ProductCard from "@/components/Products/ProductCard/ProductCard";
import "./ProductsList.css"
import { data } from "./data";

export interface Product {
    productId: string;
    name: string;
    description: string;
    price: string;
    images: string[];
    category: string;
    stock: number;
    discount: number;
    isAvailable: boolean;
  }


const ProductsList = () => {
    return (
        <>
    
        <div className="products__list">
            {data.map((item: Product) => (
                <ProductCard 
                    key={item.productId} 
                    productId={item.productId}
                    productName={item.name} 
                    productPrice={item.price} 
                    productDescription={item.description} 
                />
            ))}
        </div>
        </>
    );
};

export default ProductsList;
