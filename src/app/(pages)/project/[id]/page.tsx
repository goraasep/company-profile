import ClientProvider from "@/providers/ClientProvider";
import { FC } from "react";
import Project from "./components/Project";
type Props = {
  params: {
    id: string;
  };
};
const ProjectPage: FC<Props> = ({ params }) => {
  return (
    <div className="bg-light-cyan">
      <div className="px-5 md:px-20 flex flex-col gap-10 pt-10">
        <h1 className="text-3xl font-bold underline">Project / {params.id}</h1>
      </div>
      <div className="px-5 md:px-20 flex flex-col justify-center items-start gap-10 py-10">
        <ClientProvider>
          <Project id={params.id} />
        </ClientProvider>
      </div>
    </div>
  );
};
export default ProjectPage;
