<template>
  <ContentMaxWidth v-if="showSlice" class="my-20 lg:my-36">
    <div class="gutter lg:px-2">
      <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
        {{ $prismic.asText(heading) }}
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-28 lg:gap-y-3">
        <div v-for="(item, index) in filterEmpty" :key="index">
          <Bulletpoint :data="item" />
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
    heading() {
      return this.slice?.primary?.heading
    },
    items() {
      return this.slice?.items
    },
    filterEmpty() {
      return this.items.filter((item) => Object.keys(item.bulletin_text).length !== 0)
    },
    showSlice() {
      return Object.keys(this.heading).length !== 0
    },
  },
}
</script>