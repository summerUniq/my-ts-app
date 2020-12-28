module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended'],
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    parser: 'babel-eslint',
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
      // https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
      'import/no-named-as-default': "off",
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.js', '.jsx', 'ts', 'tsx'],
        },
      ],
      // 在写onClick事件时需要写role
      'import/no-unresolved': "off",
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      // 除了for循环中，不能使用i++
      'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
      // 不能使用a && a()以及a ? b() : c()。
      'no-unused-expressions': [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      'no-void': "off", // 允许使用void
      // 除了单行的方法，其他需要加空行
      'lines-between-class-members': ["error", "always", {exceptAfterSingleLine: true}],
      "no-console": ["error", {allow: ["log"]}],
      "one-var":"off", // 不强制函数中的变量要么一起声明要么分开声明
      "no-new": "off", // 不禁止使用 new
      "radix": "off", // 不强制在parseInt()使用基数参数
      "no-bitwise": "off" // 可以使用按位运算符
    },
  };