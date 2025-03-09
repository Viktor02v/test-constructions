<script setup>
import { ref, watch, onMounted, markRaw } from 'vue';
import {
  Viewer,
  DefaultViewerParams,
  SpeckleLoader,
  UrlHelper,
  CameraController,
  SelectionExtension,
} from '@speckle/viewer';

const props = defineProps({
  streamUrl: {
    type: String,
    required: true,
  },
  viewerParams: {
    type: Object,
    default: () => ({
      showStats: true,
      verbose: true,
      antialias: true,
    }),
  },
});

const renderer = ref(null);
const isLoading = ref(true);
const error = ref(null);
const viewer = ref(null);

onMounted(async () => {
  try {
    if (!renderer.value) {
      throw new Error('Viewer container not found.');
    }

    const params = { ...DefaultViewerParams, ...props.viewerParams };
    viewer.value = markRaw(new Viewer(renderer.value, params));
    await viewer.value.init();

    viewer.value.createExtension(CameraController);
    viewer.value.createExtension(SelectionExtension);

    await loadStream(props.streamUrl);

    isLoading.value = false;
  } catch (err) {
    error.value = err;
    isLoading.value = false;
    console.error('Error initializing Speckle Viewer:', err);
  }
});

watch(
  () => props.streamUrl,
  async (newUrl) => {
    if (viewer.value && newUrl) {
      try {
        isLoading.value = true;
        error.value = null;
        await loadStream(newUrl);
      } catch (err) {
        error.value = err;
        console.error('Error loading stream:', err);
      } finally {
        isLoading.value = false;
      }
    }
  }
);

const loadStream = async (url) => {
  const urls = await UrlHelper.getResourceUrls(url);
  if (!urls || urls.length === 0) {
    throw new Error('No resources found for the provided stream URL.');
  }

  for (const streamUrl of urls) {
    const loader = new SpeckleLoader(viewer.value.getWorldTree(), streamUrl, '');
    await viewer.value.loadObject(loader, true);
  }
};
</script>

<template>
  <div class="w-full relative h-full ">
    <div v-if="isLoading" class="absolute top-10 left-[50%] translate-x-[-50%] flex items-center gap-2 p-4 bg-white rounded shadow-lg">
      <p>Loading Viewer </p>
      <Icon name="line-md:loading-twotone-loop" class=""/>
    </div>

    <div v-if="error" class="absolute top-10 left-[50%] translate-x-[-50%] flex items-center gap-2 p-4 bg-white rounded shadow-lg">
      <p>Failed to load Speckle Viewer. Please try again later.</p>
      <p>{{ error.message }}</p>
    </div>

    <div ref="renderer" class="viewer-container "/>
  </div>
</template>

<style scoped>
.viewer-container {
  width: 100%;
  height: 100vh;
}



</style>