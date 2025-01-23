"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectFilters, filterProducts } from "@/components/Products/model/productsSlice";
import "./ProductsFilter.css";
import { RootState } from "@/redux/store";
import { useTranslations } from "next-intl";
export interface Filters {
    color: string[];
    type: string[];
    material: string[];
    countryOfOrigin: string[];
}

const ProductsFilter = () => {
    const dispatch = useDispatch();    
    const t = useTranslations("Filter")

    const filters = useSelector((state: RootState) => selectFilters(state)); 
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
    
        const updatedFilters: Filters = { ...filters };
    
        if (type === "checkbox") {
            const newFilters = updatedFilters[name as keyof Filters];
            const newFilterValues = checked
                ? [...newFilters, value]
                : newFilters.filter((item) => item !== value);
            
            updatedFilters[name as keyof Filters] = newFilterValues; 
        } else if (type === "radio" || type === "select-one") {
            updatedFilters[name as keyof Filters] = [value];
        }
            console.log("updated filters ",updatedFilters)
        dispatch(filterProducts(updatedFilters));
    };

    return (
        <div className="ProductsFilter">
            {/* Color Filter */}
            <div className="ProductsFilter_section">
                <h3>{t("Color")}</h3>
                <div className="ProductsFilter_color">
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="White"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("White")}
                        /> 
                        {t("White")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="Gray"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("Gray")}
                        /> 
                        {t("Gray")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="Beige"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("Beige")}
                        /> 
                        {t("Beige")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="Brown"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("Brown")}
                        />
                        {t("Brown")}
                    </label>
                </div>
            </div>

            {/* Type Filter */}
            <div className="ProductsFilter_section">
                <h3>{t("Type")}</h3>
                <div className="ProductsFilter_type">
                    <label>
                        <input
                            type="checkbox"
                            name="type"
                            value="Herringbone"
                            onChange={handleFilterChange}
                            checked={filters.type.includes("Herringbone")}
                        /> 
                        {t("Herringbone")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="type"
                            value="Chevron"
                            onChange={handleFilterChange}
                            checked={filters.type.includes("Chevron")}
                        />
                        {t("Chevron")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="type"
                            value="Plank"
                            onChange={handleFilterChange}
                            checked={filters.type.includes("Plank")}
                        />
                        {t("Plank")}
                    </label>
                </div>
            </div>

            {/* Material Filter */}
            <div className="ProductsFilter_section">
                <h3>{t("Material")}</h3>
                <div className="ProductsFilter_material">
                    <label>
                        <input
                            type="checkbox"
                            name="material"
                            value="Wood"
                            onChange={handleFilterChange}
                            checked={filters.material.includes("Wood")}
                        />
                        {t("Wood")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="material"
                            value="SPC"
                            onChange={handleFilterChange}
                            checked={filters.material.includes("SPC")}
                        />
                        {t("SPC")}
                    </label>
                </div>
            </div>

            {/* Country Filter */}
            <div className="ProductsFilter_section">
                <h3>{t("Country")}</h3>
                <div className="ProductsFilter_country">
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="Italy"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("Italy")}
                        />
                        {t("Italy")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="Germany"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("Germany")}
                        /> 
                        {t("Germany")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="Poland"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("Poland")}
                        /> 
                        {t("Poland")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="USA"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("USA")}
                        />
                        {t("USA")}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="France"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("France")}
                        />
                        {t("France")}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ProductsFilter;
