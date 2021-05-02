import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { initializeSearch } from "../store/actions/ListingActions";

const styles = {
  searchbar: {
    background: "linear-gradient(180deg,#000,#212121)",
    boxShadow: "0 4px 4px rgb(0 0 0 / 25%)",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  searchbarFormBar: {
    width: "100%",
  },
  searchInput: {
    width: "88%",
    padding: 15,
    borderRadius: 21,
    fontSize: 15,
    "&:hover": {
      outline: "none",
    },
  },
  icon: {
    height: 25,
    width: 25,
  },
};

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };
  }
  handleSearch = (value) => {
    this.setState({ textInput: value.trim() });
    const { listingItems, initializeSearch } = this.props;
    const searchedArray = listingItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase().trim())
    );

    initializeSearch({
      listData: searchedArray,
    });
  };
  render() {
    const { classes, toggleSearchBarVisibility } = this.props;
    const { textInput } = this.state;
    return (
      <div className={classes.searchbar}>
        <img
          src="/static/images/Back.png"
          className={classes.icon}
          alt="back-button"
          onClick={toggleSearchBarVisibility}
        />
        <form className={classes.searchbarFormBar} onSubmit={this.handleSearch}>
          <input
            placeholder="Search Input here"
            className={classes.searchInput}
            value={textInput}
            onChange={(e) => this.handleSearch(e.target.value)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listingItems: state.listing.contentList,
});

export default connect(mapStateToProps, {
  initializeSearch: initializeSearch,
})(withStyles(styles)(SearchContainer));
