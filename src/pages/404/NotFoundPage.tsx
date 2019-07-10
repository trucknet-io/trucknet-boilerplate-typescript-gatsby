import { Link } from "gatsby";
import React from "react";

import Container from "@src/components/Container";
import Page from "@src/components/Page";
import IndexLayout from "@src/layouts/IndexLayout";

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;
