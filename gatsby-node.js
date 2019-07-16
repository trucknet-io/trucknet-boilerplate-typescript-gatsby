"use strict";

const path = require("path");
const {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} = require("./src/config/locales_fix");

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
      let locale = DEFAULT_LOCALE.code;

      if (!slug) {
        slug = relativePath.replace(/\.md$/, "");

        const localeMatch = slug.match(
          new RegExp(`\.(${SUPPORTED_LOCALES.join("|")})$`),
        );
        if (localeMatch) {
          locale = localeMatch[1];
          slug = slug.replace(localeMatch[0], "");
        }

        slug = slug.replace(/(\/|^)index$/, "");
        slug = `/${slug}/`;
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

      // Used to set proper localized path
      createNodeField({
        node,
        name: "locale",
        value: locale,
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
              locale
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

  // Used to determine untranslated md files and create
  // untranslated localized pages for them
  const localizedPagesMap = {};

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, templateKey, locale } = node.fields;
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
        mdLocale: locale,
      },
    };

    const localizedPage = getLocalizedPage(page, locale);
    actions.createPage(localizedPage);

    localizedPagesMap[slug] = localizedPagesMap[slug] || { page, locales: [] };
    localizedPagesMap[slug].locales.push(locale);
  });

  Object.entries(localizedPagesMap).forEach(([slug, { page, locales }]) => {
    const missingLocales = SUPPORTED_LOCALES.filter(
      (locale) => !locales.includes(locale),
    );
    console.warn(`Page '${slug}' missing translations for: ${missingLocales}`);
    const untranslatedPage = {
      ...page,
      context: { ...page.context, mdLocale: DEFAULT_LOCALE.code },
    };
    createLocalizedPages(untranslatedPage, actions, missingLocales);
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

function createLocalizedPages(page, actions, locales = SUPPORTED_LOCALES) {
  const { createPage } = actions;

  locales.forEach((locale) => {
    const localizedPage = getLocalizedPage(page, locale);
    createPage(localizedPage);
  });
}

function getLocalizedPage(page, locale) {
  return {
    ...page,
    path: `/${locale}${page.path}`,
    context: {
      ...page.context,
      initialLocale: locale,
    },
  };
}
