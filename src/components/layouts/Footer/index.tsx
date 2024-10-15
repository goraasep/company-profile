"use client";
import Link from "next/link";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faLocationDot,
  faPhone,
  faEnvelope,
  IconName,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

import { library } from "@fortawesome/fontawesome-svg-core";
import useContact from "@/hooks/useContact";
library.add(fab);
library.add(fas);
const Footer: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;
  return (
    <div className="bg-black text-white px-20 py-10 flex flex-col gap-10">
      <div className="lg:grid lg:grid-cols-5 gap-10">
        <div className="col-span-2 ">
          <div className="flex gap-5 items-center">
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
          <p className="py-5">{contact.description}</p>
        </div>
        <div className="flex lg:items-center flex-col">
          <div className="text-light-purple">Short Links</div>
          <div className="flex flex-col gap-2 py-5 items-start">
            <div className="flex gap-2 items-center justify-start">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faCaretRight}
              />
              <Link className=" hover:text-light-purple" href="/">
                Home
              </Link>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faCaretRight}
              />
              <Link className=" hover:text-light-purple" href="/">
                About
              </Link>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faCaretRight}
              />
              <Link className=" hover:text-light-purple" href="/">
                Service
              </Link>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faCaretRight}
              />
              <Link className=" hover:text-light-purple" href="/">
                Project
              </Link>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faCaretRight}
              />
              <Link className=" hover:text-light-purple" href="/">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:items-center flex-col">
          <div className="text-light-purple">Socials</div>
          <div className="flex flex-col gap-2 py-5 items-start">
            {contact.socials.map((social, index) => (
              <Link
                key={index}
                className=" hover:text-light-purple flex gap-2 items-center justify-start"
                href="/"
              >
                <FontAwesomeIcon
                  className="w-[20px] h-[20px] text-light-purple"
                  icon={["fab", social.icon as IconName]}
                />
                {social.text}
              </Link>
            ))}
            {/* <Link
              className=" hover:text-light-purple flex gap-2 items-center justify-start"
              href="/"
            >
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faLinkedin}
              />
              LinkedIn
            </Link>
            <Link
              className=" hover:text-light-purple flex gap-2 items-center justify-start"
              href="/"
            >
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faFacebook}
              />
              Facebook
            </Link>
            <Link
              className=" hover:text-light-purple flex gap-2 items-center justify-start"
              href="/"
            >
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faSquareXTwitter}
              />
              X
            </Link>
            <Link
              className=" hover:text-light-purple flex gap-2 items-center justify-start"
              href="/"
            >
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple"
                icon={faInstagram}
              />
              Instagram
            </Link> */}
          </div>
        </div>

        <div className="flex lg:items-center flex-col ">
          <div className="text-light-purple">Contact Us</div>
          <div className="flex flex-col gap-2 py-5 items-start ">
            <div className="flex gap-5 items-center justify-start w-full">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-light-purple shrink-0"
                icon={faLocationDot}
              />
              <div className="text-justify">
                Jl. Imajinasi No. 123, Kec. Cimanggis, Kota Depok, Jawa Barat.
              </div>
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
        </div>
      </div>
      <hr className="bg-white" />
      <div>
        <span>
          © {new Date().getFullYear()} {contact.companyName},{" "}
        </span>
        <span className="text-light-blue">All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
