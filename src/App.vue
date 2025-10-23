<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import CustomLayout from "./layouts/custom.vue";
import AdminLayout from "./layouts/admin.vue";

const layouts = { AdminLayout, CustomLayout };
const route = useRoute();

const layoutComponent = computed(() => layouts[route.meta?.layout] || CustomLayout);
</script>
