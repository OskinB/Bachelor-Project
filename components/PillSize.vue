<template>
  <div class="p-4 typo-b-md lg:typo-b-md-desktop md:max-w-max grid grid-cols-2 justify-between bg-lightgrey border rounded-xl border-grey">
    <p class="font-medium">{{ liter }} L</p>
    <p>{{ price }} {{ currency }}</p>
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
  computed: {
    liter() {
      return this.data?.liter
    },
    price() {
      return this.data?.price
    },
    currency() {
      return this.data?.currency
    },
  },
}
</script>

<style scoped></style>
