<script setup lang="ts"></script>

<template>
  <section class="w-full relative h-full">
    <!-- Header -->
    <div
      class="w-full fixed  z-40 top-0 h-[50px] flex items-center justify-center bg-black"
    >
      <div class="text-white text-2xl">Industry Blueprint</div>
      <div class="absolute right-0 mr-6 top-[50%] translate-y-[-50%]">
        <Icon
          class="text-white cursor-pointer hover:text-gray-300"
          name="material-symbols-light:menu-book-outline-sharp"
          size="30"
        />
      </div>
    </div>

    <!-- Sidebar -->
    <div class="w-[200px] fixed left-0 top-[50px] h-[100vh] bg-gray-200">
      <div class="text-black text-center mt-10 text-2xl">Sidebar</div>

      <div class="mt-10">
        <NuxtLink to="/" class="block text-black text-center">Home</NuxtLink>
        <NuxtLink to="/about" class="block text-black text-center">
          About
        </NuxtLink>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="absolute right-0 z-0 top-[50px] w-[calc(100%-200px)] h-full bg-gray-100"
    >
      <slot />
    </div>
  </section>
</template>

<style scoped>
</style>

