// 该文件可以理解为是一个项目配置文件，可以在此处配置跨域。。。默认在有些版本是隐藏的
// 该文件配制好之后需要重启 run
module.exports = {
  // 服务器对象
  devServer: {
    // 自己本地的ip地址:端口号
    public: "http://192.168.204.41:8080",
    //proxy对象用来配置代理请求
    // proxy:{
    //     //  /abc属于代理名称(小王)
    //    "/abc":{
    //     // 目标服务器位置(小李)
    //         target:"http://127.0.0.1:5050",
    //         // 允许跨域请求
    //         changeOrigin:true,
    //         // 支持webSockets
    //         ws:true,
    //         // 路径重写
    //         pathRewrite:{
    //             "^/abc":"/"
    //         }
    //    }
    // }
  },
};
