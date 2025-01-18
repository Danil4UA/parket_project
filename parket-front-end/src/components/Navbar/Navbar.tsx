"use client";
import Cart from "../Cart/ui/Cart/Cart";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { useState } from "react";
import menuIcon from "@/app/assets/hamburger-menu.svg";

import LangSwitcher from "@/widgets/LangSwitcher/ui/LangSwitcher";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectTotalItems } from "../Cart/model/slice/cartSlice";

export const Navbar = () => {
  const [collapsedCart, setCollapsedCart] = useState(true)
  const [collapsedSidebar, setCollapsedSidebar] = useState(true);
  const cartItems = useSelector((state: RootState) => selectTotalItems(state)); 

  const onToggle = () => {  
    setCollapsedCart((prev) => !prev);
  };

  const onToggleMenu = () => {
    setCollapsedSidebar((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <div className="navbar-left">
        <span onClick={onToggleMenu}>
          {
            // eslint-disable-next-line @next/next/no-img-element
          }<img width={"24px"} src={menuIcon.src} alt="Menu icon" />
        </span>
        <LangSwitcher />
      </div>

      <div>LOGO</div>
      <div>
        <button onClick={() => onToggle()}>Cart {cartItems > 0 && cartItems}</button>
        <button>search</button>
      </div>

      <Cart collapsed={collapsedCart} onClose={()=>setCollapsedCart(true)} />
      <Sidebar collapsed={collapsedSidebar} onClose={() => setCollapsedSidebar(true)}></Sidebar>
    </div>
  );
};

export default Navbar;
