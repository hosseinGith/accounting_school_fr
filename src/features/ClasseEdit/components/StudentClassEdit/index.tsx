import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import WindowBase from "../../../../components/ui/Window/WindowBase";
import Input from "../../../../components/ui/Input";
import HeaderItem from "./HeaderItem";
import DateInput from "../../../../components/ui/DateInput";
import PayMentStatus from "./PayMentStatus";
export default function StudentClassEdit() {
  const location = useLocation();
  const [active, setActive] = useState<boolean>(location.hash == "#add");

  useEffect(() => {
    (() => {
      setActive(location.hash.includes("#edit_"));
    })();
  }, [location.hash]);

  return (
    <WindowBase
      active={active}
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

          <span> ویرایش اطلاعات دانش‌آموز</span>
        </>
      }
    >
      <div className=" space-y-12 mx-4 rounded-2xl mt-6 p-4 bg-(--background) borderStyle">
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
        <div className="gap-4 grid sm:grid-cols-2">
          <div className="sm:col-span-2 sm:col-end-3 w-full">
            <Input
              value="۰۰۱۲۳۴۵۶۷۸"
              className="w-full opacity-65 "
              title="کد ملی"
              disabled
            />
            <div className="text-sm text-(--foreground)">
              کد ملی قابل تغییر نیست
            </div>
          </div>
          <Input value="حسین" title="نام" />
          <Input value="دریس" title="نام خانوادگی" />
          <Input value="09212978638" title="شماره تماس" />
          <label>
            تاریخ تولد
            <DateInput
              duf={{
                day: 26,
                month: 7,
                year: 1386,
              }}
            />
          </label>
        </div>
      </div>
      <div className="space-y-12 mx-4 rounded-2xl mt-6 p-4 bg-(--background) borderStyle">
        <HeaderItem title="اطلاعات کلاس">
          <svg
            className="size-8 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="var(--primery)"
          >
            <path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"></path>
          </svg>
        </HeaderItem>
        <div className="gap-4 grid sm:grid-cols-2">
          <Input
            value="مکالمه پیشرفته"
            className="w-full opacity-65 "
            title="کلاس"
            disabled
          />
          <Input
            value="Touchstone 4"
            className="w-full opacity-65 "
            title="کتاب"
            disabled
          />
          <div className="sm:col-span-2 sm:col-end-3">
            <Input
              value="۱۴۰۲/۱۱/۱۵"
              className="w-full opacity-65 "
              title="تاریخ ثبت‌نام"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="space-y-12 mx-4 rounded-2xl mt-6 p-4 bg-(--background) borderStyle">
        <HeaderItem title="اطلاعات شهریه">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="var(--primery)"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            ></path>
          </svg>
        </HeaderItem>
        <div className="gap-4 grid sm:grid-cols-2">
          <PayMentStatus type="complate" />
          <Input value="۱۴۰۲/۱۱/۲۰" className="w-full  " title="تاریخ پرداخت" />
          <Input value="۱۸۰,۰۰۰" className="w-full  " title="مبلغ پرداخت شده" />
          <div className="sm:col-span-2 sm:col-end-3">
            <Input value="۰" className="w-full  " title="مانده کتاب" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-6 *:px-4! *:py-2! mt-4 p-4">
        <Link to="#" className="linksButton ">
          انصراف
        </Link>
        <button className="linksButton bg-(--secondary-5)! text-white hover:opacity-75">
          حذف دانش آموز
        </button>
        <button className="linksButton hover:opacity-90 hover:shadow-lg hover:-translate-y-1 shadow transition-all primery-gradient6 text-white rounded-lg">
          ذخیره دانش‌آموز
        </button>
      </div>
    </WindowBase>
  );
}
