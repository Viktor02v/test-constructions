import { DB_ID,COLLECTION_NEWS } from "~/app.constants";
import { useQuery } from "@tanstack/vue-query";
import { DB } from "@/lib/appwrite";
import {type News} from "@/types/app.types";

export function useGetNews() {
  return useQuery({
		queryKey: ['get-news'],
		queryFn: async () => {
			const response = await DB.listDocuments(DB_ID, COLLECTION_NEWS);
			return response.documents as unknown as News[];
		},
		select(data) {
			const news = data as unknown as News[];
			return news;
		},
	});
}