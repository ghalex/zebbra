const path = require('path')
const { version } = require('./lerna.json')
const { createConfig, babel, postcss } = require('webpack-blocks')
const { styles, theme } = require('./styleguide.styles')

module.exports = {
  title: `Zebbra ${version}`,
  styles,
  theme,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        }
      ]
    }
  },

  sections: [
    {
      name: 'Introduction',
      sections: [{
        name: '',
        content: 'README.md'
      }]
    },
    {
      name: 'Components',
      content: 'src/components/README.md',
      components: 'src/components/[A-Z]*/index.js'
    }
  ],
  webpackConfig: createConfig([babel(), postcss()]),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'docs/components/Wrapper'),
    Logo: path.join(__dirname, 'docs/components/Logo')
  },
  styleguideDir: './docs',
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js')
    const pack = dirname.split('/')[1].split('-')[1]
    const name = dirname.split('/').slice(-1)[0]

    return 'import { ' + name + ' } from \'@zebbra/' + pack + '\''
  }
}
