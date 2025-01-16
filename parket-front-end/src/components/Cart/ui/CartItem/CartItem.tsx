import { CartItemType } from "../../model/slice/cartSlice";
import "./CartItem.css";

const item: CartItemType = {
  id: 1,
  name: "Smartphone",
  quantity: 2,
  price: 500,
  images: [
    "https://olimp-parketa.ru/upload/iblock/6c9/5xu8b79mmt216yl3mw105ymqxaqukmv7.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ],
  description: "A powerful smartphone with excellent features",
  category: "Electronics",
  stock: 10,
//   discount: 15,
  isAvailable: true,
};

const CartItem = () => {

  return (
    <div className="CartItem">
      <div className="CartItem__image">
        <img src={item.images[0]} alt={item.name} />
      </div>
      <div className="CartItem__info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>
          Category: <strong>{item.category}</strong>
        </p>
        <p>
          Stock:{" "}
          <strong style={{ color: item.stock > 0 ? "green" : "red" }}>
            {item.stock > 0 ? "In stock" : "Out of stock"}
          </strong>
        </p>
        <div className="CartItem__info_bottom">
          <div className="CartItem__quantity">
            <button>-</button>
            <div>{item.quantity}</div>
            <button>+</button>
          </div>
          <div>
            <p>
              Price: <del>${item.price.toFixed(2)}</del>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
