import { ref, computed } from 'vue'
import { useGetNews } from '@/composables/useGetNews'

export function usePaginatedPages () {

const { data: news, isPending: loading } = useGetNews()

const currentPage = ref(1)
const itemsPerPage = 6 // Number of cards to display per page

// Calculate the subset of news to display
const paginatedNews = computed(() => {
  if (!news.value) return []
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return news.value.slice(start, end)
})

// Total number of pages
const totalPages = computed(() => {
  if (!news.value) return 0
  return Math.ceil(news.value.length / itemsPerPage)
})

// Navigate to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// Navigate to the previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

return {
  currentPage,
  itemsPerPage,
  paginatedNews,
  totalPages,
  nextPage,
  prevPage,
  loading
}
}