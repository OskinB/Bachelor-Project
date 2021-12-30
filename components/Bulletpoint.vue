<template>
  <div class="flex flex-row">
    <div class="mr-4 h-4 w-4 bg-teal rounded-lg"></div>
    <prismic-rich-text :field="text" class="mb-text typo-b-md lg:typo-b-md-desktop" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    text() {
      return this.data?.bulletin_text
    },
  },
  methods: {},
}
</script>

<style scoped></style>
