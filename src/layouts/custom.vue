<template>
  <div class="layout">
    <AppHeader />
    <main class="p-4 flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "../components/header/index.vue"
import AppFooter from "../components/footer/index.vue"
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout > * {
  width: 100%; 
}

main {
  flex: 1;
}
</style>
