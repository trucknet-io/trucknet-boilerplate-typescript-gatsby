"use strict";

const path = require("path");
const { SUPPORTED_LOCALES } = require("./src/config/locales_fix");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case "MarkdownRemark": {
      const { permalink, templateKey } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace(".md", "")}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: "slug",
        value: slug || "",
      });

      // Used to determine a page template.
      createNodeField({
        node,
        name: "templateKey",
        value: templateKey || "",
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              templateKey
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, templateKey } = node.fields;
    const page = {
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `templateKey` frontmatter in the Markdown.
      //
      // Feel free to set any `templateKey` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${templateKey}/index.ts`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
      },
    };

    createLocalizedPages(page, actions);
  });
};

exports.onCreatePage = ({ page, actions }) => {
  if (page.path !== "/") {
    // Deleting original page causes bug: pages not loading at all
    // and out of memory exception occurs after some time.
    // The aim was to delete original `trucknet.io/about` page
    // and create localized pages instead such as `trucknet.io/fr/about`.
    // actions.deletePage(page);
  }

  createLocalizedPages(page, actions);
};

function createLocalizedPages(page, actions) {
  const { createPage } = actions;

  SUPPORTED_LOCALES.forEach((locale) => {
    createPage({
      ...page,
      path: `/${locale}${page.path}`,
      context: {
        ...page.context,
        initialLocale: locale,
      },
    });
  });
}
