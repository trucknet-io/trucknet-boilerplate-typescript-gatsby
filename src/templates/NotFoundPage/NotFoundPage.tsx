import React from "react";

import LocalizedLink from "@src/components/LocalizedLink";
import IndexLayout from "@src/layouts/IndexLayout";
import PageLayout from "@src/layouts/PageLayout";
import { PageProps } from "@src/types";

export type NotFoundPageProps = PageProps & {};

class NotFoundPage extends React.Component<NotFoundPageProps> {
  public render() {
    return (
      <IndexLayout {...this.props}>
        <PageLayout>
          <h1>404: Page not found.</h1>
          <p>
            You've hit the void. <LocalizedLink to="/">Go back.</LocalizedLink>
          </p>
        </PageLayout>
      </IndexLayout>
    );
  }
}

export default NotFoundPage;
