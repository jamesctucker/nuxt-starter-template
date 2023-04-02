<script setup>
import { ref } from "vue";

const prompt = ref("");
const completion = ref("");

const handleClick = async () => {
  const response = await $fetch("/api/v1/open_ai/completions", {
    method: "POST",
    body: JSON.stringify({ prompt: prompt.value }),
  });

  completion.value = await response.completion;
  prompt.value = null;
};
</script>

<template>
  <div class="flex flex-row items-center">
    <h2 class="font-xl font-semibold">GenAI</h2>
  </div>

  <!-- response -->
  <div v-if="completion" class="p-4 my-4 bg-gray-100 rounded-sm">
    <p class="text-gray-600">{{ completion }}</p>
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
  <!-- submit button -->
  <button
    class="bg-indigo-800 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
    :disabled="!prompt"
    @click="handleClick"
  >
    Submit
  </button>
</template>
