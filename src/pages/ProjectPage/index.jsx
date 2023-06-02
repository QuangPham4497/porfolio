import pharmacy from "../../images/pharmacity-icon.png";
import porfolio from "../../images/porfolio.jpeg";

function ProjectPage() {
  return (
    <>
      <p className="text-center m-4 text-2xl font-bold">MY PROJECTS</p>
      <div className="py-10 flex justify-center items-baseline">
        <a href="https://github.com/QuangPham4497/pharmacy.git">
          <div className="text-center w-64 h-64 m-4 p-4 rounded-md hover:bg-indigo-400 hover:scale-110 hover:cursor-pointer">
            <div className="w-40 h-40 mx-auto rounded-md ">
              <img
                src={pharmacy}
                className="rounded-full w-auto h-auto overflow-hidden"
              />
            </div>
            <p className="mt-4 text-xl">Pharmacy E-Commerce Website</p>
          </div>
        </a>
        <div className="text-center w-64 h-64 m-4 p-4 rounded-md hover:bg-indigo-400 hover:scale-110 hover:cursor-pointer">
          <div className="w-40 h-40 mx-auto rounded-md  ">
            <img
              src={porfolio}
              className="rounded-full overflow-hidden w-full h-full"
            />
          </div>
          <p className="mt-4 text-xl">Porfolio</p>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
