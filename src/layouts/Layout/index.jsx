import "./styles.css";
import { Outlet } from "react-router-dom";
import Header from "../Header";

function Layout() {
  return (
    <div className="wrapper ">
      <Header />
      <div className="main-wrapper mt-24">
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
