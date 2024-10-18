"use client";

import useServices from "@/hooks/useServices";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@material-tailwind/react";

import { FC } from "react";
library.add(fas);
interface Props {
  id: string;
}
const Service: FC<Props> = ({ id }) => {
  const { isLoading, error, singleService } = useServices(parseInt(id));
  if (isLoading)
    return (
      <div className="h-[100vh] lg:h-[50vh] flex items-center justify-center m-0 p-0">
        <Spinner />
      </div>
    );
  if (error) return "An error has occurred: " + error.message;
  if (!singleService) return null;

  return (
    <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-5 rounded-2xl w-full shadow-xl">
      <div>
        <FontAwesomeIcon
          icon={[
            "fas",
            singleService.icon ? (singleService.icon as IconName) : "wrench",
          ]}
          className="h-20 w-20 md:h-40 md:w-40 text-light-purple"
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="font-bold text-3xl">{singleService.title}</div>
        <div>{singleService.text}</div>
      </div>
    </div>
  );
};

export default Service;
