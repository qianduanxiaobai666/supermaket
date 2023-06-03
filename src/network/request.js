import axios from "axios";

export function request(config) {
  const instace = axios.create({
    // 1.创建axios实例
    baseURL: "http://123.207.32.32:7888/api/hy66",
    timeout: 5000,
  });
  //2.拦截请求
  instace.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //3.响应拦截
  instace.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  return instace(config);
}
