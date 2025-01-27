import Image from "next/image";
import "./CategoryCard.css";
import { Category } from "../CategoryList/CategoryList";
import { Link } from "@/i18n/routing";

interface CategoryCardProps {
  category: Category;
}
const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="CategoryCard">
      <Link href={category.path}>
        <div className="CategoryCard__image_wrapper">
          <div className="CategoryCard__image">
            <Image src={category.image} width={300} height={400} alt={"categoryName"} />
          </div>
        </div>
        <div className="CategoryCard__content">
          <p className="CategoryCard__title">{category.title}</p>
          <p className="CategoryCard__description">{category.description}</p>
          <div className="HomeHeader_btn_container">
            <button className="HomeHeader_btn">VIEW NOW</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
