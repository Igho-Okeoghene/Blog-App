<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostById } from "../services/api";

const route = useRoute();
const router = useRouter();

const post = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchPost = async () => {
  try {
    post.value = await getPostById(route.params.id);
  } catch (err) {
    error.value = "Post not found";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchPost);

const goBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <button @click="goBack">
      ← Go Back
    </button>

    <RouterLink to="/">
      Home
    </RouterLink>

    <p v-if="loading">Loading post...</p>

    <p v-else-if="error">{{ error }}</p>

    <div v-else>
      <h1>{{ post.title }}</h1>

      <p>{{ post.body }}</p>
    </div>
  </div>
</template>