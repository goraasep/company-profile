"use client";
import useServices from "@/hooks/useServices";
import truncateText from "@/utils/truncateText";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Spinner } from "@material-tailwind/react";
import Link from "next/link";
import { FC, useState } from "react";
library.add(fas);
library.add(fab);
const Services: FC = () => {
  const { isLoading, error, services } = useServices();
  const [count, setCount] = useState(2);
  if (isLoading)
    return (
      <div className="h-[100vh] lg:h-[50vh] flex items-center justify-center m-0 p-0">
        <Spinner />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;
  if (!services) return null;
  const loadMore = () => {
    setCount((prev) => prev + 2);
  };
  return (
    <>
      <div className="px-5 md:px-20 grid grid-cols-1 xl:grid-cols-2  gap-10 py-10">
        {services.slice(0, count).map((service) => (
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
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pb-10">
        <Button
          className={`${count < services.length ? "" : "hidden"}`}
          onClick={loadMore}
        >
          Load More
        </Button>
      </div>
    </>
  );
};
export default Services;
