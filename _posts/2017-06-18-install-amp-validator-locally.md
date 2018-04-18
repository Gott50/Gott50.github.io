---
title: Install AMP Validator locally
last_modified_at: 2017-10-09
---

Now that we have successfully setup our Blog. 
We should ensure that it is AMP valid.
To validate a website that is online we can just visit 
[validator.ampproject.org](https://validator.ampproject.org/) and type in our url. 

If we want validate before publishing we could use the [AMP ChromeExtension](https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc). 
Or we can do it by adding `#development=1` to the url we want to check in the Browser. 
If we than open the Browsers JS Console it should tell us that the AMP validation was successful:

```
Powered by AMP ⚡ HTML – Version 1457112743399
AMP validation successful.
```

Unfortunately, if that is not the case, the cause of a Failure is not shown. 
Therefor we should install an AMP Validator locally 
in order to check whether our website is valid.
Additionally we can validate the hole Site at once.

### The Steps I took Today:
1. install the npm Package [amphtml-validator](https://www.npmjs.com/package/amphtml-validator) 
by running the command `npm install amphtml-validator --save-dev`
2. add [validator.js](/validator.js), a Script based on [amp-validator demo.js](https://github.com/ampproject/amphtml/blob/master/validator/nodejs/README.md)
3. start local Validator by running `node validator.js`