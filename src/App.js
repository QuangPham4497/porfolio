import "./App.css";
import { Routes, Route } from "react-router-dom";

import { BsStarFill } from "react-icons/bs";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

import { ROUTES } from "./constants/routes";

function App() {
  return (
    <div className="App bg-white px-10 dark:bg-gray-900">
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PROJECT} element={<ProjectPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
