import React from "react";

import Clock from "@src/components/Clock";
import LocalizedLink from "@src/components/LocalizedLink";
import IndexLayout from "@src/layouts/IndexLayout";
import PageLayout from "@src/layouts/PageLayout";
import { PageProps } from "@src/types";

export type IndexPageProps = PageProps & {};

class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    return (
      <IndexLayout {...this.props}>
        <PageLayout>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Clock />
          <LocalizedLink to="/svg-example">Show me SVG example</LocalizedLink>
        </PageLayout>
      </IndexLayout>
    );
  }
}

export default IndexPage;
