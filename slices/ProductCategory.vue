<template>
  <div v-if="showSlice" class="y-space">
    <ContentMaxWidth>
      <div class="gutter lg:px-2">
        <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
          {{ $prismic.asText(heading) }}
        </h2>
        <h4 class="mb-10 text-teal typo-h-highlight lg:typo-h-highlight-desktop">{{ totalProducts }}<span> products</span></h4>

        <div class="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid-rows-1">
          <div v-for="(item, index) in filterEmpty" :key="index">
            <CardProduct :data="item" />
          </div>
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
    heading() {
      return this.slice?.primary?.heading
    },
    items() {
      return this.slice?.items
    },
    filterEmpty() {
      const img = this.items.filter((item) => Object.keys(item.image).length !== 0)
      const heading = img.filter((item) => Object.keys(item.heading).length !== 0)
      return heading
    },
    totalProducts() {
      return this.filterEmpty.length
    },
    showSlice() {
      return Object.keys(this.heading).length !== 0
    },
  },
}
</script>
