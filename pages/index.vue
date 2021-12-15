<template>
  <div class="">
    <!-- <h1>Index page</h1> -->
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  async asyncData({ $prismic }) {
    try {
      const data = await $prismic.api.query('')
      // const data = await $prismic.api.getSingle('home')
      return data
    } catch (error) {
      console.log(error)
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped></style>
