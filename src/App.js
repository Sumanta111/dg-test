import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ListingContainer from "./screens/ListingContainer";
import SearchContainer from "./screens/SearchContainer";
import { connect } from "react-redux";

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
});

const App = (props) => {
  const classes = useStyles();
  const [searchbarVisibility, toggleSearchBarVisibility] = useState(false);
  const { listingItems, searchItems } = props;
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
          <SearchContainer
            toggleSearchBarVisibility={() =>
              toggleSearchBarVisibility(!searchbarVisibility)
            }
          />
        )}
      </div>
      <ListingContainer
        listingItems={!searchbarVisibility ? listingItems : searchItems}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  listingItems: state.listing.contentList,
  searchItems: state.listing.searchResults,
});

export default connect(mapStateToProps)(App);
