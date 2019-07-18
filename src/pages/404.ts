// Pages cannot be exported using `export { default } from "..."`
// shorthand due to Gatsby bug https://github.com/gatsbyjs/gatsby/issues/12384
// ----
// In development mode 404 page is always replaced by Gatsby's default 404 page
// But don't worry, this page is used in production, JUST DON'T RENAME THIS FILE
import NotFoundPage from "@src/templates/NotFoundPage";
export default NotFoundPage;
