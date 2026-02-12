import AddClass from "./components/AddClass";
import ClassesInfoSect from "./components/ClassesInfoSect";
import SearchAndFilter from "./components/SearchAndFilter";
import WelcomeSect from "./components/WelcomeSect";

export default function Classes() {
  return (
    <>
      <main>
        <WelcomeSect />
        <ClassesInfoSect />
        <SearchAndFilter />
      </main>
      <AddClass />
    </>
  );
}
