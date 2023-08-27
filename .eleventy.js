const { EleventyI18nPlugin } = require("@11ty/eleventy");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./_data/i18n');
console.log(translations)

const defaultLanguage = 'en-US';

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage,
  });

  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': defaultLanguage
    }
  });

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
};
