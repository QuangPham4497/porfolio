import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function Header() {
  return (
    <div className="header-wrapper fixed top-0 left-0 right-0 w-full h-24 px-12 bg-indigo-400">
      <div className="header-container">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-bold">Porfolio</h1>
          <ul className="flex items-baseline justify-around">
            <li>
              <BsStarFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white px-4 py-2 rounded-lg ml-8">
                <Link to={ROUTES.HOME}>Home</Link>
              </a>
            </li>
            <li>
              <a className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white px-4 py-2 rounded-lg ml-8">
                <Link to={ROUTES.PROJECT}>Projects</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
