<script setup lang="ts">
import { defineProps } from 'vue'
import dayjs from 'dayjs'
import type { News } from '~/types/app.types'

const props = defineProps<{
  id: News['$id']
  title: News['title']
  author: News['author']
  date: News['$createdAt']
  views: News['views']
  foto_url: News['foto_url']
}>()

const hover = ref(false)
</script>

<template>
  <UCard
    class="flex border-none md:hover:scale-105 md:hover:shadow-2xl transition-all duration-300 flex-col min-h-full"
  >
    <template #header>
      <NuxtLink :to="`/item/${props.id}`" class="text-xl underline font-serif">{{ props.title }}</NuxtLink>
    </template>

    <div class="flex flex-col flex-grow">
      <div
        class="relative w-full h-full bg-white"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
      
        <div
          class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"
          :class="{
            'opacity-0': !hover,
            'opacity-100': hover,
          }"
        >
          <NuxtLink
            :to="`/item/${props.id}`"
            class="text-white text-xl font-serif text-center p-2 bg-black bg-opacity-50 rounded-lg"
          >
            Read More
          </NuxtLink>
        </div>
        <NuxtImg :src="foto_url" loading="lazy" alt="" class="w-full h-48 object-cover" />
      </div>
      <div class="font-bold mt-6">
        By:
        <span class="text-gray-700">{{ props.author }}</span>
      </div>
    </div>

    <template #footer>
      <div class="flex items-center text-gray-700 justify-between">
        <span>
          {{ dayjs(props.date).format('MMMM DD, YYYY') }}
        </span>
        <div class="flex items-center gap-2">
          <Icon class="" name="ic:round-visibility" size="15" />
          <span>{{ props.views }}</span>
        </div>
      </div>
    </template>
  </UCard>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>