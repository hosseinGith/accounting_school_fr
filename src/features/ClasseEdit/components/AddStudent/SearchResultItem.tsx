export default function SearchResultItem({
  show,
  text,
}: {
  show: boolean;
  text: string;
}) {
  return (
    <li
      className={`hover:border-(--primery) border-2 border-transparent p-2 cursor-pointer transition-all  hover:opacity-95  ${
        !show ? "max-h-0 p-0! h-0! opacity-0 pointer-events-none" : ""
      }`}
    >
      {text}
    </li>
  );
}
