<script setup>
import { ref } from "vue";

const prompt = ref("");
const completion = ref("");
const loading = ref(false);

const handleClick = async () => {
  loading.value = true;

  const response = await $fetch("/api/v1/open_ai/completions", {
    method: "POST",
    body: JSON.stringify({ prompt: prompt.value }),
  });

  completion.value = await response.completion;
  prompt.value = null;

  loading.value = false;
};
</script>

<template>
  <div class="flex flex-row items-center">
    <h2 class="font-xl font-semibold">GenAI</h2>
  </div>

  <!-- loading state -->
  <div v-if="loading" class="my-8">
    <p class="text-gray-600">Loading...</p>
  </div>
  <!-- response -->
  <div v-else-if="completion" class="p-4 my-4 bg-gray-100 rounded-sm">
    <!-- preserve whitespace -->
    <p class="text-gray-600 whitespace-pre-line">{{ completion }}</p>
  </div>

  <!-- empty state -->
  <div v-else class="my-8">
    <p class="text-gray-600">Ask me anything!</p>
  </div>

  <!-- text area -->
  <div class="my-8">
    <textarea
      v-model="prompt"
      class="p-2 border border-gray-400 rounded-sm w-full"
      name="text"
      rows="5"
      placeholder="Enter prompt here..."
    ></textarea>
  </div>
  <!-- submit button with loading spinner -->
  <button
    class="bg-indigo-800 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline flex flex-row items-center justify-center"
    :disabled="!prompt"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-3"
    ></span>
    Submit
  </button>
</template>
