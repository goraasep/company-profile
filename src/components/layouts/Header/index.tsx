"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import {
  faAddressCard,
  faBars,
  faDiagramProject,
  faHome,
  faInfo,
  faPeopleGroup,
  faPhoneVolume,
  faScrewdriverWrench,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useContact from "@/hooks/useContact";

import { Typography, IconButton, Collapse } from "@material-tailwind/react";

const Header: FC = () => {
  const pathname = usePathname();
  const { error, contact } = useContact();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col items-center justify-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6 text-light-cyan text-center">
      <Link
        className={`${
          pathname === "/" ? "text-light-purple" : "hover:text-light-purple "
        } flex gap-1 items-baseline`}
        href="/"
      >
        <FontAwesomeIcon icon={faHome} />
        <Typography>Home</Typography>
      </Link>
      <Link
        className={`${
          pathname === "/about"
            ? "text-light-purple"
            : "hover:text-light-purple"
        } flex gap-1 items-baseline`}
        href="/about"
      >
        <FontAwesomeIcon icon={faInfo} />
        <Typography>About</Typography>
      </Link>
      <Link
        className={`${
          pathname === "/service"
            ? "text-light-purple"
            : "hover:text-light-purple"
        } flex gap-1 items-baseline`}
        href="/service"
      >
        <FontAwesomeIcon icon={faScrewdriverWrench} />
        <Typography>Service</Typography>
      </Link>
      <Link
        className={`${
          pathname === "/project"
            ? "text-light-purple"
            : "hover:text-light-purple"
        } flex gap-1 items-baseline`}
        href="/project"
      >
        <FontAwesomeIcon icon={faDiagramProject} />
        <Typography>Project</Typography>
      </Link>
      <Link
        className={`${
          pathname === "/team" ? "text-light-purple" : "hover:text-light-purple"
        } flex gap-1 items-baseline`}
        href="/team"
      >
        <FontAwesomeIcon icon={faPeopleGroup} />
        <Typography>Team</Typography>
      </Link>
      <Link
        className={`${
          pathname === "/contact"
            ? "text-light-purple"
            : "hover:text-light-purple"
        } flex gap-1 items-baseline`}
        href="/contact"
      >
        <FontAwesomeIcon icon={faAddressCard} />
        <Typography>Contact</Typography>
      </Link>
    </ul>
  );
  // if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;

  return (
    <>
      <div className=" mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium flex gap-5 items-center"
        >
          <Image
            src={contact.logoUrl}
            alt="logo"
            width={50}
            height={50}
          ></Image>
          <div className=" text-light-cyan font-bold text-xl lg:text-4xl  ">
            {contact.companyName}
          </div>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden xl:visible col-1 xl:flex justify-end">
          <div className="flex justify-center w-60 gap-4 items-end">
            <FontAwesomeIcon
              className="w-[30px] h-[30px] text-light-cyan animate-bounce"
              icon={faPhoneVolume}
            />
            <div>
              <div className="text-gray-200">Have any questions?</div>
              <div className="text-green-contrast font-bold">
                Call: {contact.phone}
              </div>
            </div>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </>
  );
};

export default Header;
