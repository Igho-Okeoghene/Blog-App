<script setup>
defineProps({
  post: Object,
})
</script>

<template>
  <div class="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

   <div class="mb-4 flex items-center justify-between">
      <span
        class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
      >
        {{ post.category }}
      </span>

      <span class="text-sm text-gray-500">
        {{ post.viewCount }} views
      </span>
    </div>
    <h2 class="mb-3 text-2xl font-bold text-gray-800">{{ post.title }}</h2>

    <p class="mb-5 leading-relaxed text-gray-600">{{ post.excerpt || 'No excerpt available' }}</p>

    <RouterLink :to="`/post/${post.id}`"   class="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-800"> Read More </RouterLink>
  </div>
</template>

