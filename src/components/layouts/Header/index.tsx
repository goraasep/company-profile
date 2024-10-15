"use client";
import Link from "next/link";
import { FC } from "react";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import useContact from "@/hooks/useContact";

const Header: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;
  return (
    <div className="flex justify-center bg-gradient-to-r from-light-blue to-light-purple items-center px-20 h-16">
      <div className="grid grid-cols-4 w-full">
        <div className="col-1 flex gap-5 items-center">
          <Image
            src={contact.logoUrl}
            alt="logo"
            width={50}
            height={50}
          ></Image>
          <div className="text-light-cyan font-bold text-4xl">
            {contact.companyName}
          </div>
        </div>

        <div className="hidden xl:visible col-span-2 xl:flex justify-center gap-10 font-semibold text-light-cyan items-center">
          <Link className=" hover:text-light-purple" href="/">
            Home
          </Link>
          <Link className=" hover:text-light-purple" href="/">
            About
          </Link>
          <Link className=" hover:text-light-purple" href="/">
            Service
          </Link>
          <Link className=" hover:text-light-purple" href="/">
            Project
          </Link>
          <Link className=" hover:text-light-purple" href="/">
            Contact
          </Link>
        </div>
        <div className="hidden xl:visible col-1 xl:flex justify-end">
          <div className="flex justify-center w-60 gap-4 items-end">
            <FontAwesomeIcon
              className="w-[30px] h-[30px] text-light-cyan animate-bounce"
              icon={faPhoneVolume}
            />
            {/* <FontAwesomeIcon className="w-[40px] h-[40px]" icon={faGripLines} /> */}
            <div>
              <div className="text-gray-200">Have any questions?</div>
              <div className="text-green-contrast font-bold">
                Call: {contact.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
