import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.css";

export type Category = {
  image: string;
  path: string;
  title: string;
  description: string;
};
export const categories: Category[] = [
  {
    image: "/assets/category_flooring.jpg",
    path: "/products/flooring",
    title: "Flooring",
    description: "High-quality flooring for every style"
  },
  {
    image: "/assets/category_catalog.jpg",
    path: "/products/sales",
    title: "Sales",
    description: "Amazing discounts on selected products"
  },
  {
    image: "/assets/category_seeling.jpg",
    path: "/products/all",
    title: "Catalog",
    description: "Explore our complete product catalog"
  },
  {
    image: "/assets/category_catalog.jpg",
    path: "/products/roof",
    title: "Roof",
    description: "Durable and reliable roofing solutions"
  }
];

const CategoryList = () => {
  return (
    <div className="CategoryList">
      {categories.map((category) => (
        <CategoryCard key={category.path} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
