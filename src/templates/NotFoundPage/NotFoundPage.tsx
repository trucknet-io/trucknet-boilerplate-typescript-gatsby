import { Container } from "@material-ui/core";
import React from "react";

import LocalizedLink from "@src/components/LocalizedLink";
import IndexLayout from "@src/layouts/IndexLayout";
import { PageProps } from "@src/types";

export type NotFoundPageProps = PageProps & {};

class NotFoundPage extends React.Component<NotFoundPageProps> {
  public render() {
    return (
      <IndexLayout {...this.props}>
        <Container>
          <h1>404: Page not found.</h1>
          <p>
            You've hit the void. <LocalizedLink to="/">Go back.</LocalizedLink>
          </p>
        </Container>
      </IndexLayout>
    );
  }
}

export default NotFoundPage;
