// Pages cannot be exported using `export { default } from "..."`
// shorthand due to Gatsby bug https://github.com/gatsbyjs/gatsby/issues/12384
import AboutPage, { AboutPageProps } from "./AboutPage";
export default AboutPage;
export { AboutPageProps };

export { default as AboutTemplate, AboutTemplateProps } from "./AboutTemplate";
