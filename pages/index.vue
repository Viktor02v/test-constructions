<script setup lang="ts">
import { useGetNews } from '~/composables/useGetNews'
import dayjs from 'dayjs'

const { data: news, isPending: loading, isError: error } = useGetNews()
</script>

<template>
  <div class="px-20 py-10">
    <h1 class="text-2xl font-serif">News</h1>

    <div class="mt-10">
      <div v-if="loading" class="text-black">Loading...</div>

      <div class="grid grid-cols-3 gap-10">
        <div v-for="item in news" :key="item.$id" class="">
          <div class="">
            <div class="text-xl font-serif">{{ item.title }}</div>
            <img :src="item.foto_url" alt="" />
            <div class="text-gray-500">
              {{ dayjs(item.date).format('MMMM DD, YYYY') }}
            </div>
            <div class="text-gray-700">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
