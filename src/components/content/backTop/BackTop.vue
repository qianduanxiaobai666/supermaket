<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  sactivated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.back-top {
  position: fixed;
  right: 5px;
  bottom: 45px;
}
.back-top img {
  height: 43px;
  width: 43px;
}
</style>
