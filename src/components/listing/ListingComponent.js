import { makeStyles } from "@material-ui/core";
import React from "react";
import ListItem from "./ListItem";

const useStyles = makeStyles({
  listingContainer: {
    backgroundImage: "linear-gradient(to top, #171717, #171717)",
  },
  cardContent: {
    display: "flex",
    width: "95%",
    margin: "0 auto",
    paddingTop: "5%",
    flexWrap: "wrap",
  },
});

const ListingComponent = (props) => {
  const classes = useStyles();
  const { listItems } = props;
  const items = listItems.map((data, index) => (
    <ListItem key={index} data={data} />
  ));
  return (
    <div className={classes.listingContainer}>
      <div className={classes.cardContent}>{items}</div>
    </div>
  );
};

export default ListingComponent;
