import { motion } from "framer-motion";
export default function FilterContainer() {
  const baseAnimate = 0.3;
  return (
    <section className="borderStyle bg-(--background2) p-4 rounded-2xl space-y-4 flex gap-4 items-center sm:flex-row flex-col">
      <motion.search
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: baseAnimate }}
        className="px-4 flex items-center w-full focus-within:bg-(--background2) transition border-2 border-transparent focus-within:border-(--primery) bg-gray-200 rounded-2xl m-0"
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
        className="py-3 transition outline-0 sm:w-max w-full borderStyle rounded-md px-2 focus:border-(--primery)"
      >
        <option value="">همه دانش‌آموزان</option>
        <option value="paid">پرداخت کامل</option>
        <option value="unpaid">دارای معوقه</option>
      </motion.select>
    </section>
  );
}
