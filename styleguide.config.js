const path = require("path");
const { version } = require("./package.json");
const { styles, theme } = require("./styleguide.styles");

module.exports = {
  title: `Zebbra ${version}`,
  styles,
  theme,
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }
      ]
    }
  },

  sections: [
    {
      name: "Introduction",
      sections: [
        {
          name: "",
          content: "README.md"
        }
      ]
    },
    {
      name: "Components",
      content: "src/components/README.md",
      components: "src/components/[A-Z]*/index.js"
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "docs/components/Wrapper"),
    Logo: path.join(__dirname, "docs/components/Logo")
  },
  styleguideDir: "./docs",
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, ".js");
    const name = dirname.split("/").slice(-1)[0];

    return `import { ${name} } from 'zebbra/components'`;
  }
};
