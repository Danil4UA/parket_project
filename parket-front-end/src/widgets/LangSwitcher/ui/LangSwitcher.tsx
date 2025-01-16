"use client";
import "./LangSwitcher.css"
import { memo, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const LangSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [currentLocale, setCurrentLocale] = useState(() => {
    const localeFromPath = pathname.split("/")[1];
    return ["en", "ru", "he"].includes(localeFromPath) ? localeFromPath : "en";
  });

  useEffect(() => {
    const localeFromPath = pathname.split("/")[1]; 
    if (["en", "ru", "he"].includes(localeFromPath)) {
      setCurrentLocale(localeFromPath); 
    }
  }, [pathname]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const path = pathname.split("/").slice(2).join("/"); 
    router.push(`/${newLocale}/${path}`);  
  };

  return (
    <select 
      className="LangSwitcher"
      value={currentLocale} 
      onChange={onSelectChange}
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="he">עברית</option>
    </select>
  );
};

export default memo(LangSwitcher);
