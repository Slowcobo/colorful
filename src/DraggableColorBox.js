import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: (props) => props.color,
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    textTransform: "uppercase",
  },
};

function DraggableColorBox(props) {
  return <div className={props.classes.root}>{props.name}</div>;
}

export default withStyles(styles)(DraggableColorBox);
