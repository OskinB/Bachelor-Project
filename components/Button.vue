<template>
  <div v-if="showBtn" class="inline-block">
    <prismic-link :field="link" class="py-3 md:py-4 typo-h-button flex self-center w-max" :class="buttonType">
      <span v-if="primaryBtn" class="btn-paint"></span>
      <span v-if="primaryBtn" class="btn-paint"></span>
      <span v-if="primaryBtn" class="btn-paint"></span>
      <span v-if="primaryBtn" class="btn-paint"></span>
      <span :class="primaryBtn ? 'btn-label' : ''">{{ $prismic.asText(label) }}</span>
    </prismic-link>
  </div>
</template>

<script>
export default {
  props: {
    label: Array,
    link: Object,
    btnType: String,
  },
  computed: {
    primaryBtn() {
      return this.btnType === 'Primary button'
    },
    buttonType() {
      if (this.btnType === 'Primary button') return 'btn px-8 bg-green text-whiteText rounded-xl border border-lightTeal ease-in-out duration-200'
      return 'px-4 text-teal rounded-xl underline'
    },
    showBtn() {
      return Object.keys(this.label).length !== 0
    },
  },
}
</script>

<style scoped>
.btn {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  overflow: hidden;
}
.btn-label {
  position: relative;
}
.btn-paint {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #008080;
  width: 85px;
  height: 120px;
  transition: transform 0.4s ease;
}
.btn-paint:nth-child(1) {
  transform-origin: 50% 0;
  transform: translate(-35px, -20px) rotate(-20deg) scale(1, 0);
}
.btn-paint:nth-child(2) {
  transform-origin: 50% 100%;
  transform: translate(21px, -20px) rotate(20deg) scale(1, 0);
  transition-delay: 0.2s;
}
.btn-paint:nth-child(3) {
  transform-origin: 50% 0;
  transform: translate(81px, -20px) rotate(-20deg) scale(1, 0);
  transition-delay: 0.4s;
}
.btn-paint:nth-child(4) {
  transform-origin: 50% 100%;
  transform: translate(131px, -20px) rotate(20deg) scale(1, 0);
  transition-delay: 0.7s;
}
.btn:hover > .btn-paint:nth-child(1) {
  transform: translate(-35px, -20px) rotate(-20deg) scale(1, 1);
}
.btn:hover > .btn-paint:nth-child(2) {
  transform: translate(21px, -20px) rotate(20deg) scale(1, 1);
}
.btn:hover > .btn-paint:nth-child(3) {
  transform: translate(81px, -20px) rotate(-20deg) scale(1, 1);
}
.btn:hover > .btn-paint:nth-child(4) {
  transform: translate(131px, -20px) rotate(20deg) scale(1, 1);
}
</style>
