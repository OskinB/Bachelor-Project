<template>
  <header class="py-6">
    <ContentMaxWidth>
      <nav class="flex justify-between items-center">
        <div class="mb-2">
          <img :src="logo.url" :alt="logo.alt" class="h-14 object-cover" />
        </div>
        <div class="hidden lg:block">
          <slice-zone v-if="links.length !== 0" type="main_menu" queryType="single" :resolver="resolver" :slices="links" class="flex flex-col md:flex-row md:gap-x-8" />
        </div>
        <Slide right :closeOnNavigation="true" class="lg:hidden">
          <a id="home">
            <slice-zone v-if="links.length !== 0" type="main_menu" queryType="single" :resolver="resolver" :slices="links" class="flex flex-col gap-8" />
          </a>
        </Slide>
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

<style scoped>
.bm-menu {
  background-color: white !important;
}
.bm-overlay {
  background-color: lightgrey !important;
}
.bm-cross {
  background-color: black !important;
  height: 24px !important;
}
</style>
