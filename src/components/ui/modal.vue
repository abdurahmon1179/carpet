<template>
  <div class="base-dialog">
    <Button :label="buttonLabel" @click="visible = true" />

    <Dialog
      v-model:visible="visible"
      modal
      :header="header"
      :style="{ width: width }"
    >
      <span class="text-surface-500 block mb-8">
        {{ description }}
      </span>


      <div class="flex flex-col gap-4 mb-8">
        <slot />
      </div>


      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        />
        <Button
          type="button"
          :label="confirmLabel"
          @click="handleConfirm"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";

const props = defineProps({
  header: {
    type: String,
    default: "Dialog",
  },
  description: {
    type: String,
    default: "Add your content here.",
  },
  buttonLabel: {
    type: String,
    default: "Show",
  },
  confirmLabel: {
    type: String,
    default: "Save",
  },
  width: {
    type: String,
    default: "25rem",
  },
});

const emit = defineEmits(["confirm"]);
const visible = ref(false);

const handleConfirm = () => {
  emit("confirm");
  visible.value = false;
};
</script>

<style scoped>
.base-dialog {
  display: flex;
  justify-content: center;
}
</style>
