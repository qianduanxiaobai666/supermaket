<template>
  <div class="recommend" v-if="recommends.length">
    <div class="recommend-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return;
      },
    },
  },
  sactivated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.recommend {
  display: flex;
  /* width: 100%; */
  text-align: center;
  font-size: 12px;
  margin-top: 8px;
  padding-bottom: 25px;
  border-bottom: 8px solid #eeeeee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 68px;
  height: 68px;
  margin-bottom: 8px;
}
</style>
