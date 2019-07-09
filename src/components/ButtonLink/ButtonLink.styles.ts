import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    active: {
      backgroundColor: theme.palette.action.selected,
    },
  });
