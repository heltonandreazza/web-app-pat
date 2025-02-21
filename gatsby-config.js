require('dotenv').config({
  path: `.env`,
});

const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'backgrounds',
        path: path.join(__dirname, 'src', 'images', 'bgs'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ADS_ID], // Uses the environment variable
        gtagConfig: { anonymize_ip: true },
        pluginConfig: { head: true },
        includeInDevelopment: true,
      },
    },
  ],
};
