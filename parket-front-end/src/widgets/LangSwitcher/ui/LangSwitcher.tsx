"use client";
import { memo } from "react";
import { usePathname, useRouter } from "next/navigation";

export const LangSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <select className="" onChange={onSelectChange}>
      <option value="en">{"English"}</option>
      <option value="ru">{"Русский"}</option>
      <option value="he">{"עברית"}</option>
    </select>
  );
};

export default memo(LangSwitcher);
