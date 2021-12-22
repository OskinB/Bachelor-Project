<template>
  <div class="max-w-contentMin">
    <h1 class="typo-h-highlight-desktop text-teal">Index page</h1>
    <slice-zone
      type="home"
      queryType="single"
      :resolver="resolver"
      :slices="data.body"
    />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  props: {},
  data() {
    return {}
  },
  async asyncData({ $prismic }) {
    try {
      const data = await $prismic.api.getSingle('home')
      return data
    } catch (error) {
      console.log(error)
    }
  },
  computed: {},
  methods: {
    resolver({ sliceName }) {
      return import(`~/slices/${sliceName}.vue`)
    },
  },
}
</script>

<style scoped></style>
