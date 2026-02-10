import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import WindowBase from "../../../../components/ui/Window/WindowBase";
import Textarea from "../../../../components/ui/Textarea";
import Input from "../../../../components/ui/Input";
import Select from "../../../../components/ui/Select";
export default function AddStudent() {
  const weekDaysName = {
    saturday: "شنبه",
    sunday: "یکشنبه",
    monday: "دوشنبه",
    tuesday: "سه‌شنبه",
    wednesday: "چهارشنبه",
    thursday: "پنجشنبه",
    friday: "جمعه",
  };

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
      <div className="space-y-12 mx-4  rounded-2xl mt-6 p-4 bg-(--background) borderStyle">
        <div className="gap-4 grid md:grid-cols-2 gap-y-12">
          <Input placeholder="مثال: مکالمه پیشرفته" title="نام کلاس" required />
          <Input placeholder="مثال: L-2024-01" title="کد کلاس" required />
          <Select title="استاد" required>
            <option selected disabled>انتخاب استاد</option>
            <option value="1">دکتر احمدی</option>
            <option value="2">خانم کریمی</option>
            <option value="3">دکتر جلالی</option>
            <option value="4">خانم موسوی</option>
            <option value="5">دکتر نظری</option>
            <option value="6">آقای رضایی</option>
          </Select>
          <Select title="کتاب" required>
            <option selected disabled>انتخاب استاد</option>
            <option value="1">TOUCHSTONE 4</option>
            <option value="2">INTERCHANGE 1</option>
            <option value="3">Grammar in Use Advanced</option>
            <option value="4">Tactics for Listening</option>
            <option value="5">Academic Writing</option>
            <option value="6">Market Leader</option>
            <option value="7">English File Advanced</option>
            <option value="8">Oxford Word Skills</option>
          </Select>
          <div className="w-full col-start-1 lg:col-end-3 md:col-end-2">
            <span></span>
            <span>
              روزهای برگزاری
              {<strong className="text-(--secondary-5)">*</strong>}
            </span>
            <div className=" w-full gap-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
              {Object.keys(weekDaysName).map((item, i) => (
                <label
                  className="flex justify-center items-center gap-2"
                  key={item}
                >
                  <span>{Object.values(weekDaysName)[i]}</span>
                  <input
                    name={item}
                    type="checkbox"
                    className="fill-black accent-(--primery) h-5 w-5"
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="flex w-full *:w-full!">
            <Input type="time" title="ساعت شروع" required />
            <Input type="time" title="ساعت پایان" required />
          </div>

          <Input type="number" title="ظرفیت کلاس" required />
          <Input type="date" title="تاریخ شروع" required />
          <Input type="date" title="تاریخ پایان" />
          <Input placeholder="مثال: اتاق ۳۰۲" title="محل برگزاری" />
        </div>
        <Textarea title="توضیحات" />
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
