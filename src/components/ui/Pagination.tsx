export default function Pagination({ className = "" }: { className: string }) {
  return (
    <div
      className={` *:bg-(--background2) *:hover:bg-gray-300 *:hover:opacity-95 *:transition *:flex *:items-center *:py-2 *:rounded-lg *:cursor-pointer gap-4 flex *:border-2 *:borderStyle *:px-3! py-4 ${className}`}
    >
      <div className="flex">
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        قبلی
      </div>
      <div className="bg-(--primery)! text-(--primery-text) border-transparent!">
        1
      </div>
      <div className="">2</div>
      <div className="">3</div>
      <div className="">4</div>
      <div className=" flex">
        بعدی
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
