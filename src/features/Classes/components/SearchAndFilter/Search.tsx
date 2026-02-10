import { motion } from "framer-motion";

export default function Search() {
  const baseAnimate = 0.3;
  return (
    <div className="bg-(--background2)  borderStyle rounded-2xl py-8 px-4 flex md:flex-row flex-col justify-between w-full gap-4 text-sm">
      <motion.search
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: baseAnimate }}
        className="px-4 flex items-center w-full focus-within:bg-(--background2) transition border-2 border-transparent focus-within:border-(--primery) bg-gray-200 rounded-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="w-full px-4 py-4 "
          type="search"
          placeholder="جستجوی دانش‌آموز (نام، نام خانوادگی، کد ملی، تلفن...)"
        />
      </motion.search>
      <motion.select
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: baseAnimate + 0.2 }}
        className="py-3 transition outline-0 borderStyle rounded-md px-2 focus:border-(--primery)"
      >
        <option value="">همه کلاس‌ها</option>
        <option value="1">مکالمه پیشرفته</option>
        <option value="2">مکالمه مقدماتی</option>
        <option value="3">گرامر پیشرفته</option>
      </motion.select>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: baseAnimate + 0.6 }}
        className="linksButton py-3!  px-4! flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        خروجی
      </motion.button>
    </div>
  );
}
