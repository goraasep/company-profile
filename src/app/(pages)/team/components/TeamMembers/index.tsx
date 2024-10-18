"use client";
import useTeamRandom from "@/hooks/useTeamRandom";
import { formatDate } from "@/utils/formatDate";
import randomRole from "@/utils/randomRole";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Button, Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { FC, useState } from "react";
library.add(fab);
const TeamMembers: FC = () => {
  const { isLoading, error, teamRandom } = useTeamRandom();
  const [count, setCount] = useState(2);
  if (isLoading)
    return (
      <div className="h-[100vh] lg:h-[50vh] flex items-center justify-center m-0 p-0">
        <Spinner />
      </div>
    );
  if (error) return "An error has occurred: " + error.message;
  if (!teamRandom || teamRandom.length === 0) return null;
  const loadMore = () => {
    setCount((prev) => prev + 2);
  };
  return (
    <>
      <div className="px-5 md:px-20 grid grid-cols-1 xl:grid-cols-2  gap-10 py-10">
        {teamRandom.slice(0, count).map((member, index) => (
          <div
            key={index}
            className="flex flex-col gap-10 items-center justify-center bg-white p-10 rounded-2xl w-full shadow-xl"
          >
            <div className="">
              <div className="font-bold text-xl text-center">
                {`${member.name.title} ${member.name.first} ${member.name.last}`}
              </div>
              <div className="text-gray-500 text-center">{randomRole()}</div>
            </div>
            <div className="flex gap-10 items-center flex-col lg:flex-row">
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
                  <div className="col-span-2 text-end break-all">
                    {member.email}
                  </div>
                </div>
                <hr />
                <div className="grid grid-cols-3 text-gray-500">
                  <div>Birthdate : </div>
                  <div className="col-span-2 text-end">
                    {formatDate(member.dob.date)}
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pb-10">
        <Button
          className={`${count < teamRandom.length ? "" : "hidden"} `}
          onClick={loadMore}
        >
          Load More
        </Button>
      </div>
    </>
  );
};
export default TeamMembers;
