import { Link } from "gatsby";
import React from "react";

import Container from "@src/components/Container";
import Page from "@src/components/Page";
import IndexLayout from "@src/layouts/IndexLayout";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
