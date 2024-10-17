"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Carousel } from "@material-tailwind/react";
import useProjects from "@/hooks/useProjects";
import truncateText from "@/utils/truncateText";
const Projects: FC = () => {
  const { isLoading, error, projects } = useProjects();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!projects) return null;
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col xl:flex-row gap-10 items-center bg-white p-5 rounded-2xl w-full shadow-xl"
        >
          <Carousel loop className="rounded-xl max-w-[500px] max-h-[300px]">
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={image.imageUrl}
                alt="image 1"
                width={500}
                height={300}
                className="max-w-[500px] max-h-[300px] object-cover aspect-square"
              />
            ))}
          </Carousel>
          <div className="flex flex-col items-start gap-4">
            <div className="font-bold text-3xl">{project.title}</div>
            <div>{truncateText(project.text, 30)}</div>
            <Link href={`/project/${project.id}`}>
              <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 text-light-cyan font-medium">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default Projects;
