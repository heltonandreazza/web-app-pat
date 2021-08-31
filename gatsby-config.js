const path = require('path')

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
        path: path.join(__dirname, 'src', 'images', 'bgs'), // wherever background images are stored
      },
    },
  ],
}
