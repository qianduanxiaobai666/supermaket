<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in goods"
      :key="item.iid"
      class="item"
      :goodsItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  sactivated() {}, //如果页面有keep-alive缓存功能，这个函数会触发

  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    GoodsListItem,
  },
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}
.goods-list .item {
  width: 48%;
}
</style>
