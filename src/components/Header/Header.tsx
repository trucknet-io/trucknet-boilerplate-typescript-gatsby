import { Link } from "gatsby";
import React from "react";

import { Container } from "@src/components/Container";

export type HeaderProps = {
  title: string;
};

export class Header extends React.PureComponent<HeaderProps> {
  public render() {
    const { title } = this.props;
    return (
      <header>
        <Container>
          <Link to="/">{title}</Link>
        </Container>
      </header>
    );
  }
}
