import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function LinkItems({
  path,
  text,
  children,
  notifeCount,
}: {
  path: string;
  text: string;
  children: ReactNode;
  notifeCount?: number;
}) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return `flex justify-between items-center gap-2 before:content-[''] before:transition-all before:bg-(--primery) before:absolute before:top-0 before:right-0 before:h-full before:w-1.5  ${
            isActive
              ? "bg-[rgba(255,255,255,0.12)] before:opacity-100"
              : "before:opacity-0"
          } relative font-bold text-lg py-4 transition-all duration-500 lg:hover:pr-6 hover:pr-5  hover:bg-[rgba(255,255,255,0.12)] px-4`;
        }}
        to={path}
      >
        <div className="flex items-center gap-3 lg:w-max w-full justify-center ">
          {children}
          <span className="lg:visible invisible w-0">{text}</span>
        </div>
        <div
          className={`lg:flex hidden secondary-2 w-10 h-10 rounded-full  items-center justify-center transition-opacity shadow-(--box-shadow-secondary-2) opacity-0 ${
            Number(notifeCount) > 0 ? "opacity-100" : ""
          }`}
        >
          {notifeCount}
        </div>
      </NavLink>
    </li>
  );
}
