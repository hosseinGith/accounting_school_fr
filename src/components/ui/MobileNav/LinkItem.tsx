import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router";

export default function LinkItem({
  title,
  path,
  notifeCount,
  children,
}: {
  title: string;
  path: string;
  notifeCount?: number;
  children: ReactNode;
}) {
  const location = useLocation();
  const [active, setActive] = useState<boolean>(location.pathname == path);
  useEffect(() => {
    (() => {
      setActive(location.pathname == path);
    })();
  }, [location.pathname, path]);
  return (
    <li>
      <div
        className={`border-t-4 border-(--primery) ${
          !active ? "opacity-0" : ""
        }`}
      ></div>
      <Link
        to={path}
        className={`relative transition-all   my-2 hover:shadow p-2 flex items-center justify-center flex-col hover:bg-(--secondary-6) ${
          active ? "bg-(--secondary-6) " : ""
        }`}
      >
        <div
          className={`secondary-2 absolute top-0 right-0 w-6 h-6 text-white text-[12px] flex justify-center items-center rounded-full  transition-opacity shadow-(--box-shadow-secondary-2) opacity-0 ${
            Number(notifeCount) > 0 ? "opacity-100" : ""
          }`}
        >
          {notifeCount}
        </div>
        {active && (
          <div className="absolute animate-ping  left-0 top-0 w-full z-[-1] bg-(--primery) opacity-25 rounded-2xl h-full"></div>
        )}
        {children}
        {title}
      </Link>
    </li>
  );
}
