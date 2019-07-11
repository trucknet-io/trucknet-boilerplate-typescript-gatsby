import { Link } from "gatsby";
import React from "react";

import Page from "@src/components/Page";
import IndexLayout from "@src/layouts/IndexLayout";

class NotFoundPage extends React.Component {
  public render() {
    return (
      <IndexLayout>
        <Page>
          <h1>404: Page not found.</h1>
          <p>
            You've hit the void. <Link to="/">Go back.</Link>
          </p>
        </Page>
      </IndexLayout>
    );
  }
}

export default NotFoundPage;
