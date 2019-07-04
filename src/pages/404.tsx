import { Link } from "gatsby";
import React from "react";

import { Container } from "@src/components/Container";
import { Page } from "@src/components/Page";
import { LayoutIndex } from "@src/layouts/Index";

const NotFoundPage = () => (
  <LayoutIndex>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </LayoutIndex>
);

export default NotFoundPage;
