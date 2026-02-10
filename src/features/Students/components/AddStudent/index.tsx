import { Link, useLocation } from "react-router";
import Input from "../../../../components/ui/Input";
import Select from "../../../../components/ui/Select";
import Textarea from "../../../../components/ui/Textarea";
import WindowBase from "../../../../components/ui/Window/WindowBase";
import HeaderItem from "./HeaderItem";
import { useEffect, useState } from "react";

export default function AddStudent() {
  const location = useLocation();
  const [active, setActive] = useState<boolean>(location.hash == "#add");
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

          <span> افزودن دانش‌آموز جدید</span>
        </>
      }
    >
      <div className="space-y-12 mx-4 rounded-2xl mt-6 p-4 bg-(--background) borderStyle">
        <HeaderItem title="اطلاعات شخصی">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="var(--primery-2)"
            fill="none"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>
        </HeaderItem>
        <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2">
          <Input title="کد ملی" required />
          <Input title="نام" required />
          <Input title="نام خانوادگی" required />
          <Input title="شماره تماس" required />
          <Input title="تاریخ تولد" />
          <Select title="جنسیت">
            <option disabled>انتخاب کنید</option>
            <option value="male">مذکر</option>
            <option value="famle">مونث</option>
          </Select>
        </div>
        <Textarea title="آدرس" />
      </div>
      <hr className="borderStyle mt-16" />
      <div className="flex justify-end items-center gap-6 *:px-4! *:py-2! mt-4 p-4">
        <Link to="#" className="linksButton ">
          لغو
        </Link>
        <button className="linksButton hover:opacity-90 hover:shadow-lg hover:-translate-y-1 shadow transition-all primery-gradient6 text-white rounded-lg">
          ذخیره دانش‌آموز
        </button>
      </div>
    </WindowBase>
  );
}
