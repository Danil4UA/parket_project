import { memo } from "react";

interface LangSwitcherProps {
  short?: boolean;
}

export const LangSwitcher = ({}: LangSwitcherProps) => {
  return (
    <select className="">
      <option value="en">{"English"}</option>
      <option value="ru">{"Русский"}</option>
      <option value="he">{"עברית"}</option>
    </select>
  );
};

export default memo(LangSwitcher);
