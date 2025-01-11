"use client"
import Cart from "../Cart/Cart";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [collapsedSidebar, setCollapsedSidebar] = useState(true)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const onToggleMenu = () => {
        setCollapsedSidebar(prev=>!prev)
    }
    return (
        <div className="Navbar">
            
            <div>
                <button onClick={onToggleMenu}>menu</button>
                <select></select>
            </div>
            <div>
                LOGO
            </div>
            <div>
                <button onClick={()=>onToggle()}>Cart</button>
                <button>Search</button>
            </div>
            
            <Cart collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Sidebar collapsed={collapsedSidebar}></Sidebar>
        </div>
    );
};

export default Navbar;