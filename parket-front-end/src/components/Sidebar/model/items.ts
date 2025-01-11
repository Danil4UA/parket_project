

export interface SidebarItemType {
    path: string;
    text: string;
    Icon?: string;

}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: "/about",
        Icon: "",
        text: "About"
    },
    {
        path: "/home",
        Icon: "",
        text: "Home"
    },
    {
        path: "/products",
        Icon: "",
        text: "Products",
    },
]