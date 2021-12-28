<template>
  <div class="text-teal bg-lightgrey">
    <h2>Ég er Menu prufu slice</h2>
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
  computed: {},
}
</script>
