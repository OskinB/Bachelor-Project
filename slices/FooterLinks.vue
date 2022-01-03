<template>
  <div class="mb-10 lg:mb-0">
    <h3 class="mb-2 font-semibold">
      {{ $prismic.asText(heading) }}
    </h3>
    <ul class="flex flex-row flex-wrap md:flex-col gap-x-10 gap-y-6 md:gap-y-4">
      <li v-for="(item, index) in links" :key="index" class="wysiwyg">
        <prismic-link :field="item.link" class="font-medium">
          {{ $prismic.asText(item.link_label) }}
        </prismic-link>
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
      return this.slice?.primary.links_heading
    },
    links() {
      return this.slice?.items
    },
  },
}
</script>
