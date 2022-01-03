<template>
  <header class="py-6 bg-gray-50">
    <ContentMaxWidth>
      <nav class="flex justify-between items-center">
        <div class="mb-2">
          <nuxt-img v-if="logo.url" :src="logo.url" :alt="logo.alt" class="h-14 object-cover" />
        </div>
        <div>
          <slice-zone type="main_menu" queryType="single" :resolver="resolver" :slices="links" class="flex flex-col md:flex-row md:gap-x-8" />
        </div>
      </nav>
    </ContentMaxWidth>
  </header>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    menu() {
      return this.$store.getters.menu
    },
    logo() {
      return this.menu?.logo
    },
    links() {
      return this.menu?.body
    },
  },
  methods: {
    resolver({ sliceName }) {
      return import(`~/slices/${sliceName}.vue`)
    },
  },
}
</script>

<style scoped></style>
