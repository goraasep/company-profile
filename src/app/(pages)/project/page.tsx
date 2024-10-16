import Projects from "./components/Projects";
import ClientProvider from "@/providers/ClientProvider";
import { FC } from "react";

const Project: FC = () => {
  return (
    <div className="bg-light-cyan">
      <div className="px-5 md:px-20 flex flex-col gap-10 pt-10">
        <h1 className="text-3xl font-bold underline">Project</h1>
      </div>
      <div className="px-5 md:px-20 flex flex-col justify-center items-start gap-10 py-10">
        <ClientProvider>
          <Projects />
        </ClientProvider>
      </div>
    </div>
  );
};
export default Project;
