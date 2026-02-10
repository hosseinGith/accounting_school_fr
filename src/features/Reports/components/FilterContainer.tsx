import DateInput from "../../../components/ui/DateInput";

export default function FilterContainer() {
  return (
    <div className="borderStyle p-4 space-y-4">
      <div className="sm:*:w-max *:w-full space-y-4 *:py-2! space-x-4">
        <button className="button active">امروز</button>
        <button className="button">این هفته</button>
        <button className="button">این ماه</button>
        <button className="button">امسال</button>
        <button className="button">کل</button>
      </div>
      <div className="flex gap-2 justify-end flex-wrap">
        <DateInput className="sm:w-47.5" />
        <span className=" sm:w-max w-full flex justify-center items-center ">
          تا
        </span>
        <DateInput className="sm:w-47.5" />
      </div>
    </div>
  );
}
