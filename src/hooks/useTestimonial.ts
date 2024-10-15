import { Testimonial } from "@/constant/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTestimonial = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}testimonial`
  );
  return data as Testimonial[];
};

const useTestimonial = () => {
  const {
    isLoading,
    error,
    data: testimonial,
  } = useQuery({
    queryKey: ["fetchTestimonial"],
    queryFn: async () => fetchTestimonial(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    isLoading,
    error,
    testimonial,
  };
};
export default useTestimonial;
