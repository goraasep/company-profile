"use client";
import useContact from "@/hooks/useContact";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Spinner } from "@material-tailwind/react";
library.add(fab);
library.add(fas);
const SocialsLink: FC = () => {
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
    </>
  );
};
export default SocialsLink;
