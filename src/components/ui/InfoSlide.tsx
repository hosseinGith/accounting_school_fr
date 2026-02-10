import { motion } from "framer-motion";
import type { ReactNode } from "react";
import PercentShowDiffrent from "./PercentShowDiffrent";

export default function InfoSlide({
  num,
  count,
  borderBgClassTop = "",
  bgIconColor = "",
  className = "",
  textBig,
  textSmall,
  title,
  haveDiffrentShow = true,

  children,
}: {
  num?: number | boolean;
  count: number | string;
  borderBgClassTop?: string;
  bgIconColor?: string;
  className?: string;
  title: string;
  haveDiffrentShow?: boolean;

  textBig?: string;
  textSmall?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={`bg-(--background2) shadow-sm hover:shadow-lg relative hover:-translate-y-4 flex items-center gap-4 rounded-2xl overflow-hidden w-full p-4 transition-all duration-400  ${className}`}
    >
      <div
        className={`absolute top-0 h-1.5 w-full right-0 ${borderBgClassTop}`}
      ></div>
      <div
        style={{ background: bgIconColor }}
        className="rounded-2xl w-max p-3 h-max"
      >
        {children}
      </div>

      <div className="space-y-2">
        <span className="block font-bold text-3xl">{count}</span>
        <span className="block">{title}</span>
        {haveDiffrentShow && (
          <PercentShowDiffrent
            textBig={textBig}
            textSmall={textSmall}
            num={num}
          />
        )}
      </div>
    </motion.div>
  );
}
