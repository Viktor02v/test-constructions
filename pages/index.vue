<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { useLazyComponent } from '@/composables/useLazyComponents'

import { useGetPopular } from '~/composables/useGetPopular'
import { usePaginatedPages } from '~/composables/usePaginatedPages'

const Component = defineAsyncComponent(
  () => import('@/components/CardList.vue')
)

const { LazyComponent, showComponent, container } = useLazyComponent(Component)

const {
  data: popular,
  isPending: loadingPopular,
  isError: errorPopular,
} = useGetPopular()

const { paginatedNews, loading, currentPage, totalPages, nextPage, prevPage } =
  usePaginatedPages()

const items = ref(['Introduction', 'Popular', 'News', 'Speckle'])

const hoveredIndex = ref<number | null>(null)
const introductionRef = ref<HTMLElement | null>(null)
const popularRef = ref<HTMLElement | null>(null)
const newsRef = ref<HTMLElement | null>(null)
const speckleRef = ref<HTMLElement | null>(null)

const scrollToSection = (index: number) => {
  const sectionRefs = [introductionRef, popularRef, newsRef, speckleRef]
  const section = sectionRefs[index]?.value

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="w-full h-full">
    <!-- Bilboard -->
    <div class="z-30 relative w-full">
      <NuxtImg
        src="http://picsum.photos/id/411/3900/1100"
        class="w-full h-full  object-cover"
        alt=""
      />
    </div>

    <!-- Stepper -->
    <div class="fixed z-10 hidden md:block top-[60%] translate-y-[-60%] left-0">
      <div
        class="border-l-2 pl-1 border-black flex flex-col text-[14px] font-light ml-3 gap-2 items-start justify-center h-full"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
          @click="scrollToSection(index)"
          class="cursor-pointer"
        >
          <div class="">
            <div
              :class="[
                hoveredIndex === index ? 'text-green-500' : '',
                'fint-light transition-all duration-300 ease-in-out',
              ]"
            >
              {{ item }}
            </div>
            <div
              :class="[
                hoveredIndex === index ? 'max-w-full' : 'max-w-0',
                'h-[1px] bg-green-500 transition-all duration-300 ease-in-out',
              ]"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="px-[2rem] md:px-[10rem] py-20 pb-[10rem]">
      <!-- Introduction -->
      <div
        id="Introduction"
        ref="introductionRef"
        class="w-full flex flex-col space-y-5 scroll-mt-[70px]"
      >
        <h1 class="text-4xl ml-5 text-center md:text-start break-word font-serif">
          Welcome to Industry Blueprint !
        </h1>

        <div class="text-gray-700 text-lg">
          Stay ahead in the ever-evolving world of construction with
          <span class="font-bold text-xl">Industry Blueprint</span>
          . Whether you're a contractor, engineer, architect, or industry
          enthusiast, we bring you up-to-date news, trends, and insights from
          across the construction sector. From groundbreaking innovations and
          sustainable building practices to major infrastructure projects and
          regulatory updates, we cover it all. Our mission is to keep you
          informed with expert analysis, industry reports, and real-time
          developments shaping the future of construction. Join us as we build a
          stronger, smarter, and more connected construction community.
        </div>
      </div>

      <!-- Most Popular -->
      <div id="MostPopular" ref="popularRef" class="mt-[7rem] scroll-mt-[70px]">
        <h2 class="ml-5 text-3xl font-serif">Most Popular</h2>

        <div class="mt-10">
          <div v-if="loadingPopular" class="text-black">Loading...</div>

          <CardList v-else :data="popular" />
        </div>
      </div>

      <!-- Lazy News -->
      <div id="News" ref="newsRef" class="mt-[7rem] scroll-mt-[70px]">
        <h2 class="text-3xl font-serif ml-5">News</h2>
        <div ref="container">
          <div v-if="showComponent" class="mt-10">
            <div v-if="loading" class="text-black">Loading...</div>

            <LazyComponent v-else :data="paginatedNews" />

            <div v-if="paginatedNews" class="flex justify-center gap-4 mt-6">
              <UButton
                @click="prevPage"
                :disabled="currentPage === 1"
                class="px-4 py-2 bg-green-500 rounded-lg disabled:opacity-50"
              >
                Previous
              </UButton>
              <span class="px-4 py-2">
                Page {{ currentPage }} of {{ totalPages }}
              </span>
              <UButton
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="px-4 py-2 bg-green-500 rounded-lg disabled:opacity-50"
              >
                Next
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Speckle -->
      <div
        id="Speckle"
        ref="speckleRef"
        class="mt-[7rem] h-full scroll-mt-[70px]"
      >
        <h2 class="text-3xl font-serif ml-5">Speckle</h2>

        <div
          class="mt-10 flex items-start h-full flex-wrap md:flex-nowrap gap-10"
        >
          <div class="md:w-1/2 h-full">
            <NuxtImg
              src="https://www.aecbytes.com/illustrations/newsletter/2022/issue_113-images/fig5a.png"
              class="w-[100%] h-full object-cover"
              alt=""
            />
          </div>

          <div class="md:w-1/2 h-full flex flex-col items-baseline gap-5">
            <h3 class="font-bold text-xl font-serif">Speckle -</h3>
            <div class="text-black pl-1">
              is an open-source data platform for the AEC industry. It allows
              you to connect, manage, and share data across your architecture,
              engineering, and construction workflows. With Speckle, you can
              seamlessly exchange data between different design and analysis
              software, collaborate with team members in real-time, and automate
              repetitive tasks.
            </div>

            <NuxtLink to="/viewer" class="text-green self-center md:self-end
            underline">
            <UButton  class=" px-[5rem] text-[1rem]" label="Try" />
          </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
