<template>
  <div class="base-select-wrapper">
    <TreeSelect
      v-model="internalValue"
      :options="options"
      :placeholder="placeholder"
      class="base-select md:w-80 w-full"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import TreeSelect from "primevue/treeselect";

const props = defineProps({
  modelValue: [String, Object, Array],
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Select Item",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const internalValue = ref(props.modelValue);

// sync v-model
watch(internalValue, (val) => emit("update:modelValue", val));
watch(() => props.modelValue, (val) => (internalValue.value = val));
</script>

<style scoped>
.base-select-wrapper {
  display: flex;
  justify-content: center;
}

.base-select {
  border-radius: 8px !important;
  border: 1px solid #E5E5E5 !important;
  font-size: 14px !important;
  color: #333 !important;
  background: #fff !important;
  transition: border 0.2s ease !important;
}

.base-select:disabled {
  background-color: #f5f5f5 !important;
  cursor: not-allowed !important;
}
</style>
