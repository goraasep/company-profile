import { About } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchContact = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}about`
  );
  return data as About;
};

const useAbout = () => {
  const {
    isLoading,
    error,
    data: about,
  } = useQuery({
    queryKey: ["fetchAbout"],
    queryFn: async () => fetchContact(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    about,
  };
};
export default useAbout;
