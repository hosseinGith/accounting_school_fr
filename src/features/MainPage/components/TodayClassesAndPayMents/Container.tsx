import { useState, type ReactNode } from "react";
import { Link } from "react-router";

export default function Container({
  showAllPath,
  title,
  showAllText,
  svgTitle,
  svgShowAll,
  children,
}: {
  showAllPath: string;
  title: string;
  showAllText: string;
  svgTitle: ReactNode;
  svgShowAll: ReactNode;
  children?: ReactNode;
}) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`${
          !active ? "max-h-20" : "h-full"
        } overflow-hidden bg-(--background2) border-2 shadow borderStyle p-4 rounded-2xl space-y-6 transition-all`}
      >
        <div
          onClick={() => setActive((prev) => !prev)}
          className="flex justify-between flex-wrap gap-2 "
        >
          <div className="flex items-center gap-2">
            {svgTitle}
            <span className="font-bold text-2xl">{title}</span>
          </div>
          <Link
            to={showAllPath}
            className="linksButton text-sm flex gap-2 items-center"
          >
            {svgShowAll}
            {showAllText}
          </Link>
        </div>
        <hr className="borderStyle" />
        {active && (
          <ul className="space-y-2 max-h-87.5 overflow-auto">{children}</ul>
        )}
      </div>
    </div>
  );
}
