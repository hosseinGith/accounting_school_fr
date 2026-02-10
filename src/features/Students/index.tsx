import { motion } from "framer-motion";
import WelcomeSect from "./components/WelcomeSect";
import StudentsInfoSect from "./components/StudentsInfoSect";
import SearchAndFilter from "./components/SearchAndFilter";
import AddStudent from "./components/AddStudent";

export default function Students() {
  return (
    <>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
        <WelcomeSect />
        <StudentsInfoSect />
        <SearchAndFilter />
      </motion.main>
      {/* window add studnet */}
      <AddStudent />
    </>
  );
}
