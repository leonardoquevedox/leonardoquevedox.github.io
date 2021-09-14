// eslint-disable-next-line
require = require('esm')(module)

const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        context: path.resolve(__dirname, 'src/context'),
        config: path.resolve(__dirname, 'src/config'),
        data: path.resolve(__dirname, 'src/data'),
        layouts: path.resolve(__dirname, 'src/layouts'),
        pages: path.resolve(__dirname, 'src/pages'),
        services: path.resolve(__dirname, 'src/services'),
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
        graphql: path.resolve(__dirname, 'src/graphql'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        theme: path.resolve(__dirname, 'src/theme'),
        temp: path.resolve(__dirname, 'temp'),
      },
    },
    stats: {
      warningsFilter: [() => true], // if true will ignore
    },
  })
}
