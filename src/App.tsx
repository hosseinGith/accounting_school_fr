import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { lazy } from "react";
import Aside from "./components/ui/aside";
import MobileNav from "./components/ui/MobileNav/MobileNav";
const MainPage = lazy(() => import("./features/MainPage"));
const Students = lazy(() => import("./features/Students"));
const Classes = lazy(() => import("./features/Classes/index"));
const Reports = lazy(() => import("./features/Reports/index"));

function App() {
  return (
    <div className="grid md:grid-cols-[max-content_1fr] fixed left-0 top-0 w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/auth">
            {/* <Route path="login" element={<Login />} /> */}
          </Route>

          <Route
            path="*"
            element={
              <>
                <Aside />
                <Outlet />
                <MobileNav />
              </>
            }
          >
            <Route index element={<MainPage />} />
            <Route path="students" element={<Students />} />
            <Route path="classes" element={<Classes />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
