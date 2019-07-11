import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";

export type PageProps = {
  className?: string;
};

class Page extends React.PureComponent<PageProps> {
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

export default Page;
