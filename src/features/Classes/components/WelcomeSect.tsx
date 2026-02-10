import WelcomePageWraper from "../../../components/ui/WelcomePageWraper";

export default function WelcomeSect() {
  return (
    <WelcomePageWraper
      description="به پنل مدیریت آموزشگاه زبان خوش آمدید"
      title="مدیریت کلاس‌ها"
    >
      <button
        onClick={() => (location.hash = "add")}
        className="w-full justify-center cursor-pointer hover:shadow-lg shadow transition hover:scale-105 primery-gradient4 text-white px-4 py-2 rounded-lg flex gap-1 text-sm items-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="var(--primery)"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        ایجاد کلاس جدید
      </button>
    </WelcomePageWraper>
  );
}
