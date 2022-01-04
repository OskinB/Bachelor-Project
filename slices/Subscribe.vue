<template>
  <div v-if="showSlice" :class="bgColor">
    <ContentMaxWidth class="y-space padding-card lg:px-2">
      <div class="gutter flex flex-col md:grid grid-cols-3 gap-6">
        <div class="md:col-span-2">
          <h2 class="mb-heading typo-h-lg lg:typo-h-lg-desktop">
            {{ $prismic.asText(heading) }}
          </h2>
          <RichText :data="text" />
        </div>
        <div class="flex flex-col md:flex-row md:justify-end md:items-center">
          <input v-model="value" type="email" class="mb-2 lg:mb-0 lg:w-full md:mr-6 input" placeholder="Email" />
          <div class="flex justify-end">
            <div v-if="showBtn" class="inline-block">
              <button class="py-3 md:py-4 typo-h-button flex self-center w-max btn px-8 bg-green text-whiteText rounded-xl border border-lightTeal ease-in-out duration-200">
                <span class="btn-paint"></span>
                <span class="btn-paint"></span>
                <span class="btn-paint"></span>
                <span class="btn-paint"></span>
                <span class="btn-label">{{ $prismic.asText(linkLabel) }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentMaxWidth>
  </div>
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
  data() {
    return {
      value: '',
    }
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
    btnType() {
      return this.slice?.primary?.button_type
    },
    color() {
      return this.slice?.primary?.background_color
    },
    bgColor() {
      if (this.color === 'Peach') return 'bg-peach'
      if (this.color === 'Light Grey') return 'bg-lightgrey'
      if (this.color === 'Green') return 'bg-green text-whiteText'
      if (this.color === 'Dark Grey') return 'bg-darkgrey text-whiteText'
      else return ''
    },
    showBtn() {
      return Object.keys(this.linkLabel).length !== 0
    },
    showSlice() {
      if (this.heading[0]?.text === '') return false
      else return true
    },
  },
  methods: {
    clearInput() {
      this.value = ''
    },
  },
}
</script>
