import { type ReactNode } from "react";

export default function WelcomePageWraper({
  title,
  description,
  children,
}: {
  title: string;
  description: string | ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="bg-(--background2) borderStyle border-2 space-y-4 pr-6 flex flex-wrap justify-between  relative py-4 px-6 rounded-2xl overflow-hidden">
      <div className="absolute primery-gradient2 right-0 top-0 h-full w-2"></div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="fill-(--primery) text-(--primery) bg-[#dbeafe] w-max p-3 rounded-2xl shadow-[0_4px_12px_rgba(59,130,246,0.2)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold"> {title}</span>
        </div>
        <div>{description}</div>
      </div>
      <div className="w-full md:w-max  items-center flex flex-col justify-center gap-4">
        {children}
      </div>
    </section>
  );
}
