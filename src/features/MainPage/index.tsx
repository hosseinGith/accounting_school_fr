import { motion } from "framer-motion";
import SystemSlidesInfo from "./components/SystemSlidesInfo";
import WelcomeSect from "./components/WelcomeSect";
import TodayClassesAndPayMents from "./components/TodayClassesAndPayMents";
export default function MainPage() {
  return (
    <main>
      <motion.div
        initial={{ translateY: "-100%", opacity: 0 }}
        animate={{ translateY: 0, opacity: 100 }}
      >
        <WelcomeSect />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 100, translateX: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SystemSlidesInfo />
      </motion.div>
      <TodayClassesAndPayMents />
    </main>
  );
}
