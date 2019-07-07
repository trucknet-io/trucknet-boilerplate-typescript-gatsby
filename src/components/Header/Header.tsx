import React from "react";

import { Container } from "@src/components/Container";
import { TrucknetLogo } from "@src/components/TrucknetLogo";

export type HeaderProps = {
  title: string;
};

export class Header extends React.PureComponent<HeaderProps> {
  public render() {
    const { title } = this.props;
    return (
      <header>
        <Container>
          <TrucknetLogo>{title}</TrucknetLogo>
        </Container>
      </header>
    );
  }
}
