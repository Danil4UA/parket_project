import ProductsFilter from "@/components/Products/ProductsFilter/ProductsFilter"
import ProductsList from "@/components/Products/ProductsList/ProductsList"
import "./products.css"

const ProductsPage = () => {
    return (
        <>
            <div className="products-page-container">
                <ProductsFilter />
                <ProductsList />
            </div>
        </>
    )
}

export default ProductsPage