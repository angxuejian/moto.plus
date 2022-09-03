module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)'], // 全部测试
  // testMatch: ['**/tests/unit/**/*.item.spec.[jt]s?(x)'], // 测试 .item 单个文件
};
