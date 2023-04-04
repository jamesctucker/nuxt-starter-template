<script setup>
import { ref } from "vue";
import TextInput from "@/components/ui_library/TextInput.vue";
import Button from "@/components/ui_library/Button.vue";
import GoogleButton from "@/components/user/GoogleButton.vue";
import Divider from "@/components/ui_library/Divider.vue";

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
        <GoogleButton />

        <Divider class="my-4" copy="or" />

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

        <Button class="mt-5" type="submit"
          ><template #copy>Create my account</template></Button
        >
      </form>
    </div>
  </div>
</template>
