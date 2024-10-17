import { TeamMemberRandom } from "@/constant/typesRandom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTeamRandom = async () => {
  const { data } = await axios.get(`https://randomuser.me/api/?results=3`);
  return data.results as TeamMemberRandom[];
};

const useTeamRandom = () => {
  const {
    isLoading,
    error,
    data: teamRandom,
  } = useQuery({
    queryKey: ["fetchTeamRandom"],
    queryFn: async () => fetchTeamRandom(),
  });
  return {
    isLoading,
    error,
    teamRandom,
  };
};
export default useTeamRandom;
