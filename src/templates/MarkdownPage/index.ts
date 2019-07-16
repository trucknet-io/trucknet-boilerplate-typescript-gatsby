import { graphql } from "gatsby";
// Pages cannot be exported using `export { default } from "..."`
// shorthand due to Gatsby bug https://github.com/gatsbyjs/gatsby/issues/12384
import MarkdownPage, { MarkdownPageProps } from "./MarkdownPage";
export default MarkdownPage;
export { MarkdownPageProps };

// ALWAYS keep non-static page queries in the index file (Gatsby requirement)!
// Maybe there is a sense to move MarkdownPage component declaration to the index
// file to keep component, props and query together...
export const aboutPageQuery = graphql`
  query MarkdownPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export {
  default as MarkdownTemplate,
  MarkdownTemplateProps,
} from "./MarkdownTemplate";
