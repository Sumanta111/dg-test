import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ListingContainer from "./screens/ListingContainer";

const useStyles = makeStyles({
  container: {},
  navContainer: {
    backgroundImage:
      "linear-gradient(to bottom, #000000, #000000, #000000 , #171717)",
    display: "flex",
    height: 72,
    position: "fixed",
    width: "100%",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    margin: "0 auto",
    paddingTop: "5%",
  },
  navbarHeader: {
    color: "#ffffff",
    fontSize: 25,
    fontFamily: "Lato, sans-serif",
    flex: 2,
    margin: "0 0 0 10px",
  },
  icon: {
    height: 25,
    width: 25,
  },
  searchbar: {
    background: "linear-gradient(180deg,#000,#212121)",
    boxShadow: "0 4px 4px rgb(0 0 0 / 25%)",
  },
});

const App = () => {
  const classes = useStyles();
  const [searchbarVisibility, toggleSearchBarVisibility] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.navContainer}>
        {!searchbarVisibility && (
          <div className={classes.navbar}>
            <img
              src="/static/images/Back.png"
              className={classes.icon}
              alt="back-button"
            />
            <p className={classes.navbarHeader}>Romantic Comedy</p>
            <img
              src="/static/images/search.png"
              className={classes.icon}
              alt="search"
              onClick={() => toggleSearchBarVisibility(!searchbarVisibility)}
            />
          </div>
        )}
        {searchbarVisibility && (
          <div className={classes.searchbar}>
            <form>
              <input placeholder="test" />
            </form>
          </div>
        )}
      </div>
      {!searchbarVisibility && <ListingContainer />}
    </div>
  );
};

export default App;
