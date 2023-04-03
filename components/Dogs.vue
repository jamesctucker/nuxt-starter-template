<script setup>
import { ref } from "vue";

const dogs = ref([]);
const error = ref(null);

const handleClick = async () => {
  const { data, error } = await $fetch(`/api/v1/dogs`);

  if (error) {
    console.error(error);
    return;
  }

  dogs.value = data;
};
</script>

<template>
  <div>
    <div class="flex flex-row items-center">
      <h2 class="font-xl font-semibold">Dogs</h2>
    </div>

    <!-- empty state -->
    <div v-if="dogs?.length === 0" class="my-8">
      <p class="text-gray-600">
        You don't have any data yet. Please click the button to load some.
      </p>
    </div>
    <!-- error state -->
    <div v-else-if="error" class="my-8">
      <p class="text-red-600">
        There was an error loading your data. Please try again.
      </p>
    </div>

    <!-- dog data -->
    <div v-else class="my-8 max-w-lg">
      <div class="flex flex-row justify-between items-center space-x-4">
        <p class="font-semibold w-1/3">Id</p>

        <p class="font-semibold w-1/3">Name</p>
        <p class="font-semibold w-1/3">Age</p>
      </div>
      <div
        v-for="{ id, name, age } in dogs"
        :key="id"
        class="flex flex-row justify-between items-center space-x-3 my-3"
      >
        <p class="w-1/3 truncate">{{ id }}</p>
        <p class="w-1/3 truncate">{{ name }}</p>
        <p class="w-1/3 truncate">
          {{ age }}
        </p>
      </div>
    </div>

    <!-- load transactions button -->
    <button
      class="bg-indigo-800 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
      @click="handleClick"
    >
      Get Data
    </button>
  </div>
</template>
