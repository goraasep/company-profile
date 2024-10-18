"use client";
import useContact from "@/hooks/useContact";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@material-tailwind/react";
import { FC } from "react";

const ContactFooter: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading)
    return (
      <div className="flex items-center justify-center m-0 p-0">
        <Spinner />
      </div>
    );
  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;
  return (
    <>
      <div className="flex flex-col gap-2 py-5 items-start ">
        <div className="flex gap-5 items-center justify-start w-full">
          <FontAwesomeIcon
            className="w-[20px] h-[20px] text-light-purple shrink-0"
            icon={faLocationDot}
          />
          <div className="text-justify">{contact.address}</div>
        </div>
        <hr className="bg-white w-full" />
        <div className="flex gap-5 items-center justify-start">
          <FontAwesomeIcon
            className="w-[20px] h-[20px] text-light-purple  shrink-0"
            icon={faPhone}
          />
          <div>{contact.phone}</div>
        </div>
        <hr className="bg-white w-full" />
        <div className="flex gap-5 items-center justify-start">
          <FontAwesomeIcon
            className="w-[20px] h-[20px] text-light-purple  shrink-0"
            icon={faEnvelope}
          />
          <div>{contact.email}</div>
        </div>
        <hr className="bg-white w-full" />
      </div>
    </>
  );
};
export default ContactFooter;
