const isMedium = () => {
  const logoElement = document.querySelector('.siteNav-logo');

  return logoElement && logoElement.getAttribute('href') === 'https://medium.com/';
}

const isMemberPreview = () =>
  document.body.innerHTML.indexOf("You read a lot") > 0 ||
  document.querySelector('footer .postFade') !== null ||
  document.querySelector('main + aside .postFade') !== null;

const removeAnnoyingElements = () => {
  const annoyingElementSelectors = [
    'footer .postFade',
    'main + aside .postFade'
  ];

  annoyingElementSelectors.forEach(selector => {
    const element = document.querySelector(selector);
    if(element) element.parentNode.removeChild(element);
  });
}

const fetchPremiumContent = () =>
  fetch('https://cors-anywhere.herokuapp.com/' + document.location, {
    headers: new Headers({
      'Content-Type': 'text/html; charset=utf-8',
      'X-Requested-With': document.location.origin
    }),
  })
  .then(response => response.text())
  .then(text => {
      const newContentMatch = text.match(/.*<main[^>]*?>(.*)<\/main>/i);

      if(newContentMatch && newContentMatch.length > 0) {
        return newContentMatch[1] ? newContentMatch[1] : newContentMatch[0];
      }

      return null;
  });

(() => {
  if(!isMedium() || !isMemberPreview()) return;

  fetchPremiumContent().then(newContent => {
    document.querySelector('main').innerHTML = newContent;
    removeAnnoyingElements();
  });
})();
