module.exports = class Medium {
  isMedium() {
    const logoElement = document.querySelector('.siteNav-logo');

    return logoElement && logoElement.getAttribute('href') === 'https://medium.com/';
  }

  isMemberPreview() {
    return document.body.innerHTML.indexOf("You read a lot") > 0 ||
           document.querySelector('footer .postFade') !== null ||
           document.querySelector('main + aside .postFade') !== null;
  }

  shouldBeUnlimited() {
    return this.isMedium() && this.isMemberPreview();
  }

  setContent(newContent) {
    document.querySelector('main').innerHTML = newContent;
  }
};
