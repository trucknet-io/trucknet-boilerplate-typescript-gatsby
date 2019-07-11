import { Link } from "gatsby";
import React from "react";

import Clock from "@src/components/Clock";
import Page from "@src/components/Page";
import IndexLayout from "@src/layouts/IndexLayout";

class IndexPage extends React.Component {
  public render() {
    return (
      <IndexLayout>
        <Page>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Clock />
          <Link to="/svg-example/">Show me SVG example</Link>
        </Page>
      </IndexLayout>
    );
  }
}

export default IndexPage;
