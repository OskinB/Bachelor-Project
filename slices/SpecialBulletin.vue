<template>
  <ContentMaxWidth class="y-space">
    <div class="gutter">
      <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
        {{ $prismic.asText(heading) }}
      </h2>
      <Bulletpoint v-for="(item, i) in items" :key="i" :data="item" />
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
    items() {
      return this.slice?.items
    },
  },
  methods: {},
}
</script>

<style scoped></style>
