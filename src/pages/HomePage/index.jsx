import avatar from "../../images/avatar.jpg";

import benefit from "../../images/benefit.jpeg";
import tool from "../../images/tool.png";

import { BsStarFill } from "react-icons/bs";

function HomePage() {
  return (
    <div>
      <div className="text-center w-full h-100">
        <div className="text-center m-10 w-100 h-80 flex-col justify-around items-baseline">
          <h2 className="text-5xl py-2 text-teal-600 font-bold">
            Phạm Nhật Quang
          </h2>
          <h3 className="text-2xl py-2">Front-end Developer</h3>
          <p className="text-md py-5 leading-5 text-gray-800">
            I would like to work in a Front-End position so that I can apply my
            learned knowledge and skills to my work. I hope that the working
            environment at the company will help me enhance myself with more
            experience and skills to develop myself to the best of my ability.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-black-600">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>

        <div className="bg-gradient-to-b from-teal-500 rounded-full m-10 mx-auto w-80 h-80 overflow-hidden flex justify-between">
          <img className="object-cover w-full h-full " src={avatar}></img>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-3xl py-1">Service I offer</h3>
        <p className="text-xl italic py-2 leading-8 text-gray-800">
          I've worked on-site in Front-end position
        </p>
      </div>
      <div className="flex justify-center  gap-10">
        <div className="text-center bg-indigo-200 shadow-lg p-10 rounded-xl my-10 hover:scale-110 hover:bg-indigo-400">
          <img
            src={tool}
            style={{ width: 120, height: 100, borderRadius: "50%" }}
          />
          <h3 className="py-4 text-teal-600 text-xl font-medium">
            Tools I use
          </h3>
          <p className="italic text-gray-800 py-1">ReactJS</p>
          <p className="italic text-gray-800 py-1">HTML</p>
          <p className="italic text-gray-800 py-1">CSS</p>
          <p className="italic text-gray-800 py-1">JavaScript</p>
        </div>
        <div className="text-center bg-indigo-200 shadow-lg p-10 rounded-xl my-10 hover:scale-110 hover:bg-indigo-400">
          <img
            src={benefit}
            style={{ width: 120, height: 100, borderRadius: "50%" }}
          />
          <h3 className="py-4 text-teal-600 text-xl font-medium">Benefits</h3>
          <p className="italic text-gray-800 py-1">Hardworking</p>
          <p className="italic text-gray-800 py-1">Creative</p>
          <p className="italic text-gray-800 py-1">Teamwork</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
