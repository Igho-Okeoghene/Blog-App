<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6"
  >
    <h1 class="mb-4 text-8xl font-extrabold text-gray-900">
      404
    </h1>

    <p class="mb-8 text-xl text-gray-600">
      Page not found
    </p>

    <RouterLink
      to="/"
      class="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      Go Home
    </RouterLink>
  </main>
</template>
