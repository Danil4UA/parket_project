"use client";
import "./Sidebar.css";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useEffect, useMemo } from "react";
import { SidebarItemsList } from "./model/items";
import SidebarItem from "./SideBarItem/SideBarItem";

interface SidebarProps {
  collapsed: boolean;
  onClose: () => void;
}

export const Sidebar = ({ collapsed, onClose }: SidebarProps) => {
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

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} onClose={onClose} key={item.path} />);
  }, [collapsed, onClose]);

  return (
    <>
      {/* Sidebar */}
      <div className={classNames("Sidebar", { collapsed }, [])}>{!collapsed && <div className="items">{itemsList}</div>}</div>
      {/* Overlay */}
      <div className={classNames("overlay", { overlayActive: !collapsed })} onClick={onClose} />
    </>
  );
};

export default Sidebar;
