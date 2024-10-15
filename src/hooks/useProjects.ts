import { Project } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProjects = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}projects`
  );
  return data as Project[];
};

const useProjects = () => {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery({
    queryKey: ["fetchProjects"],
    queryFn: async () => fetchProjects(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    projects,
  };
};
export default useProjects;
