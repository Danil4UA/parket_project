import CategoryList from "../CategoryList/CategoryList";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <div className="HomeMain">
      <div className="HomeMain__title">
        <span>ПРЕМИУМ ДЕРЕВЯННЫЕ ПОЛЫ</span>
        <p>
          Думаете, обновление пола — это дорого? Подумайте ещё раз! Ознакомьтесь с нашей коллекцией доступных и качественных инженерных
          деревянных покрытий и преобразите ваше пространство, не выходя за пределы бюджета.
        </p>
      </div>
      <CategoryList />
    </div>
  );
};

export default HomeMain;
