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
        <Button type="submit"><template #copy>Sign Up</template></Button>
      </form>
    </div>
  </div>
</template>
