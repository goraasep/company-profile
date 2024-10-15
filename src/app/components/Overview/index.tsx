"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Overview as OverviewType } from "@/constant/types";
import axios from "axios";
import Link from "next/link";
const Overview: FC = () => {
  const [overview, setOverview] = useState<OverviewType>();
  const [loading, setLoading] = useState(true);
  const fetchOverview = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}overview`
      );
      setOverview(data as OverviewType);
    } catch {
      console.log("Error fetching overview");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOverview();
  }, []);
  if (loading || !overview?.imageUrl) {
    return <div>Loading ....</div>;
  }

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
