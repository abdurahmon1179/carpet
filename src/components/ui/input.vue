<template>
  <div class="base-input-wrapper" :class="iconPosition">

    <i v-if="icon" :class="['input-icon', icon]"></i>

    <InputText
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="base-input"
      :class="variant"
    />
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';

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
  icon: {
    type: String,
    default: '', 
  },
  iconPosition: {
    type: String,
    default: 'left', 
  },
});
</script>

<style>
.base-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
}


.base-input {
  border: 1px solid #E5E5E5 !important;
  border-radius: 8px !important;
  outline: none !important;
  color: #333 !important;
  font-size: 14px !important;
  transition: border 0.2s ease !important;
  box-shadow: none !important;
}


.base-input.large {
  width: 440px !important;
  height: 36px !important;
  padding-left: 38px !important;
}

.base-input.small {
  width: 337px !important;
  padding: 9.5px 13px !important;
  height: 36px;
}

.base-input.dark {
  margin-top: 16px !important;
  border: 1px solid #364153 !important;
  background-color: #1E2939 !important;
  color: #fff !important;
  padding: 9.5px 13px !important;
  box-shadow: 0px 1px 2px 0px #0000000D !important;
  width: 352px !important;
}




.input-icon {
  position: absolute;
  font-size: 16px;
  color: #737373;
  top: 50%;
  transform: translateY(-50%);
}


.base-input-wrapper.left .input-icon {
  left: 12px;
}

.base-input-wrapper.right .input-icon {
  right: 12px;
}


.base-input:disabled {
  background-color: #f5f5f5 !important;
  cursor: not-allowed !important;
}

@media (prefers-color-scheme: dark) {
  .p-inputtext, 
  .base-input {
    background-color: white !important;
    color: #000000 !important;
    border: 1px solid #E5E5E5 !important;
  }

  .p-inputtext:focus, 
  .base-input:focus {
    background-color: white !important;
    color: #000000 !important;
    border-color: #a3a3a3 !important;
    box-shadow: none !important;
  }

  .p-inputtext::placeholder {
    color: #666 !important;
  }
}
</style>
