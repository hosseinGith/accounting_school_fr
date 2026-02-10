import { motion } from "framer-motion";
import { Link } from "react-router";

export default function ClassesItem({
  time,
  title,
  teacher,
  studentsCount,
  roomName,
  status,

  classHour,
  path,
}: {
  time: string;
  title: string;
  teacher: string;
  studentsCount: number;
  roomName: string;
  status: string;
  classHour: string;
  path: string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 100, translateY: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      <Link
        to={path}
        className="hover:border-(--primery) border-2  rounded-2xl p-1 md:border-transparent border-(--primery) md:not-hover:borderStyle overflow-auto md:whitespace-nowrap transition  text-sm flex md:flex-row md:justify-between flex-col justify-center gap-x-2 gap-y-5 items-center "
      >
        <div className="p-4 border-2 flex flex-col w-max borderStyle rounded-2xl">
          <span className="text-2xl">{time}</span>
          <span className="text-center">{classHour}</span>
        </div>
        <div className="md:w-full flex-col flex gap-2">
          <span className="text-xl">{title}</span>
          <div className="*:flex *:gap-1 flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              {teacher}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              {studentsCount} دانش آموز
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              {roomName} اتاق
            </span>
          </div>
        </div>
        <div
          className={`px-4 w-45 text-center whitespace-nowrap  py-2 rounded-full text-white ${
            status === "complating" || status === "complate"
              ? "bg-[#10b981]"
              : ""
          } ${status === "soon" ? "bg-yellow-500" : ""}`}
        >
          {status === "complating" && "در حال برگذاری"}
          {status === "soon" && "بزودی"}
          {status === "complate" && "تکمیل شده"}
        </div>
      </Link>
    </motion.li>
  );
}
