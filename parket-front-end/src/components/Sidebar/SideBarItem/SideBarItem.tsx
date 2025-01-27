import { Link } from "@/i18n/routing";
import { memo } from "react";
import { SidebarItemType } from "../model/items";
import "./SideBarItem.css";

interface SideBarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
  onClose: () => void;
}

const SideBarItem = ({ item, onClose }: SideBarItemProps) => {
  return (
    <>
      <Link className="SideBar__Item" onClick={() => onClose()} href={item.path}>
        {item.text}
      </Link>
    </>
  );
};

export default memo(SideBarItem);
