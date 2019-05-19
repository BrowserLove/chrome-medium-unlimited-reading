module.exports = class MediumUnlimited {
  constructor() {
    this.annoyingElementSelectors = [
      'footer .postFade',
      'main + aside .postFade'
    ];
    this.isLoading = false;
  }

  removeAnnoyingElements() {
    this.annoyingElementSelectors.forEach(selector => {
      const element = document.querySelector(selector);
      if(element) element.parentNode.removeChild(element);
    });
  }

  fetchPremiumContent() {
    this.isLoading = true;

    return fetch('https://cors-anywhere.herokuapp.com/' + document.location, {
      headers: new Headers({
        'Content-Type': 'text/html; charset=utf-8',
        'X-Requested-With': document.location.origin
      }),
    })
    .then(response => response.text())
    .then(text => {
      this.isLoading = false;
      const newContentMatch = text.match(/.*<main[^>]*?>(.*)<\/main>/i);

      if(newContentMatch && newContentMatch.length > 0) {
        return newContentMatch[1] ? newContentMatch[1] : newContentMatch[0];
      }

      return null;
    });
  }

  setMessage(message) {
  }
};
