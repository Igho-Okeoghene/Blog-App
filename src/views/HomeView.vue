<script setup>
import { ref, onMounted } from "vue";
import { getPosts } from "../services/api";
import BlogCard from "../components/BlogCard.vue";

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchPosts = async () => {
  try {
    posts.value = await getPosts();
  } catch (err) {
    error.value = "Failed to fetch posts";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchPosts);
</script>

<template>
  <main>
    <h1>Blog Posts</h1>

    <p v-if="loading">Loading posts...</p>

    <p v-else-if="error">{{ error }}</p>

    <BlogCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </main>
</template>