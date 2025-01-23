import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux"
import { setFilteredList } from "../../model/productsSlice";
import { Product } from "../ProductsList/ProductsList";
import "./ProductSort.css"
const ProductSort = () => {
    const dispatch = useDispatch()
    const productsList = useSelector((state: RootState) => state.products.filteredProducts);

    const handleSortProducts = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sortCriteria = e.target.value;

        const sortedList: Product[] = [...productsList].sort((a, b) => {
            switch (sortCriteria) {
                case "priceAsc":
                    return Number(a.price) - Number(b.price);
                case "priceDesc":
                    return Number(b.price) - Number(a.price);
                case "nameAsc":
                    return a.name.localeCompare(b.name);
                case "nameDesc":
                    return b.name.localeCompare(a.name);
                default:
                    return 0;
            }
        });

        dispatch(setFilteredList(sortedList));
    };
    return (
        <select
            className="ProductSort"
            onChange={handleSortProducts} defaultValue="">
            <option value="" disabled>Sort by</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="nameAsc">Name: A to Z</option>
            <option value="nameDesc">Name: Z to A</option>
        </select>
    )
}

export default ProductSort