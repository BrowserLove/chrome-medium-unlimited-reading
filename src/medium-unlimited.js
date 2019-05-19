const elementSelectors = {
  message: '.medium-unlimited-message',
  annoying: [
    'footer .postFade',
    'main + aside .postFade'
  ]
};

module.exports = class MediumUnlimited {
  constructor(pluginName) {
    this.pluginName = pluginName;
    this.isLoading = false;
    this.createMessageElement();
  }

  removeAnnoyingElements() {
    elementSelectors.annoying.forEach(selector => {
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

  createMessageElement() {
    document.querySelector('main h1').insertAdjacentHTML(
      'afterend',
      `<div
        style="
          font-size: 13px;
          margin: 5px 0;
          opacity: 0.8;"
        class="${elementSelectors.message.split('.')[1]}">
       </div>`
    );
  }

  getMessageElement() {
    let messageElement = document.querySelector(elementSelectors.message);

    if (!messageElement) {
      this.createMessageElement();
      messageElement = document.querySelector(elementSelectors.message);
    }

    return messageElement;
  }

  setMessage(message) {
    this.getMessageElement().innerHTML = `<strong>${this.pluginName}.</strong> ${message}`;
  }
};
