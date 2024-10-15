import { Hero } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHeroes = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}hero`
  );
  return data as Hero[];
};

const useHero = () => {
  const {
    isLoading,
    error,
    data: heroes,
  } = useQuery({
    queryKey: ["fetchHeroes"],
    queryFn: async () => fetchHeroes(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    heroes,
  };
};
export default useHero;
