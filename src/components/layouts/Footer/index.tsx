import Link from "next/link";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import ImageFooter from "./ImageFooter";
import SocialsLink from "./SocialsLink";
import ContactFooter from "./ContactFooter";
import CopyrightFooter from "./CopyrightFooter";
import ClientProvider from "@/providers/ClientProvider";

const Footer: FC = () => {
  return (
    <div className="bg-black text-white px-20 py-10 flex flex-col gap-10">
      <div className="lg:grid lg:grid-cols-5 gap-10">
        <div className="col-span-2 ">
          <ClientProvider>
            <ImageFooter />
          </ClientProvider>
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
            <ClientProvider>
              <SocialsLink />
            </ClientProvider>
          </div>
        </div>

        <div className="flex lg:items-center flex-col ">
          <div className="text-light-purple">Contact Us</div>

          <ClientProvider>
            <ContactFooter />
          </ClientProvider>
        </div>
      </div>
      <hr className="bg-white" />
      <div>
        <ClientProvider>
          <CopyrightFooter />
        </ClientProvider>
        <span className="text-light-blue">All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
