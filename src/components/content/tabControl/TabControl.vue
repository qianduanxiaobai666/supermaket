<template>
  <div class="tab-control" v-if="titles.length">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :class="{ active: index === currentIndex }"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  sactivated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.tab-control {
  display: flex;
  text-align: center;
  font-size: 13px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.tab-control-item.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
