import sizes from "./sizes";

const styles = {
  root: {
    backgroundColor: (props) => props.color,
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6px",
    textTransform: "uppercase",
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "20%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    color: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    letterSpacing: "1px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
