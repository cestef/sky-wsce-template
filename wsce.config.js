const addons = require('./addons');
/**
 * @type {import("./wsce").WsceConfig}
 */
module.exports = {
  scraper: {
    urls: ['https://sport.sky.ch', 'https://show.sky.ch', 'https://sky.ch'],
    puppeteerOptions: {},
    addons,
    interval: 60_000,
    forceRecreateBrowser: true,
  },
  exporter: {
    port: 9924,
  },
};
