import React from "react";

import SvgRender from "@src/components/SvgRender";
import IndexLayout from "@src/layouts/IndexLayout";
import PageLayout from "@src/layouts/PageLayout";
import { PageProps } from "@src/types";

export type SvgExamplePageProps = PageProps & {};

class SvgExamplePage extends React.Component<SvgExamplePageProps> {
  public render() {
    return (
      <IndexLayout {...this.props}>
        <PageLayout>
          <SvgRender />
        </PageLayout>
      </IndexLayout>
    );
  }
}

export default SvgExamplePage;
