"use client";
import { useSelector } from "react-redux";
import "./OrderPage.css";
import { RootState } from "@/redux/store";
import { selectTotalPrice } from "@/components/Cart/model/slice/cartSlice";
import Image from "next/image";

const OrderPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = useSelector((state: RootState) => selectTotalPrice(state));

  console.log(cartItems);
  return (
    <div className="Order__wrapper">
      <div className="Order__wrapper_left">
        <div>
          <div className="Delivery__section">
            <div>
              <label>
                <input type="radio" name="delivery" value="shipping" className="delivery__radio" />
                Shipping
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="delivery" value="pickup" className="delivery__radio" />
                Pickup
              </label>
            </div>
          </div>
        </div>
        <div className="Order__section Order__section--address">
          <input className="Order__input" type="text" placeholder="Country" />
          <input className="Order__input--half" type="text" placeholder="Name" />
          <input className="Order__input--half" type="text" placeholder="Last Name" />
          <input className="Order__input" type="text" placeholder="Address" />
          <input className="Order__input--half" type="text" placeholder="Apartment" />
          <input className="Order__input--half" type="text" placeholder="Postal Code" />
          <input className="Order__input--half" type="text" placeholder="City" />
          <input className="Order__input--half" type="text" placeholder="Phone Number" />
        </div>

        <button className="complete_order">Complete Order</button>
      </div>
      <div className="Order__wrapper_right">
        {cartItems.map((item) => {
          return (
            <div key={item._id} className="Order__items">
              <div className="Order__items_image">
                <Image src="/assets/parket_image.jpg" alt={item.name} width={60} height={60} />
                <div className="Order__items_count">
                  <span>{item.quantity}</span>
                </div>
              </div>
              <div className="Order__items_info">{item.description}</div>
              <div className="price">{item.price}</div>
            </div>
          );
        })}

        <div className="order__footer">
          <div className="promo_code">
            <input type="text" placeholder="Enter promo code" />
            <button>Submit</button>
          </div>
          <div className="order__amount">
            <div>Total amount:</div>
            <div>ILS {totalPrice}₪</div>
          </div>

          <div className="order__delivery">
            <div>Delivery:</div>
            <div>Free</div>
          </div>
          <div className="order__total">
            <div className="order__total_container">
              <p className="order__total_sum">Total</p>
              <p className="order__total_taxes">Including taxes: xxx</p>
            </div>
            <div className="order__total_sum">
              <span className="order__total_taxes">ILS</span> {totalPrice}₪
            </div>
          </div>
        </div>
      </div>
      <div className="order__overlay"></div>
    </div>
  );
};

export default OrderPage;
