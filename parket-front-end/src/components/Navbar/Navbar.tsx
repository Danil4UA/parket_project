"use client";
import Cart from "../Cart/Cart";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { useState } from "react";
import menuIcon from "@/app/assets/hamburger-menu.svg";

import LangSwitcher from "@/widgets/LangSwitcher/ui/LangSwitcher";

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedSidebar, setCollapsedSidebar] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
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
          }
          <img width={"24px"} src={menuIcon.src} alt="Menu icon" />
        </span>
        <LangSwitcher />
      </div>

      <div>LOGO</div>
      <div>
        <button onClick={() => onToggle()}>Cart</button>
        <button>search</button>
      </div>

      <Cart collapsed={collapsed} setCollapsed={setCollapsed} />
      <Sidebar collapsed={collapsedSidebar} onClose={() => setCollapsedSidebar(true)}></Sidebar>
    </div>
  );
};

export default Navbar;
