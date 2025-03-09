<script setup lang="ts">
import { defineProps, ref, onMounted, onUnmounted, watch } from 'vue'

import { type News } from '@/types/app.types'
const props = defineProps<{
  data: News[]
}>()

const columns = ref<number>(3)

const windowWidth = ref<number>(0)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

watch(windowWidth, () => {
  if (windowWidth.value < 768) {
    columns.value = 1
  } else if (windowWidth.value < 1024) {
    columns.value = 2
  } else {
    columns.value = 3
  }
})

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>

<template>
  <div
    :class="[
      columns === 3 ? 'grid-cols-3 gap-10' : '',
      columns === 2 ? 'grid-cols-2 gap-10' : '',
      columns === 1 ? 'grid-cols-1 gap-10' : '',
      'grid',
    ]"
  >
    <div v-for="item in props.data" :key="item.$id" class="h-full">
      <Card
        :id="item.$id"
        :title="item.title"
        :author="item.author"
        :date="item.$createdAt"
        :foto_url="item.foto_url"
        :views="item.views"
      />
    </div>
  </div>
</template>
