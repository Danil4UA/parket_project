import { Link } from "@/i18n/routing.ts";
import { memo } from "react";
import { SidebarItemType } from "../model/items";

interface SideBarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
  onClose: () => void;
}

const SideBarItem = ({ item, onClose }: SideBarItemProps) => {
  return (
    <>
      <Link onClick={() => onClose()} href={item.path}>
        {item.text}
      </Link>
    </>
  );
};

export default memo(SideBarItem);
