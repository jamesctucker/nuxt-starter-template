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
  label: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div>
    <label
      :for="props.name"
      class="block text-sm font-medium text-gray-700 mb-2"
    >
      {{ props.label }}
    </label>
    <input
      :id="props.name"
      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      :value="props.modelValue"
      :name="props.name"
      :type="props.type"
      :autocomplete="props.autocomplete"
      :required="props.required"
      @input="emits('update:modelValue', $event.target.value)"
    />
  </div>
</template>
