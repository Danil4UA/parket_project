import Image from "next/image";
import "./CategoryCard.css";
import { useMemo } from "react";
const CategoryCard = () => {
  const images = [
    "/assets/parket_image.jpg",
    "/assets/parket_example_1.jpg",
    "/assets/parket_example_2.jpg",
    "/assets/parket_example_3.jpg"
  ];

  const randomImage = useMemo(() => {
    return images[Math.floor(Math.random() * images.length)];
  }, [images]);
  return (
    <div className="CategoryCard">
      <div className="CategoryCard__image">
        <Image src={randomImage} width={300} height={450} alt={"categoryName"} />
      </div>
      <div className="CategoryCard__content">
        <p>Floor</p>
        <p>Buy Engeneered Wood at Effect Parquet at the best price!</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryCard;
