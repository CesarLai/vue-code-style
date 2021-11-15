module.exports = {
  chainWebpack(config) {
    config.devtool("source-map");
    config.plugin("html").tap((args) => {
      args[0].title = "Vue参考代码规范";
      return args;
    });
  },
};
