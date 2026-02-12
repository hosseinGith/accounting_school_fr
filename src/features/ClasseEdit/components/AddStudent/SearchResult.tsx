import SearchResultItem from "./SearchResultItem";

export default function SearchResult({ active = false }: { active?: boolean }) {
  return (
    <ul
      className={`max-h-[40vh] overflow-auto rounded-b-lg transition borderStyle pointer-events-none opacity-0 ${
        active ? "opacity-100 pointer-events-auto" : ""
      }`}
    >
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
    </ul>
  );
}
