<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"


import CustomLayout from "./layouts/custom.vue"
import AdminLayout from "./layouts/admin.vue"


const layouts = {
  AdminLayout,
  CustomLayout
}

const route = useRoute()


const layoutComponent = computed(() => {
  return layouts[route.meta?.layout] || CustomLayout
})
</script>


