"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectFilters, filterProducts } from "@/components/Products/model/productsSlice";
import "./ProductsFilter.css";
import { RootState } from "@/redux/store";

export interface Filters {
    color: string[];
    type: string[];
    material: string[];
    countryOfOrigin: string[];
}

const ProductsFilter = () => {
    const dispatch = useDispatch();    
    const filters = useSelector((state: RootState) => selectFilters(state)); 
    console.log("filters applied => ", filters)
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
            <h2>Filter Products</h2>

            {/* Color Filter */}
            <div className="ProductsFilter_section">
                <h3>Color</h3>
                <div className="ProductsFilter_color">
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="White"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("White")}
                        /> White
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="Gray"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("Gray")}
                        /> Gray
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="Beige"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("Beige")}
                        /> Beige
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="Brown"
                            onChange={handleFilterChange}
                            checked={filters.color.includes("Brown")}
                        /> Brown
                    </label>
                </div>
            </div>

            {/* Type Filter */}
            <div className="ProductsFilter_section">
                <h3>Type</h3>
                <div className="ProductsFilter_type">
                    <label>
                        <input
                            type="checkbox"
                            name="type"
                            value="Herringbone"
                            onChange={handleFilterChange}
                            checked={filters.type.includes("Herringbone")}
                        /> Herringbone
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="type"
                            value="Chevron"
                            onChange={handleFilterChange}
                            checked={filters.type.includes("Chevron")}
                        /> Chevron
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="type"
                            value="Plank"
                            onChange={handleFilterChange}
                            checked={filters.type.includes("Plank")}
                        /> Plank
                    </label>
                </div>
            </div>

            {/* Material Filter */}
            <div className="ProductsFilter_section">
                <h3>Material</h3>
                <div className="ProductsFilter_material">
                    <label>
                        <input
                            type="checkbox"
                            name="material"
                            value="Wood"
                            onChange={handleFilterChange}
                            checked={filters.material.includes("Wood")}
                        /> Wood
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="material"
                            value="SPC"
                            onChange={handleFilterChange}
                            checked={filters.material.includes("SPC")}
                        /> SPC
                    </label>
                </div>
            </div>

            {/* Country Filter */}
            <div className="ProductsFilter_section">
                <h3>Country</h3>
                <div className="ProductsFilter_country">
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="Italy"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("Italy")}
                        /> Italy
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="Germany"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("Germany")}
                        /> Germany
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="Poland"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("Poland")}
                        /> Poland
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="USA"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("USA")}
                        /> USA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="countryOfOrigin"
                            value="France"
                            onChange={handleFilterChange}
                            checked={filters.countryOfOrigin.includes("France")}
                        /> France
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ProductsFilter;
