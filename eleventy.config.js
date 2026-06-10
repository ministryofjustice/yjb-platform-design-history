import fs from 'node:fs/promises'
import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

const serviceName = 'YJB Platform design history'

export default function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://govuk-eleventy-plugin.x-govuk.org/get-started/options/
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: serviceName,
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    },
    markdown: {
      headingPermalinks: true,
    },
    serviceNavigation: {
      serviceName,
    },
    stylesheets: [
      '/styles/application.css'
    ],
    templates: {
      searchIndex: true,
      tags: true
    },
    titleSuffix: serviceName,
    // url:
    //   process.env.GITHUB_ACTIONS &&
    //   'https://x-govuk.org/govuk-design-history-template/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    // pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-design-history-template/'
  }
}
