import ProductsFilter from "@/components/Products/ui/ProductsFilter/ProductsFilter";
import ProductsList from "@/components/Products/ui/ProductsList/ProductsList";
import "./products.css";

const ProductsPage = () => {
  return (
    <>
      <div className="products-page-container">
        <ProductsFilter />
        <ProductsList />
      </div>
    </>
  );
};

export default ProductsPage;
