const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-source-instagram',
    //   options: {
    //     username: '14756696469',
    //     access_token: 'a valid access token',
    //     instagram_id: 'your instagram_business_account id',
    //     paginate: 100,
    //     maxPosts: 1000,
    //     hashtags: {
    //       enabled: true,
    //       commentDepth: 10,
    //     },
    //   },
    // },
    'gatsby-plugin-instagram-embed',
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
