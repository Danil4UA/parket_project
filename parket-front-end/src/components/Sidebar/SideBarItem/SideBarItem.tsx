import Link from "next/link";
import { memo } from "react";
import { SidebarItemType } from "../model/items";

interface SideBarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SideBarItem = ({item}: SideBarItemProps)=> {
    return (
        <>
            <Link href={item.path}>
                {item.text}
            </Link>
        </>
    )
}

export default memo(SideBarItem)