"use client"
import ProductCard from "@/components/Products/ui/ProductCard/ProductCard";
import "./ProductsList.css"
import { data } from "../../model/data";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/components/Products/model/productsSlice";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { filterProducts } from "@/components/Products/model/productsSlice";

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
    color: string; 
    type: string; 
    material: string; 
    countryOfOrigin: string; 
  }

const ProductsList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchProducts = async () => {
            const fakeFetch = new Promise<Product[]>((resolve) => {
              setTimeout(() => resolve(data), 1000);
            });
            
            const products = await fakeFetch;
            // we need to filter here
            dispatch(setProducts(products));

            // dispatch(filterProducts(filters))

          };
      
          fetchProducts();
    },[dispatch])

    const filters = useSelector((state :RootState) => state.products.filters )
    const productsList = useSelector((state: RootState) => state.products.filteredProducts);
    useEffect(() => {
    dispatch(filterProducts(filters));
}, [filters, dispatch]);
    
    console.log(productsList)
   
    return (
        <>
    
        <div className="products__list">
            {productsList.map((item: Product) => (
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