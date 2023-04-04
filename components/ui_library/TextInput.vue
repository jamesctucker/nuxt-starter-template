<script setup>
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: "off",
  },
});
</script>

<template>
  <input
    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    :value="props.modelValue"
    :name="props.name"
    :type="props.type"
    :autocomplete="props.autocomplete"
    :required="props.required"
    @input="emits('update:modelValue', $event.target.value)"
  />
</template>
