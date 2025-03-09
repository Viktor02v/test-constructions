<script setup lang="ts"></script>

<template>
  <section class="w-full relative h-full">
    <!-- Header -->
    <div
      class="w-full fixed z-40 top-0 h-[50px] flex items-center justify-center bg-black"
    >

    <div class="absolute md:hidden left-5 top-[50%] translate-y-[-50%]">
    <NuxtLink
      to="/viewer"
      class="text-white hover:bg-[#373333f1] transition-all cursor-pointer duration-200 rounded p-1 px-2"
    >
      <Icon name="tabler:cube-3d-sphere" size="25" />
    </NuxtLink>
  </div>
      <NuxtLink to="/" class="text-white font-serif text-2xl">
        Industry Blueprint
      </NuxtLink>
      <div
        class="absolute right-0 mr-6 top-[50%] -translate-y-[50%] flex items-center gap-4"
      >
        <NuxtLink
          to="/viewer"
          class="text-white hover:bg-[#373333f1] hidden md:block transition-all cursor-pointer duration-200 rounded p-1 px-2"
        >
          <Icon name="tabler:cube-3d-sphere" size="25" />
        </NuxtLink>
        <div
          class="text-white hover:bg-[#373333f1] transition-all cursor-pointer duration-200 rounded p-1 px-2"
        >
          <Icon
            name="material-symbols-light:menu-book-outline-sharp"
            size="23"
          />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="absolute right-0 z-0 top-[50px] w-[calc(100%-0px)] h-full bg-gray-100"
    >
      <slot />
    </div>
  </section>
</template>
