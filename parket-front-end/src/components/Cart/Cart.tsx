import { classNames } from "@/shared/lib/classNames/classNames";
import "./Cart.css";

interface CartProps {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
}

const Cart = ({ collapsed, setCollapsed }: CartProps) => {
    return (
        <>
            <div className={classNames("Cart", { collapsedCart: collapsed }, [])}>
                {!collapsed &&
                <button 
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label="Toggle Cart"
                >
                    x
                </button>
                }
            </div>
            <div className={classNames("overlay", {overlayActive: !collapsed})}>

            </div>
        </>
            
        
        
    );
};

export default Cart;
