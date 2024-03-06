module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    '@1024pix/stylelint-config-rational-order',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['else', 'extend', 'if', 'include', 'mixin', 'warn'] },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      { ignore: ['after-comment', 'first-nested'] },
    ],
    'value-keyword-case': ['lower', { ignoreKeywords: ['Arial'] }],
    'selector-class-pattern': null,
  },
};
