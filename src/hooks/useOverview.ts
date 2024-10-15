import { Overview } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchOverview = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}overview`
  );
  return data as Overview;
};

const useOverview = () => {
  const {
    isLoading,
    error,
    data: overview,
  } = useQuery({
    queryKey: ["fetchOverview"],
    queryFn: async () => fetchOverview(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    overview,
  };
};
export default useOverview;
