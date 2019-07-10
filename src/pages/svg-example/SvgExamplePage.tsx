import React from "react";

import Container from "@src/components/Container";
import Page from "@src/components/Page";
import SvgRender from "@src/components/SvgRender";
import IndexLayout from "@src/layouts/IndexLayout";

const SvgExamplePage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <SvgRender />
      </Container>
    </Page>
  </IndexLayout>
);

export default SvgExamplePage;
