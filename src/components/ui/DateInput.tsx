import { useState, type ChangeEvent } from "react";

export default function DateInput({
  duf,
  className = "",
}: {
  duf?: { day: number; month: number; year: number };
  className?: string;
}) {
  const [inputsValue, setInputsValue] = useState({
    inputYear: duf?.year || "1404",
    inpuTMonth: duf?.month || "10",
    inputDay: duf?.day || "30",
  });
  function onChange(
    e: ChangeEvent,
    propName: "inputYear" | "inpuTMonth" | "inputDay"
  ) {
    const tatget = e.target as HTMLInputElement;
    setInputsValue((prev) => {
      const obj = { ...prev };
      if (Number(tatget.value) < 1) return prev;
      if (
        (propName === "inputYear" && tatget.value.length < 5) ||
        (propName === "inpuTMonth" && Number(tatget.value) < 13) ||
        (propName === "inputDay" && Number(tatget.value) < 32)
      )
        obj[propName] = tatget.value;
      return obj;
    });
  }
  return (
    <div
      className={`bg-(--background2) flex *:py-4 *:text-center rounded-md px-1 p-0 borderStyle ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
        />
      </svg>

      <input
        value={inputsValue.inputYear}
        maxLength={3}
        max={2000}
        type="number"
        onChange={(e) => onChange(e, "inputYear")}
        className="w-full"
        name=""
        id=""
      />
      <span className="pl-2">/</span>
      <input
        value={inputsValue.inpuTMonth}
        maxLength={2}
        max={12}
        type="number"
        className="w-full"
        name=""
        id=""
        onChange={(e) => onChange(e, "inpuTMonth")}
      />
      <span className="pl-2">/</span>
      <input
        value={inputsValue.inputDay}
        maxLength={2}
        max={31}
        type="number"
        className="w-full"
        name=""
        id=""
        onChange={(e) => onChange(e, "inputDay")}
      />
    </div>
  );
}
