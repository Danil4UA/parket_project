export interface SidebarItemType {
  path: string;
  text: string;
  Icon?: string;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: "/",
    Icon: "",
    text: "Home"
  },
  {
    path: "/products",
    Icon: "",
    text: "Products"
  }
];
