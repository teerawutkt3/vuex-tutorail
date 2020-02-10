module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-app/'
    : '/',
  rules: {
    'no-console': 'off',
  },
}
