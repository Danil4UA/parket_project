import { useDispatch, useSelector } from "react-redux";
import { CartItemType, updateQuantity } from "../../model/slice/cartSlice";
import "./CartItem.css";
import { RootState } from "@/redux/store";
import { memo } from "react";
interface CartItemProps {
  item: CartItemType;
}
const CartItem = (props: CartItemProps) => {
  const {
    name,
    description,
    quantity,
    category,
    images,
    productId,
  } = props.item
  const dispatch = useDispatch()


  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // id is taking from params not from props or from props we can take prodcutId
  const item = cartItems.find(cartItem => cartItem.productId === productId);
  if(!item){
    console.log("item not found")
    return null
  }
  const handleIncrement = () => {
    dispatch(updateQuantity({ productId: item.productId, quantity: quantity + 1 }));
    console.log(quantity)
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productId: item.productId, quantity: quantity - 1 }));
    }
    console.log(quantity)
  };
  
  return (  
    <div className="CartItem">
      <div className="CartItem__image">
        <img src={images[0]} alt={item.name} />
      </div>
      <div className="CartItem__info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>
          Category: <strong>{category}</strong>
        </p>
        <div className="CartItem__info_bottom">
          <div className="CartItem__quantity">
            <button 
              onClick={handleDecrement}
              >
                -
              </button>
            <div>{quantity}</div>
            <button
            onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div>
            <p>
              Price: <del>${item.price}</del>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartItem);