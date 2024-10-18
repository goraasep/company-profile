import { Contact } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchContact = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}contact`
  );
  return data as Contact;
};

const useContact = () => {
  const {
    isLoading,
    error,
    data: contact,
  } = useQuery({
    queryKey: ["fetchContact"],
    queryFn: async () => fetchContact(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    contact,
  };
};
export default useContact;
