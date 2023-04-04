<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    required: false,
  },
});
</script>

<template>
  <button
    class="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-sm text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    :type="props.type"
    :disabled="props.disabled"
    @click="props.onClick"
  >
    <slot name="copy" />
  </button>
</template>
