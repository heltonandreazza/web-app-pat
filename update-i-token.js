// UPDATE INSTAGRAM LONG LIVE TOKEN
const fetch = require('node-fetch')
const { exec } = require('child_process')

console.log(
  'UPDATE-I-TOKEN:process.env.GATSBY_INSTA_ACCESS_TOKEN',
  `VALUE: ${process.env.GATSBY_INSTA_ACCESS_TOKEN}`,
)

fetch(
  'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' +
    process.env.GATSBY_INSTA_ACCESS_TOKEN,
)
  .then(function (response) {
    return response.json()
  })
  .then(function (result) {
    const newAccessToken = result.access_token
    console.log('UPDATE-I-TOKEN:newAccessToken', newAccessToken)
    exec(
      'netlify link && netlify env:set GATSBY_INSTA_ACCESS_TOKEN "' +
        newAccessToken +
        '"',
    )
    return newAccessToken
  })
