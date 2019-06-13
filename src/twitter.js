const MD5 = require('md5.js');

const getRandomTwitterShortenerHandle = () => {
  const randomString = new MD5().update(new Date().toISOString().replace(/\.\d+Z/,'Z')).digest('hex');

  return randomString.substring(randomString.length - 11).split('').reverse().join('');
};

const getTwitterRefererUrl = () => `https://t.co/${getRandomTwitterShortenerHandle()}`;

module.exports = {
  getTwitterRefererUrl,
};
