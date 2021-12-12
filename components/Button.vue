<template>
  <div class="m-5">
    <button class="btn">
      <span class="btn-paint"></span>
      <span class="btn-paint"></span>
      <span class="btn-paint"></span>
      <span class="btn-paint"></span>
      <span class="btn-label">Click me now</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
.btn {
  appearance: none;
  padding: 20px 30px;
  font-size: 24px;
  border-radius: 59px;
  border: 2px solid #000;
  color: #000;
  background-color: transparent;
  text-transform: uppercase;
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
  /* testa með width á hover litnum */
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