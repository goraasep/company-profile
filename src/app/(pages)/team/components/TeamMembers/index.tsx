"use client";
import useTeam from "@/hooks/useTeam";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
library.add(fab);
const TeamMembers: FC = () => {
  const { isLoading, error, team } = useTeam();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!team || team.length === 0) return null;
  return (
    <>
      {team.map((member) => (
        <div
          key={member.id}
          className="shadow-xl flex flex-col  items-center justify-start p-10 rounded-lg gap-10 xl:gap-20 bg-white max-w-full "
        >
          <div className="bg-light-purple rounded-full p-1">
            <Image
              src={
                member.imageUrl
                  ? member.imageUrl
                  : "/images/default-profile.jpg"
              }
              alt="image 1"
              width={250}
              height={250}
              className="max-w-[250px] max-h-[250px] aspect-square object-cover rounded-full border-8 border-light-blue"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-xl">{member.name}</div>
            <div className="text-gray-500">{member.role}</div>
            <div className="grid grid-cols-3 text-gray-500">
              <div>Address : </div>
              <div className="col-span-2 text-end">{member.address}</div>
            </div>
            <hr />
            <div className="grid grid-cols-3 text-gray-500">
              <div>Phone : </div>
              <div className="col-span-2 text-end">{member.phone}</div>
            </div>
            <hr />
            <div className="grid grid-cols-3  text-gray-500">
              <div>Email : </div>
              <div className="col-span-2 text-end">{member.email}</div>
            </div>
            <hr />
            <div className="grid grid-cols-3 text-gray-500">
              <div>Birthdate : </div>
              <div className="col-span-2 text-end">{member.birthdate}</div>
            </div>
            <hr />
            <div className="flex justify-center gap-3 py-5">
              {member.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="text-light-purple w-[30px] h-[30px] text-center"
                >
                  <FontAwesomeIcon
                    className="text-light-purple w-[30px] h-[30px] text-center"
                    icon={["fab", social.icon as IconName]}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default TeamMembers;
