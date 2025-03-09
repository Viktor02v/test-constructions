import { useQuery } from "@tanstack/vue-query";
import { type News } from "@/types/app.types";
import { useGetNews } from "./useGetNews"; 

export function useGetPopular() {
  const { data: news, isSuccess: isNewsSuccess } = useGetNews();

  return useQuery({
    queryKey: ['get-popular'],
    queryFn: () => {
      if (!news.value) return [];
      return news.value.filter((item) => item.views > 20000) as News[];
    },
    enabled: isNewsSuccess,
  });
}