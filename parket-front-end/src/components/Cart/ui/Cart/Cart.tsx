"use client"
import { classNames } from "@/shared/lib/classNames/classNames";
import "./Cart.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "../CartItem/CartItem";
import { selectTotalPrice } from "../../model/slice/cartSlice";
import CloseIcon from "@/app/assets/close.svg"
interface CartProps {
    collapsed: boolean;
    onClose: () => void;
}

const Cart = ({ collapsed, onClose }: CartProps) => {
    const t = useTranslations("Cart")
    const totalPrice = useSelector((state: RootState) => selectTotalPrice(state)); 
    useEffect(() => {
        if (!collapsed) {
          document.documentElement.style.overflow = "hidden";
          document.body.style.overflow = "hidden";
        } else {
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
        }
        return () => {
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
        };
      }, [collapsed]);
    
      useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            onClose();
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [onClose]);
      const cartItems = useSelector((state: RootState) => state.cart.cartItems);
      console.log(cartItems)      
    return (
        <>
            <div className={classNames("Cart", { collapsedCart: collapsed }, [])}>
                <div className="Cart_header">
                  <p>{t("cart")}</p>
                  <button 
                      onClick={()=>onClose()}
                      className="close-icon"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="Cart_main">

                {cartItems.map((item)=>{
                  return <CartItem key={item.productId} item={item} />
                })}
                </div>
                <div className="Cart_footer">
                  <div className="Cart_footer_total">
                    <span>Total:</span>
                    <span>₪ {totalPrice}</span>
                  </div>

                  <button
                    className="complete_btn"
                  >Complete Order
                  </button>
                
                </div>
                
            </div>
            <div 
                className={classNames("overlayCart", {overlayCartActive: !collapsed},[])}
                onClick={()=>onClose()}
            >
            </div>
        </>
            
        
        
    );
};

export default Cart;
