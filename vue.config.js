module.exports = {
  pages: {
    index: {
      title: 'Moto.plus',
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // 区分不同环境下的路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // 生产环境下不校验 eslint
  lintOnSave: process.env.NODE_ENV !== 'production',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
  },
};
