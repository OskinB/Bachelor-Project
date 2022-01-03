<template>
  <div>
    <prismic-rich-text :field="data" class="wysiwyg mb-text typo-b-md lg:typo-b-md-desktop" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: false,
      default() {
        return {}
      },
    },
  },
}
</script>
