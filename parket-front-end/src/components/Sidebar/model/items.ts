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
    path: "/products/flooring",
    Icon: "",
    text: "Flooring"
  },
  {
    path: "/products/sales",
    Icon: "",
    text: "Sales"
  },
  {
    path: "/products/all",
    Icon: "",
    text: "Catalog"
  }
];
