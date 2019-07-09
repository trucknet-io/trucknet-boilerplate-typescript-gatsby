import { Link } from "gatsby";
import React from "react";

import Container from "@src/components/Container";
import Page from "@src/components/Page";
import IndexLayout from "@src/layouts/IndexLayout";

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul>
          <li>
            <Link to="/a-markdown-page/">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageTwo;
