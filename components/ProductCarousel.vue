<template>
  <div class="w-full sm:h-[300px] sm:min-w-max">
    <img :src="image.url" :alt="image.alt" class="img w-full object-cover rounded-xl" />
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
    image() {
      return this.data?.image
    },
  },
}
</script>

<style scoped>
.img {
  height: inherit;
}
</style>
