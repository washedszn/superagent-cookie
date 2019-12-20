# superagent-cookie
Superagent plugin allowing you to save and use cookies across multiple requests.

## Installation

Simply run the following line in your terminal...

```
npm install superagent-cookie
```

And you're good to go!

## Usage

```javascript
const superagent = require('superagent');
const cookie = require('superagent-cookie');

superagent
.get('https://www.google.com/)
.then(res => {
  cookie.save(res.headers['set-cookie'], 'googleCookies')
})
```

#### **```cookie.save(responseCookies, 'cookieObject')```**

This will save ```responseCookies``` to an object named ```'cookieObject'```. Saving to the same object will replace duplicate cookies with the newly saved ones.

#### **```cookie.use('cookieObject')```**

```javascript
let headers = {
  'cookie': cookie.use('cookieObject')
}

superagent
.get(url)
.set(headers)
```

This will return cookies saved in ```'cookieObject'``` location in the correct format to be used in your request headers.
