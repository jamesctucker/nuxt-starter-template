<script setup>
import { ref } from "vue";
import TextInput from "@/components/ui_library/TextInput.vue";

const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  alert(`Signed up with ${email.value}!`);
};
</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white px-4 py-8 shadow-lg sm:rounded-sm sm:px-8 sm:py-8">
      <h2 class="font-xl font-semibold mb-8">Sign Up</h2>
      <form class="space-y-4" @submit="handleSubmit">
        <!-- email label and input -->
        <fieldset>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Email address
          </label>
          <TextInput
            v-model="email"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
          />
        </fieldset>

        <!-- password label and input -->
        <fieldset>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <TextInput
            v-model="password"
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
          />
        </fieldset>

        <!-- password confirmation label and input -->
        <fieldset>
          <label
            for="password-confirmation"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Password Confirmation
          </label>
          <TextInput
            v-model="passwordConfirmation"
            id="password-confirmation"
            name="password-confirmation"
            type="password"
            autocomplete="current-password"
            required
          />
        </fieldset>

        <!-- submit button -->
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>
