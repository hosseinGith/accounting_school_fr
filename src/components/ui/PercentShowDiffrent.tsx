export default function PercentShowDiffrent({
  textBig,
  textSmall,
  num,
}: {
  textBig?: string;
  textSmall?: string;
  num?: number | boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-full px-3 py-1 ${
        !num ? "invisible h-0" : ""
      } ${
        Number(num) < 0
          ? "bg-(--danger-bg) text-(--danger)"
          : "bg-(--success-bg) text-(--success)"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`size-6 ${Number(num) < 0 ? "rotate-180" : ""}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
        />
      </svg>
      <p className="font-bold text-sm space-x-1">
        <span>
          {(textBig || textSmall) && String(Math.abs(Number(num)))}
          {!textBig && !textSmall && Math.abs(Number(num)) + "%"}
        </span>
        <span>
          {(textBig || textSmall) && (Number(num) > 0 ? textBig : textSmall)}
          {!textBig && !textSmall && (Number(num) > 0 ? "افزایش" : "کاهش")}
        </span>
      </p>
    </div>
  );
}
