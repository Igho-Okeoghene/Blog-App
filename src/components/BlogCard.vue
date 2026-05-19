<script setup>
defineProps({
  post: Object,
});
</script>

<template>
  <div class="card">
    <h2>{{ post.title }}</h2>

    <p>
      {{ post.body.slice(0, 80) }}...
    </p>

    <RouterLink :to="`/post/${post.id}`">
      Read More
    </RouterLink>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>