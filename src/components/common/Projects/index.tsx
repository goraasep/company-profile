import Image from "next/image";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-light-purple text-xl font-bold">Our Projects</div>
      <div className=" text-4xl font-bold ">
        Our Recently Completed Projects
      </div>
      <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="w-[300px] h-[300px] p-5 group">
          <div className="relative w-full h-full">
            <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
            <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
            <Image
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className=" absolute z-20 w-full h-full object-cover"
              width={384}
              height={384}
              unoptimized
            />
            <div className="hidden group-hover:visible  absolute z-30 w-full h-full group-hover:flex justify-center items-center ">
              <div className="flex flex-col gap-2 bg-gradient-to-r from-light-blue to-light-purple rounded-lg px-5 py-2">
                <div className=" text-md font-small text-light-cyan">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[300px] p-5 group">
          <div className="relative w-full h-full">
            <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
            <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
            <Image
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className=" absolute z-20 w-full h-full object-cover"
              width={384}
              height={384}
              unoptimized
            />
            <div className="hidden group-hover:visible  absolute z-30 w-full h-full group-hover:flex justify-center items-center ">
              <div className="flex flex-col gap-2 bg-gradient-to-r from-light-blue to-light-purple rounded-lg px-5 py-2">
                <div className=" text-md font-small text-light-cyan">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[300px] p-5 group">
          <div className="relative w-full h-full">
            <div className="h-40 w-40 bg-light-blue rounded-lg absolute -top-5 -left-5"></div>
            <div className="h-40 w-40 bg-light-purple rounded-lg absolute -bottom-5 -right-5"></div>
            <Image
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className=" absolute z-20 w-full h-full object-cover"
              width={384}
              height={384}
              unoptimized
            />
            <div className="hidden group-hover:visible  absolute z-30 w-full h-full group-hover:flex justify-center items-center ">
              <div className="flex flex-col gap-2 bg-gradient-to-r from-light-blue to-light-purple rounded-lg px-5 py-2">
                <div className=" text-md font-small text-light-cyan">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
