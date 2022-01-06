<template>
  <div v-if="showSlice" class="h-full lg:h-[550px]" :class="gradient">
    <ContentMaxWidth class="bot-space">
      <div class="gutter md:gutter-special md:w-1/2 py-20 md:py-32 flex flex-col justify-center">
        <h1 class="mb-4 lg:mb-10 typo-h-xl lg:typo-h-xl-desktop">
          {{ $prismic.asText(title) }}
        </h1>
        <prismic-rich-text :field="text" class="typo-b-lg lg:typo-b-lg-desktop" />
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
  data() {
    return {}
  },
  computed: {
    title() {
      return this.slice?.primary?.title
    },
    text() {
      return this.slice?.primary?.text
    },
    color() {
      return this.slice?.primary?.gradient_color
    },
    gradient() {
      if (this.color === 'Teal') return 'grad-teal'
      if (this.color === 'Peach') return 'grad-peach'
      else return ''
    },
    showSlice() {
      if (this.title[0]?.text === '') return false
      else return true
    },
  },
}
</script>

<style scoped>
.grad-teal {
  /* lg:10deg */
  background-image: linear-gradient(20deg, rgba(0, 128, 128, 0), rgba(0, 128, 128, 0.04), rgba(0, 128, 128, 1));
}
.grad-peach {
  background-image: linear-gradient(20deg, rgba(255, 180, 140, 0), rgba(255, 180, 140, 0.06), rgba(255, 180, 140, 1));
}
</style>
