"use client";

import useContact from "@/hooks/useContact";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { FC } from "react";

export const ContactImage: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) {
    return <Spinner />;
  }

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;

  return (
    <>
      <Image src={contact.logoUrl} alt="logo" width={50} height={50}></Image>
    </>
  );
};
export const ContactTitle: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) {
    return <Spinner />;
  }

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;

  return (
    <>
      <span>{contact.companyName}</span>
    </>
  );
};
export const ContactDescription: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) {
    return <Spinner />;
  }

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;

  return (
    <>
      <span>{contact.description}</span>
    </>
  );
};

export const ContactAddress: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) {
    return <Spinner />;
  }

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;

  return (
    <>
      <span>{contact.address}</span>
    </>
  );
};

export const ContactEmail: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) {
    return <Spinner />;
  }

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;

  return (
    <>
      <span>{contact.email}</span>
    </>
  );
};

export const ContactPhone: FC = () => {
  const { isLoading, error, contact } = useContact();
  if (isLoading) {
    return <Spinner />;
  }

  if (error) return "An error has occurred: " + error.message;
  if (!contact) return null;

  return (
    <>
      <span>{contact.phone}</span>
    </>
  );
};
