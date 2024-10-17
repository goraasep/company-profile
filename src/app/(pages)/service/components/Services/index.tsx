"use client";
import useServices from "@/hooks/useServices";
import truncateText from "@/utils/truncateText";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";
library.add(fas);
library.add(fab);
const Services: FC = () => {
  const { isLoading, error, services } = useServices();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!services) return null;
  return (
    <>
      {services.map((service) => (
        <div
          className="flex flex-col md:flex-row gap-10 items-center bg-white p-5 rounded-2xl w-full shadow-xl"
          key={service.id}
        >
          <div>
            <FontAwesomeIcon
              icon={[
                "fas",
                service.icon ? (service.icon as IconName) : "wrench",
              ]}
              className="h-20 w-20 md:h-40 md:w-40 text-light-purple"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="font-bold text-3xl">{service.title}</div>
            <div>{truncateText(service.text, 30)}</div>
            <Link href={`/service/${service.id}`}>
              <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 text-light-cyan font-medium">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default Services;
