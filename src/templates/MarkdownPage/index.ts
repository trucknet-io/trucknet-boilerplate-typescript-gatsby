import { graphql } from "gatsby";
// Pages cannot be exported using `export { default } from "..."`
// shorthand due to Gatsby bug https://github.com/gatsbyjs/gatsby/issues/12384
import MarkdownPage from "./MarkdownPage";
export default MarkdownPage;

// ALWAYS keep non-static page queries in the index file (Gatsby requirement)!
// Maybe there is a sense to move MarkdownPage component declaration to the index
// file to keep component, props and query together...
// Or to replace this with a StaticQuery
export const markdownPageQuery = graphql`
  query MarkdownPageQuery($slug: String!, $mdLocale: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, locale: { eq: $mdLocale } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export { default as MarkdownTemplate } from "./MarkdownTemplate";
