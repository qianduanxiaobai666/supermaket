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
  // 防火墙访问问题
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    client: {
      webSocketURL: "ws://0.0.0.0:3000/ws",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
