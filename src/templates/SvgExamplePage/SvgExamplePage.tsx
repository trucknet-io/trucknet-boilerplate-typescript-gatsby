import React from "react";

import Page from "@src/components/Page";
import SvgRender from "@src/components/SvgRender";
import IndexLayout from "@src/layouts/IndexLayout";

class SvgExamplePage extends React.Component {
  public render() {
    return (
      <IndexLayout>
        <Page>
          <SvgRender />
        </Page>
      </IndexLayout>
    );
  }
}

export default SvgExamplePage;
