<template>
  <div class="max-w-contentMax">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  // Called before rendering the layout
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  },
}
</script>
