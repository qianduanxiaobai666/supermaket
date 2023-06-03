module.exports = {
  transpileDependencies: true,
  // 路径别名配置
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        common: "@/common",
        views: "@/views",
      },
    },
  },
};
