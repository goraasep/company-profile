import { Project } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

const fetchProjects = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}projects`
  );
  return data as Project[];
};
const useProjects = (id?: number) => {
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
  const singleProject: Project | null = useMemo(() => {
    if (!projects) return null;
    return projects.find((obj) => obj.id == id) as Project;
  }, [projects, id]);
  return {
    isLoading,
    error,
    projects,
    singleProject,
  };
};
export default useProjects;
