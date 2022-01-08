# get new token from FB API
# update local GATSBY_INSTA_ACCESS_TOKEN for current build
# update remote netlify GATSBY_INSTA_ACCESS_TOKEN for next build
echo '## BEGIN NETLIFY UPDATE INSTA TOKEN'
GATSBY_INSTA_ACCESS_TOKEN=$(node -pe 'JSON.parse(process.argv[1]).access_token' "`curl -s -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=$GATSBY_INSTA_ACCESS_TOKEN"`")
netlify env:set GATSBY_INSTA_ACCESS_TOKEN $GATSBY_INSTA_ACCESS_TOKEN

echo 'NEW LOCAL GATSBY_INSTA_ACCESS_TOKEN: '$GATSBY_INSTA_ACCESS_TOKEN
echo 'NEW REMOTE GATSBY_INSTA_ACCESS_TOKEN: '`netlify env:get GATSBY_INSTA_ACCESS_TOKEN`

rm -f .env.development
echo 'GATSBY_INSTAGRAM_ACCESS_TOKEN='$GATSBY_INSTA_ACCESS_TOKEN >> '.env.development'
rm -f .env.production
echo 'GATSBY_INSTAGRAM_ACCESS_TOKEN='$GATSBY_INSTA_ACCESS_TOKEN >> '.env.production'

cat .env.development
cat .env.production
echo '## END NETLIFY UPDATE INSTA TOKEN'