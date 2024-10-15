"use client";
import useContact from "@/hooks/useContact";
import { FC } from "react";

const CopyrightFooter: FC = () => {
  const { error, contact } = useContact();
  // if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;
  return (
    <span>
      © {new Date().getFullYear()} {contact.companyName},{" "}
    </span>
  );
};
export default CopyrightFooter;
