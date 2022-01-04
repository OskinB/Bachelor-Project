<template>
  <div v-if="showSlice" :class="path" class="typo-h-menu text-blackText ease-in-out duration-200 hover:text-teal">
    <prismic-link :field="link">{{ $prismic.asText(linkLabel) }}</prismic-link>
  </div>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    link() {
      return this.slice?.primary?.link
    },
    linkLabel() {
      return this.slice?.primary?.link_label
    },
    showSlice() {
      return Object.keys(this.linkLabel).length !== 0
    },
    label() {
      return this.linkLabel[0].text.toLowerCase()
    },
    path({ $route }) {
      const paths = $route.path.split('/')
      const uid = paths.pop()
      if (uid.toLowerCase() === this.label) return '!text-teal'
      return uid
    },
  },
}
</script>
