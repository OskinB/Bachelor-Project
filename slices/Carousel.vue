<template>
  <ContentMaxWidth class="y-space">
    <div class="gutter">
      <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
        {{ $prismic.asText(title) }}
      </h2>
      <div>Carousel package</div>
    </div>
  </ContentMaxWidth>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    title() {
      return this.slice?.primary?.title
    },
  },
  methods: {},
}
</script>

<style scoped></style>
