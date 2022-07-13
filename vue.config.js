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
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5, // 换算基数，1rem相当于37.5px, 值为37.5时, 375/10 =37.5
            exclude: /(node_module)/, // 利用正则表达式排除某些文件夹的方法
            mediaQuery: false,
            minPixelValue: 3, // 设置替换最小像素(3px以上才转rem)
          }),
        ],
      },
    },
  },
};
