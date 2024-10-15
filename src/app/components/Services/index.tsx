"use client";
import useServices from "@/hooks/useServices";
import { library } from "@fortawesome/fontawesome-svg-core";
import { IconName, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
library.add(fas);
const Services: FC = () => {
  const { isLoading, error, services } = useServices();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!services || services.length === 0) return null;
  return (
    <div className="flex flex-col items-center">
      <div className="text-light-purple text-xl font-bold text-center">
        Our Services
      </div>
      <div className=" text-4xl font-bold text-center ">
        Services Built Specifically For Your Business
      </div>
      <div className="py-10 gap-10 flex justify-center items-center flex-wrap lg:px-40">
        {services.map((service) => (
          <div
            key={service.id}
            className="h-60 w-full md:w-1/4 bg-white shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4  hover:bg-light-purple transition duration-500 ease-in-out group"
          >
            <FontAwesomeIcon
              className="text-light-purple group-hover:text-white transition duration-500 ease-in-out w-[100px] h-[100px] "
              icon={["fas", service.icon as IconName]}
            />
            <div className="font-bold text-center">{service.title}</div>
            <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-5 py-2 text-light-cyan font-medium">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
