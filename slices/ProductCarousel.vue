<template>
  <ContentMaxWidth>
    <div class="my-10 flex flex-col justify-center sm:gutter sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
      <div v-for="(item, index) in filterEmpty" :key="index">
        <ProductCarousel :data="item" />
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
    items() {
      return this.slice?.items
    },
    filterEmpty() {
      return this.items.filter((item) => Object.keys(item.image).length !== 0)
    },
  },
}
</script>

<style scoped></style>
