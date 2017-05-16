module.exports = {
  env: {
    embertest: true
  },
  globals: {
    assertTrimmedText: false,
    assertLength: false,
    assertElement: false,
    selectBand: false,
    submit: false,
    server: false
  },
  "rules": {
    "no-global-assign": ["error", {"exceptions": ["server"]}]
  }
};
