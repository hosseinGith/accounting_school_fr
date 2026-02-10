import type { ReactNode } from "react";

export default function HeaderItem({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="">
      <div className="flex items-center gap-2 pb-4">
        {children}

        <span className="font-bold text-lg">{title}</span>
      </div>
      <hr className="borderStyle" />
    </div>
  );
}
