import { motion } from "framer-motion";
import WelcomeSect from "./components/WelcomeSect";
import SubmitMonthly from "./components/SubmitMonthly";
import PaymentsChart from "./components/PaymentsChart";
import FilterContainer from "./components/FilterContainer";
import SummaryOfTheSituation from "./components/SummaryOfTheSituation";
export default function Reports() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
      <WelcomeSect />
      <FilterContainer />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <SubmitMonthly />
        <PaymentsChart />
      </div>
      <SummaryOfTheSituation />
    </motion.main>
  );
}
