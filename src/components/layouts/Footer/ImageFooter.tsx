"use client";
import useContact from "@/hooks/useContact";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { FC } from "react";

const ImageFooter: FC = () => {
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
      <div className="flex gap-5 items-center">
        <Image src={contact.logoUrl} alt="logo" width={50} height={50}></Image>
        <div className="text-light-cyan font-bold text-xl lg:text-4xl">
          {contact.companyName}
        </div>
      </div>
      <p className="py-5">{contact.description}</p>
    </>
  );
};
export default ImageFooter;
