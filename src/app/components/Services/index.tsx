"use client";
import { Service } from "@/constant/types";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUpRightFromSquare,
  faCode,
  faDesktop,
  faDna,
  faFileCode,
  faIndustry,
  faWifi,
  IconName,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FC, useEffect, useState } from "react";
library.add(fas);
const Services: FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const fetchServices = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}services`
    );
    // console.log(data);
    setServices(data as Service[]);
  };
  useEffect(() => {
    fetchServices();
  }, []);
  if (services.length === 0) {
    return <div>Loading ....</div>;
  }
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
