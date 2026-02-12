import Item from "./Item";

export default function ClassesContainer() {
  return (
    <div className="grid xl:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 ">
      <Item
        classId={1}
        title="مکالمه پیشرفته"
        code="L-2024-01"
        teacher="دکتر احمدی"
        book="TOUCHSTONE 4"
        date="شنبه و سه‌شنبه ۸-۱۰ صبح"
        room="اتاق ۳۰۲"
        currentStudentsCount={18}
        allStudentsCount={20}
      />
      <Item
        classId={2}
        title="مکالمه پیشرفته"
        code="L-2024-01"
        teacher="دکتر احمدی"
        book="TOUCHSTONE 4"
        date="شنبه و سه‌شنبه ۸-۱۰ صبح"
        room="اتاق ۳۰۲"
        currentStudentsCount={18}
        allStudentsCount={20}
      />
      <Item
        classId={3}
        title="مکالمه پیشرفته"
        code="L-2024-01"
        teacher="دکتر احمدی"
        book="TOUCHSTONE 4"
        date="شنبه و سه‌شنبه ۸-۱۰ صبح"
        room="اتاق ۳۰۲"
        currentStudentsCount={18}
        allStudentsCount={20}
      />
      <Item
        classId={4}
        title="مکالمه پیشرفته"
        code="L-2024-01"
        teacher="دکتر احمدی"
        book="TOUCHSTONE 4"
        date="شنبه و سه‌شنبه ۸-۱۰ صبح"
        room="اتاق ۳۰۲"
        currentStudentsCount={18}
        allStudentsCount={20}
      />
    </div>
  );
}
