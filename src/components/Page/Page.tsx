import Grid from "@material-ui/core/Grid";
import React from "react";

export type PageProps = {
  className?: string;
};

class Page extends React.PureComponent<PageProps> {
  public render() {
    const { children, className } = this.props;
    return (
      <Grid className={className} container spacing={3}>
        <Grid item xs={12} sm={12}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

export default Page;
