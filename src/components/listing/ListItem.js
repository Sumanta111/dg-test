import { makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles({
  cardItemImage: {
    height: 198,
    width: "92%",
  },
  imageContainer: {
    height: 198,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  listingItemText: {
    color: "#999594",
    margin: 0,
    marginTop: 5,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  listItem: {
    width: "33%",
    marginBottom: 20,
  },
});

const ListItem = (props) => {
  const classes = useStyles();
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const { data } = props;

  const imageOnError = () => {
    imageRef.current.style.display = "none";
    imageRef.current.style.height = "198px";
    imageContainerRef.current.style.background = "#000";
    setImageError(true);
  };
  return (
    <div className={classes.listItem}>
      <div className={classes.imageContainer} ref={imageContainerRef}>
        <LazyLoad height={200}>
          <img
            src={`/static/images/${data["poster-image"]}`}
            alt={`${data.name}`}
            className={`${classes.cardItemImage} lazyload`}
            onError={imageOnError}
            ref={imageRef}
          />
        </LazyLoad>
        {imageError && data.name}
      </div>
      {!imageError && <p className={classes.listingItemText}>{data.name}</p>}
    </div>
  );
};

export default ListItem;
