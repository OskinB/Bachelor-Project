<template>
  <div class="flex flex-col justify-between border rounded-xl border-grey">
    <div class="mb-2 lg:mb-4">
      <img :src="image.url" :alt="image.alt" class="w-full object-cover rounded-t-xl" />
    </div>
    <div class="px-2 md:px-4">
      <h3 class="mb-heading typo-h-sm lg:typo-h-sm-desktop max-w-xs overflow-ellipsis overflow-hidden whitespace-nowrap">
        {{ $prismic.asText(heading) }}
      </h3>
      <div class="mb-text typo-b-md lg:typo-b-md-desktop">
        <p class="font-light capitalize">
          {{ $prismic.asText(lowest_price_text) || 'From' }} <span class="font-medium">{{ price }} {{ currency }}</span>
        </p>
      </div>
    </div>
    <div class="flex justify-end p-2 md:p-4">
      <Button :label="linkLabel" :link="link" :btnType="btnType" />
    </div>
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
    image() {
      return this.data?.image
    },
    lowest_price_text() {
      return this.data?.lowest_price_text
    },
    price() {
      return this.data?.price
    },
    currency() {
      return this.data?.currency
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
  },
}
</script>
