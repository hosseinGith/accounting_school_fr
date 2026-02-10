import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Link } from "react-router";

export default function WindowBase({
  children,
  title,
  className = "",
  active,
}: {
  children: ReactNode;
  title: ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <motion.div
      className={`window ${
        active ? "active" : ""
      } flex items-center justify-center ${className}`}
    >
      {active && (
        <motion.div
          initial={{ opacity: 0, translateY: "-100%" }}
          animate={{ opacity: 100, translateY: "0" }}
          transition={{ delay: 0.3 }}
          className="bg-(--background2) max-w-200 w-[90%] mx-auto rounded-lg overflow-auto max-h-200 h-[90%]"
        >
          <div className="p-4 bg-(--secondary-4) flex items-center justify-between borderStyle">
            <div className="flex items-center gap-2 text-xl font-bold">
              {title}
            </div>
            <Link
              to="#"
              className="hover:bg-(--danger-bg) p-2 rounded cursor-pointer transition group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 group-hover:stroke-(--secondary-5)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
