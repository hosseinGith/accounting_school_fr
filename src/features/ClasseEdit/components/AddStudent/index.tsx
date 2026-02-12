import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import WindowBase from "../../../../components/ui/Window/WindowBase";
import Input from "../../../../components/ui/Input";
import SearchResult from "./SearchResult";
export default function AddStudent() {
  const location = useLocation();
  const [active, setActive] = useState<boolean>(location.hash == "#add");
  const [Search, setSearch] = useState({
    value: "",
    isActive: false,
  });
  useEffect(() => {
    (() => {
      setActive(location.hash == "#add");
    })();
  }, [location.hash]);

  return (
    <WindowBase
      active={active}
      className=""
      title={
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="var(--primery-2)"
            fill="var(--primery-2)"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>

          <span> افزودن دانش‌آموز</span>
        </>
      }
    >
      <div className="relative mt-4 flex flex-col p-4">
        <Input
          value={Search.value}
          onChange={(e) =>
            setSearch((prev) => ({ ...prev, value: e.target.value }))
          }
          placeholder="حسین دریس"
          title="نام دانش آموز"
          required
          className={`${Search.isActive ? "rounded-b-none" : ""}`}
        />
        <SearchResult />
      </div>
    </WindowBase>
  );
}
