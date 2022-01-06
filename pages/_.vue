<template>
  <div>
    <slice-zone v-if="data.body.length !== 0" :type="type" :uid="uid" :resolver="resolver" />
  </div>
</template>
<script>
import SliceZone from 'vue-slicezone'

export default {
  head() {
    return {
      title: this.pageTitle,
      meta: [{ hid: 'description', name: 'description', content: 'Information about this dynamic site.' }],
    }
  },
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const paths = params.pathMatch.split('/')
    const type = paths[0]
    const uid = paths[1]
    try {
      const { data } = await $prismic.api.getByUID(type, uid)
      return { data, type, uid }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    pageTitle() {
      return this.uid.replace(/\b\w/g, (l) => l.toUpperCase()) + ' - The Paint Shop'
    },
  },
  methods: {
    resolver({ sliceName }) {
      return import(`~/slices/${sliceName}.vue`)
    },
  },
}
</script>
