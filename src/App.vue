<script setup>
import LoadingSpinner from './components/LoadingSpinner.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
</script>

<template>
<div class="min-h-screen bg-gray-100">
  <ErrorBoundary>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <template #default>
          <component :is="Component" />
        </template>

        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </RouterView>
  </ErrorBoundary>
</div>
</template>
