module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-app/'
    : '/',
  "extends": "eslint:recommended",
  "rules": {
    "no-console": "error",
  }
}
