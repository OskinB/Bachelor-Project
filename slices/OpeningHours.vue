<template>
  <div class="mb-10 lg:mb-0">
    <h3 class="mb-2 font-semibold">
      {{ $prismic.asText(heading) }}
    </h3>

    <ul class="flex flex-row flex-wrap md:flex-col gap-x-10 gap-y-6 md:gap-y-4">
      <li v-for="(item, index) in items" :key="index">
        {{ $prismic.asText(item.day_span) }}
        <span class="ml-1">{{ $prismic.asText(item.time_span) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    heading() {
      return this.slice?.primary.opening_hours_heading
    },
    items() {
      return this.slice?.items
    },
  },
}
</script>
