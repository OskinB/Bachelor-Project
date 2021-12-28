<template>
  <slice-zone
    type="home"
    queryType="single"
    :resolver="resolver"
    :slices="data.body"
  />
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
