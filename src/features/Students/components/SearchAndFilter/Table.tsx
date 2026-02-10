import Pagination from "../../../../components/ui/Pagination";
import TableTr from "./TableTr";

export default function Table() {
  return (
    <div className=" bg-(--background2) rounded-2xl borderStyle">
      <div className="overflow-auto whitespace-nowrap relative max-h-90">
        <table className="w-full  ">
          <thead className="bg-(--secondary-4) ">
            <tr className="text-(--foreground) *:text-start *:p-4 sticky top-0 right-0 w-full bg-[#f6f9fb] ">
              <th>
                <input type="checkbox" className="accent-(--primery) w-6 h-6" />
              </th>
              <th>ردیف</th>
              <th>کد ملی</th>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>شماره تماس</th>
              <th>کلاس</th>
              <th>وضعیت پرداخت</th>
              <th>تاریخ ثبت‌نام</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-(--border) ">
            <TableTr
              national_id={1890781282}
              studentName="حسین"
              studentLastName="دریس"
              phoneNumber="09212978638"
              studentClass="پژوهشی"
              payemntStatus="پرداخت کامل"
              date="۱۴۰۲/۱۲/۰۵"
              index="1"
            />
            <TableTr
              national_id={1890781282}
              studentName="حسین"
              studentLastName="دریس"
              phoneNumber="09212978638"
              studentClass="پژوهشی"
              payemntStatus="پرداخت کامل"
              date="۱۴۰۲/۱۲/۰۵"
              index="1"
            />
            <TableTr
              national_id={1890781282}
              studentName="حسین"
              studentLastName="دریس"
              phoneNumber="09212978638"
              studentClass="پژوهشی"
              payemntStatus="پرداخت کامل"
              date="۱۴۰۲/۱۲/۰۵"
              index="1"
            />
            <TableTr
              national_id={1890781282}
              studentName="حسین"
              studentLastName="دریس"
              phoneNumber="09212978638"
              studentClass="پژوهشی"
              payemntStatus="پرداخت کامل"
              date="۱۴۰۲/۱۲/۰۵"
              index="1"
            />
            <TableTr
              national_id={1890781282}
              studentName="حسین"
              studentLastName="دریس"
              phoneNumber="09212978638"
              studentClass="پژوهشی"
              payemntStatus="پرداخت کامل"
              date="۱۴۰۲/۱۲/۰۵"
              index="1"
            />
            <TableTr
              national_id={1890781282}
              studentName="حسین"
              studentLastName="دریس"
              phoneNumber="09212978638"
              studentClass="پژوهشی"
              payemntStatus="پرداخت کامل"
              date="۱۴۰۲/۱۲/۰۵"
              index="1"
            />
          </tbody>
        </table>
      </div>
      <div className="bg-(--secondary-4) flex md:flex-row flex-col justify-center md:justify-between items-center p-4 border-t-2 borderStyle">
        <Pagination className="" />
        <span className="text-sm">صفحه ۱ از ۵ - ۸۵ مورد</span>
      </div>
    </div>
  );
}
