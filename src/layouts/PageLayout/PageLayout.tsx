import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";

export type PageLayoutProps = {
  className?: string;
};

class PageLayout extends React.PureComponent<PageLayoutProps> {
  public render() {
    const { children, className } = this.props;
    return (
      <Container>
        <Grid
          className={className}
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={10} sm={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default PageLayout;
