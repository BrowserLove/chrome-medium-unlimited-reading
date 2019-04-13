const isMedium = () => document.querySelector('.siteNav-logo').getAttribute('href') === 'https://medium.com/';
const isMemberPreview = () =>
  document.body.innerHTML.indexOf("You read a lot") > 0
  || document.querySelector('footer .postFade') !== null
  || document.querySelector('main + aside .postFade') !== null;
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

const fetchPremiumContent = callback =>
  fetch('https://cors-anywhere.herokuapp.com/' + document.location, {
    headers: new Headers({
      'Content-Type': 'text/html; charset=utf-8',
      'X-Requested-With': document.location.origin
    }),
  }).then(response => response.text()).then(callback);

(() => {
  if(!isMedium() || !isMemberPreview()) return;

  const currentContent = document.querySelector('main');

  fetchPremiumContent(html => {
    let newContent = html.match(/.*<main[^>]*?>(.*)<\/main>/i);
    newContent = newContent ? (newContent[1] ? newContent[1] : newContent[0]) : null;

    if(newContent) {
      currentContent.innerHTML = newContent;

      removeAnnoyingElements();
    }
  });
})();
