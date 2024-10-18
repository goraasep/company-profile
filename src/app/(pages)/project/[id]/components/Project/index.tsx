"use client";
import useProjects from "@/hooks/useProjects";
import { Carousel, Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
  id: string;
}
const Project: FC<Props> = ({ id }) => {
  const { isLoading, error, singleProject } = useProjects(parseInt(id));
  if (isLoading)
    return (
      <div className="h-[100vh] lg:h-[50vh] flex items-center justify-center m-0 p-0">
        <Spinner />
      </div>
    );
  if (error) return "An error has occurred: " + error.message;
  if (!singleProject) return null;

  return (
    <div className="flex flex-col xl:flex-row gap-10 items-center bg-white p-5 rounded-2xl w-full shadow-xl">
      <Carousel loop className="rounded-xl max-w-[500px] max-h-[300px]">
        {singleProject.images.map((image, index) => (
          <Image
            key={index}
            src={image.imageUrl}
            alt="image 1"
            width={500}
            height={300}
            className="max-w-[500px] max-h-[300px] object-cover aspect-square"
            loading="lazy"
          />
        ))}
      </Carousel>
      <div className="flex flex-col items-start gap-4">
        <div className="font-bold text-3xl">{singleProject.title}</div>
        <div>{singleProject.text}</div>
      </div>
    </div>
  );
};

export default Project;
