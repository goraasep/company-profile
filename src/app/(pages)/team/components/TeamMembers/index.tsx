"use client";
import useTeamRandom from "@/hooks/useTeamRandom";
import randomRole from "@/utils/randomRole";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { FC } from "react";
library.add(fab);
const TeamMembers: FC = () => {
  const { isLoading, error, teamRandom } = useTeamRandom();
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!teamRandom || teamRandom.length === 0) return null;
  return (
    <>
      {teamRandom.map((member, index) => (
        <div
          key={index}
          className="shadow-xl flex flex-col  items-center justify-start p-10 rounded-lg gap-5 xl:gap-10 bg-white max-w-full "
        >
          <div className="bg-light-purple rounded-full p-1">
            <Image
              src={
                member.picture.large
                  ? member.picture.large
                  : "/images/default-profile.jpg"
              }
              alt="image 1"
              width={250}
              height={250}
              className="max-w-[250px] max-h-[250px] aspect-square object-cover rounded-full border-8 border-light-blue"
            />
          </div>
          <div className="">
            <div className="font-bold text-xl text-center">
              {`${member.name.title} ${member.name.first} ${member.name.last}`}
            </div>
            <div className="text-gray-500 text-center">{randomRole()}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-3 text-gray-500">
              <div>Address : </div>
              <div className="col-span-2 text-end">
                {`${member.location.street.name} ${member.location.street.number}, ${member.location.city}, ${member.location.country}`}
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 text-gray-500">
              <div>Phone : </div>
              <div className="col-span-2 text-end">{member.cell}</div>
            </div>
            <hr />
            <div className="grid grid-cols-3  text-gray-500">
              <div>Email : </div>
              <div className="col-span-2 text-end">{member.email}</div>
            </div>
            <hr />
            <div className="grid grid-cols-3 text-gray-500">
              <div>Birthdate : </div>
              <div className="col-span-2 text-end">{member.dob.date}</div>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </>
  );
};
export default TeamMembers;
