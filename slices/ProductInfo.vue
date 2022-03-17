<template>
  <ContentMaxWidth v-if="showSlice" class="mb-20">
    <div class="first-top-space">
      <div class="gutter lg:px-2">
        <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="mb-4 text-grey typo-h-highlight lg:typo-h-highlight-desktop">&laquo; Back</button>

        <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
          {{ $prismic.asText(productTitle) }}
        </h2>
        <h3 class="mb-heading typo-h-sm lg:typo-h-sm-desktop">
          {{ $prismic.asText(detailsHeading) }}
        </h3>
        <ProductDetails :data="slice.primary" />
        <h3 class="mb-heading typo-h-sm lg:typo-h-sm-desktop">
          {{ $prismic.asText(sizeHeading) }}
        </h3>
        <div class="grid grid-cols-2 gap-2 md:flex md:flex-row md:gap-6">
          <div v-for="(item, index) in filterEmpty" :key="index" class="">
            <PillSize :data="item" />
          </div>
        </div>
      </div>
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
  computed: {
    productTitle() {
      return this.slice?.primary?.product_title
    },
    detailsHeading() {
      return this.slice?.primary?.details_heading
    },
    sizeHeading() {
      return this.slice?.primary?.size_heading
    },
    items() {
      return this.slice?.items
    },
    filterEmpty() {
      return this.items.filter((item) => item.price !== null)
    },
    showSlice() {
      return Object.keys(this.productTitle).length !== 0
    },
  },
  methods: {
    hasHistory() {
      return window.history.length > 2
    },
  },
}
</script>
