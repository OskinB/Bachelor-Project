<template>
  <div v-if="showSlice" class="y-space">
    <ContentMaxWidth>
      <div class="gutter lg:px-2">
        <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
          {{ $prismic.asText(title) }}
        </h2>
      </div>

      <div class="grid md:gap-6 grid-cols-1 md:grid-cols-3">
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
      return this.items.filter((item) => Object.keys(item.image).length !== 0)
    },
    showSlice() {
      return Object.keys(this.title).length !== 0
    },
  },
}
</script>
