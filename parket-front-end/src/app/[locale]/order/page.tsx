"use client";
import { useSelector } from "react-redux";
import "./OrderPage.css";
import { RootState } from "@/redux/store";
import { selectTotalPrice } from "@/components/Cart/model/slice/cartSlice";
import Image from "next/image";
import { useTranslations } from "next-intl";

const OrderPage = () => {
  const t = useTranslations("Order");
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
                {t("shipping")}
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="delivery" value="pickup" className="delivery__radio" />
                {t("pickup")}
              </label>
            </div>
          </div>
        </div>
        <div className="Order__section Order__section--address">
          <input className="Order__input" type="text" placeholder={t("country")} />
          <input className="Order__input--half" type="text" placeholder={t("name")} />
          <input className="Order__input--half" type="text" placeholder={t("lastName")} />
          <input className="Order__input" type="text" placeholder={t("address")} />
          <input className="Order__input--half" type="text" placeholder={t("apartment")} />
          <input className="Order__input--half" type="text" placeholder={t("postalCode")} />
          <input className="Order__input--half" type="text" placeholder={t("city")} />
          <input className="Order__input--half" type="text" placeholder={t("phoneNumber")} />
        </div>

        <button className="complete_order">{t("completeOrder")}</button>
      </div>
      <div className="Order__wrapper_right">
        {cartItems.map((item) => (
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
        ))}

        <div className="order__footer">
          <div className="promo_code">
            <input type="text" placeholder={t("enterPromoCode")} />
            <button>{t("submit")}</button>
          </div>
          <div className="order__amount">
            <div>{t("totalAmount")}:</div>
            <div>ILS {totalPrice}₪</div>
          </div>

          <div className="order__delivery">
            <div>{t("delivery")}:</div>
            <div>{t("free")}</div>
          </div>
          <div className="order__total">
            <div className="order__total_container">
              <p className="order__total_sum">{t("total")}</p>
              <p className="order__total_taxes">{t("includingTaxes")}: xxx</p>
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
