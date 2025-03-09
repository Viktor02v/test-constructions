<script setup>
import { ref } from 'vue'

const urls = ref([
  'https://latest.speckle.systems/streams/cdbe82b016/objects/c14d1a33fd68323193813ec215737472',
  'https://latest.speckle.systems/streams/cdbe82b016/objects/16676fc95a9ead877f6a825d9e28cbe8',
  'https://app.speckle.systems/projects/da9e320dad/models/3f0dc4be35',
  'https://app.speckle.systems/projects/7591c56179/models/32213f5381',
])

const streamUrl = ref(urls.value[0])

const viewerParams = {
  showStats: true,
  verbose: true,
  antialias: true,
}

const changeStreamUrl = (url) => {
  streamUrl.value = url
}
</script>

<template>
  <div class="w-full relative h-full md:px-20 md:py-10">
    <div class="flex fixed z-10 flex-col bottom-10 md:left-[4rem] gap-2 p-4">
      <UButton
        v-for="(url, index) in urls"
        :key="index"
        @click="changeStreamUrl(url)"
        class="px-4 py-2 bg-blue-500   text-white rounded hover:bg-blue-600"
      >
        {{ index + 1 }}
      </UButton>
    </div>

    <client-only>
      <SpeackleViewer :streamUrl="streamUrl" :viewerParams="viewerParams" />
    </client-only>
  </div>
</template>

<style scoped>

</style>
