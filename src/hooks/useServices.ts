import { Service } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

const fetchServices = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}services`
  );
  return data as Service[];
};

const useServices = (id?: number) => {
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
  const singleService: Service | null = useMemo(() => {
    if (!services) return null;
    return services.find((obj) => obj.id == id) as Service;
  }, [services, id]);
  return {
    isLoading,
    error,
    services,
    singleService,
  };
};
export default useServices;
