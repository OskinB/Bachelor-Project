<template>
  <ContentMaxWidth class="y-space">
    <div class="gutter">
      <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
        {{ $prismic.asText(heading) }}
      </h2>
      <prismic-rich-text :field="text" class="mb-text typo-b-md lg:typo-b-md-desktop" />
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
    heading() {
      return this.slice?.primary?.heading
    },
    text() {
      return this.slice?.primary?.rich_text
    },
  },
  methods: {},
}
</script>

<style scoped></style>
