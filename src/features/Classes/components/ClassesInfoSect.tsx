import { motion } from "framer-motion";
import InfoSlide from "../../../components/ui/InfoSlide";

export default function StudentsInfoSect() {
  return (
    <motion.section
      animate={{ opacity: 100 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
      className="grid lg:grid-cols-3 md:grid-cols-2 gap-4"
    >
      <InfoSlide
        title="کلاس‌های فعال"
        className="py-8"
        count={"۱۲ کلاس"}
        bgIconColor="#e0f2fe"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          fill="none"
          stroke="#0369a1"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      </InfoSlide>

      <InfoSlide
        count={"۸ کتاب"}
        title="کتاب‌های آموزشی"
        className="py-8"
        bgIconColor="#fef3c7"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fef3c7"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#92400e"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </InfoSlide>
      <InfoSlide
        title="میانگین حضور"
        className="py-8"
        count={"92%"}
        num={92}
        haveDiffrentShow={false}
        bgIconColor="#fee2e2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#991b1b"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </InfoSlide>
    </motion.section>
  );
}
