import Team from "@/app/components/Team";
import ClientProvider from "@/providers/ClientProvider";
import { FC } from "react";
import {
  History,
  HistoryDescription,
  HistoryImage,
  HistoryTitle,
} from "./components/History";
const About: FC = () => {
  return (
    <div className="bg-light-cyan">
      <div className="px-5 md:px-20 flex flex-col gap-10 pt-10">
        <h1 className="text-3xl font-bold underline">About</h1>
      </div>
      <div className="px-5 md:px-20 flex flex-col justify-center items-center gap-10 py-10">
        <ClientProvider>
          <HistoryImage />
        </ClientProvider>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-light-purple text-xl font-bold text-center">
          History
        </div>
        <ClientProvider>
          <HistoryTitle />
        </ClientProvider>
      </div>
      <div className="flex flex-col gap-5 xl:px-60 py-10">
        <div className="text-justify indent-10 pb-5 px-5">
          <ClientProvider>
            <HistoryDescription />
          </ClientProvider>
        </div>
        <ClientProvider>
          <History />
        </ClientProvider>
      </div>
      <div className="px-5 md:px-20 flex flex-col gap-10 pb-20">
        <div className="flex flex-col items-center">
          <div className="text-light-purple text-xl font-bold text-center">
            Our Team
          </div>
          <div className=" text-4xl font-bold text-center">
            Meet our expert Team
          </div>
        </div>
        <div className="xl:mx-60">
          <ClientProvider>
            <Team />
          </ClientProvider>
        </div>
      </div>
    </div>
  );
};
export default About;
