<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  sactivated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  data() {
    return {
      scroll: null,
    };
  },

  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },

  mounted() {
    // console.log(this.$refs.wrapper);
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true,
        probeType: this.probeType,
      });

      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }, 700);
  },

  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.wrapper {
  overflow: hidden;
}
</style>
