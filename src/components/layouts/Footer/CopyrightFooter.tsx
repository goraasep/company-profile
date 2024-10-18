"use client";
import useContact from "@/hooks/useContact";
import { Spinner } from "@material-tailwind/react";
import { FC } from "react";

const CopyrightFooter: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) return <Spinner />;
  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;
  return (
    <span>
      © {new Date().getFullYear()} {contact.companyName},{" "}
    </span>
  );
};
export default CopyrightFooter;
