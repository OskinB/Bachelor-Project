<template>
  <div>
    <div class="md:hidden mb-text typo-b-md lg:typo-b-md-desktop grid grid-cols-2">
      <div class="ml-8 font-medium">
        <p>Shine small</p>
        <p>Coverage per L</p>
        <p>Drying time</p>
        <p>Surfaces</p>
        <p>Area</p>
        <p>Storage</p>
      </div>
      <div class="">
        <p>{{ $prismic.asText(shine) }}</p>
        <p>{{ $prismic.asText(coveragePerL) }} <span v-if="showSymbol">&#x33A1;</span></p>
        <p>{{ $prismic.asText(dryingTime) }}</p>
        <p>{{ $prismic.asText(surfaces) }}</p>
        <p>{{ $prismic.asText(area) }}</p>
        <p>{{ $prismic.asText(storage) }}</p>
      </div>
    </div>

    <div class="hidden md:gutter-special mb-text typo-b-md lg:typo-b-md-desktop md:grid grid-cols-2 gap-28">
      <div class="grid grid-cols-2">
        <div class="font-medium">
          <p>Shine medium</p>
          <p>Coverage per L</p>
          <p>Drying time</p>
        </div>
        <div class="">
          <p>{{ $prismic.asText(shine) }}</p>
          <p>{{ $prismic.asText(coveragePerL) }} <span v-if="showSymbol">&#x33A1;</span></p>
          <p>{{ $prismic.asText(dryingTime) }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="font-medium">
          <p>Surfaces</p>
          <p>Area</p>
          <p>Storage</p>
        </div>
        <div class="">
          <p>{{ $prismic.asText(surfaces) }}</p>
          <p>{{ $prismic.asText(area) }}</p>
          <p>{{ $prismic.asText(storage) }}</p>
        </div>
      </div>
    </div>
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
    shine() {
      return this.data.shine
    },
    coveragePerL() {
      return this.data.coverage_per_l
    },
    dryingTime() {
      return this.data.drying_time
    },
    surfaces() {
      return this.data.surfaces
    },
    area() {
      return this.data.area
    },
    storage() {
      return this.data.storage
    },
    showSymbol() {
      return Object.keys(this.coveragePerL).length !== 0
    },
  },
}
</script>
