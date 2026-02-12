import TrList from "./TrList";

export default function List() {
  return (
    <section className="borderStyle rounded-2xl bg-(--background2) *:p-4 divide-(--border) divide-y-2">
      {/* header */}
      <div className="flex justify-between items-center flex-wrap gap-y-4">
        <div className="font-bold text-lg flex gap-2 items-center">
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
          لیست دانش‌آموزان کلاس (۱۸ نفر)
        </div>
        {/* students status */}
        <div className="flex gap-5">
          <b className="text-(--secondary-7)">پرداخت کامل: 3 نفر</b>
          <b className="text-(--secondary-5)">معوق: 2 نفر</b>
        </div>
      </div>

      <div className="max-h-100 whitespace-nowrap relative p-0! overflow-auto">
        <table className="w-full ">
          <thead className="sticky top-0 right-0 bg-(--background2)">
            <tr className="*:text-start *:py-4 *:px-2 border-b-2 border-(--border)">
              <th>ردیف</th>
              <th>کد ملی</th>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>تاریخ پرداخت شهریه</th>
              <th>مانده شهریه</th>
              <th>تاریخ پرداخت کتاب</th>
              <th>مانده کتاب</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody className="">
            {Array(8)
              .fill("")
              .map((_, i) => {
                return (
                  <TrList
                    key={i}
                    dateBookPayMent="۱۴۰۲/۱۲/۱۵"
                    dateMonthPayMent="۱۴۰۲/۱۲/۱۵"
                    firstName="حسین"
                    lastName="دریس"
                    national_id="1890781282"
                    payMentBook="پرداخت شده"
                    payMentMonth="پرداخت شده"
                    index={i + 1}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
