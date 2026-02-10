import type { ReactNode } from "react";

export default function Select({
  title,
  children,
  dir,
  required = false,
}: {
  title: string;
  children?: ReactNode;
  dir?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col">
      <span>
        {title}
        {required && <strong className="text-(--secondary-5)">*</strong>}
      </span>
      <select
        required={required}
        dir={dir}
        className="outline-0 focus:border-(--primery)! borderStyle transition py-3 px-2 rounded-lg bg-(--background2)"
      >
        {children}
      </select>
    </label>
  );
}
