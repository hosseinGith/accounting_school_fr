import { motion } from "framer-motion";

export default function TableTr({
  national_id,
  studentName,
  studentLastName,
  phoneNumber,
  studentClass,
  payemntStatus,
  date,
  index,
}: {
  index: string;
  national_id: number;
  studentName: string;
  studentLastName: string;
  phoneNumber: string;
  studentClass: string;
  payemntStatus: string;
  date: string;
}) {
  return (
    <motion.tr
      exit={{ opacity: 0, translateY: "-100%" }}
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 100, translateY: 0 }}
      transition={{ delay: 0.2 }}
      className="text-(--foreground) w-full *:p-4 hover:bg-gray-50 transition-all "
    >
      <td>
        <input
          type="checkbox"
          className="fill-black accent-(--primery) h-6 w-6"
        />
      </td>
      <td>{index}</td>
      <td>{national_id}</td>
      <td className="text-(--text-color)">
        <div className="primery-gradient5 p-2 ml-2 font-bold text-lg rounded-full w-10 h-10 inline-flex items-center justify-center  text-white">
          {studentName[0]}
        </div>
        {studentName}
      </td>
      <td>{studentLastName}</td>
      <td>{phoneNumber}</td>
      <td className="text-(--text-color)">{studentClass}</td>
      <td className="text-(--text-color)">{payemntStatus}</td>
      <td>{date}</td>
      <td>
        <div className="flex justify-between w-full">
          <button
            className={`hover:bg-[#e0f2fe] transition rounded-lg p-2 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#0ea5e9"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          <button
            className={`hover:bg-[#d1fae5] transition rounded-lg p-2 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#10b981"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            className={`hover:bg-[#fee2e2] transition rounded-lg p-2 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="var(--danger)"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </td>
    </motion.tr>
  );
}
