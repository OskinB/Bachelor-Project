<template>
  <header>
    <nav>
      <div>Logo</div>
      <div>
        <slice-zone
          type="main_menu"
          queryType="single"
          :params="{ fetchLinks: 'sub_page.parent_page' }"
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
    // Get menu from Store
    menu() {
      return this.$store.getters.menu
    },
  },
  methods: {},
}
</script>

<style scoped></style>
