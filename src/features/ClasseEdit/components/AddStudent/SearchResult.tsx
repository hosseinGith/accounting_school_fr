import SearchResultItem from "./SearchResultItem";
const randText = Array(10)
  .fill("")
  .map(() => Math.random().toString().replace("0.", ""));

export default function SearchResult({ value }: { value?: string }) {
  console.log(value);

  return (
    <ul
      className={`max-h-[40vh] overflow-auto rounded-b-lg transition borderStyle  opacity-100 `}
    >
      {randText.map((text) => (
        <SearchResultItem
          show={
            text.includes(String(value)) ||
            String(value).includes(text) ||
            !value
          }
          key={text}
          text={text}
        />
      ))}
    </ul>
  );
}
