<template>
  <ContentMaxWidth class="bot-space">
    <div v-if="showSlice" class="md:flex" :class="layout ? 'flex-row' : 'flex-row-reverse'">
      <div class="gutter md:w-7/12 flex flex-col justify-center" :class="layout ? 'md:mr-4' : 'md:ml-4'">
        <h1 class="mb-4 lg:mb-10 typo-h-xl lg:typo-h-xl-desktop">
          {{ $prismic.asText(title) }}
        </h1>
        <prismic-rich-text :field="text" class="mb-6 lg:mb-8 typo-b-lg lg:typo-b-lg-desktop" />
        <div v-if="showBtn" class="mb-6 flex justify-end">
          <Button :label="linkLabel" :link="link" :btnType="btnType" />
        </div>
      </div>
      <div>
        <nuxt-img v-if="image.url" :src="image.url" :alt="image.alt" class="md:h-[650px] object-cover" :class="layout ? 'md:clip-path-left' : 'md:clip-path-right'" />
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
    layout() {
      if (this.slice?.primary?.text_img_layout === 'Text left - Img right') return true
      else return false
    },
    title() {
      return this.slice?.primary?.title
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
    image() {
      return this.slice?.primary?.image
    },
    showBtn() {
      return Object.keys(this.linkLabel).length !== 0
    },
    showSlice() {
      return Object.keys(this.image).length !== 0
    },
  },
}
</script>
