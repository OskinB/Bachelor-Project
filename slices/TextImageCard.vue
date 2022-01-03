<template>
  <div class="y-space">
    <ContentMaxWidth>
      <div class="gutter">
        <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
          {{ $prismic.asText(title) }}
        </h2>
      </div>
    </ContentMaxWidth>

    <CardTextImg v-for="(item, i) in items" :key="i" :data="item" class="odd:text-pink-600" />
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
  },
}
</script>
