# [trucknet-boilerplate-typescript-gatsby](https://typescript-gatsby.boilerplates.trucknet.io/)

> A starter kit for TypeScript-based Gatsby projects with sensible defaults.

This is a starter kit for [Gatsby.js](https://www.gatsbyjs.org/) websites written in TypeScript. It includes the bare essentials for you to get started (styling, Markdown parsing, minimal toolset).

## Features

- TypeScript
- TSLint (with custom TSLint rules)
- Markdown rendering with Remark
- Basic component structure
- Material UI
- JSS
- SVG rendering support
- Netlify CMS integration and deploy
- Sentry error reporting
- i18n using [lioness](https://github.com/alexanderwallin/lioness) and `gatsby-node.js` custom configs
- Jest
- Storybook

## Geting started

Install this starter (assuming you have `gatsby-cli` installed) by running the following command:

```bash
gatsby new project-name https://github.com/trucknet-io/trucknet-boilerplate-typescript-gatsby
```

## Developing

A nodejs >= 6.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# ...or, for npm
npm install

# serve with hot reload at localhost:8000
npm start

# build for production
npm run build

# build for production and push to gh-pages branch
npm run deploy
```

## Credits

Built with [Gatsby](https://www.gatsbyjs.org/) - the blazing-fast static site generator for [React](https://facebook.github.io/react/).

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/trucknet-io/trucknet-boilerplate-typescript-gatsby)
