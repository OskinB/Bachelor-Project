<template>
  <div class="y-space">
    <ContentMaxWidth>
      <div class="gutter">
        <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
          {{ $prismic.asText(title) }}
        </h2>
      </div>

      <div class="grid md:gap-6 grid-cols-1" :class="'md:grid-cols-' + gridCols">
        <div v-for="(item, index) in filterEmpty" :key="index" class="flex h-full">
          <CardPopularProduct :data="item" />
        </div>
      </div>
    </ContentMaxWidth>
  </div>
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
  computed: {
    title() {
      return this.slice?.primary?.title
    },
    items() {
      return this.slice?.items
    },
    filterEmpty() {
      return this.slice.items.filter((item) => Object.keys(item.image).length !== 0)
    },
    gridCols() {
      if (this.filterEmpty?.length >= 3) return 3
      return this.filterEmpty?.length || 1
    },
  },
}
</script>
