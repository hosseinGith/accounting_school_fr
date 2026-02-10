import Timer from "../../../components/ui/Timer";
import WelcomePageWraper from "../../../components/ui/WelcomePageWraper";

export default function WelcomeSect() {
  return (
    <WelcomePageWraper
      description="به پنل مدیریت آموزشگاه زبان خوش آمدید"
      title="عصر بخیر، مدیر محترم! 👋"
    >
      <span className=" text-lg font-bold text-(--primery)">
        {/* <PersionDate /> */}
      </span>
      <div className="flex gap-2  justify-end w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 stroke-(--primery)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <Timer />
      </div>
    </WelcomePageWraper>
  );
}
