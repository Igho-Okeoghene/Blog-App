<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPostById } from '../services/api'

const route = useRoute()
const router = useRouter()

const post = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchPost = async (id) => {
  loading.value = true
  error.value = null

  try {
    post.value = await getPostById(id)
  } catch (err) {
    error.value = 'Post not found'
    console.error(err)
  } finally {
    loading.value = false
  }
}

watch(
  () => route.params.id,
  (id) => {
    if (id) {
      fetchPost(id)
    }
  },
  { immediate: true },
)

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <main class="min-h-screen bg-gray-100 px-6 py-10">
    <div class="mx-auto max-w-4xl">
      <div class="mb-8 flex items-center gap-4">
        <button
          @click="goBack"
          class="rounded-lg bg-gray-900 px-5 py-2 text-white transition hover:bg-black"
        >
          ← Back
        </button>

        <RouterLink to="/" class="font-medium text-blue-600 hover:text-blue-800"> Home </RouterLink>
      </div>

      <div v-if="loading" class="rounded-2xl bg-white p-10 text-center shadow-lg">
        Loading post...
      </div>

      <div v-else-if="error" class="rounded-xl bg-red-100 p-6 text-red-700">
        {{ error }}
      </div>

      <article v-else-if="post" class="rounded-3xl bg-white p-10 shadow-xl">
        <div class="mb-6 flex items-center gap-4">
          <span class="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            {{ post.category }}
          </span>

          <span class="text-gray-500"> {{ post.viewCount }} views </span>
        </div>

        <h1 class="mb-6 text-5xl font-extrabold leading-tight text-gray-900">
          {{ post.title }}
        </h1>

        <p class="mb-8 text-lg italic text-gray-500">
          {{ post.excerpt }}
        </p>

        <div class="space-y-6 text-lg leading-9 text-gray-700">
          <p>{{ post.content }}</p>
        </div>
      </article>
    </div>
  </main>
</template>
