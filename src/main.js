const { getTwitterRefererUrl } = require('./twitter.js');
const mediumDomains = require('./medium_domains.js');

const replaceMediumRefererWithTwitter = details => {
  const newReferer = getTwitterRefererUrl();
  let refererSet = false;

  details.requestHeaders.forEach((header, i) => {
    if (header.name.toLowerCase() === 'referer') {
      refererSet = true;
      details.requestHeaders[i].value = newReferer;
    }

    return header;
  });

  if (!refererSet) {
    details.requestHeaders.push({
      name: 'Referer',
      value: newReferer
    });
  }

  return {
    requestHeaders: details.requestHeaders,
  };
};

chrome.webRequest.onBeforeSendHeaders.addListener(replaceMediumRefererWithTwitter, {
  urls: mediumDomains.map(domain => `*://${domain}/*`),
}, [
  'blocking',
  'requestHeaders',
  'extraHeaders',
]);
