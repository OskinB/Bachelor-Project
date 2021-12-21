<template>
  <header>
    <nav class="bg-gray-300 flex justify-between">
      <div>Logo</div>
      <div>
        <slice-zone
          type="main_menu"
          queryType="single"
          :resolver="resolver"
          :slices="links"
        />
      </div>
    </nav>
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
