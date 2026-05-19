<script setup>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";
</script>

<template>
  <ErrorBoundary>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />

      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </RouterView>
  </ErrorBoundary>
</template>

<style scoped></style>
