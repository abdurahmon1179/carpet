<template>
  <div class="base-input-wrapper">
    <input
      class="base-input"
      :class="variant"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
    />
    <slot name="icon" />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'large', 
  },
});
</script>

<style scoped>
.base-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.base-input {
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  outline: none;
  color: #333;
  font-size: 14px;
  transition: border 0.2s ease;
}


.base-input.large {
  width: 440px;
  height: 36px;
  padding-left: 38px;
}


.base-input.small {
  width: 337px;
  padding: 9.5px 13px;
}


.base-input.dark {
  margin-top: 16px;
  border: 1px solid #364153;
  border-radius: 8px;
  background-color: #1E2939;
  padding: 9.5px 13px;
  outline: none;
  box-shadow: 0px 1px 2px 0px #0000000D;
  width: 100%;
  color: #fff; 
  width: 352px;
}



.base-input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}


</style>
