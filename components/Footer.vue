<template>
  <div class="padding-card bg-lightgrey">
    <ContentMaxWidth>
      <div class="gutter typo-b-md lg:typo-b-md-desktop">
        <div class="flex flex-col md:mb-10 md:flex-row-reverse md:justify-between">
          <slice-zone type="footer" queryType="single" :resolver="resolver" :slices="slices" class="md:mt-4 md:flex md:flex-row md:gap-x-60" />

          <div class="mb-10 flex flex-col justify-self-start">
            <div class="mb-2">
              <nuxt-img v-if="logo.url" :src="logo.url" :alt="logo.alt" class="h-12 lg:h-14 object-cover" />
            </div>
            <prismic-rich-text :field="address" class="" />
            <prismic-rich-text :field="phone" class="my-1" />
            <prismic-rich-text :field="email" class="" />
          </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse md:justify-between gap-10">
          <div class="flex flex-row">
            <prismic-link :field="facebook" class="group"><nuxt-img src="~/assets/facebook.svg" alt="Facebook" class="h-6 w-auto" /></prismic-link>
            <prismic-link :field="instagram" class="group"><nuxt-img src="~/assets/instagram.svg" alt="Instagram" class="h-6 w-auto" /></prismic-link>
          </div>
          <div class="copyright flex flex-row">
            <span>&copy;{{ currentYear }} {{ $prismic.asText(companyName) }}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </ContentMaxWidth>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  computed: {
    footer() {
      return this.$store.getters.footer
    },
    companyName() {
      return this.footer?.company_name
    },
    address() {
      return this.footer?.address
    },
    email() {
      return this.footer?.email
    },
    facebook() {
      return this.footer?.facebook
    },
    instagram() {
      return this.footer?.instagram
    },
    logo() {
      return this.footer?.logo
    },
    phone() {
      return this.footer?.phone
    },
    slices() {
      return this.footer?.body
    },
    currentYear() {
      return new Date().getFullYear()
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
