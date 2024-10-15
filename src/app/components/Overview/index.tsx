"use client";
import { FC } from "react";
import Image from "next/image";

import Link from "next/link";
import useOverview from "@/hooks/useOverview";
const Overview: FC = () => {
  const { isLoading, error, overview } = useOverview();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!overview) return null;
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div className="flex justify-center">
        <Image
          src={overview.imageUrl}
          alt="image 3"
          className="h-full w-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <div>
        <div className="text-light-purple text-xl font-bold text-center">
          Overview
        </div>
        <div className=" text-4xl font-bold text-center">{overview.title}</div>
        <div className="py-4 text-justify">{overview.text}</div>
        <Link href="/about">
          <button className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 text-light-cyan font-medium">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Overview;
