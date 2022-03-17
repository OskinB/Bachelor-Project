<template>
  <div v-if="showSlice" class="mb-4 lg:mb-10 padding-card lg:px-2" :class="bgColor">
    <ContentMaxWidth>
      <div class="gutter sm:px-2 lg:px-0 sm:grid sm:grid-cols-3 sm:items-center sm:gap-6 lg:gap-10">
        <div class="mb-heading flex justify-center">
          <img :src="image.url" :alt="image.alt" class="h-[200px] lg:h-80 w-full max-w-md object-cover rounded-lg" />
        </div>
        <div class="sm:col-span-2">
          <h3 class="mb-heading typo-h-sm lg:typo-h-md-desktop">
            {{ $prismic.asText(heading) }}
          </h3>
          <RichText :data="text" />
          <div class="flex justify-end">
            <Button :label="linkLabel" :link="link" :btnType="btnType" />
          </div>
        </div>
      </div>
    </ContentMaxWidth>
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
    heading() {
      return this.data?.heading
    },
    text() {
      return this.data?.text
    },
    image() {
      return this.data?.image
    },
    color() {
      return this.data?.background_color
    },
    bgColor() {
      if (this.color === 'Peach') return 'bg-peach'
      if (this.color === 'Light Grey') return 'bg-lightgrey'
      if (this.color === 'Green') return 'bg-green text-whiteText'
      if (this.color === 'Dark Grey') return 'bg-darkgrey text-whiteText'
      else return ''
    },
    linkLabel() {
      return this.data?.link_label
    },
    link() {
      return this.data?.link
    },
    btnType() {
      return this.data?.button_type
    },
    showSlice() {
      return Object.keys(this.image).length !== 0
    },
  },
}
</script>
