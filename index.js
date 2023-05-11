module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['else', 'extend', 'if', 'include', 'mixin', 'warn'] },
    ],
    'color-hex-length': 'long',
    'rule-empty-line-before': [
      'always-multi-line',
      { ignore: ['after-comment', 'first-nested'] },
    ],
    'value-keyword-case': ['lower', { ignoreKeywords: ['Arial'] }],
    'selector-class-pattern': null,
  },
};
