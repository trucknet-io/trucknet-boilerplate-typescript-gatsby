import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    pageContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    main: {
      overflowX: "hidden",
      flex: "auto",
    },
    "@global": {
      body: {
        opacity: 0,
        ".wf-active &, .wf-inactive &": {
          opacity: 1,
        },
      },
      svg: {
        width: "1em",
        height: "1em",
        fontSize: "1.5rem",
        display: "inline-block",
        transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        flexShrink: 0,
        userSelect: "none",
      },
    },
  });
