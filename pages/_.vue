<template>
  <div class="">
    Dynamic page slices !
    <slice-zone :type="type" :uid="uid" :resolver="resolver" />
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
  async asyncData({ $prismic, params, error }) {
    const paths = params.pathMatch.split('/')
    const type = paths[0]
    const uid = paths[1]

    const { data } = await $prismic.api.getByUID(type, uid)
    return { data, type, uid }
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
