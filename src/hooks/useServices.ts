import { Service } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchServices = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}services`
  );
  return data as Service[];
};

const useServices = () => {
  const {
    isLoading,
    error,
    data: services,
  } = useQuery({
    queryKey: ["fetchServices"],
    queryFn: async () => fetchServices(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    services,
  };
};
export default useServices;
