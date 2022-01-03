<template>
  <ContentMaxWidth v-if="showSlice" class="y-space rounded-lg" :class="bgFiltered" :style="{ backgroundImage: styleImageUrl || '' }">
    <div class="gutter md:gutter-special padding-card flex flex-col justify-center">
      <div>
        <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
          {{ $prismic.asText(heading) }}
        </h2>
        <RichText :data="text" />
      </div>
      <div class="flex justify-end">
        <Button :label="linkLabel" :link="link" :btnType="btnType" />
      </div>
    </div>
  </ContentMaxWidth>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  computed: {
    heading() {
      return this.slice?.primary?.heading
    },
    text() {
      return this.slice?.primary?.text
    },
    linkLabel() {
      return this.slice?.primary?.link_label
    },
    link() {
      return this.slice?.primary?.link
    },
    btnType() {
      return this.slice?.primary?.button_type
    },
    bgImage() {
      return this.slice?.primary?.background_image?.url
    },
    styleImageUrl() {
      return 'url(' + this.bgImage + ')'
    },
    bgFilter() {
      return this.slice?.primary?.bg_filter_color
    },
    bgFiltered() {
      if (this.bgFilter === 'Dark Grey') return 'bg-darkgreyFilter bg-blend-overlay bg-center bg-no-repeat bg-cover text-whiteText'
      if (this.bgFilter === 'Light Grey') return 'bg-lightgreyFilter bg-blend-overlay bg-center bg-no-repeat bg-cover'
      else return ''
    },
    showSlice() {
      if (this.heading[0]?.text === '') return false
      else return true
    },
  },
}
</script>
