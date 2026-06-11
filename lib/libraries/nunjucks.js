import { Environment, FileSystemLoader } from 'nunjucks'

export default (() => {
  const parser = new Environment(
    new FileSystemLoader(
      [
        'app/_components',
        'app/_layouts',
        'node_modules/govuk-frontend/dist/'
      ], {
        watch: process.env.NODE_ENV === 'development'
      }
    ), {
      lstripBlocks: true,
      trimBlocks: true
    }
  )

  return parser
})()
