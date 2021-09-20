module.exports = {
  server: {
    command: 'SERVE=true yarn build',
    port: 10001,
    protocol: 'http',
    debug: false,
    launchTimeout: 25000,
  },
};
