<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- Scroll -->
    <scroll
      class="scroll-content"
      ref="scroll"
      :probeType="3"
      @scroll="contenScroll"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周推荐 -->
      <feature-view />
      <!-- tab控制层 -->
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <!-- goods商品展示 -->
      <goods-list :goods="goodsList"></goods-list>
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!-- <ul>
      <li>我是li1</li>
      <li>我是li2</li>
      <li>我是li3</li>
      <li>我是li4</li>
      <li>我是li5</li>
      <li>我是li6</li>
      <li>我是li7</li>
      <li>我是li8</li>
      <li>我是li9</li>
      <li>我是li10</li>
      <li>我是li11</li>
      <li>我是li12</li>
      <li>我是li13</li>
      <li>我是li14</li>
      <li>我是li15</li>
      <li>我是li16</li>
      <li>我是li17</li>
      <li>我是li18</li>
      <li>我是li19</li>
      <li>我是li20</li>
      <li>我是li21</li>
      <li>我是li22</li>
      <li>我是li23</li>
      <li>我是li24</li>
      <li>我是li25</li>
      <li>我是li26</li>
      <li>我是li27</li>
      <li>我是li28</li>
      <li>我是li29</li>
      <li>我是li30</li>
      <li>我是li31</li>
      <li>我是li32</li>
      <li>我是li33</li>
      <li>我是li34</li>
      <li>我是li35</li>
      <li>我是li36</li>
      <li>我是li37</li>
      <li>我是li38</li>
      <li>我是li39</li>
      <li>我是li40</li>
      <li>我是li41</li>
      <li>我是li42</li>
      <li>我是li43</li>
      <li>我是li44</li>
      <li>我是li45</li>
      <li>我是li46</li>
      <li>我是li47</li>
      <li>我是li48</li>
      <li>我是li49</li>
      <li>我是li50</li>
      <li>我是li51</li>
      <li>我是li52</li>
      <li>我是li53</li>
      <li>我是li54</li>
      <li>我是li55</li>
      <li>我是li56</li>
      <li>我是li57</li>
      <li>我是li58</li>
      <li>我是li59</li>
      <li>我是li60</li>
      <li>我是li61</li>
      <li>我是li62</li>
      <li>我是li63</li>
      <li>我是li64</li>
      <li>我是li65</li>
      <li>我是li66</li>
      <li>我是li67</li>
      <li>我是li68</li>
      <li>我是li69</li>
      <li>我是li70</li>
      <li>我是li71</li>
      <li>我是li72</li>
      <li>我是li73</li>
      <li>我是li74</li>
      <li>我是li75</li>
      <li>我是li76</li>
      <li>我是li77</li>
      <li>我是li78</li>
      <li>我是li79</li>
      <li>我是li80</li>
      <li>我是li81</li>
      <li>我是li82</li>
      <li>我是li83</li>
      <li>我是li84</li>
      <li>我是li85</li>
      <li>我是li86</li>
      <li>我是li87</li>
      <li>我是li88</li>
      <li>我是li89</li>
      <li>我是li90</li>
      <li>我是li91</li>
      <li>我是li92</li>
      <li>我是li93</li>
      <li>我是li94</li>
      <li>我是li95</li>
      <li>我是li96</li>
      <li>我是li97</li>
      <li>我是li98</li>
      <li>我是li99</li>
      <li>我是li100</li>
    </ul> -->
  </div>
</template>

<script>
// 网络请求方法
import { getHomeMultidata, getHomeGoods } from "network/home";

//业务组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

// 内容组件
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "../../components/content/backTop/BackTop.vue";

// home子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentIndex: "pop",
      isShowBackTop: false,
    };
  },

  created() {
    this.getHomeMultidata();

    // getHomeGoods调用
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  computed: {
    goodsList() {
      return this.goods[this.currentIndex].list;
    },
  },

  methods: {
    /**
     * 事件监听函数
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentIndex = "pop";
          break;
        case 1:
          this.currentIndex = "new";
          break;
        case 2:
          this.currentIndex = "sell";
          break;

        default:
          this.currentIndex = "pop";
          break;
      }
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    contenScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },

    //1.请求轮播图和推荐数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    // 请求分类展示数据
    getHomeGoods(type) {
      let page = (this.goods[type].page += 1);
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        // console.log(this.goods[type]);
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
  /* padding-top: 44px; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
.tab-control {
  position: sticky;
  /* left: 0;
  right: 0; */
  top: 44px;
  z-index: 9;
}
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: calc(100%-93px); */
}
</style>
