<template>
  <div class="text-blue-700">
    <prismic-link :field="primary.link">{{
      $prismic.asText(primary.link_label || {})
    }}</prismic-link>
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
  data() {
    return {}
  },
  computed: {
    primary() {
      return this.slice?.primary || {}
    },
  },
  methods: {},
}
</script>

<style scoped></style>
