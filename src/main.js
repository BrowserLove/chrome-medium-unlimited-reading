const Medium = require('./medium');
const MediumUnlimited = require('./medium-unlimited');

(() => {
  const medium = new Medium();

  if(!medium.shouldBeUnlimited()) return;

  const mediumUnlimited = new MediumUnlimited();
  mediumUnlimited.setMessage('Loading... 😴');

  mediumUnlimited.fetchPremiumContent().then(newContent => {
    if(newContent) {
      medium.setContent(newContent);
      mediumUnlimited.removeAnnoyingElements();
      mediumUnlimited.setMessage('Loaded 😎');
    }
    else {
      mediumUnlimited.setMessage('Failed 😓');
    }
  });
})();
