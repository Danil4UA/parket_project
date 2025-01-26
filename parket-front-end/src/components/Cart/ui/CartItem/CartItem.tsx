import { useDispatch, useSelector } from "react-redux";
import { CartItemType, removeFromCart, updateQuantity } from "../../model/slice/cartSlice";
import "./CartItem.css";
import { RootState } from "@/redux/store";
import { memo } from "react";
import Image from "next/image";
interface CartItemProps {
  item: CartItemType;
}
const CartItem = (props: CartItemProps) => {
  const {
    name,
    description,
    quantity,
    // images,
    _id,
  } = props.item
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const item = cartItems.find(cartItem => cartItem._id === _id);
  if(!item){
    return null
  }
  const handleIncrement = () => {
    dispatch(updateQuantity({ productId: item._id, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productId: item._id, quantity: quantity - 1 }));
    }else {
      dispatch(removeFromCart(item._id));
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      dispatch(updateQuantity({ productId: item._id, quantity: value }));
    }
  };
  
  return (  
    <div className="CartItem">
      <div className="CartItem__image">
        <Image src="/assets/parket_image.jpg" alt={item.name} width={80} height={80} />
      </div>
      <div className="CartItem__info">
        <p className="CartItem_title">{name}</p>
        <p className="CartItem_description">{description}</p>
        <div className="CartItem__info_bottom">
          <div className="CartItem__quantity">
            <button
              onClick={handleDecrement}
              >
                -
              </button>
            <div>
              <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min="0"
              className="CartItem__input"
            />
            </div>
            <button
            onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div>
            <span>
            ₪ {item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartItem);