import ClientProvider from "@/providers/ClientProvider";
import { FC } from "react";
import TeamMembers from "./components/TeamMembers";
const Team: FC = () => {
  return (
    <div className="bg-light-cyan">
      <div className="px-5 md:px-20 flex flex-col gap-10 pt-10">
        <h1 className="text-3xl font-bold underline">Team</h1>
      </div>
      <div className="px-5 md:px-20 grid grid-cols-1 xl:grid-cols-3 gap-10 py-10">
        <ClientProvider>
          <TeamMembers />
        </ClientProvider>
      </div>
    </div>
  );
};
export default Team;
