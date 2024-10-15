import { Team } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTeam = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}team`
  );
  return data as Team[];
};

const useTeam = () => {
  const {
    isLoading,
    error,
    data: team,
  } = useQuery({
    queryKey: ["fetchTeam"],
    queryFn: async () => fetchTeam(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    team,
  };
};
export default useTeam;
