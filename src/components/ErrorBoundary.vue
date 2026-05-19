<script>
export default {
  data() {
    return {
      hasError: false,
    };
  },

  errorCaptured(err) {
    console.error(err);
    this.hasError = true;

    return false;
  },
};
</script>

<template>
  <div v-if="hasError">
    <h2>Something went wrong.</h2>
  </div>

  <slot v-else />
</template>