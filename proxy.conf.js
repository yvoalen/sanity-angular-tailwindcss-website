const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://vpse9edy.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;