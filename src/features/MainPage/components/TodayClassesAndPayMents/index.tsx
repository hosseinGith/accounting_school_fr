import ClassesItem from "./ClassesItem";
import Container from "./Container";
import PayMentItem from "./PayMentItem";

export default function TodayClassesAndPayMents() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 ">
      <Container
        showAllPath={""}
        title={"کلاس‌های امروز"}
        svgTitle={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-(--primery) size-8"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        }
        svgShowAll={
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
              d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
            />
          </svg>
        }
        showAllText="مشاهده برنامه هفتگی"
      >
        <ClassesItem
          title="مکالمه پیشرفته"
          classHour="2 ساعت"
          path=""
          roomName="302"
          status="complating"
          studentsCount={18}
          teacher="دکتر احمدی"
          time="08:00"
        ></ClassesItem>
        <ClassesItem
          title="گرامر پیشرفته"
          classHour="1 ساعت"
          path=""
          roomName="303"
          status="soon"
          studentsCount={20}
          teacher="دکتر احمدی"
          time="10:00"
        ></ClassesItem>
      </Container>
      <Container
        svgTitle={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-(--primery) size-6"
          >
            <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
            <path
              fillRule="evenodd"
              d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
              clipRule="evenodd"
            />
          </svg>
        }
        svgShowAll={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        }
        showAllPath={""}
        title={"پرداخت‌های اخیر"}
        showAllText="مشاهده همه"
      >
        <PayMentItem
          classRoomName="مکالمه پیشرفته"
          title="محمد رضایی"
          path=""
          amount={5000000}
          date="دیروز"
        ></PayMentItem>
        <PayMentItem
          classRoomName="مکالمه پیشرفته"
          title="محمد رضایی"
          path=""
          amount={5000000}
          date="دیروز"
        ></PayMentItem>
        <PayMentItem
          classRoomName="مکالمه پیشرفته"
          title="محمد رضایی"
          path=""
          amount={5000000}
          date="دیروز"
        ></PayMentItem>
        <PayMentItem
          classRoomName="مکالمه پیشرفته"
          title="محمد رضایی"
          path=""
          amount={5000000}
          date="دیروز"
        ></PayMentItem>
        <PayMentItem
          classRoomName="مکالمه پیشرفته"
          title="محمد رضایی"
          path=""
          amount={5000000}
          date="دیروز"
        ></PayMentItem>
      </Container>
    </section>
  );
}
