import { classNames } from "@/shared/lib/classNames/classNames";
import "./Cart.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from '@/redux/store'

interface CartProps {
    collapsed: boolean;
    onClose: () => void;
}

const Cart = ({ collapsed, onClose }: CartProps) => {
    const t = useTranslations("Cart")
    const cart = useSelector((state: RootState) => state.cart);
    console.log(cart.cartItems)

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
      
    return (
        <>
            <div className={classNames("Cart", { collapsedCart: collapsed }, [])}>
                <div className="Cart_header">
                <p>{t("cart")}</p>
                <button 
                    onClick={()=>onClose()}
                >
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
