# gatsby-plugin-trucknet

This plugin was created to be able to control the order of `onCreateWebpackConfig` execution in `gatsby-node.js` config relative to other plugins. This solves the issue of other plugins (such as `gatsby-plugin-netlify-cms`) not seeing a custom webpack config being set in `gatsby-node.js`.

_The particular problem was that `gatsby-plugin-netlify-cms` didn't take into account `TsconfigPathsPlugin` that was set in `resolve.plugins` section of a custom webpack config applied with `<rootDir>/gatsby-node.js` config.  
After moving this to plugin we are now able to place our own `gatsby-plugin-trucknet` (which modifies webpack config) before `gatsby-plugin-netlify-cms` so that it uses already modified version of the webpack config._

## TL;DR

- place this plugin before `gatsby-plugin-netlify-cms`
- put all other `gatsby-node.js` stuff here
