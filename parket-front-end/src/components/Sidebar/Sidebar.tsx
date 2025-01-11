"use client"
import "./Sidebar.css";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useMemo } from "react";
import { SidebarItemsList } from "./model/items";
import SidebarItem from "./SideBarItem/SideBarItem";

interface SidebarProps {
    collapsed: boolean
}
export const Sidebar = ({collapsed}: SidebarProps) => {

    const itemsList = useMemo(() => {
        return SidebarItemsList.map((item)=> (
            <SidebarItem 
                item={item}
                collapsed={collapsed}
                key={item.path }
            />
        ))
    }, [collapsed])

    return (
        <>
             <div className={classNames("Sidebar", {["collapsed"]: collapsed}, [])}>
                {!collapsed &&
                    <div className="items">
                        {itemsList}
                    </div>
                }
            </div>
            <div className={classNames("overlay", {overlayActive: !collapsed})}>

            </div>
        </>
    );
};

export default Sidebar;