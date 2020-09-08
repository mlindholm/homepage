const CleanCSS = require('clean-css');

module.exports = function (config) {
  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addPassthroughCopy('src/images')

  config.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk'
  }
}