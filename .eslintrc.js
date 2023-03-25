module.exports = {
  plugins: ['prettier'], // eslint-plugin-prettier插件能调用prettier对你的代码风格进行检查，其原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier标记
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': 'error', // 表示在被prettier标记的地方抛出错误信息：
    parser: 0,
  },
  extends: ['plugin:prettier/recommended'], // 继承prettier默认的规则 通过使用eslint-config-prettier插件，能够关闭一些不必要的或者是与 prettier 冲突的 eslint 规则。使用的时候需要注意 prettier 必须要在extends的最后一项。
};
