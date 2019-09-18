import { Container } from "@material-ui/core";
import React from "react";

import SvgRender from "@src/components/SvgRender";
import IndexLayout from "@src/layouts/IndexLayout";
import { PageProps } from "@src/types";

export type SvgExamplePageProps = PageProps & {};

class SvgExamplePage extends React.Component<SvgExamplePageProps> {
  public render() {
    return (
      <IndexLayout {...this.props}>
        <Container>
          <SvgRender />
        </Container>
      </IndexLayout>
    );
  }
}

export default SvgExamplePage;
