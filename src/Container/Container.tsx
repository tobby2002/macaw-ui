import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: theme.breakpoints.width("lg")
    },
    [theme.breakpoints.up("sm")]: {
      padding: `0 ${theme.spacing.unit * 3}px`
    },
    padding: `0 ${theme.spacing.unit}px`
  }
}));

export interface ContainerProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = props => {
  const { className, ...rest } = props;
  const classes = useStyles(props);

  return <div className={classNames(classes.root, className)} {...rest} />;
};

Container.displayName = "Container";
export default Container;