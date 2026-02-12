import { Link } from "react-router";

export default function Item({
  classId,
  currentStudentsCount,
  allStudentsCount,
  code,
  teacher,
  book,
  date,
  room,
  title,
}: {
  classId: number;
  currentStudentsCount: number;
  allStudentsCount: number;
  code: string;
  teacher: string;
  book: string;
  date: string;
  room: string;
  title: string;
}) {
  return (
    <div className="shadow-md text-sm hover:shadow-2xl hover:scale-105 transition-all rounded-2xl overflow-hidden space-y-4">
      {/* header */}
      <div className="*:inline-block flex-col flex p-5  gap-3 bg-(--primery) text-(--primery-text)">
        <span className="text-2xl">{title}</span>
        <span className="">کد: {code}</span>
      </div>
      <Link className="block" to={`/classes/${classId}`}>
        <table className="**:px-1 **:py-4 *:border-b-2 *:border-(--border) w-full">
          <tbody>
            <tr>
              <th>استاد: </th>
              <td>{teacher}</td>
            </tr>
            <tr>
              <th>کتاب: </th>
              <td>{book}</td>
            </tr>
            <tr>
              <th>زمان: </th>
              <td>{date}</td>
            </tr>
            <tr>
              <th>ظرفیت: </th>
              <td>
                <div className="p-0!">
                  {currentStudentsCount} نفر از {allStudentsCount} نفر
                  <div className="relative bg-(--secondary-3) h-3 p-0! overflow-hidden rounded-2xl">
                    <div
                      className="absolute top-0 right-0 bg-(--secondary-7) p-0! h-full"
                      style={{
                        width: `${
                          (currentStudentsCount / allStudentsCount) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>محل: </th>
              <td>{room}</td>
            </tr>
          </tbody>
        </table>
      </Link>
      <div className="mb-4 flex justify-center *:cursor-pointer gap-2">
        <Link
          to={`/classes/${classId}`}
          className="bg-(--primery-2) rounded-2xl text-white flex gap-2 py-2 px-4 hover:opacity-85 transition"
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          ویرایش
        </Link>
        <button className="bg-(--secondary-5) rounded-2xl text-white flex gap-2 py-2 px-4 hover:opacity-85 transition">
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          حذف
        </button>
      </div>
    </div>
  );
}
