import AddStudent from "./components/AddStudent";
import FilterContainer from "./components/FilterContainer";
import List from "./components/List";
import StudentClassEdit from "./components/StudentClassEdit";
import WelcomeSect from "./components/WelcomeSect";

export default function ClasseEdit() {
  return (
    <>
      <main>
        {/* header */}
        <WelcomeSect />
        <FilterContainer />
        <List />
      </main>
      <AddStudent />
      <StudentClassEdit />
    </>
  );
}
