import { motion } from "framer-motion";
import { Link } from "react-router";

export default function PayMentItem({
  title,
  amount,
  classRoomName,
  date,

  path,
}: {
  title: string;
  amount: number;
  classRoomName: string;
  date: string;

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
        className="hover:border-(--success) border-(--success) border-2 rounded-2xl p-1 md:border-transparent not-hover:borderStyle overflow-auto md:whitespace-nowrap transition  text-sm flex md:flex-row md:justify-between flex-col justify-center gap-x-2 gap-y-5 items-center "
      >
        <div className="p-4 font-bold text-xl rounded-xl primery-gradient4 text-white">
          {title[0]}
        </div>
        <div className="md:w-full flex-col flex gap-2">
          <span className="text-xl">{title}</span>
          <span>{classRoomName}</span>
        </div>
        <div
          className={`px-4 w-45 items-center text-center flex gap-2 py-2 rounded-full `}
        >
          <p className="text-(--success) text-lg">
            {amount.toLocaleString()}تومان
          </p>
          <p>{date}</p>
        </div>
      </Link>
    </motion.li>
  );
}
