import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux"
import { setFilteredList } from "../../model/productsSlice";
import { Product } from "../ProductsList/ProductsList";
import "./ProductSort.css"
import { useTranslations } from "next-intl";
const ProductSort = () => {
    const dispatch = useDispatch()
    const productsList = useSelector((state: RootState) => state.products.filteredProducts);
    const t = useTranslations("Filter")

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
            <option value="" disabled>{t("SortBy")}</option>
            <option value="priceAsc">{t("LowToHight")}</option>
            <option value="priceDesc">{t("HightToLow")}</option>
            <option value="nameAsc">{t("AtoZ")}</option>
            <option value="nameDesc">{t("ZtoA")}</option>
        </select>
    )
}

export default ProductSort