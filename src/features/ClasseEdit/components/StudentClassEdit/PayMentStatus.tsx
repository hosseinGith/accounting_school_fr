import { useState } from "react";

export default function PayMentStatus({
  type,
}: {
  type: "complate" | "none" | "waiting";
}) {
  const [typeStatus, setTypeStatus] = useState(type);
  function changeStatus(type: "complate" | "none" | "waiting") {
    setTypeStatus(type);
  }

  return (
    <div className="flex font-bold *:w-full sm:col-span-2 sm:col-end-3 gap-4 ">
      <div
        onClick={() => changeStatus("complate")}
        className={`borderStyle rounded-2xl px-2 py-3 cursor-pointer transition hover:shadow hover:opacity-75 text-center text-(--secondary-7) ${
          typeStatus === "complate" ? "border-(--primery)!" : ""
        } ${console.log(typeStatus === "complate")}`}
      >
        پرداخت شده
      </div>
      <div
        onClick={() => changeStatus("none")}
        className={`borderStyle rounded-2xl px-2 py-3 cursor-pointer transition hover:shadow hover:opacity-75 text-center text-(--secondary-5) ${
          typeStatus === "none" ? "border-(--primery)!" : ""
        }`}
      >
        پرداخت نشده
      </div>
      <div
        onClick={() => changeStatus("waiting")}
        className={`borderStyle rounded-2xl px-2 py-3 cursor-pointer transition hover:shadow hover:opacity-75 text-center text-(--secondary-8) ${
          typeStatus === "waiting" ? "border-(--primery)!" : ""
        }`}
      >
        در انتظار
      </div>
    </div>
  );
}
