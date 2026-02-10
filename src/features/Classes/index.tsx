import AddStudent from "./components/AddClass";
import StudentsInfoSect from "./components/ClassesInfoSect";
import SearchAndFilter from "./components/SearchAndFilter";
import WelcomeSect from "./components/WelcomeSect";

export default function Classes() {
  return (
    <>
      <main>
        <WelcomeSect />
        <StudentsInfoSect />
        <SearchAndFilter/>
      </main>
      <AddStudent />
    </>
  );
}
