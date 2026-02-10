import InfoSlide from "../../../components/ui/InfoSlide";
import { motion } from "framer-motion";

export default function StudentsInfoSect() {
  return (
    <motion.section
      animate={{ width: "100%" }}
      initial={{ width: 0 }}
      transition={{ delay: 0.3 }}
      className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
    >
      <InfoSlide
        title="کل دانش‌آموزان"
        className="py-8"
        count={"85 نفر"}
        bgIconColor="#e0f2fe"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#0369a1"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      </InfoSlide>
      <InfoSlide
        title="پرداخت کامل"
        className="py-8"
        count={"68 نفر"}
        bgIconColor="var(--success-bg)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="green"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </InfoSlide>
      <InfoSlide
        title="در انتظار پرداخت"
        className="py-8"
        count={"17 نفر"}
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
        title="غیرفعال"
        className="py-8"
        count={"3 نفر"}
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
