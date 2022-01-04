<template>
  <div class="my-container mx-auto y-space text-center">
    <div v-if="error.statusCode === 404" class="flex flex-col items-center">
      <h1 class="my-8 typo-h-lg typo-h-lg-desktop">Page not found</h1>
    </div>
    <h1 v-else class="my-8 typo-h-lg typo-h-lg-desktop">An error occurred</h1>
    <div class="wysiwyg">
      <NuxtLink to="/" class="typo-h-button">Go to Home page</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'my-error-layout',
}
</script>
