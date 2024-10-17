import ClientProvider from "@/providers/ClientProvider";
import { FC } from "react";
import Services from "./components/Services";

const Service: FC = () => {
  return (
    <div className="bg-light-cyan">
      <div className="px-5 md:px-20 flex flex-col gap-10 pt-10">
        <h1 className="text-3xl font-bold underline">Service</h1>
      </div>
      <ClientProvider>
        <Services />
      </ClientProvider>
    </div>
  );
};
export default Service;
