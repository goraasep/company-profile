import {
  faArrowUpRightFromSquare,
  faCode,
  faDesktop,
  faDna,
  faFileCode,
  faIndustry,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Services: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-light-purple text-xl font-bold text-center">
        Our Services
      </div>
      <div className=" text-4xl font-bold text-center ">
        Services Built Specifically For Your Business
      </div>
      <div className="py-10 grid md:grid-cols-3 gap-10">
        <div className="h-60 bg-white shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4  hover:bg-light-purple transition duration-500 ease-in-out group">
          <FontAwesomeIcon
            className="text-light-purple group-hover:text-white transition duration-500 ease-in-out"
            icon={faCode}
          />
          <div className="font-bold text-center">Web Design</div>
          <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-5 py-2 text-light-cyan font-medium">
            Details
          </button>
        </div>
        <div className="h-60 bg-white shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4  hover:bg-light-purple transition duration-500 ease-in-out group">
          <FontAwesomeIcon
            className="text-light-purple group-hover:text-white transition duration-500 ease-in-out"
            icon={faFileCode}
          />
          <div className="font-bold text-center">Web Development</div>
          <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-5 py-2 text-light-cyan font-medium">
            Details
          </button>
        </div>
        <div className="h-60 bg-white shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4  hover:bg-light-purple transition duration-500 ease-in-out group">
          <FontAwesomeIcon
            className="text-light-purple group-hover:text-white transition duration-500 ease-in-out"
            icon={faWifi}
          />
          <div className="font-bold text-center">Internet Of Things</div>
          <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-5 py-2 text-light-cyan font-medium">
            Details
          </button>
        </div>
        <div className="h-60 bg-white shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4  hover:bg-light-purple transition duration-500 ease-in-out group">
          <FontAwesomeIcon
            className="text-light-purple group-hover:text-white transition duration-500 ease-in-out"
            icon={faIndustry}
          />
          <div className="font-bold text-center">Digital Integration</div>
          <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-5 py-2 text-light-cyan font-medium">
            Details
          </button>
        </div>
        <div className="h-60 bg-white shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4  hover:bg-light-purple transition duration-500 ease-in-out group">
          <FontAwesomeIcon
            className="text-light-purple group-hover:text-white transition duration-500 ease-in-out"
            icon={faDesktop}
          />
          <div className="font-bold text-center">Site Monitoring</div>
          <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-5 py-2 text-light-cyan font-medium">
            Details
          </button>
        </div>
        <div className="h-60 bg-white shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4  hover:bg-light-purple transition duration-500 ease-in-out group">
          <FontAwesomeIcon
            className="text-light-purple group-hover:text-white transition duration-500 ease-in-out"
            icon={faDna}
          />
          <div className="font-bold text-center">Custom Solution</div>
          <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-5 py-2 text-light-cyan font-medium">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
