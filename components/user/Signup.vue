<script setup>
import { ref } from "vue";
import TextInput from "@/components/ui_library/TextInput.vue";
import Button from "@/components/ui_library/Button.vue";

const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  alert(`Signed up with ${email.value}!`);
};
</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <!-- TODO: turn into a card component -->
    <div
      class="bg-white px-4 py-8 shadow-sm sm:rounded-sm sm:px-8 sm:py-8 border border-stone-300"
    >
      <h2 class="text-xl font-semibold mb-2">Welcome to Nuxt Starter App!</h2>
      <p class="text-sm text-gray-500 mb-6">
        Enter your info to get started. If you already have an account,
        <a href="#" class="text-indigo-800 hover:text-indigo-500 font-medium"
          >sign in</a
        >
        instead.
      </p>
      <form @submit="handleSubmit">
        <button
          type="button"
          class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-sm text-gray-700 bg-white hover:bg-gray-50"
        >
          Sign up with Google
        </button>
        <!-- google sign up button -->
        <div class="flex items-center justify-center my-4">
          <div class="relative w-full">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
        </div>
        <TextInput
          class="mb-3"
          v-model="email"
          name="email"
          label="Email address"
          type="email"
          autocomplete="email"
          required
        />

        <TextInput
          class="mb-3"
          v-model="password"
          name="password"
          label="Password"
          type="password"
          autocomplete="current-password"
          required
        />

        <TextInput
          class="mb-3"
          v-model="passwordConfirmation"
          name="password-confirmation"
          label="Password Confirmation"
          type="password"
          autocomplete="current-password"
          required
        />

        <div class="mt-5">
          <Button type="submit"
            ><template #copy>Create my account</template></Button
          >
        </div>
      </form>
    </div>
  </div>
</template>
