<template>
  <div>
    <RichText :data="text" class="relative special-bullet pl-6 lg:pl-8" />
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
    text() {
      return this.data?.bulletin_text
    },
  },
}
</script>

<style scoped>
.special-bullet::before {
  content: '';
  @apply absolute top-[3px] left-0 h-3 w-3 bg-teal rounded-lg;
}
</style>
