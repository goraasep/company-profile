"use client";
import useAbout from "@/hooks/useAbout";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { FC, useState } from "react";

export const History: FC = () => {
  const { isLoading, error, about } = useAbout();
  const [showHistory, setShowHistory] = useState(false);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!about || !about.history) return null;
  const loadMore = () => {
    setShowHistory(true);
  };
  return (
    <>
      {showHistory &&
        about.history.map((history) => (
          <div key={history.year} className=" p-5 bg-white rounded-xl w-full">
            <div className="underline font-bold text-center">
              {history.year}
            </div>
            <div className="indent-10 text-center">{history.text}</div>
          </div>
        ))}
      <div className="flex justify-center">
        <Button className={`${showHistory ? "hidden" : ""}`} onClick={loadMore}>
          Read History
        </Button>
      </div>
    </>
  );
};

export const HistoryTitle: FC = () => {
  const { isLoading, error, about } = useAbout();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!about) return null;
  return (
    <>
      <div className=" text-4xl font-bold text-center">{about.title}</div>
    </>
  );
};

export const HistoryDescription: FC = () => {
  const { isLoading, error, about } = useAbout();
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!about) return null;
  return <>{about.description}</>;
};

export const HistoryImage: FC = () => {
  const { isLoading, error, about } = useAbout();
  if (isLoading)
    return <Image src="" alt="about" width={800} height={800} priority />;

  if (error) return "An error has occurred: " + error.message;
  if (!about) return null;
  return (
    <Image src={about.imageUrl} alt="about" width={800} height={800} priority />
  );
};
