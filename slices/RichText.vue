<template>
  <ContentMaxWidth v-if="showSlice" class="y-space">
    <div class="gutter lg:px-2">
      <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
        {{ $prismic.asText(heading) }}
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-28 gap-y-6 lg:gap-y-10">
        <div v-for="(item, index) in filterEmpty" :key="index">
          <RichText :data="item.rich_text" />
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
    text() {
      return this.slice?.items
    },
    filterEmpty() {
      return this.text.filter((item) => Object.keys(item.rich_text).length !== 0)
    },
    showSlice() {
      return Object.keys(this.heading).length !== 0
    },
  },
}
</script>
