<template>
  <slice-zone v-if="data.body.length !== 0" type="home" queryType="single" :resolver="resolver" :slices="data.body" />
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  async asyncData({ $prismic }) {
    try {
      const data = await $prismic.api.getSingle('home')
      return data
    } catch (error) {
      console.log('An error occurred')
    }
  },
  methods: {
    resolver({ sliceName }) {
      return import(`~/slices/${sliceName}.vue`)
    },
  },
}
</script>
