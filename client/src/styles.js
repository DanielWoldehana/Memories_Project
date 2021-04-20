import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    fontWeight: "500",
    fontStyle: "italic",
  },
  image: {
    marginLeft: "15px",
    objectFit: "contain",
  },
  [theme.breakpoints.down("xs")]: {
    heading: {
      fontSize: "10vw",
    },
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
