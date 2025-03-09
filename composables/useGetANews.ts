import { useGetNews } from '@/composables/useGetNews';
import type { News } from '@/types/app.types';
import { computed } from 'vue';

export function useGetANews(itemId: string) {
  
  const { data: news, isLoading, isError } = useGetNews();
  
  const newsItem = computed(() => {
    if (!news.value) return undefined; 
    return news.value.find((item: News) => item.$id === itemId);
  });

  return { newsItem, isLoading, isError };
}