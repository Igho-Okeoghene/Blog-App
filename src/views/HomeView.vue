<script setup>
import { ref, onMounted } from 'vue'
import { getPosts } from '../services/api'
import BlogCard from '../components/BlogCard.vue'

const posts = ref([])
const loading = ref(true)
const error = ref(null)

const fetchPosts = async () => {
  try {
    posts.value = await getPosts()
  } catch (err) {
    error.value = 'Failed to fetch posts'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchPosts)
</script>

<template>
  <main class="min-h-screen bg-gray-100 px-6 py-10">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <h1 class="mb-4 text-5xl font-extrabold text-gray-900">Modern Blog</h1>

        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          Explore technology, development, and modern software engineering articles.
        </p>
      </div>

      <div v-if="loading" class="flex min-h-[300px] items-center justify-center">
        <p class="text-lg text-gray-500">Loading posts...</p>
      </div>

      <div v-else-if="error" class="rounded-xl bg-red-100 p-6 text-center text-red-700">
        {{ error }}
      </div>

      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </main>
</template>
