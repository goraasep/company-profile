import ClientProvider from "@/providers/ClientProvider";
import { FC } from "react";
import Service from "./components/service";
interface Props {
  params: {
    id: string;
  };
}
const ServicePage: FC<Props> = ({ params }) => {
  return (
    <div className="bg-light-cyan">
      <div className="px-5 md:px-20 flex flex-col gap-10 pt-10">
        <h1 className="text-3xl font-bold underline">Service / {params.id}</h1>
      </div>
      <div className="px-5 md:px-20 py-10">
        <ClientProvider>
          <Service id={params.id} />
        </ClientProvider>
      </div>
    </div>
  );
};

export default ServicePage;
