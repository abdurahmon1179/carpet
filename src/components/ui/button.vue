<template>
  <button
    class="base-btn"
    :class="[variant, size, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', 
  },
  size: {
    type: String,
    default: 'large', 
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.base-btn {
  color: white;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: none;
  outline: none; 
}


.primary {
  background-color: #973C00;
  border: none;
}

.primary:hover {
  background-color: #b54a00;
}


.outline {
  background-color: transparent;
  border: 1px solid rgba(151, 60, 0, 0.8);
  color: #973C00;
  padding: 12px 25px !important;
  box-sizing: border-box;
}




.large {
  padding: 10px 0;
  width: 100%;
}

.small {
  padding: 10px 16px;
  width: auto;
}

.is-disabled {
  background-color: #c2c2c2;
  cursor: not-allowed;
  opacity: 0.7;
  color: white;
}

</style>
