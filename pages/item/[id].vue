<script setup lang="ts">
import { useGetANews } from '~/composables/useGetANews'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'
const route = useRoute()
const newsId = ref<string>(route.params.id)

const { newsItem: item, isLoading, isError } = useGetANews(newsId.value)
</script>

<template>
  <div class="w-full h-full px-2 py-10 md:p-10">
    <div class="pb-20">
      <div
        class="flex items-center flex-wrap md:flex-nowrap mb-[2rem] justify-between"
      >
        <h1
          class="text-[1.5rem] md:text-3xl mb-3 md:mb-0 md:w-1/2 first-letter:text-5xl font-serif"
        >
          {{ item?.title }}
        </h1>
        <div class="font-bold text-lg rounded p-2 bg-gray-200">
          <span class="text-gray-700">By:</span>
          <span class="text-gray-700">{{ item?.author }}</span>
        </div>
      </div>

      <div class="flex items-start flex-wrap md:flex-nowrap space-x-5">
        <NuxtImg
          :src="item?.foto_url"
          loading="lazy"
          :alt="item?.title"
          class="md:w-1/2 w-full md:h-96 object-cover"
        />

        <div class="md:w-1/2 w-full mt-5 md:mt-0 md:p-5 md:pt-0">
          <p
            class="text-gray-700 text-lg leading-relaxed first-letter:text-5xl whitespace-pre-line"
          >
            {{ item?.content }}
          </p>
          <div
            class="flex justify-between text-gray-500 items-center gap-5 mt-5"
          >
            <span>{{ dayjs(item?.$createdAt).format('MMMM DD, YYYY') }}</span>
            <div class="flex items-center space-x-2">
              <Icon class="" name="ic:round-visibility" size="15" />
              <span class="text-gray-700">{{ item?.views }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
