# Medium.com Unlimited Reading chrome extension

## Removes the article read limit of member-only content. 

![users count](https://img.shields.io/chrome-web-store/users/keckgflodjmhejpbhfbfoioonoeeckng.svg)
![rating](https://img.shields.io/chrome-web-store/rating/keckgflodjmhejpbhfbfoioonoeeckng.svg)
![version](https://img.shields.io/chrome-web-store/v/keckgflodjmhejpbhfbfoioonoeeckng.svg)

Extremely lightweight & blazing-fast solution to read premium articles without a limit!

[Get the extension!](https://chrome.google.com/webstore/detail/mediumcom-unlimited-readi/keckgflodjmhejpbhfbfoioonoeeckng)

Replaces medium.com (and custom domain publications) requests referers to Twitter shortener urls. 
*This is not an exploit of a bug as Medium made it intentionally for visitors from Twitter to be able to read without restrictions.*

[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/OwfXVvb)

### Q & A

**Q:** Is it legal? 

**A:** [See what Medium staff say](https://twitter.com/ev/status/1100899021621583872)

**Q:** I've found a Medium publication that doesn't work with the extension. How can I help? 

**A:** *The use of custom domains for publications is deprecated* but the extension does support it. Add it to the end of the domain lists in `public/manifest.json` & `src/medium_domains.js` (as per example) and make a pull request. Thank you for your contribution!
