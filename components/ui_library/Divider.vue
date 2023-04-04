<script setup>
const props = defineProps({
  copy: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="relative w-full">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300" />
      </div>
      <div v-if="props.copy" class="relative flex justify-center text-sm">
        <span class="px-2 bg-white text-gray-500">{{ props.copy }}</span>
      </div>
    </div>
  </div>
</template>
