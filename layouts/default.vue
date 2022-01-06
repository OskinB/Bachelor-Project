<template>
  <div>
    <Navbar />
    <Nuxt class="fade-in" />
    <Footer />
  </div>
</template>

<script>
export default {
  // Called before rendering the layout
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
    await store.dispatch('fetchFooter', $prismic)
  },
}
</script>
