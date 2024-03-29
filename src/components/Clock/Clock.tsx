import {
  Card,
  CardContent,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import React from "react";

import FormattedDate from "@src/components/FormattedDate";
import { styles } from "./Clock.styles";

type State = {
  date: Date;
};

export type ClockProps = WithStyles<typeof styles> & {};

export class Clock extends React.Component<ClockProps, State> {
  private timer: NodeJS.Timeout;
  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.timer = setInterval(this.updateDate, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  public render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography data-testid="clock-value">
            <FormattedDate date={this.state.date} format="PPpp" />
          </Typography>
        </CardContent>
      </Card>
    );
  }

  private updateDate = () => {
    this.setState({
      date: new Date(),
    });
  };
}

export default withStyles(styles)(Clock);
